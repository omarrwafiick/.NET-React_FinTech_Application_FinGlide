

using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record GetCommentDto(int Id, string Title, string Content, DateTime CreatedAt);
    public record GetCommentDetailsDto(int Id, string Title, string Content, DateTime CreatedAt, GetStockBaseDto Stock);
    public record CreateCommentDto([Required] int StockId, [Required][Length(5, 280)] string Title, [Required][Length(20, 2080)] string Content);
    public record UpdateCommentDto([Required] [Length(5,280)] string Title, [Required] [Length(20,2080)] string Content);
}