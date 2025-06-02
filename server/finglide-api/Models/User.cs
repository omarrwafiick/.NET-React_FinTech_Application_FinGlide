using Microsoft.AspNetCore.Identity;

namespace finglide_api.Models
{
    public class User : IdentityUser
    {
        private User(string username, string email)
        {
            UserName = username;
            Email = Email;
        }
        public string ResetToken { get; set; } = string.Empty;
        public DateTime ResetTokenExpiresIn = DateTime.UtcNow;
        public static User UserFactory(string Username, string Email) => new User(Username, Email);
    }
}