"use client"
import { motion } from 'framer-motion'

export default function PageAdminFinanciera() {
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
        { codigo: "PSI101-2", nombre: "Psicologia Organizacional" },
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
      { codigo: "DER102-4", nombre: "Derecho del trabajo" },
      { codigo: "DRE101-4", nombre: "Desarrollo de Emprendedores" },
      { codigo: "ECO102-4", nombre: "Economía Financiera" },
      { codigo: "INF103-4", nombre: "Instituciones financieras" },
      { codigo: "CON103-4", nombre: "Contabilidad Administrativa" },
      { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
      ]
    },
    {
      nombre: "Quinto Semestre",
      materias: [
        { codigo: "ADF105-5", nombre: "Administración Financiera" },
        { codigo: "IFN104-5", nombre: "Administración Bancaria" },
        { codigo: "MVA104-5", nombre: "Mercado de Valores" },
        { codigo: "AIF104-5", nombre: "Análisis e Interpretación de Estados Financieros" },
        { codigo: "EFC105-5", nombre: "Estructura Financiera del Capital" },
        { codigo: "ANI103-5", nombre: "Ambiente de Negocios Internacionales" },
        { codigo: "ENG104-5", nombre: "Inglés V" }
      ]
    },
    {
      nombre: "Sexto Semestre",
      materias: [
        { codigo: "MVA105-6", nombre: "Administración de Inversiones" },
        { codigo: "AIF105-6", nombre: "Análisis Financiero Cuantitativo" },
        { codigo: "IFN105-6", nombre: "Administración del Crédito" },
        { codigo: "DER103-6", nombre: "Derecho Financiero y Tributario" }, 
        { codigo: "FEP104-6", nombre: "Formulación y Evaluación de Proyectos" },
        { codigo: "ADF106-6", nombre: "Finanzas Internacionales" }, 
        { codigo: "ENG105-6", nombre: "Inglés VI" }
      ]
    },
    {
  nombre: "Séptimo Semestre",
  materias: [
    { codigo: "TNC107-7", nombre: "Técnicas de Consultoría" },     { codigo: "MVA106-7", nombre: "Inversión Extranjera" }, 
    { codigo: "INF107-7", nombre: "Ingeniería Financiera" }, 
    { codigo: "ADF107-7", nombre: "Seminario de Finanzas" },
    { codigo: "GPU107-7", nombre: "Gestión Pública" }, 
    { codigo: "VEP107-7", nombre: "Valor en el Ejercicio Profesional" }, 
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
    { codigo: "INA100", nombre: "Idioma Nativo Aymara" },
    { codigo: "IDM104", nombre: "Investigación de Mercados I" },
    { codigo: "IDM105", nombre: "Investigación de Mercados II" },    { codigo: "PEE101", nombre: "Política y Estrategia Empresarial" } 
  ]
}
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/financiera.jpg')] bg-opacity-50 bg-cover bg-fixed  text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Administración Financiera
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formamos profesionales competitivos internacionalmente en el campo de las finanzas empresariales e institucionales.
          </motion.p>
        </div>
      </section>

      {/* Descripción de la Carrera */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">Descripción de la Carrera</h2>
          <p className="text-gray-700 mb-8 text-lg">
            La carrera de Administración Financiera tiene como objetivo formar profesionales competitivos a nivel internacional que puedan contribuir al desarrollo de empresas, instituciones y corporaciones en el campo de las finanzas, dentro del contexto global de la administración de empresas.
          </p>
          <p className="text-gray-700 text-lg">
            El mercado laboral necesita administradores con sólida especialización en finanzas empresariales, institucionales, corporativas o estatales, sin perder de vista el funcionamiento global de la organización.
          </p>
        </div>
      </motion.section>

      {/* Mercado Profesional */}
      <section className="py-12 bg-orange-100">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titulo: "Gerente General",
                desc: "Planifica, direcciona, coordina y controla las políticas de las empresas."
              },
              {
                titulo: "Gestor de proyectos",
                desc: "Formula, evalúa y gestiona proyectos de inversión."
              },
              {
                titulo: "Director Financiero",
                desc: "Diseña portafolios de inversión y aplica modelos financieros."
              },
              {
                titulo: "Tesorero",
                desc: "Planifica ingresos/egresos y propone inversión o financiamiento."
              },
              {
                titulo: "Director de crédito",
                desc: "Establece políticas de crédito y estrategias de optimización."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600"
              >
                <h3 className="text-xl font-bold text-orange-800 mb-3">{item.titulo}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfil Profesional */}
      <section className="py-12 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <ul className="divide-y divide-gray-200">
              {[
                "Realiza diagnósticos estratégicos para formular planes de mejoramiento",
                "Evalúa financieramente proyectos de inversión para determinar viabilidad",
                "Determina el valor de empresas usando métodos financieros",
                "Diseña portafolios de inversiones en el mercado bursátil",
                "Aplica modelos financieros para la toma de decisiones"
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
      <section className="py-12 bg-gray-100">
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

          {/* Acordeón para semestres (opcional) */}
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

      {/* CTA */}
      <section className="py-16 bg-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para transformar tu futuro financiero?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-orange-800 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors">
              Solicita Información
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
