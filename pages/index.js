/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About/About";
import Button from "../components/Navbar/Button/Button";
import Logo from "../components/Navbar/Logo/Logo";
import Nav from "../components/Navbar/Nav/Nav";
import ResponsiveVideo from "../components/ResponsiveVideo";
import Video from "../components/Video";

export default function Home() {
  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ({ played }) => {
    // console.log(played);
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };
  return (
    <>
      <Head>
        <title>Impostor | Homepage</title>
        <meta name="description" content="Impostor Website dengan Next JS" />
      </Head>
      <div className="bg-hero bg-cover bg-primary h-[1050px]">
        <div className="container mx-auto">
          {/* Navbar */}
          <div className="flex pt-16 items-center">
            <div className="w-3/12">
              <Logo />
            </div>
            <div className="w-6/12">
              <Nav />
            </div>
            <div className="w-3/12 space-x-5 text-right">
              <Link href="/login">
                <a className="text-lg py-3 px-10 rounded-2.5xl inline-block cursor-pointer bg-white text-primary">
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a className="text-lg py-3 px-10 rounded-2.5xl inline-block cursor-pointer bg-white text-primary">
                  Register
                </a>
              </Link>
            </div>
          </div>
          <div className="w-5/12 pt-32">
            <h1 className="text-white text-8xl font-bold font-body pr-32">
              let's show your talent for game
            </h1>
            <div className="ml-20">
              <Button className="mt-14" variant="yellow">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Game */}
      <section className="pt-20">
        <div className="container mx-auto mb-20">
          <h2 className="text-8xl font-bold font-body text-center">
            List Game
          </h2>
          <div className="flex w-9/12 mx-auto mt-16">
            <div className="w-4/12">
              <Link href="/login">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/images/game1.png"
                    alt="game1"
                    width={294}
                    height={217}
                  />
                </a>
              </Link>
            </div>
            <div className="w-4/12">
              <Link href="/login">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/images/game2.png"
                    alt="game2"
                    width={294}
                    height={217}
                  />
                </a>
              </Link>
            </div>
            <div className="w-4/12">
              <Link href="/login">
                <a>
                  <Image
                    className="cursor-pointer"
                    src="/images/game3.png"
                    alt="game3"
                    width={294}
                    height={217}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Video Tutorial */}
      <section>
        <div className="container">
          <ResponsiveVideo
            url="https://www.youtube.com/watch?v=M8rbVzVf_z0"
            onProgress={handleWatchComplete}
          />
          <div className={watchComplete ? 'marker marker--is--complete' : 'marker marker--not--complete'}>
            Completed
          </div>
        </div>
      </section>

      {/* Section About */}
      <About />

      {/* Footer */}
      <section className="py-20 font-body">
        <div className="container">
          <div className="flex xl:items-center lg:items-center">
            <div className="flex flex-col w-4/12 justify-start px-16">
              <div className="flex">
                <Image
                  src="/images/impostor-logo.svg"
                  alt="impostor-logo"
                  width={30}
                  height={30}
                />
                <span className="font-bold xl:px-2.5 lg:px-2.5 md:px-0 xl:text-4xl lg:text-4xl md:text-3xl text-primary">
                  Impostor
                </span>
              </div>
              <p className="mt-5 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-4/12 px-16">
              <h3 className="xl:text-3xl lg:text-2xl">CONTRIBUTOR</h3>
              <ul className="mt-5">
                <li>
                  <a href="#" className="text-lg">
                    Bogiant
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg">
                    Fikri
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg">
                    Hasby
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg">
                    Oja
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg">
                    Ulfa
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:w-4/12 lg:w-4/12 md:w-[45%] px-16">
              <h3 className="xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl">Newsletter</h3>
              <form className="mt-5">
                <input
                  className="w-full border rounded-full py-3 xl:px-10 lg:px-7 md:px-2 sm:px-2"
                  type="text"
                  name="email"
                  placeholder="Enter email address"
                />
              </form>
              <Link href="/#">
                <a className="mt-3 rounded-full bg-primary text-white text-lg px-10 py-3 inline-block text-center">
                  SUBSCRIBE
                </a>
              </Link>
              <p className="mt-5">We never spam you!</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container text-center py-10">
          <p>©2022 Impostor Team. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
