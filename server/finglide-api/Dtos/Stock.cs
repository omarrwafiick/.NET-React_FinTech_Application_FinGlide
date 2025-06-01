

using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{  
    public record GetStockBaseDto(string Symbol, string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital);
    public record GetStockDto(int Id, string Symbol, string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital, List<GetCommentDto> Comments);
    public record CreateStockDto([Required] [Length(1,10)] string Symbol, [Required][Length(3,20)] string CompanyName, [Required] [Range(1, 1_000_000_000)] decimal Amount, [Required] [Range(0.001, 100)] decimal LastDivided, [Required] [Length(3,20)] string Industry, [Required] [Range(1, 5_000_000_000)] long MarketCapital);
    public record UpdateStockDto([Required] [Range(1, 1_000_000_000)] decimal Amount, [Required] [Range(0.001, 100)] decimal LastDivided, [Required] [Range(1, 5_000_000_000)] long MarketCapital);
}