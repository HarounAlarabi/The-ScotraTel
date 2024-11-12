import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4  z-10">
      <Image
        src={logo}
        width="60"
        height="60"
        alt="The Socatratel logo"
        quality={100}
      />
      <span className="text-xl font-semibold">The SocatraTel</span>
    </Link>
  );
}

export default Logo;
