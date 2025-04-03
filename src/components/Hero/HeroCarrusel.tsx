"use client";
import dynamic from "next/dynamic";

// Cargar Swiper dinámicamente
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

// Importar módulos de Swiper
import { Autoplay, EffectFade } from "swiper/modules";

// Importar CSS necesario
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useEffect } from "react";

const slides = [
  { id: 1, bgImage: "/Images/banner.webp" },
  { id: 2, bgImage: "/Images/banner2.jpg" },
  { id: 3, bgImage: "/Images/banner3.jpg" },
];

export default function HeroCarrusel() {
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1500}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                height: "100vh",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
