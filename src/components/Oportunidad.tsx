'use client'
import { motion } from 'framer-motion'

export default function Oportunidad() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='relative bg-gradient-to-r from-red-700 to-red-900 text-white text-xl md:text-3xl w-full py-6 md:py-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 my-16 overflow-hidden'
    >
      {/* Elementos decorativos */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -left-20 -bottom-20 w-40 h-40 bg-red-600 rounded-full opacity-20"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -top-20 w-40 h-40 bg-white rounded-full opacity-10"
      />
      
      {/* Contenido principal */}
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className='font-bold text-center md:text-left px-4 relative z-10'
      >
        ¡No pierdas esta oportunidad!
      </motion.span>
      
      <motion.button
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "#f0f0f0",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='bg-white text-black rounded-full px-8 py-3 text-xl font-medium hover:font-semibold duration-300 relative z-10 shadow-lg hover:shadow-xl transition-all'
      >
        Más Información
      </motion.button>
    </motion.div>
  )
}
