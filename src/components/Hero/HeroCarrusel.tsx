import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow' 
import {Autoplay,EffectCoverflow } from 'swiper/modules';
export default function HeroCarrusel(){
    return( 
        <Swiper
              effect={'coverflow'}
              grabCursor={true}
              modules={[ EffectCoverflow ,Autoplay]}
              coverflowEffect={
                {
                  rotate:50,
                  stretch:0,
                  depth:100,
                  modifier:1,
                  slideShadows:true
                }
              }
              autoplay={{
                delay:3000,
                disableOnInteraction:false
              }}
              spaceBetween={50}
              loop={true}
              slidesPerView={1}
              className="w-[90%] text-xl md:text-3xl text-center font-semibold flex justify-center items-center"
            >
          <SwiperSlide>
            <div  className="flex justify-around items-center flex-col-reverse md:flex-row gap-5">
              <span>
                La tecnología más avanzada en equipos y herramientas para tu laboratorio.
              </span>
              <img className='w-[29%] md:w-[24%]' src="/images/miicroscopio.png" alt="microscopio" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex justify-around items-center flex-col-reverse md:flex-row gap-5'>
            <span>
              Instrumentos y dispositivos de las marcas más reconocidas y confiables.
            </span>
                <img className='w-[29%] md:w-[24%]' src="/images/h3565-family-600-x-600--removebg-preview.png" alt="microscopio" />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="flex justify-around items-center flex-col-reverse md:flex-row gap-5">
            <span>
              Todo lo esencial para tu laboratorio, disponible en un único sitio.
            </span>
                <img className='w-[29%] md:w-[24%]' src="/images/manta-calentamiento-sin-agitacion-black-diamond-removebg-preview.png" alt="microscopio" />
            </div>
          </SwiperSlide>
        </Swiper>
    )
}
