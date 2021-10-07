using System.Security.Claims;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtensions
    {
        public static async Task<AppUser> FindUserByEmailClaimsPrincipalWithAddressAsync(
            this UserManager<AppUser> userManager,
            ClaimsPrincipal User) 
        {
            var email = User.FindFirstValue(ClaimTypes.Email);

            return await userManager.Users
                .Include(q => q.Address)
                .SingleOrDefaultAsync(q => q.Email == email);
        }

        public static async Task<AppUser> FindUserByEmailClaimsPrincipal(
            this UserManager<AppUser> userManager,
            ClaimsPrincipal User) 
        {
            var email = User.FindFirstValue(ClaimTypes.Email);

            return await userManager.Users
                .SingleOrDefaultAsync(q => q.Email == email);
        }
    }
}