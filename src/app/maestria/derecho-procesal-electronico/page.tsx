"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen } from 'react-icons/fi'
import { FaRobot, FaDigitalTachograph, FaLaptopCode } from 'react-icons/fa'

export default function PageDerechoDigital() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section con temática tecnológica */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-900 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="flex items-center justify-center gap-3">
              <FaLaptopCode className="text-blue-300" />
              Diplomado en Derecho Procesal Electrónico Legaltech Judicial
              <FaRobot className="text-blue-300" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Especialización en tecnologías aplicadas al sistema judicial y práctica legal digital
          </motion.p>
        </div>
      </section>

      {/* Basic Info con íconos tecnológicos */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiCalendar className="text-blue-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inscripción hasta</p>
                  <p className="font-bold text-blue-900">2022-04-25</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiClock className="text-blue-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-blue-900">8 Semanas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiAward className="text-blue-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Modalidad</p>
                  <p className="font-bold text-blue-900">VIRTUAL</p>
                  <p className="text-xs text-blue-700">DIPLOMADO</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800"
            >
              <div className="flex items-center">
                <FiDollarSign className="text-blue-800 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inversión</p>
                  <p className="font-bold text-blue-900">3 Cuotas de Bs. 800</p>
                  <p className="text-xs text-blue-700">Contado: Bs. 2100</p>
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
            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <FaDigitalTachograph className="text-blue-700" />
              Descripción del Programa
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 text-lg">
                Programa innovador que integra el conocimiento jurídico con las últimas tecnologías aplicadas al derecho, preparando profesionales para la justicia digital del siglo XXI.
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
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Objetivo del Programa</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-800">
              <p className="text-gray-700">
                Formar profesionales capaces de comprender y utilizar eficientemente las tecnologías aplicadas al ámbito legal, preparándolos para enfrentar los retos y aprovechar las oportunidades que ofrece la digitalización en el sistema judicial.
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
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Criterios de Admisión</h2>
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
                  className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100"
                >
                  <FiUserCheck className="text-blue-800 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum con temática tecnológica */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Estructura Curricular</h2>
            
            <div className="space-y-4">
              {[
                {
                  modulo: "Módulo 1",
                  titulo: "Transformación del Derecho el Legaltech (Bolivia)",
                  icon: <FaRobot className="mr-2 text-blue-700" />,
                  temas: [
                    "Introducción al nuevo ámbito doctrinal del derecho Boliviano dentro de la transformación de la justicia digital modernizada",
                    "El abogado Legaltech que tiene mayor eficiencia con ayuda de los medios de interoperabilidad",
                    "Sistematización y la implantación dentro de Bolivia"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Digitalización en Derechos Reales",
                  icon: <FaLaptopCode className="mr-2 text-blue-700" />,
                  temas: [
                    "Sistema de Emisión de Fichas Virtuales",
                    "Obtención de la Certificación Nacional de No Propiedad Automática en DDRR",
                    "Implementación en plataformas de DDRR a nivel nacional"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "Blockchain y Fintech en el Derecho Digital Bancario",
                  icon: <FaLaptopCode className="mr-2 text-blue-700" />,
                  temas: [
                    " jurídico y su evolución",
                    "Vinculación con bitcoin y criptomonedas",
                    "Aplicaciones tecnológicas en el ámbito jurídico"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "Investigación Policial Criminal Digital Renovado",
                  icon: <FaDigitalTachograph className="mr-2 text-blue-700" />,
                  temas: [
                    "Diagnóstico sobre ciberdelincuencia en Bolivia",
                    "Estudio exploratorio sobre delitos informáticos",
                    "Recomendaciones para la reforma al sistema de justicia",
                    "Interoperabilidad policial en el ámbito digital"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Cuaderno de Investigación. Digitalizar desde el Inicio de la Denuncia",
                  icon: <FaLaptopCode className="mr-2 text-blue-700" />,
                  temas: [
                    "Nuevas formas de presentar pruebas conforme a la reforma judicial",
                    "Sistematización en el ámbito de la digitalización",
                    "El papel en la era digital judicial penal"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Justicia Digital en el Órgano Judicial",
                  icon: <FaRobot className="mr-2 text-blue-700" />,
                  temas: [
                    "Implementación de tecnología en el ámbito judicial",
                    "Normatividad específica para tecnología aplicada al trámite judicial"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Digitalización en Derecho Notarial",
                  icon: <FaDigitalTachograph className="mr-2 text-blue-700" />,
                  temas: [
                    "Sistema informático del notariado",
                    "Acceso seguro a documentos notariales",
                    "Transparencia en el trabajo notarial digital"
                  ]
                }
              ].map((modulo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100"
                >
                  <div className="bg-blue-900 text-white px-6 py-3 flex items-center">
                    {modulo.icon}
                    <h3 className="font-bold">{modulo.modulo}: {modulo.titulo}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {modulo.temas.map((tema, i) => (
                        <li key={i} className="flex items-start">
                          <FiBookOpen className="text-blue-700 mr-2 mt-1 flex-shrink-0" />
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

      {/* CTA Section con temática tecnológica */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="flex items-center justify-center gap-3">
              <FaLaptopCode />
              ¿Listo para transformar tu práctica legal con tecnología?
              <FaRobot />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Domina las herramientas digitales que están revolucionando el sistema judicial
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg shadow-xl flex items-center mx-auto gap-2">
              <FaLaptopCode />
              ¡Inscríbete Ahora!
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
