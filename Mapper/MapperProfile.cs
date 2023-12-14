using AutoMapper;
using Core.Entities;
using Core.Entities.Resume;
using Core.ViewModels;

namespace Sites_Develop_Project.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<RegisterViewModel, User>()
                .ForMember(x => x.Photo, opt => opt.Ignore())
                .ForMember(x => x.PhoneNumber, opt => opt.MapFrom(x => x.Phone))
                .ForMember(x => x.UserName, opt => opt.MapFrom(x => x.Email));

            CreateMap<ResumeBlockViewModel, ResumeBlock>();

            CreateMap<ResumeViewModel, Resume>()
                .ForMember(x => x.ResumeMainPhoto, opt => opt.MapFrom(x => new ResumeMainPhoto { Name = x.Filename }));
        }
    }
}
