import Image from "next/image";
export default function Logo() {
  return (
    <Image
      className="cursor-pointer"
      src="/images/logo-white.png"
      alt="impostor-logo"
      width={150}
      height={26}
    />
  );
}
