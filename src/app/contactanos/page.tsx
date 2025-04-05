'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type AreaType = 'pregrado' | 'postgrado' | '';
type CareerType = string;

interface CareersData {
  pregrado: CareerType[];
  postgrado: CareerType[];
}

export default function ContactPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [selectedArea, setSelectedArea] = useState<AreaType>('');
  const [selectedCareer, setSelectedCareer] = useState<CareerType>('');

  // Datos de carreras por área
  const careersData: CareersData = {
    pregrado: [
      'Ingeniería de Software',
      'Diseño Gráfico',
      'Administración de Empresas',
      'Psicología',
      'Medicina',
      'Derecho',
      'Arquitectura',
      'Contabilidad',
      'Marketing Digital',
      'Comunicación Social'
    ],
    postgrado: [
      'Maestría en Inteligencia Artificial',
      'Maestría en Finanzas',
      'Doctorado en Educación',
      'Especialización en Derecho Penal',
      'Maestría en Salud Pública',
      'Doctorado en Psicología Clínica',
      'Especialización en Marketing Digital',
      'Maestría en Data Science',
      'Doctorado en Ingeniería de Sistemas',
      'Especialización en Gestión Hospitalaria',
      'Maestría en Diseño UX/UI',
      'Doctorado en Economía',
      'Especialización en Comunicación Corporativa',
      'Maestría en Energías Renovables',
      'Doctorado en Arquitectura Sostenible'
    ]
  };

  // Añade esta constante faltante
  const hoverEffect = {
    scale: 1.03,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value as AreaType);
    setSelectedCareer('');
  };

  const handleCareerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCareer(e.target.value);
  };

  const tapEffect = {
    scale: 0.98
  };

  return (
    <motion.div 
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 mt-26"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ... (resto del código permanece igual hasta la sección de carrera) ... */}

      {/* Corrección en el select de carrera */}
      {selectedArea && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={hoverEffect} 
          whileTap={tapEffect}
        >
          <label htmlFor="career" className="block text-sm font-medium text-gray-300 mb-1">
            Selecciona una carrera
          </label>
          <select
            id="career"
            name="career"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-white focus:outline-none transition-all"
            value={selectedCareer}
            onChange={handleCareerChange}
          >
            <option value="">Selecciona una carrera</option>
            {careersData[selectedArea].map((career: string) => (
              <option key={career} value={career}>
                {career}
              </option>
            ))}
          </select>
        </motion.div>
      )}

      {/* ... (resto del código permanece igual) ... */}
    </motion.div>
  );
}
