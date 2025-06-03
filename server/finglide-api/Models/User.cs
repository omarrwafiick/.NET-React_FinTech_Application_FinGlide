 
namespace finglide_api.Models
{
    public class User : IdentityUser
    {
        private User()
        {
            
        }
        private User(string username, string email)
        {
            UserName = username;
            Email = email;
        }
        public string ResetToken { get; set; } = string.Empty;
        public DateTime ResetTokenExpiresIn = DateTime.UtcNow;
        public List<Portfolio> Portfolios { get; set; } = new();
        public static User UserFactory(string Username, string Email) => new User(Username, Email);
    }
}