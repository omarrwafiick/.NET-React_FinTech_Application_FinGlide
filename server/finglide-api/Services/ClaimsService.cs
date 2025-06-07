using System.Security.Claims; 

namespace finglide_api.Services
{
    public static class ClaimsService
    {
        public static string? GetUserName(this ClaimsPrincipal user)
        {
            return user.Claims.SingleOrDefault(x =>
                x.Type == ClaimTypes.GivenName)?.Value;
        }

    }
}