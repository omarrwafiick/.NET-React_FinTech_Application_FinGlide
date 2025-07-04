
using finglide_api.Sanitizers;

namespace finglide_api.Controllers
{
    [Authorize]
    [Route("api/finglide/stocks")]
    [ApiController]
    public class StocksController : Controller
    {
        private readonly IMainRepository<Stock> _repository;
        public StocksController(IMainRepository<Stock> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _repository.GetNestedAsync(x => x.Comments, y => y.User);
            return result.Any() ? Ok(result.Select(x => x.FromStockToDto())) : NotFound("Nothing was found");
        }

        [HttpGet("/filter")]
        public IActionResult GetAllBySymbol([FromQuery] string symbol, [FromQuery] string companyname , [FromQuery] bool isdesc = false)
        {
            symbol = Sanitizer.SanitizeText(symbol ?? "").ToLower();
            companyname = Sanitizer.SanitizeText(companyname ?? "").ToLower();
            
            var result = _repository.Get(x
                => x.Symbol.ToLower() == symbol.ToLower() &&
                x.CompanyName.ToLower() == companyname.ToLower() ).ToList();

            var data = result.Select(x => x.FromStockToDto());

            return result.Any() ? Ok(isdesc ? data.OrderByDescending(x => x.Amount) : data.OrderBy(x => x.Amount)) : NotFound("Nothing was found");
        } 

        [HttpGet("/pagination")]
        public IActionResult GetAllPaginated([FromQuery] int page = 1, [FromQuery] int size = 20) 
        {
            var result = _repository.Get((page - 1) * size, size);
            
            return result.Any() ? Ok(result.Select(x => x.FromStockToDto())) : NotFound("Nothing was found");
        } 

        [HttpGet("{stockid:int}")]
        public async Task<IActionResult> GetById([FromRoute] int stockid)
        {
            var result = await _repository.GetAsync(stockid, x => x.Comments);
            return result is not null ? Ok(result.FromStockToDto()) : NotFound("Nothing was found");
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockDto dto)
        {
            dto = StockSanitizers.SanitizeCreateStockDto(dto);

            var exists = await _repository.IsExistsAsync(x=>x.CompanyName==dto.CompanyName&&x.MarketCapital == dto.MarketCapital);
            if(exists)
                return BadRequest("Stock already exists");

            var result = await _repository.CreateAsync(
                Stock.CreateFactory(
                    dto.Symbol,
                    dto.CompanyName,
                    dto.Amount,
                    dto.LastDivided,
                    dto.Industry,
                    dto.MarketCapital)
                );
            return result > -1 ? Ok(new {id = result}) : BadRequest("Failed to create new stock");
        }

        [HttpPut("{stockid:int}")]
        public async Task<IActionResult> Update([FromRoute] int stockid, [FromBody] UpdateStockDto dto)
        {
            var stock = await _repository.GetAsync(stockid);
            if(stock is null)
                return NotFound("Nothing was found");
                
            var result = await _repository.UpdateAsync(Stock.Update(stock, dto.Amount, dto.LastDivided, stock.MarketCapital));
            return result ? Ok("Stock was updated successfully") : BadRequest("Failed to update stock");
        }
        
        [HttpDelete("{stockid:int}")]
        public async Task<IActionResult> Delete([FromRoute] int stockid)
        { 
            var stock = await _repository.GetAsync(stockid);
            if(stock is null)
                return NotFound("Nothing was found");

            var result = await _repository.DeleteAsync(stock);
            return result ? NoContent() : BadRequest("Failed to delete stock");
        }
    }
}