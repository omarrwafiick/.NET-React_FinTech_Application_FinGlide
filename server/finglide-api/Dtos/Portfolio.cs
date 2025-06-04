using System.ComponentModel.DataAnnotations; 

namespace finglide_api.Dtos
{
    public record PortfolioDto([EmailAddress] string Email, [Required] string Symbol);
    public record GetPortfolioDto(string Symbol,string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital );
}