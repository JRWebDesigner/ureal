"use client"
import { motion } from "framer-motion"

export default function Bienvenida() {
  return (
    <section className='my-24 px-4 md:px-8 lg:px-16 bg-black py-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-10 items-center'>
          <motion.div 
            initial={{ opacity: 0, x: -60 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='text-3xl md:text-4xl font-bold text-white'
            >
              <span className="text-red-600">Bienvenidos</span> a la Universidad Real de la Cámara Nacional de Comercio
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Somos una institución de educación superior enfocada en formar líderes empresariales con una visión global e innovadora. Con un enfoque práctico y una sólida red de alianzas comerciales, brindamos a nuestros estudiantes una educación de excelencia alineada con las necesidades del mercado.
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Conoce más
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full h-auto object-cover aspect-square"
                src="/Images/bienvenido.jpg" 
                alt="Universidad Real de Cámara de Comercio"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>    
  )
}
