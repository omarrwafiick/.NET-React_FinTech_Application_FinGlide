using finglide_api.Contracts;
using finglide_api.Dtos;
using finglide_api.Mappers;
using finglide_api.models;
using Microsoft.AspNetCore.Mvc; 

namespace finglide_api.Controllers
{
    [Route("api/stocks")]
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
            var result = await _repository.Get(x => x.Comments);
            return result.Count > 0 ? Ok(result.Select(x => x.FromStockToDto())) : NotFound("Nothing was found");
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var result = await _repository.Get(id, x => x.Comments);
            return result is not null ? Ok(result.FromStockToDto()) : NotFound("Nothing was found");
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStock dto)
        {
            var exists = await _repository.Get(x=>x.CompanyName==dto.CompanyName&&x.MarketCapital == dto.MarketCapital);
            if(exists.Count > 0) return  BadRequest("Stock already exists");
            var result = await _repository.Create(
                Stock.CreateFactory(
                    dto.Symbol,
                    dto.CompanyName,
                    dto.Amount,
                    dto.LastDivided,
                    dto.Industry,
                    dto.MarketCapital)
                );
            return result > -1 ? CreatedAtAction(nameof(GetById), new {id = result}) : BadRequest("Failed to create new stock");
        }

        [HttpPut("{stockid:int}")]
        public async Task<IActionResult> Update([FromRoute] int stockid, [FromBody] UpdateStock dto)
        {
            var stock = await _repository.Get(stockid);
            if(stock is null) return  NotFound("Nothing was found");
            var result = await _repository.Update(Stock.Update(stock, dto.Amount, dto.LastDivided, stock.MarketCapital));
            return result ? Ok("Stock was updated successfully") : BadRequest("Failed to update stock");
        }
        
        [HttpDelete("{stockid:int}")]
        public async Task<IActionResult> Delete([FromRoute] int stockid)
        { 
            var stock = await _repository.Get(stockid);
            if(stock is null) return  NotFound("Nothing was found");
            var result = await _repository.Delete(stock);
            return result ? NoContent() : BadRequest("Failed to delete stock");
        }
    }
}