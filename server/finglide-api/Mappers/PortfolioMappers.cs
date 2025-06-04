
namespace finglide_api.Mappers
{
    public static class PortfolioMappers
    {
        public static GetPortfolioDto FromPortfolioToDtoBase(this Portfolio portfolio)
        {
            return new GetPortfolioDto(portfolio.Stock.Symbol, portfolio.Stock.CompanyName, portfolio.Stock.Amount, portfolio.Stock.LastDivided, portfolio.Stock.Industry, portfolio.Stock.MarketCapital);
        }
    }
}