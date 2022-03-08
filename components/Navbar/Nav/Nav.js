import NavItem from '../NavItem/NavItem';

export default function Nav() {
  return (
    <ul className="flex xl:ml-[-12%] lg:ml-[1%] md:ml-[12%] sm:ml-[15%] xl:pb-[8px] lg:pb-[4px] md:pb-[7px] sm:pb-[6px] space-x-16">
      <NavItem>Home</NavItem>
      <NavItem href="#about">About</NavItem>
    </ul>
  );
}
