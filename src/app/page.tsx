import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import List from '../components/List'
 export default function Home() {
  return (
    <>
      <Hero />
      <Container>
       <div className='flex justify-center items-center flex-col'>
        <h2 className='text-center text-2xl font-semibold'>Carreras de Pregrado</h2>
        <span className='w-full text-center text-xm'>Licenciatura</span>
       </div> 
<List/>

      </Container>
    </>
  );
}
