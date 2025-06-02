using finglide_api.Contracts;
using finglide_api.Dtos; 
using Microsoft.AspNetCore.Mvc; 

namespace finglide_api.Controllers
{
    [Route("api/finglide/accounts")]
    [ApiController]
    public class AccountsController : Controller
    {
        private readonly IUserService _userService;
        public AccountsController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            var result = await _userService.RegisterAsync(dto);
            return result ? Ok("User was created successfully") : BadRequest("Failed to create new user to the system");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var result = await _userService.LoginAsync(dto);
            if (result is not null) {
                Response.Cookies.Append("token", result);
                return Ok(new { accessToken = result });
            }
            return BadRequest("Failed to login user to the system please check your credentials");
        }
        
         [HttpPost("forgetpassword")]
        public async Task<IActionResult> ForgetPassword([FromBody] ForgetPasswordDto dto)
        {
            var result = await _userService.ForgetPasswordAsync(dto);
            return result is not null ? Ok(result) : BadRequest("Failed to identify user in the system");
        }

        [HttpPost("resetpassword/{resettoken}")]
        public async Task<IActionResult> ResetPassword([FromRoute] string resettoken, [FromBody] ResetPasswordDto dto)
        {
            var result = await _userService.ResetPasswordAsync(resettoken, dto);
            return result ? Ok("User password was reset successfully") : BadRequest("Failed to reset user password");
        }
    }
}