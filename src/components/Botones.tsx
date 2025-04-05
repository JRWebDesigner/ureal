"use client"
import { motion } from 'framer-motion';
import { 
  FaUserGraduate, 
  FaLaptop, 
  FaBook, 
  FaUsers, 
  FaCreditCard 
} from 'react-icons/fa';

export default function Botones() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 w-full max-w-6xl">
        {/* Botón Sistema Ureal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 20px rgba(22, 163, 74, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            href="http://sistema.ureal.edu.bo/"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-green-600 hover:bg-green-700 text-white shadow-lg cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <FaUserGraduate className="text-4xl md:text-5xl" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-4 border-white rounded-full opacity-0 hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-green-300 text-sm md:text-base font-medium tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sistema Ureal
          </motion.span>
        </motion.div>

        {/* Botón Campus Virtual */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 20px rgba(161, 98, 7, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://virtual.ureal.edu.bo/login/index.php"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <FaLaptop className="text-4xl md:text-5xl" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-4 border-white rounded-full opacity-0 hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-yellow-300 text-sm md:text-base font-medium tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Campus Virtual
          </motion.span>
        </motion.div>

        {/* Botón Biblioteca */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 20px rgba(29, 78, 216, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://ureal.edu.bo/landingbiblio.html"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-blue-600 hover:bg-blue-700 text-white shadow-lg cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <FaBook className="text-4xl md:text-5xl" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-4 border-white rounded-full opacity-0 hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-blue-300 text-sm md:text-base font-medium tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Biblioteca
          </motion.span>
        </motion.div>

        {/* Botón Microsoft Teams */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 20px rgba(220, 38, 38, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://teams.microsoft.com/v2/"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-red-600 hover:bg-red-700 text-white shadow-lg cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <FaUsers className="text-4xl md:text-5xl" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-4 border-white rounded-full opacity-0 hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-red-300 text-sm md:text-base font-medium tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Microsoft Teams
          </motion.span>
        </motion.div>

        {/* Botón Pago en línea */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 20px rgba(234, 88, 12, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://ureal.edu.bo/pregrado/formsPago/"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-orange-600 hover:bg-orange-700 text-white shadow-lg cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <FaCreditCard className="text-4xl md:text-5xl" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-4 border-white rounded-full opacity-0 hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-orange-300 text-sm md:text-base font-medium tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Pago en línea
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
