import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "./Button/Button";

export default function Navbar() {
  return (
    <div className="flex xl:pt-[4%] lg:pt-[4%] md:pt-[4%]  sm:pt-[4%] items-center overflow-hidden relative">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="xl:w-1/3 lg:w-[40%] md:w-[40%] sm:w-[50%] space-x-5 text-right">
        <Button variant="white">Login</Button>
        <Button variant="white">Register</Button>
      </div>
    </div>
  );
}
