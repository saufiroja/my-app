import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "./Button/Button";

export default function Navbar() {
  return (
    <div className="flex pt-16 items-center">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 space-x-5 text-right">
        <Button variant="white">Login</Button>
        <Button variant="white">Register</Button>
      </div>
    </div>
  );
}
