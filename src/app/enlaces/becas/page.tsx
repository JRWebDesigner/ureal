"use client"
import {motion} from 'framer-motion'
export default function PageBecas(){
return(
   <div className="bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Becas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            La Universidad Real cada semestre académico realiza una Convocatoria a Becas.
          </motion.p>
        </div>
      </section>
      {/* Becas */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-yellow-800 mb-8 text-center border-b-2 border-yellow-700 pb-4">
            Modalidades de Becas
          </h2>
          <p className="text-center text-gray-700 mb-10">
            La Universidad Real cada semestre académico realiza una Convocatoria a Becas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Beca Social */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Beca Social Solidaria y Necesidades Especiales</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                % Variable por semestre
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Nota original del Ministerio de Educación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia legalizada del Título de Bachiller</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Certificado de nacimiento, original</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia de la cédula de Identidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Tres fotografías fondo rojo 3x3</span>
                </li>
              </ul>
              <div className="text-sm text-yellow-700 italic">
                (Toda la documentación presentar en un file amarillo)
              </div>
            </motion.div>

            {/* Beca PAA */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">BECA PAA (Prueba de Aptitud Académica)</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                % Variable por semestre
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Boleta de registro al examen PAA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia legalizada del Título de Bachiller</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Certificado de nacimiento, original</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia de la cédula de Identidad</span>
                </li>
              </ul>
              <div className="text-sm text-yellow-700 italic">
                (Toda la documentación presentar en un file amarillo)
              </div>
            </motion.div>

            {/* Beca Convenio */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Beca por Convenio Institucional</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                % Variable por semestre
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Copia del Convenio, o nota de la empresa o institución (solo para estudiantes nuevos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia legalizada del Título de Bachiller</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Certificado de nacimiento, original</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia de la cédula de Identidad</span>
                </li>
              </ul>
              <div className="text-sm text-yellow-700 italic">
                (Toda la documentación presentar en un file amarillo)
              </div>
            </motion.div>

            {/* Beca Trabajo */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Beca Trabajo</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                % Variable por semestre
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Reporte de notas del último semestre cursado en la UREAL</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Requisitos de Renovación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center my-16"
        >
          <h3 className="text-2xl font-bold text-yellow-800 mb-6">Requisitos de Renovación de Beca</h3>
          <motion.a
            href="/requisitos-renovacion-beca.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-800 transition-colors"
          >
            Descargar Requisitos de Renovación
          </motion.a>
        </motion.div>
    </div>
    )
}
