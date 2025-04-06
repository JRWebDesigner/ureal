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
    <div className="flex flex-col items-center justify-center px-4 py-8">
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
              boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            href="http://sistema.ureal.edu.bo/"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-red-900 hover:bg-red-800 text-white shadow-lg cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FaUserGraduate className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-2 border-emerald-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-black text-sm md:text-base font-medium tracking-wider"
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
              boxShadow: "0 0 20px rgba(250, 204, 21, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://virtual.ureal.edu.bo/login/index.php"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-red-900 hover:bg-red-800 text-white shadow-lg cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FaLaptop className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-2 border-amber-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-sm md:text-base font-medium tracking-wider"
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
              boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://ureal.edu.bo/landingbiblio.html"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-red-900 hover:bg-red-800 text-white shadow-lg cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FaBook className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-2 border-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-sm md:text-base font-medium tracking-wider"
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
              boxShadow: "0 0 20px rgba(248, 113, 113, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://teams.microsoft.com/v2/"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-red-900 hover:bg-red-800 text-white shadow-lg cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FaUsers className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-2 border-rose-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-sm md:text-base font-medium tracking-wider"
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
              boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="https://ureal.edu.bo/pregrado/formsPago/"
            target="_blank"
            className="flex items-center justify-center rounded-full w-24 h-24 md:w-32 md:h-32 bg-red-900 hover:bg-red-800 text-white shadow-lg cursor-pointer relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FaCreditCard className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110" />
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              className="absolute inset-0 border-2 border-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </motion.a>
          <motion.span 
            className="mt-4 text-sm md:text-base font-medium tracking-wider"
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
