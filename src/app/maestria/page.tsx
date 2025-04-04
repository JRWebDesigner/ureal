"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function PageMaestria() {
  const diplomados = [
    {
      nombre: "Recursos Humanos y Salario Emocional",
      slug: "recursos-humanos-salario-emocional",
      descripcion: "Herramienta útil y necesaria para gestionar el capital humano en las organizaciones",
      imagen: "/Images/rrhh.jpg"
    },
    {
      nombre: "Gestión Tributaria, Legal y Aduanera",
      slug: "gestion-tributaria-legal-aduanera",
      descripcion: "Fortalecimiento de conocimientos para resolver problemas en gestión tributaria y aduanera",
      imagen: "/Images/tributaria.jpg"
    },
    {
      nombre: "Gestión de Procesos de Contratación del Estado",
      slug: "gestion-contratacion-estado",
      descripcion: "Administración eficiente de procesos de contratación gubernamentales con transparencia",
      imagen: "/Images/contratacion-estado.jpg"
    },
    {
      nombre: "Comercio Exterior y Despacho Aduanero",
      slug: "comercio-exterior-despacho-aduanero",
      descripcion: "Nueva visión para encarar relaciones comerciales internacionales",
      imagen: "/Images/comercio-exterior.jpg"
    },
    {
      nombre: "Derecho y Procedimiento Administrativo",
      slug: "derecho-procedimiento-administrativo",
      descripcion: "Metodología basada en la ciencia y el derecho moderno",
      imagen: "/Images/derecho-administrativo.jpg"
    },
    {
      nombre: "Analista de Marketing",
      slug: "analista-marketing",
      descripcion: "Desarrollo de análisis de estrategias y resultados de marketing",
      imagen: "/Images/marketing.jpg"
    },
    {
      nombre: "Educación Superior",
      slug: "educacion-superior",
      descripcion: "Análisis de tendencias y retos en el campo de la educación superior",
      imagen: "/Images/educacion-superior.jpg"
    },
    {
      nombre: "Derecho Empresarial y Societario",
      slug: "derecho-empresarial-societario",
      descripcion: "Aspectos legales relevantes para la gestión de empresas y sociedades",
      imagen: "/Images/derecho-empresarial.jpg"
    },
    {
      nombre: "Gestión Competitiva de Seguros y Riesgos",
      slug: "gestion-seguros-riesgos",
      descripcion: "Herramientas para administración eficiente de seguros y riesgos",
      imagen: "/Images/seguros.jpg"
    },
    {
      nombre: "Derecho Notarial",
      slug: "derecho-notarial",
      descripcion: "Conocimientos especializados en función notarial y seguridad jurídica",
      imagen: "/Images/notarial.jpg"
    },
    {
      nombre: "Derecho Procesal Electrónico Legaltech Judicial",
      slug: "derecho-procesal-electronico",
      descripcion: "Uso de tecnologías legales para mejorar la administración de justicia",
      imagen: "/Images/legaltech.jpg"
    },
    {
      nombre: "Arbitraje, Conciliación y Negociación",
      slug: "arbitraje-conciliacion-negociacion",
      descripcion: "Resolución alternativa y efectiva de conflictos",
      imagen: "/Images/arbitraje.jpg"
    },
    {
      nombre: "Diplomacia Comercial",
      slug: "diplomacia-comercial",
      descripcion: "Capacitación en manejo de controversias comerciales internacionales",
      imagen: "/Images/diplomacia.jpg"
    },
    {
      nombre: "Gestión Pública y Administrativa",
      slug: "gestion-publica-administrativa",
      descripcion: "Liderazgo y gestión eficaz de entidades gubernamentales",
      imagen: "/Images/gestion-publica.jpg"
    },
    {
      nombre: "Auditoría de Sistemas Informáticos Forenses",
      slug: "auditoria-sistemas-forenses",
      descripcion: "Herramientas informáticas y normas de seguridad en auditoría forense",
      imagen: "/Images/auditoria-forense.jpg"
    },
    {
      nombre: "Responsabilidad Social Empresarial",
      slug: "responsabilidad-social-empresarial",
      descripcion: "Estrategias e implementación de RSE en organizaciones",
      imagen: "/Images/rse.jpg"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Programas de Alta Especialización
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
             diseñados para la excelencia profesional
          </motion.p>
        </div>
      </section>

      {/* Programas Grid */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
            Nuestros 
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diplomados.map((diplomado, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-red-800"
              >
                <Link href={`/maestria/${diplomado.slug}`} passHref>
                  <div className="relative h-48 w-full">
                    <Image 
                      src={diplomado.imagen} 
                      alt={diplomado.nombre}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity opacity-90 hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white">{diplomado.nombre}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{diplomado.descripcion}</p>
                    <div className="flex items-center text-red-800 font-medium">
                      <span>Ver programa</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-yellow-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para especializarte?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Potencia tu carrera profesional con nuestros programas de alta especialización
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-red-800 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg shadow-xl">
              Solicita Información
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
