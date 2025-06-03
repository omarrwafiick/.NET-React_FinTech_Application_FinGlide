
namespace finglide_api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/finglide/portfolios")]
    public class PortfoliosController : ControllerBase
    {
        private readonly IMainRepository<Portfolio> _portfolioRepository;
        private readonly IMainRepository<Stock> _stockRepository;
        private readonly IFMPService _fmpService;
        private readonly UserManager<User> _userManager;
        public PortfoliosController(
            IMainRepository<Portfolio> portfolioRepository,
            IMainRepository<Stock> stockRepository,
            IFMPService fmpService,
            UserManager<User> userManager)
        {
            _portfolioRepository = portfolioRepository;
            _stockRepository = stockRepository;
            _fmpService = fmpService;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var userName = User.GetUserName();
            var user = await _userManager.FindByNameAsync(userName!);
            var userPortfolio = await _portfolioRepository.GetAsync(x => x.UserId == user!.Id, i => i.Stock);
            return userPortfolio.Any() ? Ok(userPortfolio.Select(x => x.Stock.FromStockToDto())) : NotFound("Nothing was found");
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] PortfolioDto dto)
        {  
            var userExists = await _userManager.FindByIdAsync(dto.UserId);
            if (userExists is null)
                return NotFound("user was not found");

            var stock = _stockRepository.Get(s => s.Symbol == dto.Symbol).FirstOrDefault();
            if (stock is null) { 
                var newStock = await _fmpService.FindStockBySymbolAsync(dto.Symbol);
                await _stockRepository.CreateAsync(newStock);
                stock = newStock;
            } 
 
            var portfolioExists = _portfolioRepository.Get(x => x.StokeId == stock.Id && x.UserId == dto.UserId);
            if (portfolioExists.Any())
                return BadRequest("Portfolio already exists");

            var result = await _portfolioRepository.CreateAsync(
                Portfolio.CreateFactory(
                    dto.UserId,
                    stock.Id
                )
            );

            return result > -1 ? CreatedAtAction(nameof(GetUserPortfolio), new { id = result }) : BadRequest("Failed to create new comment");
        }
    
        [HttpDelete("{symbol:alpha}")]
        public async Task<IActionResult> Delete([FromRoute] string symbol)
        {
            var userName = User.GetUserName();
            var user = await _userManager.FindByNameAsync(userName!);

            var portfolio = await _portfolioRepository.GetAsync(x=> x.UserId == user!.Id, p => p.Stock);
            if (portfolio is null)
                return NotFound("Nothing was found");

            var stockToBeDeleted = portfolio.Where(p => p.Stock.Symbol.ToLower() == symbol.ToLower());

            var result = await _portfolioRepository.DeleteAsync(stockToBeDeleted.ToList()[0]);
            return result ? NoContent() : BadRequest("Failed to delete portfolio");
        }
    }
}