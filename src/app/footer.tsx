import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faInstagram, faLinkedinIn, faThreads, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  return (
    <>
    <footer className="bg-[#000000] flex-col md:flex-row text-white 2xl:p-6 p-4 gap-4 flex items-center justify-between">
      <div>
      <Link href="/">
      <Image
          src="/images/vivaflare.png"
          alt="logo"
          height={50}
          width={115}
        />
        </Link>
      </div>

      <ul className="flex whitespace-nowrap align-middle space-x-4 [&_li]:hover:text-transparent [&_li]:hover:bg-gradient-to-l [&_li]:hover:from-[#d3007d] [&_li]:hover:to-[#743bf6] [&_li]:hover:bg-clip-text transition-all">
        <Link href="/whoweare"><li>About Us</li></Link>
        <Link href="#"><li>The Squad</li></Link>
        <Link href="/faq"><li>FAQs</li></Link>
        <Link href="#"><li>Legal Center</li></Link>
      </ul>

      <div className="flex items-center space-x-3 [&_svg]:text-[#000000] [&_svg]:hover:text-[#d40078] [&_svg]:py-[9px] [&_svg]:px-0 [&_svg]:bg-white [&_svg]:rounded-full">
        <Link href="https://www.instagram.com/viva_flare/"><FontAwesomeIcon icon={faInstagram} width={34} height={34} /></Link>
        <Link href="https://www.threads.com/@viva_flare"><FontAwesomeIcon icon={faThreads} width={34} height={34} /></Link>
        <Link href="https://www.tiktok.com/@viva_flare"><FontAwesomeIcon icon={faTiktok} width={34} height={34} /></Link>
        <Link href="https://www.linkedin.com/in/viva_flare"><FontAwesomeIcon icon={faLinkedinIn} width={34} height={34} /></Link>
      </div>
    </footer>
  </>
  );
}