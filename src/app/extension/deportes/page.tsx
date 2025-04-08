"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiTrophy, FiCalendar, FiAward, FiUser, FiMail, FiPhone, FiEdit2 } from 'react-icons/fi'

export default function PageJuegosDeportivos() {
  const [activeImage, setActiveImage] = useState(null)

  const secciones = [
    {
      titulo: "Juegos Deportivos Universitarios AMDULP",
      contenido: "Como cada año, el torneo fue organizado por la Asociación Municipal de Deporte Universitario La Paz (AMDULP), conjuntamente con la Dirección de Deportes del Gobierno Municipal de La Paz, dicha convocatoria tuvo una amplia participación de las Universidades Privadas de la Ciudad de La Paz.",
      imagen: "/images/deportes/amdulp.jpg"
    },
    {
      titulo: "Inicio del Campeonato 2019",
      contenido: "El día 9 de septiembre se inició el campeonato de la presente gestión, organizado por Asociación Municipal de Deporte Universitario La Paz (AMDULP).",
      imagen: "/images/deportes/inicio-campeonato.jpg"
    },
    {
      titulo: "Victoria contra Unifranz",
      contenido: "La selección de la UReal logró vencer a la Unifranz en un partido bastante intenso que se disputó en cancha Venus (Zona de Pampahasi), con un marcador final de 1-0 con el primer gol de Luis Diego con la victoria de la guinda en el primer partido de la fecha.",
      imagen: "/images/deportes/victoria-unifranz.jpg"
    },
    {
      titulo: "UReal Campeón InterUniversitario AMDULP 2019",
      contenido: "La selección de fútbol de la Universidad Real de la Cámara Nacional de Comercio (UREAL) se consagró CAMPEÓN de los XIV JUEGOS DEPORTIVOS UNIVERSITARIOS 2019. Quienes acompañaron en el podio son la Escuela Militar de Ingeniería (EMI) y la Universidad Tecnológica Boliviana (UTB), en segundo y tercer lugar respectivamente.",
      imagen: "/images/deportes/campeonato-2019.jpg"
    },
    {
      titulo: "Palabras del Director de Deportes",
      contenido: "\"Felicitamos al equipo de estudiantes de la Selección de Fútbol de la Universidad Real de la Cámara Nacional de Comercio el logro obtenido. Ojalá en los próximos torneos Universitarios sigan creciendo en el ámbito metropolitano, con formatos que se puedan replicar en otras ciudades para continuar potenciando el desarrollo que viene teniendo el deporte universitario. Nos encanta tener un sistema de competencia sistemático con altura y sobre todo de calidad\", afirmó el Ing. Franco Céspedes Patón, Director de Deportes de la UREAL.",
      imagen: "/images/deportes/director-deportes.jpg"
    }
  ]

  const requisitos = [
    "Ser estudiante de la UReal",
    "Categoría Femenina o Masculina"
  ]

  return (
    <div className="bg-gray-100">
      {/* Hero Section Animado */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 md:py-32 bg-gradient-to-br from-red-900 to-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/deportes/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FiTrophy className="text-yellow-400 text-6xl mx-auto mb-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Juegos Deportivos Universitarios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Celebrando el espíritu competitivo y la excelencia deportiva
          </motion.p>
        </div>
      </motion.section>

      {/* Secciones con Galería */}
      <section className="py-16 container mx-auto px-4">
        {secciones.map((seccion, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:items-center gap-8`}
          >
            <div className="md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-2xl"
              >
                <img 
                  src={seccion.imagen} 
                  alt={seccion.titulo}
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => setActiveImage(seccion.imagen)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.h2 
                whileHover={{ x: 5 }}
                className="text-3xl font-bold text-red-800 mb-4"
              >
                {seccion.titulo}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-4"
              >
                {seccion.contenido}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Requisitos de Participación */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-red-800 to-yellow-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center"
            >
              <FiAward className="mr-3" /> Requisitos de Participación
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiUser className="mr-2" /> Requisitos
              </h3>
              <ul className="space-y-3 mb-8">
                {requisitos.map((req, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>{req}</span>
                  </motion.li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiEdit2 className="mr-2" /> Datos del Postulante
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Nombres", icon: <FiUser /> },
                  { label: "Apellido Paterno", icon: <FiUser /> },
                  { label: "Apellido Materno", icon: <FiUser /> },
                  { label: "Carrera", icon: <FiAward /> },
                  { label: "Celular", icon: <FiPhone /> },
                  { label: "Email", icon: <FiMail /> },
                  { label: "Comentario", icon: <FiEdit2 />, colSpan: "md:col-span-2" }
                ].map((field, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    className={`${field.colSpan || ''}`}
                  >
                    <label className="block text-sm font-medium mb-1 flex items-center">
                      {field.icon}
                      <span className="ml-2">{field.label}</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-white text-red-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg flex items-center mx-auto"
              >
                Enviar Postulación
                <FiMail className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modal para imágenes */}
      {activeImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
          >
            <img 
              src={activeImage} 
              alt="Imagen ampliada" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button 
              className="absolute -top-12 right-0 text-white text-3xl hover:text-yellow-400"
              onClick={(e) => {
                e.stopPropagation()
                setActiveImage(null)
              }}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
                      
