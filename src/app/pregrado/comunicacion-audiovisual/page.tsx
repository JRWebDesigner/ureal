"use client"
import { motion } from 'framer-motion'

export default function PageComunicacionAudiovisual() {
  const semestres = [
  {
    nombre: "Primer Semestre",
    materias: [
      { codigo: "SOC100-1", nombre: "Introducción a la Sociología" },
      { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
      { codigo: "MET100-1", nombre: "Métodos y Técnicas de Estudio" },
      { codigo: "ED100-1", nombre: "Edición I" },
      { codigo: "PSI100-1", nombre: "Psicología de la comunicación" },
      { codigo: "COM100-1", nombre: "Introducción a la comunicación" },
      { codigo: "ENG100-1", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "COI101-2", nombre: "Comunicación intercultural" },
      { codigo: "COM101-2", nombre: "Teorías de la comunicación" },
      { codigo: "LEI101-2", nombre: "Lenguaje de la imagen I" },
      { codigo: "EST101-2", nombre: "Estadística social" },
      { codigo: "CON101-2", nombre: "Lenguaje y Comunicación, semiología y semántica" },
      { codigo: "SON101-2", nombre: "Instalación y operación de equipos audiovisuales" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "SON102-3", nombre: "Teoría del sonido" },
      { codigo: "FOT103-3", nombre: "Fotografía" },
      { codigo: "RAD102-3", nombre: "Radiotécnicas I" },
      { codigo: "LEI102-3", nombre: "Lenguaje de la imagen II" },
      { codigo: "LEN102-3", nombre: "Redacción periodística" },
      { codigo: "COR102-3", nombre: "Comunicación organizacional" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "ED101-4", nombre: "Edición II" },
      { codigo: "LEG103-4", nombre: "Legislación en comunicación" },
      { codigo: "CI103-4", nombre: "Lenguaje cinematográfico" },
      { codigo: "TEV103-4", nombre: "Tv y video I" },
      { codigo: "LEN103-4", nombre: "Técnicas de periodismo especializado" },
      { codigo: "SON103-4", nombre: "Operación técnica del sonido" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "CI104-5", nombre: "Producción cinematográfica" },
      { codigo: "RAD104-5", nombre: "Radiotécnicas II" },
      { codigo: "TEV104-5", nombre: "Tv y video II" },
      { codigo: "ED102-5", nombre: "Edición III" },
      { codigo: "GMA104-5", nombre: "Guión para medios audiovisuales" },
      { codigo: "TEC104-5", nombre: "Teoría del color" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "CI105-6", nombre: "Crítica cinematográfica" },
      { codigo: "COP105-6", nombre: "Comunicación publicitaria" },
      { codigo: "DIB105-6", nombre: "Dibujo, tratamiento y animación 2D" },
      { codigo: "PRO105-6", nombre: "Producción de multimedias" },
      { codigo: "TEV105-6", nombre: "Tv y video III" },
      { codigo: "CAR101-6", nombre: "Comunicación y arte" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "TEV106-7", nombre: "Producción televisiva" },
      { codigo: "TEV107-7", nombre: "Prácticas de realización de programas" },
      { codigo: "VEP107-7", nombre: "Valores en el ejercicio profesional" },
      { codigo: "COP106-7", nombre: "Diseño de campañas persuasivas" },
      { codigo: "DIB106-7", nombre: "Dibujo, tratamiento y animación 3D" },
      { codigo: "LOC106-7", nombre: "Locución para medios audiovisuales" },
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
      { codigo: "PUB107-6", nombre: "Publicidad I" },
      { codigo: "DDE101-6", nombre: "Desarrollo de emprendedores" },
      { codigo: "INA100", nombre: "Idioma Nativo Aymara (originario)" },
      { codigo: "INQ100", nombre: "Idioma Nativo Quechua (originario)" }
    ]
  }
];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[url('/Images/audiovisual.jpg')] bg-opacity-50 bg-cover bg-fixed text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comunicación Audiovisual
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Formamos creadores de contenidos para los medios del siglo XXI
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
        <div className="max-w-5xl mx-auto p-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Formación Integral en Medios</h2>
          <p className="text-gray-700 mb-6 text-lg">
            La Carrera de Comunicación Audiovisual forma profesionales altamente competitivos que pueden contribuir al proceso de la comunicación global y al desarrollo del sector, con capacidad para generar nuevos proyectos mediante empresas especializadas.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Enfoque Tecnológico</h3>
              <p className="text-gray-700">
                Dominio de herramientas digitales, diseño gráfico, producción audiovisual y nuevas plataformas de comunicación.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Identidad Cultural</h3>
              <p className="text-gray-700">
                Formación en valores culturales, espíritu emprendedor y responsabilidad social en la creación de contenidos.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mercado Profesional */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-800 mb-8 text-center"
          >
            Mercado Profesional
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "📺",
                title: "Canales de Televisión",
                desc: "Producción, dirección y postproducción de contenidos televisivos"
              },
              {
                icon: "🎬",
                title: "Productoras Audiovisuales",
                desc: "Creación de videos corporativos, documentales y contenido multimedia"
              },
              {
                icon: "🎙️",
                title: "Emisoras de Radio",
                desc: "Producción y conducción de programas radiales"
              },
              {
                icon: "📢",
                title: "Agencias de Publicidad",
                desc: "Desarrollo de campañas y estrategias comunicacionales"
              },
              {
                icon: "💻",
                title: "Medios Digitales",
                desc: "Creación de contenidos para plataformas web y redes sociales"
              },
              {
                icon: "🏛️",
                title: "Sector Público",
                desc: "Gabinetes de prensa y comunicación institucional"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
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
          <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Perfil Profesional</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-gray-100 rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              {[
                "Capacidad para gestionar recursos humanos y tecnológicos en producciones audiovisuales",
                "Manejo avanzado de nuevas tecnologías de comunicación y producción digital",
                "Habilidad para interpretar necesidades sociales y traducirlas a lenguaje audiovisual",
                "Competencia en desarrollo de productos desde la creación hasta postproducción",
                "Visión estratégica para aplicar mensajes audiovisuales en contextos organizacionales"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 h-6 w-6 text-purple-600 mr-3 mt-1">•</div>
                  <span className="text-gray-800">{item}</span>
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
            className="text-3xl font-bold text-purple-800 mb-8 text-center"
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
                <h3 className="text-xl font-bold text-purple-800 mb-4">{semestre.nombre}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {semestre.materias.map((materia, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-2 border-purple-400">
                      <span className="font-mono text-purple-600">{materia.codigo}</span>
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
      <section className="py-20 bg-gradient-to-r from-purple-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Conviértete en creador de contenidos audiovisuales
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-purple-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Inicia tu Inscripción
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
