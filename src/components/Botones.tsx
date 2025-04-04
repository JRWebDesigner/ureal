"use client"
import { motion } from 'framer-motion';

export default function Botones() {
  // Animación para el contenedor
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Animación para cada botón
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
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
      hoverColor: "hover:bg-green-950"
    },
    {
      href: "https://virtual.ureal.edu.bo/login/index.php",
      text: "Campus virtual",
      bgColor: "bg-yellow-700",
      hoverColor: "hover:bg-yellow-950"
    },
    {
      href: "https://ureal.edu.bo/landingbiblio.html",
      text: "Biblioteca",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-950"
    },
    {
      href: "https://teams.microsoft.com/v2/",
      text: "Microsoft teams",
      bgColor: "bg-red-700",
      hoverColor: "hover:bg-red-950"
    },
    {
      href: "https://ureal.edu.bo/pregrado/formsPago/",
      text: "Pago en linea",
      bgColor: "bg-orange-700",
      hoverColor: "hover:bg-orange-950"
    }
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex-center flex-wrap gap-9 my-22"
    >
      {buttons.map((button, index) => (
        <motion.a
          key={index}
          variants={item}
          whileHover="hover"
          whileTap="tap"
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-center uppercase rounded-xl px-4 py-4 w-[230px] text-white ${button.bgColor} ${button.hoverColor} text-xl`}
        >
          {button.text}
        </motion.a>
      ))}
    </motion.div>
  );
}
