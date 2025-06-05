using System.ComponentModel.DataAnnotations; 

namespace finglide_api.Dtos
{
    public record PortfolioDto
    {
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Symbol { get; set; }
    };
    public record GetPortfolioDto(string Symbol,string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital );
}