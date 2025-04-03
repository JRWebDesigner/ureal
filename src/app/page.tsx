import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import List from '../components/List'
 export default function Home() {
  return (
    <>
      <Hero />
      <Container>
       <sectio  className='flex justify-center items-center flex-col md:flex-row'>
        <div>
         <h2 className='text-2xl font-semibold '>Bienvenidos a la Universidad Real de Cámara de Comercio</h2>
         <p className="">Somos una institución de educación superior enfocada en formar líderes empresariales con una visión global e innovadora. Con un enfoque práctico y una sólida red de alianzas comerciales, brindamos a nuestros estudiantes una 
        educación de excelencia alineada con las necesidades del mercado.</p>
        </div>
        <img className="rounded-full" width={150} src="/Images/bienvenido.jpg"  alt="bienvenida"/>
       </section>    
       <section >
        
       </section>
      </Container>
    </>
  );
}
