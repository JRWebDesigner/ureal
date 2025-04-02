"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Carga dinámica de Swiper solo en el cliente
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

interface Slide {
  id: number;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/Images/banner.webp",
  },
  {
    id: 2,
    bgImage: "/Images/banner2.jpg",
  },
  {
    id: 3,
    bgImage: "/Images/banner3.jpg",
  },
];

export default function HeroCarrusel() {
  const swiperRef = useRef<Swiper | null>(null);
  const zoomFactors = useRef<{ [key: number]: number }>({});

  useEffect(() => {
    slides.forEach((slide) => {
      zoomFactors.current[slide.id] = 1;
    });
  }, []);

  const handleZoom = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const activeSlideId = slides[swiper.activeIndex].id;
    const bgElement = swiper.slides[swiper.activeIndex].querySelector(
      ".slide-bg"
    ) as HTMLElement | null;

    if (bgElement) {
      if (zoomFactors.current[activeSlideId] < 1.4) {
        zoomFactors.current[activeSlideId] += 0.002;
        bgElement.style.transform = `scale(${zoomFactors.current[activeSlideId]})`;
      }
    }
  };

  useEffect(() => {
    const zoomInterval = setInterval(handleZoom, 10);

    return () => clearInterval(zoomInterval);
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay, EffectFade]}
      effect="fade"
      speed={1500}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="h-full w-full"
      onSlideChangeTransitionStart={() => {
        const slides = swiperRef.current?.slides || [];
        slides.forEach((slide) => {
          const bg = slide.querySelector(".slide-bg") as HTMLElement | null;
          if (bg) bg.style.transform = "scale(1.2)";
        });
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div
            className="slide-bg absolute inset-0 bg-cover bg-center transition-transform duration-5000"
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
