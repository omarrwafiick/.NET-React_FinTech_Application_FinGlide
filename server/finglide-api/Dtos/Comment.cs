using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record GetCommentDto(int Id, string Title, string Content, DateTime CreatedAt, object userDto);
    public record GetCommentDetailsDto(int Id, string Title, string Content, DateTime CreatedAt, GetStockBaseDto Stock, object userDto);
    public class CreateCommentDto
    {
        [Required][Length(3, 280)]
        public string Title { get; set; }
        [Required][Length(3, 2080)]  
        public string Content  { get; set; }
        [EmailAddress]
        public string Email  { get; set; }
    };
    public class UpdateCommentDto
    {
        [Required]
        [Length(3, 280)]
        public string Title { get; set; }
        [Required][Length(3, 2080)]  
        public string Content  { get; set; } 
    }
}