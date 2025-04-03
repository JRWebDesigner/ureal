"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Importar CSS necesario
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

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
        }}
        loop={true}
        effect="fade"
        speed={1500}
        style={{ height: "100vh" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
