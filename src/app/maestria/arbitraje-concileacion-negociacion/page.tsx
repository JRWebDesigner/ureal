"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen } from 'react-icons/fi'
import { FaBalanceScale, FaHandshake, FaGavel } from 'react-icons/fa'

export default function PageResolucionConflictos() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Justice Theme */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-amber-800 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 flex flex-col items-center"
          >
            <span className="flex items-center gap-3">
              <FaBalanceScale className="text-amber-200" />
              Diplomado en Arbitraje, Conciliación y Negociación
              <FaHandshake className="text-amber-200" />
            </span>
            <span className="text-xl md:text-2xl mt-4 font-normal">Formación en métodos alternativos de resolución de conflictos</span>
          </motion.h1>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-700"
            >
              <div className="flex items-center">
                <FiCalendar className="text-amber-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inscripción hasta</p>
                  <p className="font-bold text-amber-900">2021-06-26</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-700"
            >
              <div className="flex items-center">
                <FiClock className="text-amber-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-amber-900">7 Semanas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-700"
            >
              <div className="flex items-center">
                <FiAward className="text-amber-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Modalidad</p>
                  <p className="font-bold text-amber-900">VIRTUAL</p>
                  <p className="text-xs text-amber-700">DIPLOMADO</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-700"
            >
              <div className="flex items-center">
                <FiDollarSign className="text-amber-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inversión</p>
                  <p className="font-bold text-amber-900">3 Cuotas de Bs. 800</p>
                  <p className="text-xs text-amber-700">Contado: Bs. 2100</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <FaHandshake className="text-amber-700" />
              Descripción del Programa
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Programa especializado que brinda herramientas teóricas y prácticas en métodos alternativos de resolución de conflictos, formando profesionales capaces de mediar en disputas legales y comerciales.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Objetivo del Programa</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
              <p className="text-gray-700">
                Desarrollar conocimientos legales y habilidades técnicas que permitan al alumno aplicar de manera eficaz los criterios de Arbitraje, Conciliación y Negociación.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Criterios de Admisión</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Fotocopia simple de la Cédula de Identidad",
                "Fotocopia simple del Certificado de Nacimiento",
                "Fotocopia simple del Diploma Académico o Título en Provisión Nacional de Licenciatura en cualquier área",
                "Dos fotografías 4X4, Fondo rojo",
                "Una copia de su Hoja de Vida (CV)"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-amber-50 p-4 rounded-lg border border-amber-100"
                >
                  <FiUserCheck className="text-amber-800 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum with Justice Theme */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Estructura Curricular</h2>
            
            <div className="space-y-4">
              {[
                {
                  modulo: "Módulo 1",
                  titulo: "Análisis y Desarrollo del Conflicto",
                  icon: <FaBalanceScale className="mr-2 text-amber-700" />,
                  temas: [
                    "Definición de conflicto",
                    "Análisis del conflicto",
                    "Clases de conflictos",
                    "Visión del Conflicto (positiva y negativa)",
                    "Características del conflicto",
                    "Formas y métodos de enfrentar el conflicto",
                    "Dinámica del Conflicto"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Mecanismos de solución de Controversias - LEY 708",
                  icon: <FaGavel className="mr-2 text-amber-700" />,
                  temas: [
                    "Definición y características",
                    "Garantizar la seguridad jurídica",
                    "Confidencialidad",
                    "Comportamiento de compra y venta",
                    "Solución extrajudicial",
                    "Protección de inversiones"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "Negociación",
                  icon: <FaHandshake className="mr-2 text-amber-700" />,
                  temas: [
                    "Definición y características",
                    "Coincidencias y discrepancias",
                    "Los siete elementos de la negociación según principios desarrollados por R. FISCHER",
                    "Técnicas y habilidades de negociación"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "Aspectos Fundamentales de la Conciliación",
                  icon: <FaHandshake className="mr-2 text-amber-700" />,
                  temas: [
                    "Definición y características",
                    "Condiciones para la conciliación",
                    "Clases de conciliación",
                    "Naturaleza jurídica",
                    "Régimen legal de la conciliación en Bolivia",
                    "Intervención del estado en conciliación"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Aspectos de la Conciliación Judicial",
                  icon: <FaBalanceScale className="mr-2 text-amber-700" />,
                  temas: [
                    "Conocimientos generales de ética profesional",
                    "Neutralidad vs. De-Neutralidad",
                    "Competencia para conductas de tercer neutral y Autodeterminación de las partes",
                    "Pautas para conductas neutrales",
                    "Sistema de sanciones para terceros neutrales conciliadores",
                    "Conciliación Civil",
                    "Conciliación Penal"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Arbitraje",
                  icon: <FaGavel className="mr-2 text-amber-700" />,
                  temas: [
                    "Definición y características",
                    "Principios",
                    "Clases de arbitraje",
                    "Procedimiento arbitral en Bolivia",
                    "Origen del procedimiento arbitral",
                    "Reglamentos aplicables",
                    "Etapas de un proceso arbitral",
                    "Valor del laudo arbitral",
                    "Competencia y auxilio judicial"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Arbitraje Comercial Internacional",
                  icon: <FaBalanceScale className="mr-2 text-amber-700" />,
                  temas: [
                    "Arbitraje comercial internacional",
                    "El arbitraje de inversiones",
                    "Fuentes de arbitraje internacional y de las inversiones",
                    "El convenio de arbitraje internacional",
                    "Jurisdicción en los arbitrajes de inversiones",
                    "Los árbitros y el tribunal arbitral"
                  ]
                }
              ].map((modulo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-100"
                >
                  <div className="bg-amber-800 text-white px-6 py-3 flex items-center">
                    {modulo.icon}
                    <h3 className="font-bold">{modulo.modulo}: {modulo.titulo}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {modulo.temas.map((tema, i) => (
                        <li key={i} className="flex items-start">
                          <FiBookOpen className="text-amber-700 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Justice Theme */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="flex items-center justify-center gap-3">
              <FaHandshake />
              ¿Listo para convertirte en experto en resolución de conflictos?
              <FaBalanceScale />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Domina las técnicas de arbitraje, conciliación y negociación profesional
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-amber-900 px-10 py-4 rounded-full font-bold hover:bg-amber-50 transition-colors text-lg shadow-xl flex items-center mx-auto gap-2">
              <FaHandshake />
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
