import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import Bienvenida from '../components/Bienvenida.tsx'
import Elegirnos from '../components/Elegirnos.tsx'
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Bienvenida />
        <Elegirnos />
      </Container>
    </>
  );
}
