'use client';

import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome, FiAlertTriangle, FiCompass } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  const tapEffect = {
    scale: 0.98
  };

  // Sugerencias de búsqueda
  const searchSuggestions = [
    { label: 'Admisiones', path: '/admisiones' },
    { label: 'Contacto', path: '/contacto' },
    { label: 'Carreras', path: '/carreras' },
    { label: 'Noticias', path: '/noticias' }
  ];

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Número 404 con animación */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-9xl font-bold text-gray-200"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            404
          </motion.h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 10 }}
              >
                <FiAlertTriangle className="h-12 w-12 text-[#800020]" />
              </motion.div>
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Página no encontrada
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Lo sentimos, no pudimos encontrar la página que estás buscando.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-gray-500">Opciones de navegación</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.button
              onClick={() => router.back()}
              className="group relative w-full flex justify-center items-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800020]"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <FiArrowLeft className="mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-700" />
              Volver atrás
            </motion.button>

            <motion.div
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <button
                onClick={() => router.push('/')}
                className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#800020] hover:bg-[#600018] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800020]"
              >
                <FiHome className="mr-2 h-5 w-5 text-white group-hover:text-white" />
                Ir al inicio
              </button>
            </motion.div>

            <motion.div
              className="md:col-span-2"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <button
                onClick={() => router.push('/mapa-del-sitio')}
                className="group relative w-full flex justify-center items-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800020]"
              >
                <FiCompass className="mr-2 h-5 w-5 text-[#800020] group-hover:text-[#600018]" />
                Ver mapa del sitio
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección de búsqueda sugerida */}
        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            ¿Quizás quisiste decir?
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-2"
          >
            {searchSuggestions.map((suggestion) => (
              <motion.div
                key={suggestion.path}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                <button
                  onClick={() => router.push(suggestion.path)}
                  className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-[#800020] hover:text-white transition-all"
                >
                  {suggestion.label}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
