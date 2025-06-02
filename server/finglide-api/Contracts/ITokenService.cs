
using finglide_api.Models;

namespace finglide_api.Contracts
{
    public interface ITokenService
    {
        string GenerateToken(User user, string role);
    }
}