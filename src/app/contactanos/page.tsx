'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type AreaType = 'pregrado' | 'postgrado' | '';
type CareerType = string;

interface CareersData {
  pregrado: CareerType[];
  postgrado: CareerType[];
}

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [selectedArea, setSelectedArea] = useState<AreaType>('');
  const [selectedCareer, setSelectedCareer] = useState<CareerType>('');

  // Datos de carreras por área
 const careersData: CareersData = {
    pregrado: [
      'Ingeniería de Software',
      'Diseño Gráfico',
      'Administración de Empresas',
      'Psicología',
      'Medicina',
      'Derecho',
      'Arquitectura',
      'Contabilidad',
      'Marketing Digital',
      'Comunicación Social'
    ],
    postgrado: [
      'Maestría en Inteligencia Artificial',
      'Maestría en Finanzas',
      'Doctorado en Educación',
      'Especialización en Derecho Penal',
      'Maestría en Salud Pública',
      'Doctorado en Psicología Clínica',
      'Especialización en Marketing Digital',
      'Maestría en Data Science',
      'Doctorado en Ingeniería de Sistemas',
      'Especialización en Gestión Hospitalaria',
      'Maestría en Diseño UX/UI',
      'Doctorado en Economía',
      'Especialización en Comunicación Corporativa',
      'Maestría en Energías Renovables',
      'Doctorado en Arquitectura Sostenible'
    ]
  };
  const hoverEffect = {
    scale: 1.03,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 10
      }
    }
  };

const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value as AreaType);
    setSelectedCareer('');
  };

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCareer(e.target.value);
  };

  const tapEffect = {
    scale: 0.98
  };


  return (
    <motion.div 
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 mt-26"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl font-bold text-black mb-6"
            variants={itemVariants}
          >
            Contáctanos
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Estamos aquí para ayudarte. Completa el formulario o utiliza nuestros otros canales de contacto.
          </motion.p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulario */}
          <motion.div
            className="bg-black p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            whileHover={{ 
              y: -5,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Envía un mensaje</h2>
            
            <form className="space-y-6">
              <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </motion.div>

              <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </motion.div>

              {/* Selección de Área */}
              <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
                <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-1">
                  Selecciona un área
                </label>
                <select
                  id="area"
                  name="area"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-white focus:outline-none transition-all"
                  onChange={handleAreaChange}
                  value={selectedArea}
                >
                  <option value="">Selecciona un área</option>
                  <option value="pregrado">Pregrado</option>
                  <option value="postgrado">Postgrado</option>
                </select>
              </motion.div>

              {/* Selección de Carrera (solo visible si se seleccionó un área) */}
{selectedArea && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={hoverEffect} 
          whileTap={tapEffect}
        >
          <label htmlFor="career" className="block text-sm font-medium text-gray-300 mb-1">
            Selecciona una carrera
          </label>
          <select
            id="career"
            name="career"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-white focus:outline-none transition-all"
            value={selectedCareer}
            onChange={handleCareerChange}
          >
            <option value="">Selecciona una carrera</option>
            {careersData[selectedArea].map((career: string) => (
              <option key={career} value={career}>
                {career}
              </option>
            ))}
          </select>
        </motion.div>
      )}
              <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none transition-all"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ 
                  ...hoverEffect,
                  backgroundColor: '#e5e7eb'
                }}
                whileTap={tapEffect}
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <motion.div 
              className="p-8 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ 
                y: -5,
                backgroundColor: '#000',
                color: '#fff',
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <motion.div 
                    className="bg-black text-white p-2 rounded-full mr-4"
                    whileHover={{ rotate: 15 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-gray-600 hover:text-white transition-colors">+ 2444423</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <motion.div 
                    className="bg-black text-white p-2 rounded-full mr-4"
                    whileHover={{ rotate: 15 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 hover:text-white transition-colors">info@ureal.edu.bo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <motion.div 
                    className="bg-black text-white p-2 rounded-full mr-4"
                    whileHover={{ rotate: 15 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <p className="text-gray-600 hover:text-white transition-colors">Calle Capitán Ravelo #2329</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="p-8 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ 
                y: -5,
                backgroundColor: '#000',
                color: '#fff',
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Horario de atención</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes</span>
                  <span className="text-gray-600 hover:text-white transition-colors">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sábado</span>
                  <span className="text-gray-600 hover:text-white transition-colors">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Domingo</span>
                  <span className="text-gray-600 hover:text-white transition-colors">Cerrado</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="p-8 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ 
                y: -5,
                backgroundColor: '#000',
                color: '#fff',
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="bg-black text-white p-3 rounded-full hover:bg-white hover:text-black border-2 border-black transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: '#fff',
                      color: '#000'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
