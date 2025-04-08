"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PageAdministracionEmpresas() {
  const [semestreSeleccionado, setSemestreSeleccionado] = useState(0)
  
  const semestres = [
    {
      nombre: "Primer Semestre",
      materias: [
        { codigo: "MAT100-1", nombre: "Matemáticas I" },
        { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
        { codigo: "MET100-1", nombre: "Metodos y Tecnicas de Estudio" },
        { codigo: "ADM100-1", nombre: "Administracion" },
        { codigo: "CON100-1", nombre: "Contabilidad Basica" },
        { codigo: "ECO100-1", nombre: "Principios de Microeconomia" },
        { codigo: "ENG100-1", nombre: "Inglés I" }
      ]
    },
    {
      nombre: "Segundo Semestre",
      materias: [
        { codigo: "DER101-2", nombre: "Derecho Comercial y Administrativo" },
        { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
        { codigo: "MAT101-2", nombre: "Matemáticas II" },
        { codigo: "ADM101-2", nombre: "Adminitración II" },
        { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
        { codigo: "PSI101-2", nombre: "Psicologia Organizacional" },
        { codigo: "ENG101-2", nombre: "Inglés II" }
      ]
    },
    {
      nombre: "Tercer Semestre",
      materias: [
        { codigo: "COM101-3", nombre: "Computacion para la Administracion" },
        { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
        { codigo: "FIN101-3", nombre: "Finanzas I" },
        { codigo: "GES100-3", nombre: "Gestion de Proyectos" },
        { codigo: "CDA101-3", nombre: "Estadistica Adminitrativa" },
        { codigo: "DRE101-3", nombre: "Desarrollo de Emprendedores" },
        { codigo: "ENG102-3", nombre: "Inglés III" }
      ]
    },
    {
      nombre: "Cuarto Semestre",
      materias: [
        { codigo: "RHH101-4", nombre: "Recursos Humanos" },
        { codigo: "FIN102-4", nombre: "Finanzas II" },
        { codigo: "PSI102-4", nombre: "Desarrollo Organizacional" },
        { codigo: "LI100-4", nombre: "Liderazgo Empresarial" },
        { codigo: "MER101-4", nombre: "Mercadotecnia I" },
        { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
        { codigo: "ENG103-4", nombre: "Inglés IV" }
      ]
    },
    {
      nombre: "Quinto Semestre",
      materias: [
        { codigo: "LI102-5", nombre: "Innovación Empresarial" },
        { codigo: "CDA103-5", nombre: "Análisis de Decisiones I" },
        { codigo: "ADC103-5", nombre: "Análisis del Consumidor" },
        { codigo: "PSI103-5", nombre: "Administración de la Producción" },
        { codigo: "ADF103-5", nombre: "Administración Financiera" },
        { codigo: "LI103-5", nombre: "Pensamiento Estratégicos" },
        { codigo: "ENG104-5", nombre: "Inglés V" }
      ]
    },
    {
      nombre: "Sexto Semestre",
      materias: [
        { codigo: "ORO100-6", nombre: "Dirección Estratégica I" },
        { codigo: "CDA104-6", nombre: "Análisis de Decisiones II" },
        { codigo: "DER102-6", nombre: "Derecho de Trabajo" },
        { codigo: "IDM104-6", nombre: "Investigacion de Mercados I" },
        { codigo: "RHH102-6", nombre: "Gest. Estratégica de RRHH" },
        { codigo: "CON104-6", nombre: "Presupuestos" },
        { codigo: "ENG105-6", nombre: "Inglés VI" }
      ]
    },
    {
      nombre: "Séptimo Semestre",
      materias: [
        { codigo: "ORO101-7", nombre: "Dirección Estratégica II" },
        { codigo: "FEP104-7", nombre: "Formulacion y Evaluacion de Proyectos" },
        { codigo: "PSI104-7", nombre: "Gerencia de Calidad" },
        { codigo: "AIF104-7", nombre: "Análisis e Interpretación de Estados Financieros" },
        { codigo: "GPU107-7", nombre: "Gestión Pública" },
        { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
        { codigo: "SDG107-7", nombre: "Seminario de Grado I" }
      ]
    },
    {
      nombre: "Octavo Semestre",
      materias: [
        { codigo: "SDG108-8", nombre: "Seminario de Grado II" },
        { codigo: "PRE108-8", nombre: "Practica Empresarial" }
      ]
    },
    {
      nombre: "Materias Complementarias",
      materias: [
        { codigo: "INA100", nombre: "Idioma Nativo (Aymara o Quechua)" },
        { codigo: "IDM105", nombre: "Investigación de Mercados II" },
        { codigo: "PEE101", nombre: "Politica y Estrategia Empresarial" },
        { codigo: "ECO102-4", nombre: "Economía Financiera" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/administracion.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
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
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Selector de Semestres */}
            <div className="flex overflow-x-auto px-4 py-2 bg-blue-50">
              {semestres.map((semestre, index) => (
                <button
                  key={index}
                  onClick={() => setSemestreSeleccionado(index)}
                  className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap transition-colors ${
                    semestreSeleccionado === index
                      ? 'bg-blue-600 text-white font-medium'
                      : 'bg-white text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  {semestre.nombre.split(' ')[0]} {semestre.nombre.split(' ')[1]}
                </button>
              ))}
            </div>
            
            {/* Contenido del Semestre Seleccionado */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {semestres[semestreSeleccionado].nombre}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {semestres[semestreSeleccionado].materias.map((materia, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <span className="font-mono text-sm text-blue-600">{materia.codigo}</span>
                    <p className="text-gray-800 font-medium">{materia.nombre}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
