using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record GetCommentDto(int Id, string Title, string Content, DateTime CreatedAt, UserDto CreatedBy);
    public record GetCommentDetailsDto(int Id, string Title, string Content, DateTime CreatedAt, GetStockBaseDto Stock);
    public class CreateCommentDto
    {
        [Required][Length(5, 280)]
        public string Title { get; set; }
        [Required][Length(20, 2080)]  
        public string Content  { get; set; }
        [EmailAddress]
        public string Email  { get; set; }
    };
    public class UpdateCommentDto
    {
        [Required]
        [Length(5, 280)]
        public string Title { get; set; }
        [Required][Length(20, 2080)]  
        public string Content  { get; set; } 
    }
}