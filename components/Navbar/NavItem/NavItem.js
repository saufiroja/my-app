// export default function NavItem({ href, children }) {
//   return (
//     <li>
//       <a href={href} className="text-white text-lg cursor-pointer">
//         {children}
//       </a>
//     </li>
//   );
// }


// export default function NavItem(props) {
//   return (
//     <li>
//       <a href={props.href} className="text-white text-lg cursor-pointer">
//         {props.text}
//       </a>
//     </li>
//   );
// }

import Link from "next/link";

export default function NavItem({ children }) {
  return (
    <li>
      <a className="text-white text-lg cursor-pointer">{children}</a>
    </li>
  );
}