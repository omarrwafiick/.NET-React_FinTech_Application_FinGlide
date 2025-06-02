 
namespace finglide_api.models
{
    public class Comment : BaseEntity
    {
        private Comment(string title, string content, int stockId, string userId)
        {
            Title = title;
            Content = content;
            StockId = stockId;
            UserId = userId;
        }
        public string Title { get; private set; } = string.Empty;
        public string Content { get; private set; } = string.Empty;
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public Stock? Stock { get; private set; }
        public int StockId { get; private set; }
        public User User { get; private set; }
        public string UserId { get; private set; }
        public static Comment CreateFactory(string title, string content, int stockId, string userId) => new Comment(title, content, stockId, userId);
        public static Comment Update(Comment comment, string title, string content)
        {
            comment.Title = title;
            comment.Content = content; 
            return comment;
        }
    }
}