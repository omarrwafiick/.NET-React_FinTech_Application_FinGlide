
using finglide_api.Dtos;

namespace finglide_api.Contracts
{
    public interface IUserService
    {
        Task<bool> RegisterAsync(RegisterDto dto);
        Task<LoginResponse> LoginAsync(LoginDto dto);
        Task<string> ForgetPasswordAsync(ForgetPasswordDto dto);
        Task<bool> ResetPasswordAsync(string resetToken, ResetPasswordDto dto);
    }
}