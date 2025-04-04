"use client"
import { motion } from 'framer-motion';

export default function PageMisionVision() {
  return (
    <div className="bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Somos tu Universidad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold"
          >
            Universidad Real de la Cámara Nacional de Comercio
          </motion.p>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Identidad Institucional */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
            IDENTIDAD INSTITUCIONAL
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-700"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                <span className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">M</span>
                MISIÓN
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Somos una comunidad académica cuya MISIÓN es formar profesionales emprendedores, altamente competitivos y solidarios, promoviendo líderes con capacidad de analizar, comprender y transformar la realidad de sus entornos, para que, a través de la investigación continua, de la ciencia y de la tecnología adquieran conocimiento y desarrollen capacidades y valores que les permitan enfrentar con disciplina, creatividad y eficiencia los desafíos del siglo XXI.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-700"
            >
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                <span className="bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">V</span>
                VISIÓN
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Somos una institución educativa líder a nivel nacional, que utiliza intensivamente la tecnología como apoyo a la educación. Formamos parte de redes académicas constructoras de la sociedad del conocimiento a nivel internacional, y estamos comprometidos con el desarrollo humano, científico, tecnológico y cultural al servicio de la sociedad.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Galería o imágenes adicionales */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img 
                  src={`/Images/mision-vision-${item}.jpg`} 
                  alt={`Misión y Visión ${item}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-6">¿Listo para ser parte de nuestra comunidad?</h3>
          <motion.a
            href="/admisiones"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors"
          >
            Más información
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
