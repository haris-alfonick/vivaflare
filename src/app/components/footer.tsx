import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { faInstagram, faLinkedinIn, faThreads, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  return (
    <footer className="bg-[#000000] md:flex-row flex-col text-white 2xl:p-6 p-4 gap-4 flex items-center justify-between">
      <div>
        <Image
          src="/images/vivaflare.png"
          alt="logo"
          height={50}
          width={115}
        />
      </div>

      <ul className="flex whitespace-nowrap align-middle space-x-4 [&_li]:hover:text-transparent [&_li]:hover:bg-gradient-to-l [&_li]:hover:from-[#d3007d] [&_li]:hover:to-[#743bf6] [&_li]:hover:bg-clip-text transition-all">
        <Link href="#"><li>About Us</li></Link>
        <Link href="#"><li>The Squad</li></Link>
        <Link href="#"><li>FAQs</li></Link>
        <Link href="#"><li>Legal Center</li></Link>
      </ul>

      <div className="flex items-center space-x-3 [&_svg]:w-[37px] [&_svg]:text-[#000000] [&_svg]:hover:text-[#d40078] [&_svg]:py-[7px] [&_svg]:bg-white [&_svg]:rounded-full [&_svg]:h-[36px]">
        <Link href="#"><FontAwesomeIcon icon={faEnvelope} /></Link>
        <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link href="#"><FontAwesomeIcon icon={faThreads} /></Link>
        <Link href="#"><FontAwesomeIcon icon={faTiktok} /></Link>
        <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
      </div>
    </footer>
  );
}