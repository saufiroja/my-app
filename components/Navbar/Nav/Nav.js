import NavItem from "../NavItem/NavItem";
export default function Nav() {
  return (
    <ul className="flex xl:ml-[2%] lg:ml-[2%] md:ml-[12%] sm:ml-[15%] space-x-10">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
    </ul>
  );
}
