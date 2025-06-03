 
namespace finglide_api.Mappers
{
    public static class StockMappers
    {
        public static GetStockDto FromStockToDto(this Stock stock)
        {
            var Comments = stock.Comments.Select(x => x.FromCommentToDto()).ToList();
            return new GetStockDto(stock.Id, stock.Symbol, stock.CompanyName, stock.Amount, stock.LastDivided, stock.Industry, stock.MarketCapital, Comments);
        }

        public static GetStockBaseDto FromStockToDtoBase(this Stock stock)
        {
            return new GetStockBaseDto(stock.Symbol, stock.CompanyName, stock.Amount, stock.LastDivided, stock.Industry, stock.MarketCapital);
        }
        
        public static Stock FromFMPStockToStock (this FMPStock fmpPStock)
        {
            return Stock.CreateFactory(fmpPStock.symbol, fmpPStock.companyName, (decimal)fmpPStock.price, (decimal)fmpPStock.lastDividend, fmpPStock.industry, fmpPStock.marketCap);
        }
    }
}