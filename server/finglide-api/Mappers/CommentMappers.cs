
using finglide_api.Dtos;
using finglide_api.models;

namespace finglide_api.Mappers
{
    public static class CommentMappers
    {
        public static GetComment FromCommentToDto(this Comment comment)
        {
            return new GetComment(comment.Id, comment.Title, comment.Content, comment.CreatedAt);
        }
    }
}