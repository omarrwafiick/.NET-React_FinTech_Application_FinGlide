 
namespace finglide_api.Mappers
{
    public static class UserMappers
    {
        public static UserDto FromUserToDto(this User user)
        {
            return new UserDto(user.UserName, user.Email);
        }
    }
}