"use client";
import { SwiperSlide } from 'swiper/react';

interface ElegirnosSwiperProps {
  image: string;
  title: string;
}

export default function ElegirnosSwiper({ image, title }: ElegirnosSwiperProps) {
  return (
    <>
    <SwiperSlide className="relative bg-black flex justify-center items-center rounded-3xl w-full h-full">
      <img
        className="absolute object-cover opacity-50 w-full h-full z-10 rounded-3xl"
        src={image}
        alt={title}
        loading="lazy"
      />
      <h3 className="relative z-20 font-bold text-white text-xl md:text-3xl px-6 text-center">
        {title}
      </h3>
    </SwiperSlide>
    </>
  );
}
