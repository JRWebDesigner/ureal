'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PostgradoSection() {
  return (
    <section className="relative bg-white text-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Contenido de texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Programas de <span className="text-red-700">Postgrado</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl italic font-medium text-gray-700"
          >
            Impulsa tu carrera al siguiente nivel con formación especializada y visión global.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg leading-relaxed text-gray-800"
          >
            En UREAL, los programas de posgrado están diseñados para profesionales que buscan potenciar su perfil ejecutivo, adquirir conocimientos de vanguardia y ampliar su red de contactos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-4"
          >
            <Link 
              href='/postgrado' 
              className="inline-block bg-red-800 hover:bg-red-900 text-white font-bold px-8 py-3 rounded-lg text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Más Información
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-xl transition-all duration-500"
        >
          <img
            src="/Images/diplomado.jpg"
            alt="Estudiante de posgrado UREAL"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}
