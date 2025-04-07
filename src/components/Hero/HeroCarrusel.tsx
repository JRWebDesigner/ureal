"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
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
        autoplay={{ delay: 3000 }}
        loop={true}
        effect="fade"
        speed={1500} 
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ height: "100vh" }}>
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
