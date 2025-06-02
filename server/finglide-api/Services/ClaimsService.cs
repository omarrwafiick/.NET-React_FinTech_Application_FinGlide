using System.Security.Claims; 

namespace finglide_api.Services
{
    public static class ClaimsService
    {
        public static string? GetUserName(this ClaimsPrincipal user)
        {
            return user.Claims.SingleOrDefault(x =>
                x.Type == "https://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname")?.Value;
        }
    }
}