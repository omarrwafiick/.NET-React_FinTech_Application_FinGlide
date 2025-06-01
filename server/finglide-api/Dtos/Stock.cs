

namespace finglide_api.Dtos
{ 
    public record GetStock(int Id, string Symbol, string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital, List<GetComment> Comments);
    public record CreateStock(string Symbol, string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital);
    public record UpdateStock(decimal Amount, decimal LastDivided, long MarketCapital);
}