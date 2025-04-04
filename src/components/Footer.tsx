'use client'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-800 to-red-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-red-700 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Icon className="text-white text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "/" },
                { name: "Conócenos", href: "/conocenos" },
                { name: "Contantos", href: "/contactos" },
               ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-red-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-300" />
                <span className="text-red-100">Av.Capitan Ravelo entre Belisario Salinas y Rosendo Guitierrez, La Paz </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-300" />
                <a href="tel:+59161190061" className="text-red-100 hover:text-white">+591 61190061</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-300" />
                <a href="mailto:info@institucion.edu" className="text-red-100 hover:text-white">info@ureal.gob.bo</a>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-red-300" />
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
          <p>© {new Date().getFullYear()} Universidad Real de la Camara de Comercio. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/" className="hover:text-white">Política de Privacidad</Link>
            <Link href="/" className="hover:text-white">Términos de Servicio</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
