 
namespace finglide_api.Sanitizers
{
    public static class CommentSanitizers
    {
        public static CreateCommentDto SanitizeCreateCommentDto(this CreateCommentDto dto)
        {
            dto.Content = Sanitizer.SanitizeText(dto.Content);
            dto.Title = Sanitizer.SanitizeText(dto.Title);
            return dto;
        }

        public static UpdateCommentDto SanitizeUpdateCommentDto(this UpdateCommentDto dto)
        {
            dto.Content = Sanitizer.SanitizeText(dto.Content);
            dto.Title = Sanitizer.SanitizeText(dto.Title);
            return dto;
        }
        
    }
}