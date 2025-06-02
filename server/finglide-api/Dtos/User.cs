
using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record RegisterDto([Required][Length(3, 20)] string UserName, [EmailAddress] string Email, [Required][Length(12, 12)] string Password);
    public record LoginDto([EmailAddress] string Email, [Required] string Password);
    public record ResetPasswordDto([EmailAddress] string Email, [Required][Length(12, 12)] string Password);
    public record ForgetPasswordDto([EmailAddress] string Email);
    public record UserDto(string UserName, string Email);

}