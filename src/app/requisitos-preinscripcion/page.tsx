'use client'
import FormularioInscripcion from '@/components/Formulario'
import { motion } from 'framer-motion'
import { FaArrowDown, FaFileAlt, FaBirthdayCake, FaIdCard, FaImages, FaFolder, FaPassport, FaSchool, FaGraduationCap, FaMoneyBillWave, FaBook } from 'react-icons/fa'

export default function RequisitosInscripcion() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            ¡POSTULA HOY!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Llena el formulario de interés y nos contactaremos contigo lo más pronto posible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="animate-bounce mt-12"
          >
            <FaArrowDown className="mx-auto text-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Carreras Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            CARRERAS DE LICENCIATURA Y TÉCNICO SUPERIOR <span className="text-red-600">¡POSTÚLATE YA!</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Una carrera de pregrado es aquella que conduce a la obtención del grado académico de licenciatura y de un título profesional.
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            CARRERAS DE PRE GRADO DISPONIBLES
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-lg"
          >
            En la Universidad Real de la Cámara Nacional de Comercio tenemos las siguientes carreras:
          </motion.p>

          {/* Carreras Accordion */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Licenciatura
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Administración de Empresas
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Contaduría Pública
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Marketing Digital
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <FaSchool className="mr-2" /> Técnico Superior
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span> Desarrollo de Software
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Gestión Financiera
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Logística Internacional
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requisitos Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            REQUISITOS DE INSCRIPCIÓN
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-lg max-w-3xl mx-auto"
          >
            La documentación solicitada tiene que ser presentada en un folder amarillo, debidamente asegurado.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nacional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaIdCard className="mr-2" /> NACIONAL
              </h3>
              <p className="mb-6">Si eres un estudiante boliviano, requieres los siguientes documentos:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaFileAlt className="mt-1 mr-3 flex-shrink-0" />
                  <span>Fotocopia legalizada del título de bachiller o provisionalmente fotocopia de la libreta de sexto de secundaria</span>
                </li>
                <li className="flex items-start">
                  <FaBirthdayCake className="mt-1 mr-3 flex-shrink-0" />
                  <span>Certificado de nacimiento original</span>
                </li>
                <li className="flex items-start">
                  <FaIdCard className="mt-1 mr-3 flex-shrink-0" />
                  <span>Fotocopia de tu cédula de identidad</span>
                </li>
                <li className="flex items-start">
                  <FaImages className="mt-1 mr-3 flex-shrink-0" />
                  <span>Tres fotografías 3x3 con fondo rojo</span>
                </li>
                <li className="flex items-start">
                  <FaFolder className="mt-1 mr-3 flex-shrink-0" />
                  <span>Presentar todos estos documentos en un folder amarillo</span>
                </li>
              </ul>
            </motion.div>

            {/* Extranjero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaPassport className="mr-2" /> EXTRANJERO
              </h3>
              <p className="mb-6">Si eres un estudiante extranjero, requieres los siguientes documentos:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaFileAlt className="mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p>Fotocopia legalizada del título de bachiller o documento equivalente legalizado por:</p>
                    <ul className="ml-5 mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Ministerio de Educación del país de origen
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Ministerio de Relaciones Exteriores del país de origen
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Consulado de Bolivia en el país de origen
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Ministerio de Relaciones Exteriores en Bolivia (Cancillería)
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaBirthdayCake className="mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p>Certificado de nacimiento original o fotocopia legalizada por:</p>
                    <ul className="ml-5 mt-2 space-y-1">
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Ministerio de Educación del país de origen
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Consulado de Bolivia en el país de origen
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span> Ministerio de Relaciones Exteriores en Bolivia (Cancillería)
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPassport className="mt-1 mr-3 flex-shrink-0" />
                  <span>Fotocopia del pasaporte con visa vigente, de estudiante o residencia legal en Bolivia</span>
                </li>
                <li className="flex items-start">
                  <FaImages className="mt-1 mr-3 flex-shrink-0" />
                  <span>Tres fotografías 3x3 con fondo rojo</span>
                </li>
                <li className="flex items-start">
                  <FaFolder className="mt-1 mr-3 flex-shrink-0" />
                  <span>Presentar todos los documentos en un folder amarillo tamaño oficio</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financiamiento Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <FaMoneyBillWave className="mr-3" /> Financiamiento
            </h3>
            <p className="mb-6">
              Contamos con los siguientes Planes de Pago para todas nuestras Carreras, tanto a nivel Licenciatura como Técnico Superior:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                <span><strong>Plan Regular:</strong> Bs. 140 mensuales por cada materia que curses.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                <span><strong>Plan Semestral:</strong> menos el 10% si pagas todo el semestre.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                <span><strong>Plan Contado:</strong> $us. 3000 por la totalidad de las mensualidades de tu carrera.</span>
              </li>
            </ul>
            
            <p className="font-semibold mb-6">En ningún caso cobramos Matrícula.</p>
            <p className="text-lg font-bold text-red-600">¡También tenemos opciones de beca para ti!</p>
          </motion.div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <FaBook className="mr-3" /> Modalidades de Estudio
            </h3>
            <p className="text-lg">
              Todas nuestras carreras son impartidas mediante el uso de una plataforma virtual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Formulario de Postulación
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-lg"
          >
            ¿Te interesa ser parte de una de nuestras carreras de Licenciatura o Técnico Superior?
            Regístrate en nuestro formulario de interés y nos contactaremos contigo lo antes posible.
          </motion.p>
          
          <FormularioInscripcion />
        </div>
      </section>
    </div>
  )
}