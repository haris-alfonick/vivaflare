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

      <div className="flex items-center space-x-3 [&_svg]:text-[#000000] [&_svg]:hover:text-[#d40078] max-sm:[&_svg]:py-[10px] [&_svg]:py-[7px] [&_svg]:bg-white [&_svg]:rounded-full">
        <Link href="#"><FontAwesomeIcon icon={faEnvelope} width={37} height={36}/></Link>
        <Link href="#"><FontAwesomeIcon icon={faInstagram} width={37} height={36}/></Link>
        <Link href="#"><FontAwesomeIcon icon={faThreads} width={37} height={36}/></Link>
        <Link href="#"><FontAwesomeIcon icon={faTiktok} width={37} height={36}/></Link>
        <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} width={37} height={36}/></Link>
      </div>
    </footer>
  );
}