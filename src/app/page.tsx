import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import Bienvenida from '../components/Bienvenida'
import PregradoCarrusel from '../components/Pregrado/PregradoCarrusel'
import Elegirnos from '../components/Elegirnos'
import Oportunidad from '../components/Oportunidad'
import CTA from '../components/CTA'
import Botones from '../components/Botones'
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Bienvenida />
        <PregradoCarrusel />
      </Container>
      <Oportunidad />
      <Container>
        <Elegirnos />
        <CTA />
        <Botones />
        <span className='flex-center text-2xl md:text-3xl font-bold text-center w-[80%] mx-auto'>Convierte tu pasión en éxito: en la UREAL te formamos para liderar el mundo de los negocios con visión, innovación y excelencia.</span>
      </Container>

      </>
  );
}
