"use client"
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiDollarSign, FiAward, FiUserCheck, FiBookOpen } from 'react-icons/fi'

export default function PageDerechoAdministrativo() {
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
            Diplomado en Derecho y Procedimiento Administrativo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formación especializada en normativa administrativa y procedimientos gubernamentales
          </motion.p>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-800"
            >
              <div className="flex items-center">
                <FiCalendar className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Inscripción hasta</p>
                  <p className="font-bold text-black">2022-04-25</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-800"
            >
              <div className="flex items-center">
                <FiClock className="text-black text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-black">8 Semanas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-800"
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
              className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-800"
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
                Programa académico diseñado para comprender los fundamentos del derecho administrativo y los procedimientos gubernamentales en el marco del Estado Plurinacional.
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
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-800">
              <p className="text-gray-700">
                Capacitar a los profesionales de las Ciencias Sociales en los conocimientos teóricos y prácticos del Derecho y Procedimiento Administrativo, así poner a disposición de la población en general, profesionales altamente calificados en respuesta a la creciente demanda de las mismas.
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
                  className="flex items-start bg-purple-50 p-4 rounded-lg"
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
                  titulo: "La Administración y la Ciencia de la Administración",
                  temas: [
                    "Ciencia de la Administración",
                    "Ciencia Administrativa y Derecho Administrativo",
                    "Elementos del Proceso Administrativo",
                    "Administración Pública",
                    "Administración Privada",
                    "Puntos de Contacto y Diferencias",
                    "Importancia de Ambas Administraciones",
                    "Administración y Derecho",
                    "Bases Constitucionales de la Administración Pública",
                    "Crisis de la Administración Pública"
                  ]
                },
                {
                  modulo: "Módulo 2",
                  titulo: "Administración Pública, Sociedad y Estado",
                  temas: [
                    "Fundamentación",
                    "Antecedentes Históricos Doctrinarios",
                    "Evolución del Estado",
                    "Principios del Estado Social de Derecho",
                    "Fundamentos de la Transformación",
                    "Aspectos Trascendentales en la Actualidad"
                  ]
                },
                {
                  modulo: "Módulo 3",
                  titulo: "La Constitución Política del Estado en el Marco del Derecho Administrativo",
                  temas: [
                    "Bases Fundamentales del Estado, Derechos, Deberes y Garantías",
                    "Derechos Civiles y Políticos",
                    "Garantías Jurisdiccionales y Acciones de Defensa",
                    "Órganos: Ejecutivo, Legislativo, Judicial y Electoral",
                    "Funciones de Control de Defensa de la Sociedad y de Defensa del Estado",
                    "Servidoras Públicas y Servidores Públicos",
                    "Participación y Control Social"
                  ]
                },
                {
                  modulo: "Módulo 4",
                  titulo: "Ley 1178 de Administración y Control Gubernamentales",
                  temas: [
                    "Antecedentes Históricos",
                    "Enfoque Sistémico de la Ley",
                    "Aspectos Generales de la Ley 1178",
                    "Sistema Nacional de Planificación e Inversión Pública",
                    "Sistema de Programación de Operaciones",
                    "Sistema de Organización Administrativa",
                    "Sistema de Presupuesto",
                    "Sistema de Administración de Personal",
                    "Sistema de Tesorería y Crédito Público",
                    "Sistema de Contabilidad Integrada",
                    "Sistema de Control Gubernamental"
                  ]
                },
                {
                  modulo: "Módulo 5",
                  titulo: "Sistema de Administración de Bienes y Servicios",
                  temas: [
                    "Introducción",
                    "Definición",
                    "Objetivos",
                    "Implantación del Sistema en las Entidades Públicas",
                    "Procesos de Contratación",
                    "Decreto Supremo Nº 0181",
                    "Decretos Supremos Complementarios (RUPE)",
                    "Resolución Ministerial 234 y Conexas sobre la Materia"
                  ]
                },
                {
                  modulo: "Módulo 6",
                  titulo: "Actos Administrativos y Servicios Públicos",
                  temas: [
                    "Noción de Acto y Hecho Jurídico",
                    "Clasificación, Elementos y Actos Motivados",
                    "Nulidad y Anulabilidad de los Actos Administrativos",
                    "Convalidación, Saneamiento y Rectificación",
                    "Recursos de Revocatoria y Jerárquico",
                    "Extinción del Acto Administrativo",
                    "Antecedentes y Definición de Servicios Públicos",
                    "Clasificación, Creación y Supresión",
                    "Caracteres y Condiciones",
                    "Monopolio, Dominio Público y Usuarios"
                  ]
                },
                {
                  modulo: "Módulo 7",
                  titulo: "Procesos, Procedimientos y Recursos Administrativos",
                  temas: [
                    "Sujetos del Proceso Administrativo",
                    "El Procedimiento Administrativo (Ley 2341)",
                    "Principios del Proceso Administrativo",
                    "El Proceso Contencioso Administrativo",
                    "El Procedimiento Sancionador",
                    "Recurso de Revocatoria y Jerárquico",
                    "Agotamiento de la Vía Administrativa"
                  ]
                },
                {
                  modulo: "Módulo 8",
                  titulo: "Responsabilidades ante el Estado y la Función Pública",
                  temas: [
                    "Responsabilidad moral y jurídica",
                    "Responsabilidad ante el estado y el Derecho Administrativo Sancionador",
                    "Responsabilidad por la función pública",
                    "Responsabilidad Ejecutiva",
                    "Responsabilidad Administrativa",
                    "Responsabilidad Civil",
                    "Responsabilidad Penal"
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
      <section className="py-20 bg-purple-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para dominar el Derecho Administrativo?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Inscríbete ahora y conviértete en un experto en procedimientos administrativos
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
