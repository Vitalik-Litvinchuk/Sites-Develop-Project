using AutoMapper;
using Core.Entities;
using Core.Entities.Resume;
using Core.Interfaces;
using Core.ViewModels;
using Infrastructure.Data;
using Infrastructure.Repository;
using Infrastructure.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Drawing;
using System.Drawing.Imaging;

namespace Sites_Develop_Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class ResumeController : Controller
    {
        private readonly IRepository<Resume> _resume;
        private readonly IRepository<ResumeMainPhoto> _resumeMainPhoto;
        private readonly IRepository<ResumeBlock> _resumeBlock;
        private readonly IMapper _mapper;

        public ResumeController(SiteDBContext context,
            IMapper mapper)
        {
            _mapper = mapper;
            _resume = new Repository<Resume>(context);
            _resumeMainPhoto = new Repository<ResumeMainPhoto>(context);
            _resumeBlock = new Repository<ResumeBlock>(context);
        }

        private string SavePhoto(IFormFile file)
        {
            using Stream stream = file.OpenReadStream();
            using var image = Image.FromStream(stream);

            string randomFilename = Path.GetRandomFileName() + Path.GetExtension(file.FileName);
            var dir = Path.Combine(Directory.GetCurrentDirectory(), "uploads", randomFilename);

            image.Save(dir);

            return randomFilename;
        }

        /// <summary>
        /// Додати резюме
        /// </summary>
        /// <param name="model">Ідентифікатор користувача, фото</param>
        /// <returns>Status</returns>
        [HttpPost]
        [Route("add-resume")]
        public async Task<IActionResult> AddResume([FromForm] ResumeViewModel model)
        {
            string photo = SavePhoto(model.File);
            model.Filename = photo;

            _resume.Insert(_mapper.Map<Resume>(model));
            _resume.SaveChanges();

            return Ok(new { created = true });
        }
        /// <summary>
        /// Додати текст до резюме
        /// </summary>
        /// <param name="model">Ідентифікатор резюме, текст</param>
        /// <returns>Status</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("add-resume-block")]
        public async Task<IActionResult> AddResumeBlock([FromBody] ResumeBlockViewModel model)
        {
            _resumeBlock.Insert(_mapper.Map<ResumeBlock>(model));
            _resumeBlock.SaveChanges();

            return Ok(new { created = true });
        }

        /// <summary>
        /// Отримати резюме
        /// </summary>
        /// <param name="id">ID резюме</param>
        /// <returns>Резюме</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("get-resume")]
        public async Task<IActionResult> GetResume([FromBody] int id)
        {
            return Ok(new
            {
                resume = _resume.GetWithInclude(filter: x => x.Id == id, includes: x => x.ResumeMainPhoto)
            });
        }

        /// <summary>
        /// Отримати резюме за ID користувача
        /// </summary>
        /// <param name="id">ID користувача</param>
        /// <returns>Резюме</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("get-by-user-id-resume")]
        public async Task<IActionResult> GetByUserIdResume([FromBody] Guid id)
        {
            return Ok(new
            {
                resume = _resume.Get(filter: x => x.UserId == id)
            });
        }

        /// <summary>
        /// Отримати блоки тексту за ID резюме
        /// </summary>
        /// <param name="id">ID резюме</param>
        /// <returns>Блоки</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("get-blocks")]
        public async Task<IActionResult> GetBlocks([FromBody] int id)
        {
            return Ok(new
            {
                resumeBlock = _resumeBlock.Get(filter: x => x.ResumeId == id)
            });
        }
    }
}
