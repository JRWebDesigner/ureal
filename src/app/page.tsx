import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
 export default function Home() {
  return (
    <>
      <Hero />
      <Container>
       <div className='flex justify-center items-center flex-col'>
        <h2 className='text-center text-2xl'>Carreras de Pregrado</h2>
        <span className='w-full text-center text-xm'>Licenciatura</span>
       </div> 
      </Container>
    </>
  );
}
