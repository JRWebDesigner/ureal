"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Swiper as SwiperType } from "swiper/types";

// Cargar Swiper de manera dinámica
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

// Importar módulos de Swiper
import { Autoplay, EffectFade } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/effect-fade";

interface Slide {
  id: number;
  bgImage: string;
}

const slides: Slide[] = [
  { id: 1, bgImage: "/Images/banner.webp" },
  { id: 2, bgImage: "/Images/banner2.jpg" },
  { id: 3, bgImage: "/Images/banner3.jpg" },
];

export default function HeroCarrusel() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <Swiper
      onSwiper={setSwiperInstance}
      speed={1500}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      effect="fade"
      modules={[Autoplay, EffectFade]}
      className="h-full w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
