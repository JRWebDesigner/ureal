"use client"
import {motion} from "framer-motion"

export default function PageDescuentos(){
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
            Descuentos 
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

            <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        
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

      </div>
</div>

  )
}
