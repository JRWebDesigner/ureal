"use client";

import { motion } from "framer-motion";

const PregradoSection = () => {
  return (
    <section className="relative bg-white text-black py-20 px-6 md:px-24 overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-right">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full p-16 bg-red-800 rounded-full flex-center hover:bg-red-600 hover:scale-[1.1] duration-300"
        >
          <img
            src="/Images/joven.png"
            alt="Estudiante de UREAL"
            className="rounded-3xl w-[90%] h-auto object-cover"
          />
        </motion.div> 
      <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Programas de Pregrado
          </h2>
          <p className="text-xl italic font-medium text-gray-700 mb-6">
            El primer paso para cambiar tu vida es decidir formarte donde se forman los líderes del mañana.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Los programas de pregrado en la UREAL están diseñados para preparar profesionales con una sólida base teórica y práctica en áreas clave del mundo empresarial. A través de metodologías innovadoras, docentes con experiencia real en el sector y una fuerte vinculación con la industria, nuestros estudiantes desarrollan las habilidades necesarias para enfrentar los desafíos del mercado y destacar en el ámbito profesional desde el primer día.
          </p>
        </motion.div>

      
      </div>
    </section>
  );
};

export default PregradoSection;
