import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
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
    id:3,
    bgImage:"/Images/banner3.jpg"
  }
];


export default function HeroCarrusel(){
  const swiperRef = useRef<any>(null);
  const zoomFactors = useRef<{ [key: number]: number }>({});

  useEffect(() => {
    slides.forEach((slide) => {
      zoomFactors.current[slide.id] = 1;
    });
  }, []);

  const handleZoom = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;
    const activeSlideId = slides[swiper.activeIndex].id;
    const bgElement = swiper.slides[swiper.activeIndex].querySelector(".slide-bg");

    if (!bgElement) return;

    // Incrementar zoom solo para el slide activo
    if (zoomFactors.current[activeSlideId] < 1.4) {
      zoomFactors.current[activeSlideId] += 0.002; // Ajusta la velocidad
      bgElement.style.transform = `scale(${zoomFactors.current[activeSlideId]})`;
    }
  };

  useEffect(() => {
    const zoomInterval = setInterval(handleZoom, 10); 

    return () => clearInterval(zoomInterval);
  }, []);

  return( 
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
        onSlideChangeTransitionStart={() => {
          // Resetear zoom al cambiar de slide
          const slides = swiperRef.current?.swiper.slides || [];
          slides.forEach((slide: HTMLElement) => {
            const bg = slide.querySelector(".slide-bg");
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
    )
}
