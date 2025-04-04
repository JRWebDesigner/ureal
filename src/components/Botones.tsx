"use client"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Botones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animaciones más pronunciadas
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delay: 0.2
      }
    }
  };

  const item = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.8
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const buttons = [
    {
      href: "http://sistema.ureal.edu.bo/",
      text: "Sistema ureal",
      bgColor: "bg-green-700",
      hoverColor: "hover:bg-green-950",
      delay: 0.1
    },
    {
      href: "https://virtual.ureal.edu.bo/login/index.php",
      text: "Campus virtual",
      bgColor: "bg-yellow-700",
      hoverColor: "hover:bg-yellow-950",
      delay: 0.2
    },
    {
      href: "https://ureal.edu.bo/landingbiblio.html",
      text: "Biblioteca",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-950",
      delay: 0.3
    },
    {
      href: "https://teams.microsoft.com/v2/",
      text: "Microsoft teams",
      bgColor: "bg-red-700",
      hoverColor: "hover:bg-red-950",
      delay: 0.4
    },
    {
      href: "https://ureal.edu.bo/pregrado/formsPago/",
      text: "Pago en linea",
      bgColor: "bg-orange-700",
      hoverColor: "hover:bg-orange-950",
      delay: 0.5
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className="flex-center flex-wrap gap-9 my-22"
    >
      {buttons.map((button, index) => (
        <motion.a
          key={index}
          variants={item}
          custom={index}
          whileHover="hover"
          whileTap="tap"
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-center uppercase rounded-xl px-4 py-4 w-[230px] text-white ${button.bgColor} ${button.hoverColor} text-xl shadow-lg hover:shadow-xl transition-shadow`}
          style={{
            transformOrigin: "center bottom"
          }}
        >
          {button.text}
        </motion.a>
      ))}
    </motion.div>
  );
}
