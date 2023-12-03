using AutoMapper;
using Core.Entities;
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
        }
    }
}
