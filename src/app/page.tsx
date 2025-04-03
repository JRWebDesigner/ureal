import Container from '../components/Container';
import Hero from '../components/Hero/Hero';
import Bienvenida from '../components/Bienvenida'
import Elegirnos from '../components/Elegirnos'
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
