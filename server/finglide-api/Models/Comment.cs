 
namespace finglide_api.models
{
    public class Comment : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow ;
        public Stock? Stock { get; set; } 
        public int StockId { get; set; }
    }
}