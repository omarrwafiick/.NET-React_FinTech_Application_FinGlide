
using finglide_api.Dtos;
using finglide_api.models;

namespace finglide_api.Mappers
{
    public static class StockMappers
    {
        public static GetStock FromStockToDto(this Stock stock)
        {
            var Comments = stock.Comments.Select(x => x.FromCommentToDto()).ToList();
            return new GetStock(stock.Id, stock.Symbol, stock.CompanyName, stock.Amount, stock.LastDivided, stock.Industry, stock.MarketCapital, Comments);
        }
    }
}