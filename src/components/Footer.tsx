'use client'
import { FaFacebook, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  // Estados para los submenús
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  return (
    <footer className="bg-gradient-to-b from-red-800 to-red-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 - Logo y descripción */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/">
              <img 
                src="/Images/logo.png" 
                alt="Logo" 
                className="h-16 w-auto mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-center md:text-left text-red-100">
              Transformando vidas a través de la educación de calidad y valores empresariales.
            </p>
            <div className="flex mt-4 space-x-4">
              {/* Redes sociales actualizadas */}
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="bg-red-700 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <FaFacebook className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="bg-red-700 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <FaYoutube className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="bg-red-700 p-3 rounded-full hover:bg-red-600 transition-colors"
              >
                <FaWhatsapp className="text-white text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos con submenú */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-red-100 hover:text-white transition-colors block py-1">
                  Inicio
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('formacion')}
                  className="text-red-100 hover:text-white transition-colors flex items-center justify-between w-full py-1"
                >
                  <span>Formación</span>
                  <span className="ml-2">
                    {openSubmenu === 'formacion' ? '−' : '+'}
                  </span>
                </button>
                {openSubmenu === 'formacion' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 mt-1 space-y-1"
                  >
                    <li>
                      <Link href="/pregrado" className="text-red-200 hover:text-white block py-1">
                        Pregrado
                      </Link>
                    </li>
                    <li>
                      <Link href="/postgrado" className="text-red-200 hover:text-white block py-1">
                        Postgrado
                      </Link>
                    </li>
                    <li>
                      <Link href="/maestria" className="text-red-200 hover:text-white block py-1">
                        Maestría
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu('conocenos')}
                  className="text-red-100 hover:text-white transition-colors flex items-center justify-between w-full py-1"
                >
                  <span>Conócenos</span>
                  <span className="ml-2">
                    {openSubmenu === 'conocenos' ? '−' : '+'}
                  </span>
                </button>
                {openSubmenu === 'conocenos' && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 mt-1 space-y-1"
                  >
                    <li>
                      <Link href="/conocenos/mision-vision" className="text-red-200 hover:text-white block py-1">
                        Misión y Visión
                      </Link>
                    </li>
                    <li>
                      <Link href="/conocenos/plan-al-contado" className="text-red-200 hover:text-white block py-1">
                        Plan al Contado
                      </Link>
                    </li>
                    <li>
                      <Link href="/conocenos/descuentos" className="text-red-200 hover:text-white block py-1">
                        Descuentos
                      </Link>
                    </li>
                    <li>
                      <Link href="/conocenos/becas" className="text-red-200 hover:text-white block py-1">
                        Becas
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </li>
              <li>
                <Link href="/contactanos" className="text-red-100 hover:text-white transition-colors block py-1">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3 - Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-300 text-lg" />
                <span className="text-red-100">Calle Capitán Ravelo #2329, La Paz, Bolivia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-300 text-lg" />
                <a href="tel:+59161190061" className="text-red-100 hover:text-white">+591 61190061</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-300 text-lg" />
                <a href="mailto:info@institucion.edu" className="text-red-100 hover:text-white">info@ureal.gob.bo</a>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-red-300 text-lg" />
                <span className="text-red-100">Lun-Vie: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </motion.div>

      
          
        </div>

        
        <div className="border-t border-red-700 my-6"></div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-red-200 text-sm"
        >
          <p>© {new Date().getFullYear()} Universidad Real de la Cámara Nacional de Comercio . Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/politica-privacidad" className="hover:text-white">Política de Privacidad</Link>
            <Link href="/terminos-servicio" className="hover:text-white">Términos de Servicio</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
