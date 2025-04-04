"use client"
import { motion } from 'framer-motion'

export default function PageIngenieriaSistemas() {
  const semestres = [
  {
    nombre: "Primer Semestre",
    materias: [
      { codigo: "MAT100-1", nombre: "Matemáticas I" },
      { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
      { codigo: "PRG100-1", nombre: "Introducción a la Informática" },
      { codigo: "ADM100-1", nombre: "Administración" },
      { codigo: "CON100-1", nombre: "Contabilidad Básica" },
      { codigo: "ECO100-1", nombre: "Principios de Microeconomía" },
      { codigo: "ENG100-1", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "PRG101-2", nombre: "Computación para Ingeniería" },
      { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
      { codigo: "MAT101-2", nombre: "Matemáticas II" },
      { codigo: "FIN101-2", nombre: "Finanzas I" },
      { codigo: "RED102-2", nombre: "Organización Computacional" },
      { codigo: "CDA101-2", nombre: "Estadística Administrativa" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "DDE101-3", nombre: "Desarrollo de Emprendedores" },
      { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
      { codigo: "FIN102-3", nombre: "Finanzas II" },
      { codigo: "COM101-3", nombre: "Computación para la Administración" },
      { codigo: "PRG102-3", nombre: "Sistemas de Programación" },
      { codigo: "RED103-3", nombre: "Redes de Comunicación" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "SIS101-4", nombre: "Introducción a los Sistemas de Información" },
      { codigo: "SIS102-4", nombre: "Base de Datos" },
      { codigo: "PRG103-4", nombre: "Lenguajes de Programación" },
      { codigo: "MER101-4", nombre: "Mercadotecnia" },
      { codigo: "PRG104-4", nombre: "Estructura de Datos" },
      { codigo: "MET100-4", nombre: "Métodos y Técnicas de Investigación" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "DER105-5", nombre: "Administración Estratégica de Datos" },
      { codigo: "SIS103-5", nombre: "Desarrollo de Sistemas de Información" },
      { codigo: "SIS104-5", nombre: "Redes de Información en los Negocios" },
      { codigo: "CON103-5", nombre: "Contabilidad Administrativa" },
      { codigo: "CDA102-5", nombre: "Técnicas Cuantitativas para la Toma de Decisiones" },
      { codigo: "FEP104-5", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "RED105-6", nombre: "Aplicación de Sistemas Operativos Abiertos" },
      { codigo: "SIS105-6", nombre: "Administración y Factibilidad de Proyectos de Informática" },
      { codigo: "SIS106-6", nombre: "Administración de Informática en Organizaciones" },
      { codigo: "SIS107-6", nombre: "Sistemas Información para la Competitividad" },
      { codigo: "ING104-6", nombre: "Teoría General de Sistemas" },
      { codigo: "ING105-6", nombre: "Modelación de Sistemas" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "SIS108-7", nombre: "Sistemas Información para la Innovación" },
      { codigo: "ING106-7", nombre: "Sistemas para Toma de Decisiones y Sis. Expertos" },
      { codigo: "RED106-7", nombre: "Actualización Tecnológica en Informática" },
      { codigo: "ING107-7", nombre: "Auditoría y Consultoría en Sistemas Información" },
      { codigo: "ING109-7", nombre: "Ingeniería de Software" },
      { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
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
      { codigo: "INQ100", nombre: "Idioma Nativo Quechua" }
    ]
  }
];
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/sistemas-computacion.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ingeniería de Sistemas y Computación Administrativas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Integrando tecnología y gestión para la transformación digital empresarial
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
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Formación Dual en Tecnología y Gestión</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Formamos profesionales con sólidos conocimientos en ciencias de la computación y administración de empresas, capaces de implementar soluciones tecnológicas que incrementen la competitividad, productividad y eficiencia organizacional.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Enfoque Tecnológico</h3>
              <p className="text-gray-700">
                Dominio de sistemas de información, redes computacionales, programación avanzada y tecnologías emergentes para la transformación digital.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Enfoque Administrativo</h3>
              <p className="text-gray-700">
                Capacitación en gestión empresarial, procesos administrativos y toma de decisiones estratégicas apoyadas en tecnología.
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "💼",
                title: "Empresas Industriales",
                desc: "Áreas de administración de sistemas e informática"
              },
              {
                icon: "🔍",
                title: "Consultorías Tecnológicas",
                desc: "Asesoría en planeación estratégica informática"
              },
              {
                icon: "🏛️",
                title: "Sector Público",
                desc: "Niveles directivos en entidades gubernamentales"
              },
              {
                icon: "💻",
                title: "Empresas de Tecnología",
                desc: "Nacionales e internacionales del sector computación"
              },
              {
                icon: "🚀",
                title: "Emprendimiento",
                desc: "Creación de negocios tecnológicos propios"
              },
              {
                icon: "🌐",
                title: "Gestión de TI",
                desc: "Administración de departamentos de tecnología"
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
                "Dirige, planea y evalúa sistemas de información para la toma de decisiones estratégicas",
                "Implementa tecnología de punta para elevar la competitividad organizacional",
                "Administra redes de información intra e inter organizacionales",
                "Rediseña procesos administrativos críticos mediante soluciones innovadoras",
                "Realiza planeación estratégica de sistemas de información y reingeniería de procesos",
                "Implanta tecnologías emergentes como multimedia y realidad virtual en entornos empresariales",
                "Gestiona proyectos tecnológicos alineados a objetivos organizacionales"
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
            Conviértete en un líder de la transformación digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Domina la intersección entre tecnología y gestión empresarial
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
