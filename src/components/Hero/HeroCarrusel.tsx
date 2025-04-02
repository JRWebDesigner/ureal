"use client";
import { useEffect, useState, useCallback } from "react";
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

  const handleZoom = useCallback(() => {
    if (!swiperInstance) return;

    const activeIndex = swiperInstance.activeIndex;
    const bgElement = swiperInstance.slides[activeIndex].querySelector(".slide-bg") as HTMLElement | null;

    if (bgElement) {
      bgElement.style.transform = "scale(1.4)";
      setTimeout(() => {
        bgElement.style.transition = "transform 1s ease-in-out";
        bgElement.style.transform = "scale(1.2)";
      }, 100);
    }
  }, [swiperInstance]);

  useEffect(() => {
    const zoomInterval = setInterval(handleZoom, 3000);
    return () => clearInterval(zoomInterval);
  }, [handleZoom]);

  return (
    <Swiper
      speed={1500}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      effect="fade"
      modules={[Autoplay, EffectFade]}
      className="h-full w-full"
      onSwiper={setSwiperInstance}
      onSlideChangeTransitionStart={handleZoom}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div
            className="slide-bg absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: "scale(1.2)",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
