/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import ListGame from "../components/ListGame/ListGame";

export default function Home() {
  return (
  <div className="overflow-x-hidden">
    <div className="bg-[#5956E9] no-repeat bg-cover xl:h-screen lg:h-screen md:h-2/6 w-screen font-body relative overflow-hidden">
      <div className="container mx-auto px-[6%]"> 
        <Hero />
      </div>

      <div className="xl:mt-[-9%] lg:mt-[-5%] sticky">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,192C384,213,480,267,576,272C672,277,768,235,864,224C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
        <ListGame />
        <About />
  </div>
  );
}
