"use client"
import { motion } from 'framer-motion'
import { FiMapPin, FiUsers, FiGlobe, FiStar } from 'react-icons/fi'

export default function PageActividadesCulturales() {
  const actividades = [
    {
      titulo: "CHILE TPA",
      descripcion: "Nuestros estudiantes de la carrera de Comercio Internacional realizaron un viaje a Arica - Chile para participar del 'Curso Internacional: Logística y operativa portuaria'.",
      imagen: "/images/culturales/chile-tpa.jpg",
      icono: <FiGlobe className="text-white text-2xl" />,
      categoria: "Intercambio Internacional"
    },
    {
      titulo: "BALLET FOLKLÓRICO",
      descripcion: "Alumnos aprendiendo danza folklórica para integrarse al grupo de formación de ballet folklórico de la Universidad Real de la Cámara de Comercio.",
      imagen: "/images/culturales/ballet.jpg",
      icono: <FiUsers className="text-white text-2xl" />,
      categoria: "Arte y Danza"
    },
    {
      titulo: "MUNICIPIO DE VILLA TUNARI",
      descripcion: "Los estudiantes de la carrera de Administración Turística y Hotelería visitaron el Municipio para conocer y disfrutar de la biodiversidad.",
      imagen: "/images/culturales/villa-tunari.jpg",
      icono: <FiMapPin className="text-white text-2xl" />,
      categoria: "Turismo Cultural"
    },
    {
      titulo: "LA MUELA DEL DIABLO",
      descripcion: "Estudiantes de la carrera de Administración Turística y Hotelería visitaron la Muela del Diablo, con explicaciones astrológicas, geográficas y culturales.",
      imagen: "/images/culturales/muela-diablo.jpg",
      icono: <FiStar className="text-white text-2xl" />,
      categoria: "Excursión Educativa"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Ahora en negro */}
      <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Actividades Culturales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Descubre las experiencias que enriquecen la formación integral de nuestros estudiantes
          </motion.p>
        </div>
      </section>

      {/* Galería de Actividades - Versión mejorada para móviles */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
            Nuestras Actividades Recientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actividades.map((actividad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                {/* Contenedor de imagen */}
                <div className="relative h-64 w-full">
                  {/* Imagen de fondo */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${actividad.imagen})` }}
                  />
                  
                  {/* Overlay que siempre se muestra (ahora visible en móviles) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  
                  {/* Contenido que ahora es visible siempre, no solo en hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
                    <div className="flex items-center mb-2">
                      <div className="mr-2">
                        {actividad.icono}
                      </div>
                      <span className="text-xs md:text-sm font-semibold bg-red-800 px-2 md:px-3 py-1 rounded-full">
                        {actividad.categoria}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{actividad.titulo}</h3>
                    
                    {/* Descripción - visible en móviles y desktop */}
                    <div className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs md:text-sm mt-1">
                        {actividad.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
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
            ¿Quieres participar en nuestras actividades culturales?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Forma parte de estas experiencias que complementan tu formación académica
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-red-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Más Información
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
