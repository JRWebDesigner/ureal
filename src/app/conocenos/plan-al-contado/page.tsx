"use client"
import { motion } from 'framer-motion';

export default function PagePlanAlContado() {
  return (
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
            Plan al contado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Modalidades de pago y beneficios especiales
          </motion.p>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        {/* Opciones de Pago */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-red-950 mb-8 text-center border-b-2 border-red-800 pb-4">
            Modalidades de Pago
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Opción A */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-600"
            >
              <div className="bg-red-900 text-white px-4 py-2 rounded-t-lg -mt-8 -mx-8 mb-6">
                <h3 className="text-xl font-bold">Opción A</h3>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-yellow-800">TOTAL Bs14,900</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>UN SOLO PAGO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Mensualidad = 0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Matrícula semestral = 0 (Durante toda la carrera)</span>
                </li>
              </ul>
            </motion.div>

            {/* Opción B */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-600"
            >
              <div className="bg-red-900 text-white px-4 py-2 rounded-t-lg -mt-8 -mx-8 mb-6">
                <h3 className="text-xl font-bold">Opción B</h3>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-yellow-800">TOTAL Bs14,900</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>DOS PAGOS DE Bs7,450 c/u</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Mensualidad = 0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Matrícula semestral = 0 (Durante toda la carrera)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Descuentos */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center border-b-2 border-green-700 pb-4">
            Descuentos Especiales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Descuento CNC */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Personal CNC y familiares</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                20% Por la carrera
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Carta CNC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia boleta de pago</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Certificado de Nacimiento, Original y fotocopia</span>
                </li>
              </ul>
            </motion.div>

            {/* Empresas afiliadas */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Empresas afiliadas a la CNC</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                20% Por la carrera
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Carta CNC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Fotocopia de carnet de afiliación</span>
                </li>
              </ul>
            </motion.div>

            {/* Descuento por semestre */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Descuento por pago anticipado</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                10% Por semestre
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Pago al contado por semestre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Pago antes del vencimiento de la primera cuota</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>No contar con otro tipo de descuento</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Becas */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center border-b-2 border-blue-700 pb-4">
            Modalidades de Becas
          </h2>
          <p className="text-center text-gray-700 mb-10">
            La Universidad Real de la Cámara Nacional de Comercio cada semestre académico realiza una Convocatoria a Becas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Beca Social */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-black mb-4">Beca Social Solidaria y Necesidades Especiales</h3>
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
              <div className="text-sm text-blue-700 italic">
                (Toda la documentación presentar en un folder amarillo)
              </div>
            </motion.div>

            {/* Beca PAA */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-black mb-4">BECA PAA (Prueba de Aptitud Académica)</h3>
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
              <div className="text-sm text-blue-700 italic">
                (Toda la documentación presentar en un folder amarillo)
              </div>
            </motion.div>

            {/* Beca Convenio */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-black mb-4">Beca por Convenio Institucional</h3>
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
              <div className="text-sm text-blue-700 italic">
                (Toda la documentación presentar en un folder amarillo)
              </div>
            </motion.div>

            {/* Beca Trabajo */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-black mb-4">Beca Trabajo</h3>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block mb-3 font-bold">
                % Variable por semestre
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
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
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-yellow-800 mb-6">Requisitos de Renovación de Beca</h3>
          <motion.a
            href="https://drive.google.com/file/d/1fL_Vw8LzcpQgUez8E6lrtJ5q8aGeIaVl/view?usp=sharing"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-800 transition-colors"
          >
            Descargar Requisitos de Renovación
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
