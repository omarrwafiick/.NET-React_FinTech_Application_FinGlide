 
namespace finglide_api.Models
{
    public class Portfolio : BaseEntity
    {
        private Portfolio(string userId, int stokeId)
        {
            UserId = userId;
            StokeId = stokeId;
        }
        
        public User User { get; set; }
        public string UserId { get; private set; }
        public Stock Stock { get; private set; }
        public int StokeId { get; set; } 
        public static Portfolio CreateFactory(string userId, int StokeId) => new Portfolio(userId, StokeId);
    }
}