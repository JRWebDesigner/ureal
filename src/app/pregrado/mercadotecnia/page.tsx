"use client"
import { motion } from 'framer-motion'

export default function PageMercadotecnia() {
  const semestres = [
  {
    nombre: "Primer Semestre",
    materias: [
      { codigo: "MAT100-1", nombre: "Matemáticas I" },
      { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
      { codigo: "MET100-1", nombre: "Métodos y Técnicas de Estudio" },
      { codigo: "ADM100-1", nombre: "Administración" },
      { codigo: "CON100-1", nombre: "Contabilidad Básica" },
      { codigo: "ECO100-1", nombre: "Principios de Microeconomía" },
      { codigo: "ENG100-1", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "DER101-2", nombre: "Derecho Comercial y Administrativo" },
      { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
      { codigo: "MAT101-2", nombre: "Matemáticas II" },
      { codigo: "FIN101-2", nombre: "Finanzas I" },
      { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
      { codigo: "PSI101-2", nombre: "Psicología Organizacional" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "COM101-3", nombre: "Computación para la Administración" },
      { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
      { codigo: "FIN102-3", nombre: "Finanzas II" },
      { codigo: "MER101-3", nombre: "Mercadotecnia" },
      { codigo: "CDA101-3", nombre: "Estadística Administrativa" },
      { codigo: "RHH101-3", nombre: "Recursos Humanos" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "FEP104-4", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "PDV101-4", nombre: "Administración de Ventas" },
      { codigo: "MER102-4", nombre: "Mercadotecnia II" },
      { codigo: "CON103-4", nombre: "Contabilidad Administrativa" },
      { codigo: "EDS101-4", nombre: "Ecología y Desarrollo Sostenible" },
      { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "CDA103-5", nombre: "Análisis de Decisiones" },
      { codigo: "ADC106-5", nombre: "Análisis del Consumidor" },
      { codigo: "DPM101-5", nombre: "Desarrollo de Productos" },
      { codigo: "IDM104-5", nombre: "Investigación de Mercados I" },
      { codigo: "MDS105-5", nombre: "Mercadotecnia de Servicios" },
      { codigo: "PDV102-5", nombre: "Procesos de Ventas" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "DPM102-6", nombre: "Sistema de Información de Mercados" },
      { codigo: "IDM105-6", nombre: "Investigación de Mercados II" },
      { codigo: "PUB107-6", nombre: "Publicidad I" },
      { codigo: "MER103-6", nombre: "Mercadotecnia III" },
      { codigo: "PDV103-6", nombre: "Promoción de Ventas" },
      { codigo: "DDE101-6", nombre: "Desarrollo de Emprendedores" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
      { codigo: "PUB108-7", nombre: "Publicidad II" },
      { codigo: "MER104-7", nombre: "Seminario Avanzado de Mercadotecnia" },
      { codigo: "PDV104-7", nombre: "Seminario de Promoción" },
      { codigo: "IDM106-7", nombre: "Seminario de Investigación de Mercados" },
      { codigo: "DPM103-7", nombre: "Planeación y Control de Mercadotecnia" },
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
      { codigo: "ECO102", nombre: "Economía Política Internacional" },
      { codigo: "INA100", nombre: "Idioma Nativo (Aymara o Quechua)" },
      { codigo: "AF101", nombre: "Instituciones Financieras" }
    ]
  }
];
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/mercadotecnia.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Mercadotecnia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formamos especialistas competitivos para el mundo globalizado
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Formación en Mercadotecnia Global</h2>
          <p className="text-gray-700 mb-6 text-lg">
            La carrera de Mercadotecnia forma especialistas altamente competitivos para cubrir la demanda de empresas en el contexto de globalización, con conocimiento perfecto de mercados locales e internacionales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
            >
              <h3 className="text-xl font-bold text-orange-800 mb-3">Enfoque Práctico</h3>
              <p className="text-gray-700">
                Aprendizaje en investigación de mercados, desarrollo de productos, publicidad, promoción, relaciones públicas y estrategias de ventas.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
            >
              <h3 className="text-xl font-bold text-orange-800 mb-3">Competencias Globales</h3>
              <p className="text-gray-700">
                Dominio de herramientas digitales, idiomas extranjeros y cultura de calidad para competir en mercados internacionales.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mercado Profesional */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-orange-800 mb-8 text-center"
          >
            Mercado Profesional
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🏢",
                title: "Empresas Productivas",
                desc: "Departamentos de marketing y ventas"
              },
              {
                icon: "🛎️",
                title: "Empresas de Servicios",
                desc: "Desarrollo de estrategias comerciales"
              },
              {
                icon: "🎪",
                title: "Empresas de Eventos",
                desc: "Planificación y ejecución de campañas"
              },
              {
                icon: "🚀",
                title: "Emprendimientos",
                desc: "Creación de negocios propios"
              },
              {
                icon: "📈",
                title: "Consultoría",
                desc: "Asesoría en estrategias de mercado"
              },
              {
                icon: "🌐",
                title: "Marketing Digital",
                desc: "Gestión de redes y comercio electrónico"
              },
              {
                icon: "🔍",
                title: "Investigación",
                desc: "Estudios de mercado y consumidores"
              },
              {
                icon: "📢",
                title: "Agencias",
                desc: "Publicidad y relaciones públicas"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">{item.title}</h3>
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
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                "Diseña proyectos de investigación de mercado para identificar clientes potenciales y oportunidades de negocio",
                "Aplica técnicas de pronósticos de ventas y establece objetivos comerciales",
                "Desarrolla estrategias de precios, distribución y logística para posicionamiento de marcas",
                "Coordina campañas de comunicación, publicidad y promoción de ventas",
                "Analiza viabilidad técnica, económica y financiera de proyectos de inversión",
                "Implementa programas de fidelización de clientes y servicio postventa",
                "Aplica normativas legales en estrategias de mercadotecnia"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-orange-600">•</div>
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
            className="text-3xl font-bold text-orange-800 mb-8 text-center"
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
                <h3 className="text-xl font-bold text-orange-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-orange-400">
                      <span className="font-mono text-orange-600">{materia.codigo}</span>
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
      <section className="py-20 bg-gradient-to-r from-orange-800 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Conviértete en un estratega del mercado global
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Desarrolla las competencias que las empresas necesitan para competir en el siglo XXI
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-orange-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
