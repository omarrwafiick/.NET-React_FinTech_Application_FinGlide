
using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record RegisterDto
    {
        [Required]
        [Length(3, 30)]
        public string UserName { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [Length(12, 200)]
        public string Password { get; set; }
    };

    public record LoginDto{ 
        [EmailAddress]
        public string Email { get; set; }
        [Required] 
        public string Password { get; set; }
    };

    public record ResetPasswordDto
    {
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [Length(12, 200)]
        public string Password { get; set; } 
    };

    public record ForgetPasswordDto
    {
        [EmailAddress]
        public string Email { get; set; } 
    };

    public record UserDto(string UserName, string Email);
    public record LoginResponse(UserDto user, string Token);

}