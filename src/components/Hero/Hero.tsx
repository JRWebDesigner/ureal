'use client'
import React from 'react';
import { motion, Variants } from "framer-motion"
import HeroCarrusel from "./HeroCarrusel"

const titleVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
  };

  const Hero: React.FC = () => {  
    return (
        <section 
            id="hero"
            className="uppercase relative flex items-center justify-center px-5 h-[80vh] md:h-[100vh] bg-[url('/Images/banner.webp')] bg-cover bg-center bg-no-repeat bg-opacity-10"
        >
	
        <div className='absolute w-full h-full bg-black opacity-60 z-20' />
        <div className="absolute w-full h-full z-10">
          <HeroCarrusel />
        </div>
        <motion.div 
         className=" flex justify-center ítems-center flex-col relative z-30 w-[80%] mx-auto text-white text-center" 
        variants={titleVariants} 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
               <h1 className="uppercase text-3xl md:text-5xl text-center font-bold"> Universidad Real de la Cámara de Comercio</h1> 
            <span className="text-center text-xl">Formando líderes empresariales </span>
       </motion.div>
		
      </section>
    );
};

export default Hero;
