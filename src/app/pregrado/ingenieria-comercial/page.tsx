"use client"
import { motion } from 'framer-motion'

export default function PageIngenieriaComercial() {
  const semestres = [
  {
    nombre: "Primer Semestre",
    materias: [
      { codigo: "ADM100-1", nombre: "Administración" },
      { codigo: "MET100-1", nombre: "Métodos y Técnicas de Estudio" },
      { codigo: "MAT100-1", nombre: "Matemáticas" },
      { codigo: "CON100-1", nombre: "Contabilidad Básica" },
      { codigo: "ECO100-1", nombre: "Principios de Microeconomía" },
      { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
      { codigo: "ENG100-1", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "ADM101-2", nombre: "Administración II" },
      { codigo: "DER101-2", nombre: "Derecho Comercial y Administrativo" },
      { codigo: "MAT101-2", nombre: "Matemáticas II" },
      { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
      { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
      { codigo: "PSI101-2", nombre: "Psicología Organizacional" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "COM101-3", nombre: "Computación para la Administración" },
      { codigo: "CDA101-3", nombre: "Estadística Administrativa" },
      { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
      { codigo: "MER101-3", nombre: "Mercadotecnia I" },
      { codigo: "DRE101-3", nombre: "Desarrollo de Emprendedores" },
      { codigo: "MFI102-3", nombre: "Matemática Financiera" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "RHH101-4", nombre: "Recursos Humanos" },
      { codigo: "AIF104-4", nombre: "Análisis e Interpretación de Estados Financieros" },
      { codigo: "MER102-4", nombre: "Mercadotecnia II" },
      { codigo: "ADV101-4", nombre: "Administración de Ventas" },
      { codigo: "IDM104-4", nombre: "Investigación de Mercados I" },
      { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "DPM101-5", nombre: "Desarrollo de productos" },
      { codigo: "CDA103-5", nombre: "Análisis de Decisiones I" },
      { codigo: "ADC106-5", nombre: "Análisis del Consumidor" },
      { codigo: "MDS105-5", nombre: "Mercadotecnia de Servicios" },
      { codigo: "ADF105-5", nombre: "Administración Financiera" },
      { codigo: "CDA104-5", nombre: "Administración de Operaciones" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "PDV102-6", nombre: "Proceso de Ventas" },
      { codigo: "DPM102-6", nombre: "Sistemas de Investigación de Mercados" },
      { codigo: "CEL102-6", nombre: "Comercio Electronico e-commerce" },
      { codigo: "IDM105-6", nombre: "Investigación de Mercados II" },
      { codigo: "PUB107-6", nombre: "Publicidad I" },
      { codigo: "MER103-6", nombre: "Mercadotecnia III" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "IDM106-7", nombre: "Seminario de Investigación de Mercados" },
      { codigo: "FEP104-7", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "PUB108-7", nombre: "Publicidad II" },
      { codigo: "PDV104-7", nombre: "Seminario de Promoción" },
      { codigo: "MDI107-7", nombre: "Marketing Digital" },
      { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
      { codigo: "SDG107-7", nombre: "Seminario de Grado I" }
    ]
  },
  {
    nombre: "Octavo Semestre",
    materias: [
      { codigo: "SDG108-8", nombre: "Seminario de Grado II" },
      { codigo: "PRE108-8", nombre: "Práctica Empresarial" }
    ]
  },
  {
    nombre: "Materias Complementarias",
    materias: [
      { codigo: "INA100", nombre: "Idioma Nativo (Aymara o Quechua)" },
      { codigo: "MER104-7", nombre: "Seminario Avanzado de Mercadotecnia" },
      { codigo: "ECO106", nombre: "Economía Internacional" }
    ]
  }
];
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/ingenieria-comercial.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
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
}
