 
namespace finglide_api.Sanitizers
{
    public static class StockSanitizers
    { 
        public static CreateStockDto SanitizeCreateStockDto(this CreateStockDto dto)
        {
            dto.Symbol = Sanitizer.SanitizeText(dto.Symbol);
            dto.CompanyName = Sanitizer.SanitizeText(dto.CompanyName); 
            dto.Industry = Sanitizer.SanitizeText(dto.Industry);
            return dto;
        } 
    }
}