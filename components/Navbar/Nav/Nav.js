// import NavItem from "../NavItem/NavItem";
// export default function Nav(props) {
//   return (
//     <ul className="flex xl:-ml-[14%] lg:-ml-[14%] md:ml-[12%] sm:ml-[15%] xl:pb-[8px] lg:pb-[4px] md:pb-[7px] sm:pb-[6px] space-x-16">
//       {/* <NavItem>Home</NavItem> */}
//       {/* <NavItem href="#about">About</NavItem> */}
//       {/* <NavItem>About</NavItem> */}
//       <NavItem text="Home" href="/" />
//       <NavItem text="About" href="/" />
//     </ul>
//   );
// }

import NavItem from "../NavItem/NavItem";
export default function Nav() {
  return (
    <ul className="flex xl:ml-[2%] lg:ml-[2%] md:ml-[12%] sm:ml-[15%] xl:pb-[8px] lg:pb-[4px] md:pb-[7px] sm:pb-[6px] space-x-10">
      <NavItem>Home</NavItem>
      <NavItem href="/login">About</NavItem>
    </ul>
  );
}