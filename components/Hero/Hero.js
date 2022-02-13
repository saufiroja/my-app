/* eslint-disable react/no-unescaped-entities */
import Button from "../Navbar/Button/Button";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <div className="bg-hero bg-cover bg-primary h-[1050px]">
      <div className="container mx-auto">
        <Navbar />
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
  );
}
