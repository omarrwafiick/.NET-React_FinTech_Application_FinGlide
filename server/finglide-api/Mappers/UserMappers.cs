 
namespace finglide_api.Mappers
{
    public static class UserMappers
    {
        public static object FromUserToDto(this User user)
        {
            return new {UserName = user.UserName, Email = user.Email };
        }
    }
}