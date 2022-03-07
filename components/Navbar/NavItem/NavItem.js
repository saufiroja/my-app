import Link from 'next/link';

export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-white xl:text-lg lg:text-lg md:text-md sm:text-sm cursor-pointer">
        {children}
      </a>
    </li>
  );
}
