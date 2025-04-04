"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen, FiTrendingUp, FiShare2, FiUsers } from 'react-icons/fi'

export default function PageMarketingDigital() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-red-800 to-yellow-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Diplomado en Marketing Digital y RSE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Estrategias digitales con enfoque en responsabilidad social empresarial
          </motion.p>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-red-50 p-4 rounded-lg border-l-4 border-red-800"
            >
              <div className="flex items-center">
                <FiCalendar className="text-red-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inscripción hasta</p>
                  <p className="font-bold text-red-800">2024-04-25</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-red-50 p-4 rounded-lg border-l-4 border-red-800"
            >
              <div className="flex items-center">
                <FiClock className="text-red-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-red-800">8 Semanas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-red-50 p-4 rounded-lg border-l-4 border-red-800"
            >
              <div className="flex items-center">
                <FiAward className="text-red-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Modalidad</p>
                  <p className="font-bold text-red-800">VIRTUAL</p>
                  <p className="text-xs text-gray-500">DIPLOMADO</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-red-50 p-4 rounded-lg border-l-4 border-red-800"
            >
              <div className="flex items-center">
                <FiDollarSign className="text-red-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inversión</p>
                  <p className="font-bold text-red-800">3 Cuotas de Bs. 800</p>
                  <p className="text-xs text-gray-500">Contado: Bs. 2100</p>
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
            <h2 className="text-3xl font-bold text-red-800 mb-6">Descripción del Programa</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Este programa combina estrategias de marketing digital con los principios de la Responsabilidad Social Empresarial, formando profesionales capaces de desarrollar campañas efectivas con impacto positivo.
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
            <h2 className="text-3xl font-bold text-red-800 mb-6">Objetivo del Programa</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-800">
              <p className="text-gray-700">
                Proporcionar las herramientas y los conocimientos para desempeñarse en un nivel operativo en el área de marketing virtual, así como desarrollar en el analista de marketing un profesional contratado para cuidar y desarrollar el análisis de las estrategias y de los resultados de marketing dentro de una empresa.
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
            <h2 className="text-3xl font-bold text-red-800 mb-6">Criterios de Admisión</h2>
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
                  className="flex items-start bg-red-50 p-4 rounded-lg"
                >
                  <FiUserCheck className="text-red-800 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-red-800 mb-6">Estructura Curricular</h2>
            
            <div className="space-y-4">
              {[
                {
                  modulo: "Módulo 1",
                  titulo: "Introducción a la RSE y Sostenibilidad",
                  icon: <FiTrendingUp className="text-red-800" />,
                  temas: [
                    "Origen y fundamentos de la RSE",
                    "Conceptos y beneficios",
                    "Evolución normativa",
                    "Inversión Socialmente Responsable"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Estrategia y Gobierno Corporativo",
                  icon: <FiShare2 className="text-red-800" />,
                  temas: [
                    "Visión, misión y valores",
                    "Gobierno corporativo",
                    "Ética y transparencia",
                    "Planificación estratégica de RSE",
                    "Creación de valor corporativo"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "Proceso de Elaboración de Reportes",
                  icon: <FiBookOpen className="text-red-800" />,
                  temas: [
                    "Indicadores de medición",
                    "Proceso de verificación RSC",
                    "Reportes de sostenibilidad",
                    "Mejora continua"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "Gestión de Derechos Humanos",
                  icon: <FiUsers className="text-red-800" />,
                  temas: [
                    "Contexto global de DDHH",
                    "Evaluación y mapeo",
                    "Salud y seguridad laboral",
                    "Relación con stakeholders",
                    "Políticas de DDHH"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Emprendimiento e Innovación Social",
                  icon: <FiTrendingUp className="text-red-800" />,
                  temas: [
                    "Herramientas para emprender",
                    "Modelos inclusivos",
                    "Alianzas público-privadas",
                    "Voluntariado corporativo"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Implementación Estratégica de RSE",
                  icon: <FiShare2 className="text-red-800" />,
                  temas: [
                    "Normativa ISO 26000",
                    "Sistemas de gestión ética",
                    "Implementación en la estructura organizativa",
                    "Casos de estudio"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Medición y Reportes de Sostenibilidad",
                  icon: <FiBookOpen className="text-red-800" />,
                  temas: [
                    "Indicadores de gestión",
                    "Proceso de verificación",
                    "Reportes integrados",
                    "Mejora continua"
                  ]
                },
                {
                  modulo: "Módulo 8",
                  titulo: "Marketing y Comunicación Responsable",
                  icon: <FiTrendingUp className="text-red-800" />,
                  temas: [
                    "Reputación corporativa",
                    "Marketing digital y redes sociales",
                    "Herramientas de diálogo",
                    "Transparencia comunicacional",
                    "Investigación responsable"
                  ]
                }
              ].map((modulo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-red-800 text-white px-6 py-3 flex items-center">
                    <div className="mr-3">
                      {modulo.icon}
                    </div>
                    <h3 className="font-bold">{modulo.modulo}: {modulo.titulo}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="grid md:grid-cols-2 gap-2">
                      {modulo.temas.map((tema, i) => (
                        <li key={i} className="flex items-start">
                          <FiBookOpen className="text-red-800 mr-2 mt-1 flex-shrink-0" />
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
            ¿Listo para transformar el marketing con responsabilidad social?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Desarrolla estrategias digitales con impacto positivo
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-red-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
