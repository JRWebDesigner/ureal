"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen } from 'react-icons/fi'

export default function PageRecursosHumanos() {
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
            Diplomado en Recursos Humanos y Salario Emocional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Fortalece tus conocimientos para gestionar el capital humano con enfoque estratégico
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
                  <p className="font-bold text-red-800">2024-06-26</p>
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
                El Diplomado en Recursos Humanos y Salario Emocional busca fortalecer los conocimientos de los profesionales para resolver los problemas que cotidianamente se les presentan en RRHH y Salario Emocional, buscando que los participantes empleen las normativas correspondientes de una manera eficaz y oportuna.
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
                Conocer y desarrollar la legislación tributaria vigente, con énfasis en los principales cuerpos normativos que regulan esta materia, manejando conceptos jurídicos y contables que se utilizarán como herramientas para la aplicación e interpretación de esta normativa específica en materia tributaria y aduanera, con el fin de desarrollar habilidades para evaluar, analizar y aplicar las estrategias y soluciones tributarias y aduaneras que requieran instituciones y clientes.
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
                  titulo: "Análisis Estratégico, Capacitación, Tutoría, Mentoring y Gestión de Talento",
                  temas: [
                    "Teoría Organizacional",
                    "Prepararse para el Cambio",
                    "Modelos para el Cambio",
                    "Habilidades para Tener y Mantener Talentos Claves",
                    "Sistema Comunicacional",
                    "Programa Mentoring"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Coaching",
                  temas: [
                    "Saber Escuchar",
                    "Saber Tender Puentes Emocionales",
                    "Administración del Cambio",
                    "Cómo superar la Resistencia del Cambio",
                    "Generar Trabajo Colaborativo"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "Reconocimiento, Autonomía y Retos Profesionales",
                  temas: [
                    "De la administración del personal a la gestión de personas",
                    "Introducción a la gestión estratégica de personas",
                    "Alineamiento de las personas a la estrategia de la organización",
                    "Clima laboral como sustento"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "El Análisis de Puestos de Trabajo y la Identificación del Perfil Competencial del Candidato",
                  temas: [
                    "Perfil de competencia en el puesto de trabajo",
                    "Selección de personal",
                    "Proceso de Selección",
                    "Análisis y definición de puesto de trabajo"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Negociación y Manejo de Conflictos",
                  temas: [
                    "Definición de conflicto y Negociación",
                    "Análisis del conflicto",
                    "Clases de conflicto",
                    "Métodos y formas de enfrentar el conflicto"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Nuevos Esquemas de Trabajo y sus Beneficios, Habilidades Personales y Liderazgo",
                  temas: [
                    "¿Qué es el Liderazgo?",
                    "Desarrollo de habilidades y Capacidades",
                    "Trabajo en equipo",
                    "Habilidades Gerenciales"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Diagnóstico Organizacional e Innovación en Gestión de Cambio, Clima Laboral",
                  temas: [
                    "Concepto",
                    "Herramientas de Análisis estratégicos",
                    "Métodos y Análisis estratégicos",
                    "Análisis del Macro y Micro entorno"
                  ]
                },
                {
                  modulo: "Módulo 8",
                  titulo: "Ética y Moral",
                  temas: [
                    "Ética y Moral",
                    "El significado del ser",
                    "Toma de decisiones éticas",
                    "Acerca de la ética y la felicidad"
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
                  <div className="bg-red-800 text-white px-6 py-3">
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
            ¿Listo para especializarte en Recursos Humanos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Inscríbete ahora y potencia tu carrera profesional
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
