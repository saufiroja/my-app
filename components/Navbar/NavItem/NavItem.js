import Link from 'next/link';

export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-white text-lg cursor-pointer">
        {children}
      </a>
    </li>
  );
}
