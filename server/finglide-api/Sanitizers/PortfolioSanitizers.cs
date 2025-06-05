 
namespace finglide_api.Sanitizers
{
    public static class PortfolioSanitizers
    {
        
        public static PortfolioDto SanitizeCreatePortfolioDto(this PortfolioDto dto)
        {
            dto.Email = Sanitizer.SanitizeText(dto.Email);
            dto.Symbol = Sanitizer.SanitizeText(dto.Symbol);  
            return dto;
        } 
    }
}