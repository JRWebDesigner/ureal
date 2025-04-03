import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import Bienvenida from '../components/Bienvenida'
import PregradoCarrusel from '../components/Pregrado/PregradoCarrusel'
import Elegirnos from '../components/Elegirnos'
import Oportunidad from '../components/Oportunidad'
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
      </Container>

      </>
  );
}
