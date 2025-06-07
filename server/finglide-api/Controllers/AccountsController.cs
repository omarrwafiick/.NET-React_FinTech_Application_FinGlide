 
namespace finglide_api.Controllers
{ 
    [Route("api/finglide/auth")]
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
                //Response.Cookies.Append("token", result);
                return Ok(result);
            }
            return BadRequest("Failed to login user to the system please check your credentials");
        }
        
         [HttpPost("forgetpassword")]
        public async Task<IActionResult> ForgetPassword([FromBody] ForgetPasswordDto dto)
        {
            var result = await _userService.ForgetPasswordAsync(dto);
            return result ? Ok("Email is confirmed") : BadRequest("Failed to identify user in the system");
        }

        [HttpPost("resetpassword")]
        public async Task<IActionResult> ResetPassword( [FromBody] ResetPasswordDto dto)
        {
            var result = await _userService.ResetPasswordAsync(dto);
            return result ? Ok("User password was reset successfully") : BadRequest("Failed to reset user password");
        }
    }
}