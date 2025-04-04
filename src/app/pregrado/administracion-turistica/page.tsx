"use client"
import { motion } from 'framer-motion'

export default function PageTurismoHoteles() {
  const semestres = [
    {
      nombre: "Primer Semestre",
      materias: [
        { codigo: "TUR100-1", nombre: "Introducción al Turismo" },
        { codigo: "ADM100-1", nombre: "Fundamentos de Administración" },
        { codigo: "CON100-1", nombre: "Contabilidad Básica" },
        { codigo: "HOT100-1", nombre: "Principios de Hotelería" },
        { codigo: "GEO100-1", nombre: "Geografía Turística" },
        { codigo: "COM100-1", nombre: "Comunicación Efectiva" },
        { codigo: "ENG100-1", nombre: "Inglés Turístico I" }
      ]
    },
    {
      nombre: "Segundo Semestre",
      materias: [
        { codigo: "TUR101-2", nombre: "Patrimonio Cultural y Natural" },
        { codigo: "MER101-2", nombre: "Mercadotecnia Turística" },
        { codigo: "HOT101-2", nombre: "Operaciones Hoteleras" },
        { codigo: "NUT101-2", nombre: "Gastronomía y Nutrición" },
        { codigo: "DER101-2", nombre: "Legislación Turística" },
        { codigo: "TIC101-2", nombre: "Tecnologías para el Turismo" },
        { codigo: "ENG101-2", nombre: "Inglés Turístico II" }
      ]
    },
    // ... Agregar los demás semestres aquí
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Administración Turística y Hotelería
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formamos líderes para impulsar el desarrollo del sector turístico global
          </motion.p>
        </div>
      </section>

      {/* Descripción */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 container mx-auto px-4"
      >
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Formación en Gestión Turística</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Formamos profesionales competitivos para contribuir al desarrollo del sector turismo, con capacidad para generar empresas y empleos, creando prosperidad para todos los agentes económicos involucrados.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500"
            >
              <h3 className="text-xl font-bold text-teal-800 mb-3">Enfoque Turístico</h3>
              <p className="text-gray-700">
                Conocimiento de destinos, patrimonio cultural, desarrollo sostenible y gestión de experiencias turísticas.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500"
            >
              <h3 className="text-xl font-bold text-teal-800 mb-3">Enfoque Hotelero</h3>
              <p className="text-gray-700">
                Dominio de operaciones hoteleras, gastronomía, servicios y gestión de alojamientos turísticos.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Campo de Actuación */}
      <section className="py-16 bg-teal-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-800 mb-8 text-center"
          >
            Campo de Actuación Profesional
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "✈️",
                title: "Agencias de Viajes",
                desc: "Planificación y operación de paquetes turísticos"
              },
              {
                icon: "🛫",
                title: "Líneas Aéreas",
                desc: "Gestión de servicios aerocomerciales"
              },
              {
                icon: "🏨",
                title: "Hoteles",
                desc: "Administración de establecimientos hoteleros"
              },
              {
                icon: "🍽️",
                title: "Restaurantes",
                desc: "Dirección de servicios gastronómicos"
              },
              {
                icon: "🗺️",
                title: "Desarrollo Turístico",
                desc: "Diseño y gestión de proyectos turísticos"
              },
              {
                icon: "🎡",
                title: "Centros de Diversión",
                desc: "Operación de parques y atracciones turísticas"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfil Profesional */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                "Planea, organiza y dirige empresas e instituciones turísticas con eficiencia",
                "Desarrolla proyectos estratégicos para el desarrollo turístico sostenible",
                "Analiza variables del mercado hotelero y turístico con visión prospectiva",
                "Gestiona recursos naturales y culturales con enfoque turístico responsable",
                "Implementa sistemas de calidad en servicios turísticos y hoteleros",
                "Domina herramientas tecnológicas aplicadas a la gestión turística",
                "Comunica efectivamente en múltiples idiomas en contextos turísticos"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-teal-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-teal-600">•</div>
                    <div className="ml-3 text-gray-700">{item}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Plan de Estudios */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-800 mb-8 text-center"
          >
            Plan de Estudios
          </motion.h2>
          
          {semestres.map((semestre, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-xl font-bold text-teal-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-teal-400">
                      <span className="font-mono text-teal-600">{materia.codigo}</span>
                      <p className="text-gray-800">{materia.nombre}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors shadow-lg">
              Descargar Malla Curricular Completa
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para una carrera global en turismo y hotelería?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Conviértete en un profesional capaz de transformar el sector turístico
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-teal-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
