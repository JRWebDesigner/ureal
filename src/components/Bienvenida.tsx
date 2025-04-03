export default function Bienvenida(){
  return(
    <section className=' my-10 flex justify-center items-center flex-col md:flex-row'>
        <div className="w-[90%] md:w-[46%]">
         <h2 className='text-red-950 text-3xl font-semibold '>Bienvenidos a la Universidad Real de Cámara de Comercio</h2>
         <p className="text-xl">Somos una institución de educación superior enfocada en formar líderes empresariales con una visión global e innovadora. Con un enfoque práctico y una sólida red de alianzas comerciales, brindamos a nuestros estudiantes una 
        educación de excelencia alineada con las necesidades del mercado.</p>
        </div>
        <img className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover" src="/Images/bienvenido.jpg"  alt="bienvenida"/>
    </section>    
  )
}
