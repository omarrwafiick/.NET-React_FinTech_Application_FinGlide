using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record GetCommentDto(int Id, string Title, string Content, DateTime CreatedAt, UserDto CreatedBy);
    public record GetCommentDetailsDto(int Id, string Title, string Content, DateTime CreatedAt, GetStockBaseDto Stock);
    public record CreateCommentDto([Required][Length(5, 280)] string Title, [Required][Length(20, 2080)] string Content, [EmailAddress] string Email);
    public record UpdateCommentDto([Required] [Length(5,280)] string Title, [Required] [Length(20,2080)] string Content);
}