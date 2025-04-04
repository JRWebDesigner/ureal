"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Botones() {
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
    <div className="flex-center flex-wrap gap-9 my-22">
      {buttons.map((button, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
          rootMargin: '-50px 0px'
        });

        return (
          <motion.a
            key={index}
            ref={ref}
            initial={{ 
              y: 50,
              opacity: 0,
              scale: 0.9
            }}
            animate={inView ? { 
              y: 0,
              opacity: 1,
              scale: 1
            } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.1
            }}
            whileHover={{
              scale: 1.05,
              y: -3
            }}
            whileTap={{ scale: 0.98 }}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-center uppercase rounded-xl px-4 py-4 w-[230px] text-white ${button.bgColor} ${button.hoverColor} text-xl shadow-md hover:shadow-lg transition-all`}
          >
            {button.text}
          </motion.a>
        );
      })}
    </div>
  );
}
