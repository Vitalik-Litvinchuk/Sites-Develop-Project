using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Sites_Develop_Project.Inits
{
    public static class InitDbContext
    {
        public static IServiceCollection UseDatabaseContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SiteDBContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 5;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
            }).AddEntityFrameworkStores<SiteDBContext>().AddDefaultTokenProviders();

            return services;
        }
    }
}
