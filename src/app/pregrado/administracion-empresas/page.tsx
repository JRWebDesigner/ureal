"use client"
import { motion } from 'framer-motion'

export default function PageAdministracionEmpresas() {
  const semestres = [
    {
      nombre: "Primer Semestre",
      materias: [
        { codigo: "ADM100-1", nombre: "Introducción a la Administración" },
        { codigo: "MAT100-1", nombre: "Matemáticas Empresariales" },
        { codigo: "CON100-1", nombre: "Contabilidad Básica" },
        { codigo: "ECO100-1", nombre: "Principios de Economía" },
        { codigo: "DER100-1", nombre: "Derecho Empresarial" },
        { codigo: "MET100-1", nombre: "Metodología de la Investigación" },
        { codigo: "ENG100-1", nombre: "Inglés Comercial I" }
      ]
    },
    {
      nombre: "Segundo Semestre",
      materias: [
        { codigo: "ADM101-2", nombre: "Procesos Administrativos" },
        { codigo: "EST101-2", nombre: "Estadística Aplicada" },
        { codigo: "FIN101-2", nombre: "Finanzas Corporativas" },
        { codigo: "MER101-2", nombre: "Mercadotecnia" },
        { codigo: "REC101-2", nombre: "Gestión de Recursos Humanos" },
        { codigo: "TIC101-2", nombre: "Tecnologías de Información" },
        { codigo: "ENG101-2", nombre: "Inglés Comercial II" }
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
            Administración de Empresas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formamos líderes para los nuevos escenarios de la gestión empresarial global
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
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Formación en Gestión Empresarial</h2>
          <p className="text-gray-700 mb-6 text-lg">
            La carrera propone a los futuros profesionales la oportunidad de profundizar en los nuevos escenarios del sistema administrativo-gerencial en el contexto de la economía globalizada.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Enfoque Estratégico</h3>
              <p className="text-gray-700">
                Desarrollo de competencias para la planificación, dirección y control de organizaciones en entornos competitivos.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Visión Global</h3>
              <p className="text-gray-700">
                Preparación para enfrentar los desafíos de la internacionalización y gestión de negocios multiculturales.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mercado Profesional */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-800 mb-8 text-center"
          >
            Mercado Profesional
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "👔",
                title: "Gerente General",
                desc: "Planificación y control de políticas empresariales"
              },
              {
                icon: "📊",
                title: "Gestor de Proyectos",
                desc: "Formulación y evaluación de inversiones"
              },
              {
                icon: "🏢",
                title: "Director Administrativo",
                desc: "Coordinación de políticas organizacionales"
              },
              {
                icon: "👥",
                title: "Gerente RRHH",
                desc: "Gestión del talento humano organizacional"
              },
              {
                icon: "💰",
                title: "Consultor Financiero",
                desc: "Asesoría en gestión económica empresarial"
              },
              {
                icon: "🌐",
                title: "Gerente Comercial",
                desc: "Dirección de estrategias de mercado"
              },
              {
                icon: "📈",
                title: "Analista Empresarial",
                desc: "Diagnóstico y mejora organizacional"
              },
              {
                icon: "🚀",
                title: "Emprendedor",
                desc: "Creación y gestión de negocios propios"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
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
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                "Realiza diagnósticos estratégicos para formular planes de mejoramiento organizacional",
                "Evalúa proyectos empresariales determinando su viabilidad técnica y financiera",
                "Aplica métodos administrativos para valoración empresarial y toma de decisiones",
                "Domina principios, procesos y técnicas de administración en diversos contextos",
                "Analiza estructuras organizacionales y funciones empresariales",
                "Evalúa oportunidades de inversión y comportamiento de mercados",
                "Diseña estrategias para mejorar la competitividad organizacional",
                "Gestiona recursos humanos, financieros y tecnológicos con eficiencia"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">•</div>
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
            className="text-3xl font-bold text-blue-800 mb-8 text-center"
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
                <h3 className="text-xl font-bold text-blue-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-blue-400">
                      <span className="font-mono text-blue-600">{materia.codigo}</span>
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
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Conviértete en un líder empresarial
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Desarrolla las competencias para gestionar organizaciones en la era global
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-blue-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Inicia tu Proceso de Admisión
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
