"use client"
import { motion } from 'framer-motion'

export default function PageComercioInternacional() {
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
      { codigo: "PSI101-2", nombre: "Psicología Organizacional" },
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
      { codigo: "FEP104-4", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "EDS101-4", nombre: "Ecología y Desarrollo Sostenible" },
      { codigo: "DER104-4", nombre: "Legislación Aduanera" },
      { codigo: "COI101-4", nombre: "Comunidad Intercultural" },
      { codigo: "ANI103-4", nombre: "Ambiente de Negocios Internacionales" },
      { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "DER105-5", nombre: "Comercio Exterior" },
      { codigo: "IDM104-5", nombre: "Investigación de Mercados I" },
      { codigo: "CON103-5", nombre: "Contabilidad Administrativa" },
      { codigo: "ADF105-5", nombre: "Administración Financiera" },
      { codigo: "CDA103-5", nombre: "Análisis de Decisiones" },
      { codigo: "ECO104-5", nombre: "Economía Política Internacional" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "ANI105-6", nombre: "Análisis de Mercados Internacionales" },
      { codigo: "CDA104-6", nombre: "Administración de Operaciones" },
      { codigo: "ECO103-6", nombre: "Organismos y Regulaciones Int." },
      { codigo: "ADF106-6", nombre: "Finanzas Internacionales" },
      { codigo: "ANI104-6", nombre: "Sistemas y Operaciones de Comercio Int." },
      { codigo: "DDE101-6", nombre: "Desarrollo de Emprendedores" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
      { codigo: "ANI106-7", nombre: "Análisis de Competitividad Internacional" },
      { codigo: "CDA105-7", nombre: "Logística Empresarial" },
      { codigo: "DER107-7", nombre: "Seminario de Derecho Comercial I y II" },
      { codigo: "DER106-7", nombre: "Merceología Aduanera" },
      { codigo: "ECO104-7", nombre: "Seminario Integrador de Comercio Int." },
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
      { codigo: "TDC107", nombre: "Técnicas de Consultoría" },
      { codigo: "PEE-101", nombre: "Política y Estrategia Empresarial" },
      { codigo: "MDS106", nombre: "Mercadotecnia de Servicios" }
    ]
  }
];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/comercio.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comercio Internacional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formamos profesionales capaces de gestionar el intercambio global de bienes y servicios
          </motion.p>
        </div>
      </section>

      {/* ¿Por qué estudiar? */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-cyan-800 mb-8 text-center border-b-2 border-cyan-600 pb-4">
            ¿Por qué estudiar Comercio Internacional?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                titulo: "Competencias Internacionales",
                desc: "Negociación internacional, manejo de aranceles y gestión de leyes transfronterizas"
              },
              {
                titulo: "Habilidades Prácticas",
                desc: "Gestión completa de procesos de importación/exportación y seguimiento de cargas"
              },
              {
                titulo: "Tecnologías de la Información",
                desc: "Uso de herramientas digitales para optimizar procesos comerciales globales"
              },
              {
                titulo: "Contribución al Desarrollo",
                desc: "Capacidad para impulsar la competitividad de empresas nacionales en mercados globales"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-cyan-500"
              >
                <h3 className="text-xl font-bold text-cyan-800 mb-3">{item.titulo}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-cyan-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-cyan-600 text-4xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-cyan-800 mb-4">Misión</h3>
              <p className="text-gray-700">
                Formar profesionales íntegros y emprendedores, comprometidos con el desarrollo económico-social del país, capacitándolos en gestión eficiente de transacciones internacionales de bienes y servicios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-cyan-600 text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-cyan-800 mb-4">Visión</h3>
              <p className="text-gray-700">
                Ser referente nacional en la formación de profesionales expertos en comercio internacional, reconocidos por impulsar el desarrollo económico mediante una gestión efectiva del intercambio global.
              </p>
            </motion.div>
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
          <h2 className="text-3xl font-bold text-cyan-800 mb-8 text-center">
            Perfil Profesional del Egresado
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                "Conocimiento integral de la realidad socioeconómica y jurídica internacional",
                "Dominio teórico especializado en comercio y relaciones internacionales",
                "Capacidad para diseñar estrategias de intercambio comercial global",
                "Habilidades para gestionar y dirigir empresas con proyección internacional",
                "Competencias para asesorar en procesos de internacionalización empresarial"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 hover:bg-cyan-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-cyan-600">•</div>
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
            className="text-3xl font-bold text-cyan-800 mb-8 text-center"
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
                <h3 className="text-xl font-bold text-cyan-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-cyan-400">
                      <span className="font-mono text-cyan-600">{materia.codigo}</span>
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para convertirte en un profesional global?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Únete a nuestra carrera y desarrolla las competencias que el mercado internacional demanda
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-cyan-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Postula Ahora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
