import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Header() {

  return (
    <header className="bg-[#000000] text-white px-6 py-4 space-x-4 flex items-center justify-between">
      <div>
        <Image
          src="/images/vivaflare.png"
          alt="logo"
          height={50}
          width={115}
        />
      </div>

      <div className="headerSearch relative mr-0 flex align-middle w-[50%] max-w-[50%] [&_input]:w-full [&_input]:px-10 [&_input]:py-2 rounded-full pr-6 bg-[#1D1A24] [&_input]:text-white [&_input]:placeholder-[#A6A6A6] [&_input]:focus:outline-none [&_svg]:w-5 [&_svg]:pt-[10px] [&_svg]:text-[#A6A6A6]">
        <input
          type="text"
          placeholder="Discover what's happening!"
          className="inter"
        />
        <Link href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
      </div>

      <div className="flex items-center space-x-3 [&_svg]:w-6 [&_button]:px-6 [&_button]:md:block [&_button]:transition-all [&_button]:text-white [&_button]:font-semibold [&_button]:text-sm [&_button]:py-3 [&_button]:rounded-full">
        <Link href="#"><button className="bg-[#F80C5B] hover:bg-gradient-to-l hover:from-[#ef005d] hover:to-[#47b4d5] inter hidden">
          Launch Event
        </button></Link>
        <Link href="#"><button className="bg-[#2EB2D6] hover:bg-gradient-to-l hover:from-[#ef005d] hover:to-[#47b4d5] inter hidden">
          Get Early Access
        </button></Link>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </header>
  );
}