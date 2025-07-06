 
namespace finglide_api.Mappers
{
    public static class CommentMappers
    {
        public static GetCommentDto FromCommentToDto(this Comment comment)
        { 
            return new GetCommentDto(comment.Id, comment.Title, comment.Content, comment.CreatedAt, comment.User.FromUserToDto());
        }
        public static GetCommentDetailsDto FromCommentToDtoDetails(this Comment comment)
        {
            return new GetCommentDetailsDto(comment.Id, comment.Title, comment.Content, comment.CreatedAt, comment.Stock!.FromStockToDtoBase(), comment.User.FromUserToDto());
        }
    }
}