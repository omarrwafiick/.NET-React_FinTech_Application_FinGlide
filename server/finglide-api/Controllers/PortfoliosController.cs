
namespace finglide_api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/finglide/portfolios")]
    public class PortfoliosController : ControllerBase
    {
        private readonly IMainRepository<Portfolio> _portfolioRepository;
        private readonly IMainRepository<Stock> _stockRepository;
        private readonly UserManager<User> _userManager;
        public PortfoliosController(
            IMainRepository<Portfolio> portfolioRepository,
            IMainRepository<Stock> stockRepository,
            UserManager<User> userManager)
        {
            _portfolioRepository = portfolioRepository;
            _stockRepository = stockRepository;
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
            var stock = _stockRepository.Get(x => x.Symbol.ToLower() == dto.Symbol.ToLower());
            if (!stock.Any())
                return NotFound("Stock was not found");

            var userExists = await _userManager.FindByIdAsync(dto.UserId);
            if (userExists is null)
                return NotFound("user was not found");

            var stockId = stock.ToList()[0].Id;
            var portfolioExists = _portfolioRepository.Get(x => x.StokeId == stockId && x.UserId == dto.UserId);
            if (portfolioExists.Any())
                return BadRequest("Portfolio already exists");

            var result = await _portfolioRepository.CreateAsync(
                Portfolio.CreateFactory(
                    dto.UserId,
                    stockId
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