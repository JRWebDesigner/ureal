"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function PagePregrado() {
const carreras = [
  {
    nombre: "Administración Financiera",
    slug: "administracion-financiera",
    descripcion: "Formación en gestión de recursos financieros empresariales",
    imagen: "/Images/financiera.jpg"
  },
  {
    nombre: "Comercio Internacional",
    slug: "comercio-internacional",
    descripcion: "Especialistas en negocios y operaciones globales",
    imagen: "/Images/comercio.jpg"
  },
  {
    nombre: "Comunicación Audiovisual",
    slug: "comunicacion-audiovisual",
    descripcion: "Profesionales en producción de contenidos multimedia",
    imagen: "/Images/audiovisual.jpg"
  },
  {
    nombre: "Mercadotecnia",
    slug: "mercadotecnia",
    descripcion: "Expertos en estrategias de mercado y branding",
    imagen: "/Images/mercadotecnia.jpg"
  },
  {
    nombre: "Ingeniería en Sistemas y Computación Administrativa",
    slug: "ingenieria-sistemas",
    descripcion: "Fusión de tecnología y gestión empresarial",
    imagen: "/Images/sistemas-computacion.jpg"
  },
  {
    nombre: "Administración Turística y Hotelería",
    slug: "administracion-turistica",
    descripcion: "Gestión de empresas y servicios turísticos",
    imagen: "/Images/turismo.jpg"
  },
  {
    nombre: "Administración de Empresas",
    slug: "administracion-empresas",
    descripcion: "Líderes para la gestión organizacional efectiva",
    imagen: "/Images/administracion.jpg"
  },
  {
    nombre: "Contaduría Pública",
    slug: "contaduria-publica",
    descripcion: "Expertos en información financiera y auditoría",
    imagen: "/Images/contaduria.jpg"
  },
  {
    nombre: "Ingeniería Comercial",
    slug: "ingenieria-comercial",
    descripcion: "Estrategas en desarrollo de mercados y negocios",
    imagen: "/Images/ingenieria-comercial.jpg"
  },
  {
    nombre: "Derecho",
    slug: "derecho",
    descripcion: "Formación de juristas con excelencia académica",
    imagen: "/Images/derecho.jpg"
  }
]
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Oferta Académica de Pregrado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Descubre las 10 carreras profesionales que ofrece la Universidad Real
          </motion.p>
        </div>
      </section>

      {/* Carreras Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carreras.map((carrera, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/pregrado/${carrera.slug}`} passHref>
                  <div className="relative h-48 w-full">
                    <Image 
                      src={carrera.imagen} 
                      alt={carrera.nombre}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity opacity-90 hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white">{carrera.nombre}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{carrera.descripcion}</p>
                    <div className="flex items-center text-red-800 font-medium">
                      <span>Ver carrera</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-yellow-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para comenzar tu futuro profesional?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            En Ureal Bolivia te ofrecemos educación de calidad con enfoque práctico y global
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-red-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Solicita Información
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
