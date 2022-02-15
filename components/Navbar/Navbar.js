import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "./Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex pt-16 items-center">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 space-x-5 text-right">
        <Link href="/login" passHref>
          <Button variant="white">Login</Button>
        </Link>
        <Button onClick="/register" variant="white">
          Register
        </Button>
      </div>
    </div>
  );
}
