"use client"
import {motion} from "framer-motion"

export default function Bienvenida(){
  return(
    <section className=' my-16 flex justify-center items-center flex-col md:flex-row gap-7'>
        <motion.div initial={{opacity: 0, x:-60}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5}} viewport={{once: true}} className="w-[100%] md:w-[46%]">
         <h2 className='text-red-950 text-2xl md:text-3xl font-semibold text-center'>Bienvenidos a la Universidad Real de Cámara de Comercio</h2>
         <p className="text-lg md:text-xl text-center mb-3">Somos una institución de educación superior enfocada en formar líderes empresariales con una visión global e innovadora. Con un enfoque práctico y una sólida red de alianzas comerciales, brindamos a nuestros estudiantes una 
        educación de excelencia alineada con las necesidades del mercado.</p>
        </motion.div>
        <motion.img initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 0.9}} viewport={{once:true}} className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover" src="/Images/bienvenido.jpg"  alt="bienvenida"/>
    </section>    
  )
}
