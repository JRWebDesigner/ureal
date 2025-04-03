"use client"
import ElegirnosSwiper from "./ElegirnosSwiper"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const slides = [
  {
    image: '/Images/mundo.jpg', // Usa rutas absolutas
    title: "Programas académicos orientados al mundo empresarial",
    alt: "Estudiantes en aula moderna"
  },
  {
    image: '/Images/banner.webp',
    title: "Docentes con amplia experiencia en el sector"
  },
  {
    image: '/Images/covenios.jpg',
    title: "Convenios con empresas y oportunidades de networking"
  },
  {
    image: '/Images/infraestructura.jpg',
    title: "Infraestructura moderna y tecnología de vanguardia"
  }
]

export default function Elegirnos(){
  return(
 <section className="my-10 flex md:flex-row flex-col justify-around items-center">
        <h2 className="text-red-950 font-bold text-5xl text-center">¿Por qué elegirnos?</h2>
        <Swiper
          direction={'vertical'}
          pagination={{
          clickable: true,
          }}
 autoplay={{
        delay: 2000, // tiempo en ms entre slides (2500 = 2.5 segundos)
        disableOnInteraction: false, // permite que el autoplay continúe después de interacción del usuario
    }}

          modules={[Pagination,Autoplay]}
          className="w-[100%] h-[600px] md:w-[700px] hidden md:block rounded-3xl mt-10"
        >
         {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative bg-black flex justify-center items-center rounded-3xl w-full h-full">
            <img
              className="absolute object-cover opacity-50 w-full h-full z-10 rounded-3xl"
              src={slide.image}
              alt={slide.alt || slide.title}
              loading="lazy"
            />
            <h3 className="relative z-20 font-bold text-white text-xl md:text-3xl px-6 text-center w-full h-full flex-center">
              {slide.title}
            </h3>
          </SwiperSlide>
        ))}
        </Swiper>
               </section>

  )
}
