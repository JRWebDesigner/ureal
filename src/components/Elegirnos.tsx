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
        delay: 2000, // tiempo en ms entre slides (2500 = 2.5 segundos)
        disableOnInteraction: false, // permite que el autoplay continúe después de interacción del usuario
    }}

          modules={[Pagination,Autoplay]}
          className="w-[90%] h-[400px] md:w-[600px] hidden md:block rounded-3xl"
        >

          <SwiperSlide className="relative bg-black flex justify-center items-center rounded-3xl w-full h-full">
            <img className="absolute object-cover opacity-30 w-full h-full z-10 rounded-3xl" src='Images/mundo.jpg' alt='mundo empresarial' />
            <h3 className="px-6 z-20 font-bold text-white text-xl">
              Programas académicos orientados al mundo empresarial
            </h3>
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
