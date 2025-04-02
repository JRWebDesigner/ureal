'use client'
import React from 'react';
import { motion, Variants } from "framer-motion"

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
            className="uppercase relative flex items-center justify-center px-5 h-[70vh] md:h-[80vh] bg-[url('/Images/banner.webp')] bg-cover bg-center bg-no-repeat bg-opacity-10"
        >
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[#ff8181ad] to-[rgb(255,255,255)]">
            </div>
            <motion.h1 
        className="uppercase text-4xl md:text-5xl text-center w-[80%] text-white md:w-1/2 mx-auto font-bold" 
        variants={titleVariants} 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
                Universidad real de la camara de comercio
            </motion.h1>
        </section>
    );
};

export default Hero;
