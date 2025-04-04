"use client"
import { motion } from 'framer-motion';

export default function Botones() {
  return (
    <div className="flex-center flex-wrap gap-9 my-22">
      {/* Botón Sistema Ureal */}
      <motion.a
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        whileHover={{ scale: 1.05 }}
        href="http://sistema.ureal.edu.bo/"
        target="_blank"
        className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-green-700 text-white hover:bg-green-950 text-xl"
      >
        Sistema ureal
      </motion.a>

      {/* Botón Campus Virtual */}
      <motion.a
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.1
        }}
        whileHover={{ scale: 1.05 }}
        href="https://virtual.ureal.edu.bo/login/index.php"
        target="_blank"
        className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-yellow-700 text-white hover:bg-yellow-950 text-xl"
      >
        Campus virtual
      </motion.a>

      {/* Botón Biblioteca */}
      <motion.a
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2
        }}
        whileHover={{ scale: 1.05 }}
        href="https://ureal.edu.bo/landingbiblio.html"
        target="_blank"
        className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-blue-700 text-white hover:bg-blue-950 text-xl"
      >
        Biblioteca
      </motion.a>

      {/* Botón Microsoft Teams */}
      <motion.a
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.3
        }}
        whileHover={{ scale: 1.05 }}
        href="https://teams.microsoft.com/v2/"
        target="_blank"
        className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-red-700 text-white hover:bg-red-950 text-xl"
      >
        Microsoft teams
      </motion.a>

      {/* Botón Pago en línea */}
      <motion.a
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4
        }}
        whileHover={{ scale: 1.05 }}
        href="https://ureal.edu.bo/pregrado/formsPago/"
        target="_blank"
        className="flex-center uppercase rounded-xl px-4 py-4 w-[230px] bg-orange-700 text-white hover:bg-orange-950 text-xl"
      >
        Pago en linea
      </motion.a>
    </div>
  );
}
