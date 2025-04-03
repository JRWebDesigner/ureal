"use client"
import {motion} from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

export default function PregradoCarrusel(){
  return(
    <>
      <motion.h2 initial={{opacity:0, x:-80}} whileInView={{opacity:1, x:0}} transition={{duration: 0.7}} viewport={{once: true}} className="text-center text-red-950 font-bold text-xl md:text-3xl">Carreras de Pregrado</motion.h2>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
        delay: 4500, // tiempo en ms entre slides (2500 = 2.5 segundos)
        disableOnInteraction: false, // permite que el autoplay continúe después de interacción del usuario
    }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='carreras/carrera1.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera2.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera3.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera4.jpg' alt='carrera' />4</SwiperSlide>
        <SwiperSlide><img src='carreras/carrera5.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera6.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera7.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera8.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera9.jpg' alt='carrera' /></SwiperSlide>
        <SwiperSlide><img src='carreras/carrera10.jpg' alt='carrera' /></SwiperSlide>
      </Swiper>
    </>
  )
}
