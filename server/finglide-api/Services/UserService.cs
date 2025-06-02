using finglide_api.Contracts;
using finglide_api.Dtos;
using finglide_api.Models;
using Microsoft.AspNetCore.Identity;

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

        public async Task<string?> LoginAsync(LoginDto dto)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(dto.Email);
                if (user is null) return null;
                var result = await _signinManager.CheckPasswordSignInAsync(user, dto.Password, false);
                if (!result.Succeeded) return null;
                var role = await _userManager.GetRolesAsync(user);
                return _tokenService.GenerateToken(user, role[0]);
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

        public async Task<string?> ForgetPasswordAsync(ForgetPasswordDto dto)
        {
            try
            { 
                var user = await _userManager.FindByEmailAsync(dto.Email);
                if (user is null) return null; 
                user.ResetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
                user.ResetTokenExpiresIn = DateTime.UtcNow.AddHours(1);
                await _userManager.UpdateAsync(user);
                return user.ResetToken;
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        public async Task<bool> ResetPasswordAsync(string resetToken, ResetPasswordDto dto)
        {
            try
            { 
                var user = await _userManager.FindByEmailAsync(dto.Email);
                if (user is null || user.ResetToken != resetToken) return false;
                await _userManager.AddPasswordAsync(user, dto.Password);
                user.ResetToken = string.Empty;
                user.ResetTokenExpiresIn = DateTime.UtcNow;
                await _userManager.UpdateAsync(user);
                return true;
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }
    }
}