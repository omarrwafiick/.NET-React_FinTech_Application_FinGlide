 

namespace finglide_api.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signinManager;
        private readonly ITokenService _tokenService;
        public UserService(UserManager<User> userManager, ITokenService tokenService, SignInManager<User> signinManager)
        {
            _userManager = userManager;
            _signinManager = signinManager;
            _tokenService = tokenService;
        }

        public async Task<LoginResponse?> LoginAsync(LoginDto dto)
        {
            try
            {
                dto.Email = Sanitizer.SanitizeText(dto.Email);
                dto.Password = Sanitizer.SanitizeText(dto.Password);
                var user = await _userManager.FindByEmailAsync(dto.Email);
                if (user is null)
                    return null;

                var result = await _signinManager.CheckPasswordSignInAsync(user, dto.Password, false);
                if (!result.Succeeded)
                    return null;

                var role = await _userManager.GetRolesAsync(user);
                return new LoginResponse(new UserDto(user.UserName!, user.Email!), _tokenService.GenerateToken(user, role[0]));
            } 
            catch (System.Exception)
            {
                throw;
            }
        }
 
        public async Task<bool> RegisterAsync(RegisterDto dto)
        {
            try
            {
                dto.UserName = Sanitizer.SanitizeText(dto.UserName); 
                dto.Email = Sanitizer.SanitizeText(dto.Email);
                dto.Password = Sanitizer.SanitizeText(dto.Password);
                var newUser = User.UserFactory(dto.UserName, dto.Email);
                var creationResult = await _userManager.CreateAsync(newUser, dto.Password);
                if (!creationResult.Succeeded) return false;
                var roleResult = await _userManager.AddToRoleAsync(newUser, "User");
                return roleResult.Succeeded;
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        public async Task<bool> ForgetPasswordAsync(ForgetPasswordDto dto)
        {
            try
            { 
                dto.Email = Sanitizer.SanitizeText(dto.Email);
                var user = await _userManager.FindByEmailAsync(dto.Email);
                if (user is null) return false;  
                return true;
            }
            catch (Exception)
            { 
                throw;
            }
        }

        public async Task<bool> ResetPasswordAsync(ResetPasswordDto dto)
        {
            try
            { 
                dto.Password = Sanitizer.SanitizeText(dto.Password);
                var user = await _userManager.FindByEmailAsync(dto.Email);
                if (user is null)
                    return false;

                var token = await _userManager.GeneratePasswordResetTokenAsync(user);

                var result = await _userManager.ResetPasswordAsync(user, token, dto.Password);

                if (!result.Succeeded)
                    return false;
  
                return true;
            }
            catch (System.Exception)
            { 
                throw;
            }
        }
    }
}