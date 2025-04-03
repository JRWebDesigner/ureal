"use client";
import dynamic from "next/dynamic";

// Cargar Swiper dinámicamente para evitar problemas con SSR
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

// Importar módulos de Swiper
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
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
