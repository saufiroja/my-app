import Image from 'next/image';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import ListGame from '../components/ListGame/ListGame';

export default function Home() {
  return (
    <>
      <Hero />
      <ListGame />
      <About />
    </>
  );
}
