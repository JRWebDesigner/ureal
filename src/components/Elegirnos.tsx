"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Elegirnos(){
  return(
 <section className="my-10 flex md:flex-row flex-col justify-around items-center">
        <h2 className="text-red-950 font-bold text-2xl text-center">¿Por qué elegirnos?</h2>
        <Swiper
          direction={'vertical'}
          pagination={{
          clickable: true,
          }}
 autoplay={{
        delay: 3500, // tiempo en ms entre slides (2500 = 2.5 segundos)
        disableOnInteraction: false, // permite que el autoplay continúe después de interacción del usuario
    }}

          modules={[Pagination,Autoplay]}
          className="h-[400px] w-[600px] hidden md:block"
        >

          <SwiperSlide className="relative bg-black flex justify-end items-center">
            <img className="absolute opacity-30 w-full h-full z-10" src='Images/mundo.jpg' alt='mundo empresarial' />
            <span className="relative z-20 font-bold text-white">
              Programas académicos orientados al mundo empresarial
            </span>
          </SwiperSlide>
          <SwiperSlide className="relative bg-black flex justify-end items-center">
            <img className="absolute opacity-30 w-full h-full z-10" src='Images/mundo.jpg' alt='mundo empresarial' />
            <span className="relative z-20 font-bold text-white">
              Programas académicos orientados al mundo empresarial
            </span>
          </SwiperSlide>
 
        </Swiper>
               </section>

  )
}
