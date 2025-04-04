"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const PostgradoSection = () => {
  return (
    <>
    <section className="relative bg-white text-black py-20 px-6 md:px-24 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Programas de Postgrado
          </h2>
          <p className="text-xl italic font-medium text-gray-700 mb-6">
            "Impulsa tu carrera al siguiente nivel con formación especializada y visión global."
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            En UREAL, los programas de posgrado están diseñados para profesionales que buscan potenciar su perfil ejecutivo, adquirir conocimientos de vanguardia y ampliar su red de contactos. Nuestra propuesta académica combina teoría avanzada, práctica empresarial y una orientación estratégica que responde a las exigencias del mundo moderno.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full p-16 bg-black rounded-full flex-center hover:bg-gray-400 hover:scale-[1.1] duration-300"
        >
          <img
            src="/Images/diplomado.jpg"
            alt="Estudiante de posgrado UREAL"
            className="rounded-3xl w-[96%] h-auto object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
    <Link href='/postgrado' className='my-6 flex-center bg-red-950 shadow-xl hover:scale-[1.05] duration-300 text-white font-bold w-[230px] mx-auto px-4 py-3 rounded-xl text-2xl'>Mas Informacion</Link>

    </>
  );
};

export default PostgradoSection;
