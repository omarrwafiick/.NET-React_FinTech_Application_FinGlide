 
namespace finglide_api.models
{
    public class Comment : BaseEntity
    {
        private Comment(string title, string content, DateTime createdAt, int stockId)
        {
            Title = title;
            Content = content;
            CreatedAt = createdAt;
            StockId = stockId;
        }
        public string Title { get; private set; } = string.Empty;
        public string Content { get; private set; } = string.Empty;
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public Stock? Stock { get; private set; }
        public int StockId { get; private set; }

        public static Comment CreateFactory(string title, string content, DateTime createdAt, int stockId) => new Comment(title, content, createdAt, stockId);
        public static Comment Update(Comment comment, string title, string content)
        {
            comment.Title = title;
            comment.Content = content; 
            return comment;
        }
    }
}