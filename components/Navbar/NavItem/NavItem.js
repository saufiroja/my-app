import Link from "next/link";

export default function NavItem({ children }) {
  return (
    <li>
      <a className="text-white text-lg cursor-pointer">{children}</a>
    </li>
  );
}
