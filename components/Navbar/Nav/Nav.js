import NavItem from "../NavItem/NavItem";
export default function Nav() {
  return (
    <ul className="flex -ml-32 space-x-10">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
    </ul>
  );
}
