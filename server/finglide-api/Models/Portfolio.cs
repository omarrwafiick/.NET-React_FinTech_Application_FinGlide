using finglide_api.models;

namespace finglide_api.Models
{
    public class Portfolio
    {
        private Portfolio(string userId, int StokeId)
        {

        }
        public User User { get; set; }
        public string UserId { get; private set; }
        public Stock Stock { get; private set; }
        public int StokeId { get; set; } 
        public static Portfolio CreateFactory(string userId, int StokeId) => new Portfolio(userId, StokeId);

    }
}