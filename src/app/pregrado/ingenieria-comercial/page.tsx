"use client"
import { motion } from 'framer-motion'

export default function PageIngenieriaComercial() {
  const semestres = [
    {
      nombre: "Primer Semestre",
      materias: [
        { codigo: "ICO100-1", nombre: "Introducción a la Ingeniería Comercial" },
        { codigo: "MIC100-1", nombre: "Microeconomía" },
        { codigo: "MAT100-1", nombre: "Matemáticas para Negocios" },
        { codigo: "ADM100-1", nombre: "Principios de Administración" },
        { codigo: "CON100-1", nombre: "Contabilidad Básica" },
        { codigo: "TIC100-1", nombre: "Tecnologías de Información Comercial" },
        { codigo: "ING100-1", nombre: "Inglés Comercial I" }
      ]
    },
    {
      nombre: "Segundo Semestre",
      materias: [
        { codigo: "MAC101-2", nombre: "Macroeconomía" },
        { codigo: "EST101-2", nombre: "Estadística Aplicada a Negocios" },
        { codigo: "MER101-2", nombre: "Principios de Marketing" },
        { codigo: "FIN101-2", nombre: "Finanzas Corporativas" },
        { codigo: "COM101-2", nombre: "Comercio Electrónico" },
        { codigo: "DER101-2", nombre: "Derecho Comercial Internacional" },
        { codigo: "ING101-2", nombre: "Inglés Comercial II" }
      ]
    },
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
            Ingeniería Comercial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formando profesionales competitivos para los desafíos del comercio global
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
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Licenciatura en Comercio Internacional</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Nuestra carrera tiene como objetivo formar profesionales competitivos a nivel internacional para que participen exitosamente dentro de la dinámica de la globalización que cada vez más impone a las empresas e instituciones estar presentes en mercados internacionales.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            Para enfrentar esta realidad irreversible se requiere profesionales especializados en comercio de importaciones/exportaciones, negocios internacionales, zonas francas y logística de bienes, servicios, tecnologías y capitales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Enfoque Global</h3>
              <p className="text-gray-700">
                Preparación para operar en escenarios geoeconómicos subregionales, regionales y mundiales.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Competencias Clave</h3>
              <p className="text-gray-700">
                Espíritu emprendedor, liderazgo, cultura de calidad y dominio de idiomas e informática.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Campo de Actuación */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-800 mb-8 text-center"
          >
            Campo de Actuación Profesional
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🌐",
                title: "Marketing Internacional",
                desc: "Planeación estratégica, inteligencia de mercados y sistemas de información global"
              },
              {
                icon: "📈",
                title: "Análisis Comercial",
                desc: "Estudios de mercado, pronósticos de ventas y análisis económico-financiero"
              },
              {
                icon: "🚚",
                title: "Logística Global",
                desc: "Planeación y control de distribución internacional de bienes y servicios"
              },
              {
                icon: "💻",
                title: "Comercio Electrónico",
                desc: "Desarrollo e implementación de estrategias de e-commerce y marketing digital"
              },
              {
                icon: "🤝",
                title: "Negociaciones Internacionales",
                desc: "Gestión de importaciones/exportaciones y operaciones en zonas francas"
              },
              {
                icon: "👔",
                title: "Consultoría Empresarial",
                desc: "Asesoría en expansión comercial y evaluación de proyectos de inversión"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{item.title}</h3>
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
          <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                "Diseñar y realizar proyectos de investigación de mercado global",
                "Identificar oportunidades y amenazas en mercados internacionales",
                "Aplicar técnicas de elaboración de pronósticos de ventas internacionales",
                "Diseñar y evaluar programas para conseguir ventajas competitivas globales",
                "Desarrollar estrategias de fidelización de clientes internacionales",
                "Analizar y monitorear estrategias de precios en diferentes mercados",
                "Estructurar estrategias de distribución y logística internacional",
                "Estimar ciclos de vida de productos según tendencias globales",
                "Planificar campañas de comunicación y marketing internacional",
                "Diseñar estrategias avanzadas de comercio electrónico global"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-purple-600">•</div>
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
            className="text-3xl font-bold text-purple-800 mb-8 text-center"
          >
            Plan de Estudios
          </motion.h2>
          <div className="mt-8 max-w-4xl mx-auto">
            {semestres.map((semestre, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-xl font-bold text-purple-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-purple-400">
                      <span className="font-mono text-purple-600">{materia.codigo}</span>
                      <p className="text-gray-800">{materia.nombre}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Conviértete en un experto en comercio global
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Desarrolla las competencias para liderar negocios en el escenario internacional
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-purple-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Inicia tu Proceso de Admisión
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
