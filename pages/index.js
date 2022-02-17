/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import About from "../components/About/About";
// import Hero from "../components/Hero/Hero";
// import ListGame from "../components/ListGame/ListGame";
// import Button from "../components/Navbar/Button/Button";
// import Logo from "../components/Navbar/Logo/Logo";
// import Nav from "../components/Navbar/Nav/Nav";
// import Navbar from "../components/Navbar/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Impostor | Homepage</title>
//         <meta name="description" content="Impostor Website dengan Next JS" />
//       </Head>
//       <div className="bg-hero bg-cover bg-primary h-[1050px]">
//         <div className="container mx-auto">
//           {/* Navbar */}
//           <div className="flex pt-16 items-center">
//             <div className="w-3/12">
//               <Logo />
//             </div>
//             <div className="w-6/12">
//               <Nav />
//             </div>
//             <div className="w-3/12 space-x-5 text-right">
//               <Link href="/login" passHref>
//                 <a className="text-lg py-3 px-10 rounded-2.5xl inline-block cursor-pointer bg-white text-primary">
//                   Login
//                 </a>
//               </Link>
//               <Link href="/register">
//                 <a className="text-lg py-3 px-10 rounded-2.5xl inline-block cursor-pointer bg-white text-primary">
//                   Register
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="w-5/12 pt-32">
//             <h1 className="text-white text-8xl font-bold font-body pr-32">
//               let's show your talent for game
//             </h1>
//             <div className="ml-20">
//               <Button className="mt-14" variant="yellow">
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section Game */}
//       <section className="pt-20">
//         <div className="container mx-auto">
//           <h2 className="text-8xl font-bold font-body text-center">
//             List Game
//           </h2>
//           <div className="flex w-9/12 mx-auto mt-16">
//             <div className="w-4/12">
//               <Link href="/login">
//                 <Image
//                   className="cursor-pointer"
//                   src="/images/game1.png"
//                   alt="game1"
//                   width={294}
//                   height={217}
//                 />
//               </Link>
//             </div>
//             <div className="w-4/12">
//               <Link href="/login">
//                 <Image
//                   className="cursor-pointer"
//                   src="/images/game2.png"
//                   alt="game2"
//                   width={294}
//                   height={217}
//                 />
//               </Link>
//             </div>
//             <div className="w-4/12">
//               <Link href="/login">
//                 <Image
//                   className="cursor-pointer"
//                   src="/images/game3.png"
//                   alt="game3"
//                   width={294}
//                   height={217}
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section About */}
//       <About />

//       {/* Footer */}
//       <section className="py-20 font-body">
//         <div className="container">
//           <div className="flex items-center">
//             <div className="flex flex-col w-4/12 justify-start px-16">
//               <div className="flex">
//                 <Image
//                   src="/images/impostor-logo.svg"
//                   alt="impostor-logo"
//                   width={30}
//                   height={30}
//                 />
//                 <span className="font-bold px-2.5 text-4xl text-primary">
//                   Impostor
//                 </span>
//               </div>
//               <p className="mt-5 leading-relaxed">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book.
//               </p>
//             </div>
//             <div className="w-4/12 px-16">
//               <h3 className="text-3xl">CONTRIBUTOR</h3>
//               <ul className="mt-5">
//                 <li>
//                   {/* <a href="#" className="text-lg"> */}
//                     Bogiant
//                   {/* </a> */}
//                 </li>
//                 <li>
//                   {/* <a href="#" className="text-lg"> */}
//                     Fikri
//                   {/* </a> */}
//                 </li>
//                 <li>
//                   {/* <a href="#" className="text-lg"> */}
//                     Hasby
//                   {/* </a> */}
//                 </li>
//                 <li>
//                   {/* <a href="#" className="text-lg"> */}
//                     Oja
//                   {/* </a> */}
//                 </li>
//                 <li>
//                   {/* <a href="#" className="text-lg"> */}
//                     Ulfa
//                   {/* </a> */}
//                 </li>
//               </ul>
//             </div>
//             <div className="w-4/12 px-16">
//               <h3 className="text-3xl">Newsletter</h3>
//               <form className="mt-5">
//                 <input
//                   className="w-full border rounded-full py-3 px-10"
//                   type="text"
//                   name="email"
//                   placeholder="Enter email address"
//                 />
//               </form>
//               {/* <Link href=""> */}
//                 <a className="mt-3 rounded-full bg-primary text-white text-lg px-10 py-3 inline-block text-center">
//                   SUBSCRIBE
//                 </a>
//               {/* </Link> */}
//               <p className="mt-5">We never spam you!</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <footer>
//         <div className="container text-center py-10">
//           <p>©2022 Impostor Team. All Rights Reserved</p>
//         </div>
//       </footer>
//     </>
//   );
// }


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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,192C384,213,480,267,576,272C672,277,768,235,864,224C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <ListGame />
      <About />
    </div>
  )
}