using Core.Interfaces;
using Core.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Sites_Develop_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        #region Authorize
        /// <summary>
        /// Реєстрація [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, ім'я, пароль, повторний пароль</param>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            var token = await _authService.RegisterAsync(model);
            if (string.IsNullOrEmpty(token))
                return BadRequest(new { errors = new { authError = "Реєстрація неуспішна" } });

            return Ok(new { token = token });
        }

        /// <summary>
        /// Вхід [Unauthorize]
        /// </summary>
        /// <param name="model">Пошта, пароль</param>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            string token = await _authService.LoginAsync(model);

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { errors = new { authError = "Авторизація неуспішна" } });

            return Ok(new { token = token });
        }

        /// <summary>
        /// Авторизація (реєстрація/логін) через Google account [Unauthorize]
        /// </summary>
        /// <param name="model">Номер токену</param>
        /// <returns>Jwt token</returns>
        //[HttpPost]
        //[AllowAnonymous]
        //[Route("auth-by-google-account")]
        //public async Task<IActionResult> AuthByGoogleAccount([FromBody] GoogleAuthViewModel model)
        //{
        //    string token = await _authService.AuthByGoogleAccountAsync(model);
        //    if (!string.IsNullOrEmpty(token))
        //        return Ok(new { token = token });
        //    return BadRequest(new { errors = new { authError = "Авторизація неуспішна" } });
        //}

        /// <summary>
        /// Вихід [Authorize]
        /// </summary>
        /// <returns>Jwt token</returns>
        [HttpPost]
        [Route("logout")]
        public IActionResult Logout()
        {
            return Ok(new { token = "" });
        }
        #endregion

    }
}
