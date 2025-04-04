"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen } from 'react-icons/fi'

export default function PageDerechoNotarial() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
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
            Diplomado en Derecho Notarial Plurinacional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Especialización en función notarial y gestión de instrumentos públicos
          </motion.p>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-800"
            >
              <div className="flex items-center">
                <FiCalendar className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inscripción hasta</p>
                  <p className="font-bold text-black">2021-06-26</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-800"
            >
              <div className="flex items-center">
                <FiClock className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-black">7 Semanas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-800"
            >
              <div className="flex items-center">
                <FiAward className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Modalidad</p>
                  <p className="font-bold text-black">VIRTUAL</p>
                  <p className="text-xs text-gray-500">DIPLOMADO</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-800"
            >
              <div className="flex items-center">
                <FiDollarSign className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inversión</p>
                  <p className="font-bold text-black">3 Cuotas de Bs. 800</p>
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
            <h2 className="text-3xl font-bold text-black mb-6">Descripción del Programa</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Programa académico especializado en la práctica notarial boliviana, enfocado en la correcta aplicación de la normativa y el manejo de instrumentos públicos.
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
            <h2 className="text-3xl font-bold text-black mb-6">Objetivo del Programa</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-800">
              <p className="text-gray-700 mb-4">
                Actualizar los conocimientos teórico-prácticos en la función y gestión notarial boliviana, con una tendencia crítica e integradora, fortaleciendo la capacidad de cumplimiento de la normativa y contribuyendo a la formación de un profesional éticamente responsable.
              </p>
              <p className="text-gray-700">
                Capacitar a los profesionales en Derecho en el conocimiento del Derecho Notarial respecto a diversas figuras jurídicas específicas, tanto a nivel teórico como práctico. Entender la importancia y funcionamiento del Registro Público de la Propiedad, identificando los problemas actuales del Derecho Notarial.
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
            <h2 className="text-3xl font-bold text-black mb-6">Criterios de Admisión</h2>
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
                  className="flex items-start bg-indigo-50 p-4 rounded-lg"
                >
                  <FiUserCheck className="text-black mt-1 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-black mb-6">Estructura Curricular</h2>
            
            <div className="space-y-4">
              {[
                {
                  modulo: "Módulo 1",
                  titulo: "Aspectos Generales del Derecho Notarial (Ley 483)",
                  temas: [
                    "Origen y evolución del Notario",
                    "El Notario, el Derecho Notarial y la Función Notarial",
                    "Definiciones en el ámbito Notarial",
                    "Organización, Atribuciones del Notariado Plurinacional",
                    "Derechos y Deberes",
                    "Atribuciones, Prohibiciones, Carrera, Servicio Notarial"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Instrumentos Notariales, la Función Notarial en los Instrumentos Públicos",
                  temas: [
                    "Documentos Notariales",
                    "Documentos Protocolares y Extra-Protocolares",
                    "Escrituras Públicas",
                    "Partes de la Escrituras Públicas",
                    "Actas de Protocolización"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "Formas y Solemnidades de la Atribución Notarial",
                  temas: [
                    "El Instrumento - Forma",
                    "De las Formas de los Contratos",
                    "Clases de Forma",
                    "Formas Determinadas",
                    "Del documento Público y Privado"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "Procesos Voluntarios Notariales (en el Ámbito Civil, Familiar Y Mercantil)",
                  temas: [
                    "Procedimientos Voluntarios",
                    "Divorcio Notarial",
                    "Trámite de permiso de viaje de menores al exterior",
                    "Trámites en Materia Civil",
                    "Trámites en Materia Sucesoria",
                    "Tipos de Documentos Notariales",
                    "Constitución de Sociedades Mercantiles, Póliza, Protesto, Reclamación de Deudas, Conciliación"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Nulidad y Anulabilidad de Instrumentos Notariales",
                  temas: [
                    "Nulidad y Anulabilidad de Instrumentos Públicos Notariales",
                    "Nulidad de Forma y Fondo",
                    "Causales de Nulidad de Instrumentos Públicos",
                    "Valor Probatorio de los Instrumentos Notariales"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Representación Y Mandato",
                  temas: [
                    "Documentos de Representación",
                    "Representación Voluntaria",
                    "El Mandato",
                    "El Poder",
                    "Reglas de Otorgamiento de Poderes",
                    "Extinción de Mandato"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Ética, Responsabilidad y Seguridad Notarial",
                  temas: [
                    "Ética y Responsabilidad del Notario",
                    "Principios de profesionalidad - Integridad",
                    "Clasificación en la Aplicación a la actuación del Notario",
                    "Responsabilidades del Notario: Administrativa, Civil y Penal",
                    "Normas de Trato Social"
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
                  <div className="bg-black text-white px-6 py-3">
                    <h3 className="font-bold">{modulo.modulo}: {modulo.titulo}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="grid md:grid-cols-2 gap-2">
                      {modulo.temas.map((tema, i) => (
                        <li key={i} className="flex items-start">
                          <FiBookOpen className="text-black mr-2 mt-1 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para dominar el Derecho Notarial?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Inscríbete ahora y conviértete en un experto en instrumentos notariales y registros públicos
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
