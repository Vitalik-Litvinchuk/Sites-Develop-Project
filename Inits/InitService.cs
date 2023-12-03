using Core.Interfaces;
using Core.Services;

namespace Sites_Develop_Project.Inits
{
    public static class InitService
    {
        public static IServiceCollection UseServices(this IServiceCollection services)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAuthService, AuthService>();

            return services;
        }
    }
}
