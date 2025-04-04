"use client"
import { motion } from 'framer-motion'

export default function PageContaduriaPublica() {
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
      { codigo: "ADM102-2", nombre: "Administración II" },
      { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
      { codigo: "PSI101-2", nombre: "Psicología Organizacional" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "COM101-3", nombre: "Computación para la Administración" },
      { codigo: "CON102-3", nombre: "Contabilidad de Costos I" },
      { codigo: "MFI102-3", nombre: "Matemática Financiera" },
      { codigo: "CBA101-3", nombre: "Contabilidad Bancaria" },
      { codigo: "CDA101-3", nombre: "Estadística Administrativa" },
      { codigo: "FCI102-3", nombre: "Fundamentos de Control Interno" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "DER102-4", nombre: "Derecho del trabajo" },
      { codigo: "PTA104-4", nombre: "Procedimientos Tributarios y Aduaneros" },
      { codigo: "CON103-4", nombre: "Contabilidad de Costos II" },
      { codigo: "CSE104-4", nombre: "Contabilidad de Servicios" },
      { codigo: "AIF104-4", nombre: "Análisis e Interpretación de E. Financieros" },
      { codigo: "TRI104-4", nombre: "Tributación" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "ADF105-5", nombre: "Administración Financiera" },
      { codigo: "AUD105-5", nombre: "Auditoria I" },
      { codigo: "AOP105-5", nombre: "Auditoria Operativa" },
      { codigo: "PRE104-5", nombre: "Presupuestos" },
      { codigo: "CMP105-5", nombre: "Contabilidad Minera y Petroleras" },
      { codigo: "CGU105-5", nombre: "Contabilidad Gubernamental" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "AUD106-6", nombre: "Auditoria II" },
      { codigo: "MVA104-6", nombre: "Mercado de Valores" },
      { codigo: "ACT105-6", nombre: "Análisis de Contabilidad Tributaria" },
      { codigo: "AUT106-6", nombre: "Auditoria Tributaria I" },
      { codigo: "FEP104-6", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "FCO106-6", nombre: "Finanzas Corporativas" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "AFO107-7", nombre: "Auditoria Forense" },
      { codigo: "AUT107-7", nombre: "Auditoria Tributaria II" },
      { codigo: "GTE107-7", nombre: "Gerencia de Tesorería" },
      { codigo: "ADF106-7", nombre: "Finanzas Internacionales" },
      { codigo: "TNC107-7", nombre: "Técnicas de Consultoría" },
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
      { codigo: "ECO102-4", nombre: "Economía Financiera" },
      { codigo: "MVA105-6", nombre: "Administración de Inversiones" },
      { codigo: "GPU107-7", nombre: "Gestión Pública" },
      { codigo: "DRE101-4", nombre: "Desarrollo de Emprendedores" }
    ]
  }
];
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/contaduria.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contaduría Pública
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Garantizando confianza mediante ejercicio profesional basado en valores éticos y excelencia
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
          <h2 className="text-3xl font-bold text-green-800 mb-6">Formación en Contaduría Pública</h2>
          <p className="text-gray-700 mb-6 text-lg">
            El profesional de la Contaduría Pública está llamado a enfrentar el desafío de garantizar la confianza, 
            mediante un ejercicio profesional basado en valores éticos y en el compromiso orientado a la búsqueda 
            permanente de la excelencia y el desarrollo de la responsabilidad social que hoy se requiere.
          </p>
          <p className="text-gray-700 mb-6 text-lg">
            El Contador Público del Siglo XXI aborda la tecnología como instrumento que le permite la organización, 
            uso, análisis y proyección de la información contable, financiera, de gestión y de resultados que permita 
            el control, el crecimiento y la prospectiva organizacional.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Enfoque Tecnológico</h3>
              <p className="text-gray-700">
                Dominio de herramientas tecnológicas para el análisis y proyección de información financiera.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Ética Profesional</h3>
              <p className="text-gray-700">
                Formación basada en valores éticos y compromiso con la responsabilidad social.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Campo de Actuación */}
      <section className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-800 mb-8 text-center"
          >
            Campo de Actuación Profesional
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🛠️",
                title: "Función Constructiva",
                desc: "Diseña sistemas contables que procesan datos y producen información financiera"
              },
              {
                icon: "🏃",
                title: "Función Ejecutiva",
                desc: "Implementa y opera sistemas de información financiera"
              },
              {
                icon: "👀",
                title: "Función Supervisora",
                desc: "Vigila y examina la operación de sistemas de información mediante auditorías"
              },
              {
                icon: "🔍",
                title: "Función Crítica",
                desc: "Analiza e interpreta la información producida por los sistemas contables"
              },
              {
                icon: "💡",
                title: "Función Asesora",
                desc: "Aplica la información en diagnóstico y solución de problemas financieros y tributarios"
              },
              {
                icon: "⚖️",
                title: "Función Jurídica",
                desc: "Actúa como perito, síndico o árbitro en ámbitos judiciales"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-500"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
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
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                "Participa en la definición de misiones, objetivos y políticas de organizaciones con metodologías adecuadas para la toma de decisiones",
                "Interviene creativamente en el diseño y evaluación de funciones de planeamiento, coordinación y control de entidades públicas y privadas",
                "Participa en el diseño, implementación y dirección de sistemas de información contable",
                "Planifica el diseño, implementación y operación de sistemas de control de gestión en entes públicos y privados",
                "Facilita la articulación de diferentes instituciones para resolver problemáticas sociales",
                "Actúa como síndico, perito, administrador, interventor o árbitro en ámbito judicial y extrajudicial",
                "Aplica normas internacionales de información financiera y auditoría",
                "Desarrolla habilidades para el análisis y interpretación de estados financieros"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-green-600">•</div>
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
            className="text-3xl font-bold text-green-800 mb-8 text-center"
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
                <h3 className="text-xl font-bold text-green-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-green-400">
                      <span className="font-mono text-green-600">{materia.codigo}</span>
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
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Conviértete en un profesional de la Contaduría Pública
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Desarrolla las competencias para garantizar la confianza financiera en las organizaciones
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-green-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Inicia tu Proceso de Admisión
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
