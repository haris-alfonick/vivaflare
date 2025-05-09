import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Header() {

  return (
    <header className="bg-[#000000] text-white max-sm:px-2 px-6 py-4 space-x-4 flex items-center justify-between">
      <div>
        <Image
          src="/images/vivaflare.png"
          alt="logo"
          height={50}
          width={115}
          className="max-sm:w-[130px] "
        />
      </div>

      <div className="headerSearch relative mr-0 flex align-middle w-[50%] max-w-[50%] [&_input]:w-full [&_input]:px-10 [&_input]:py-2 rounded-full pr-6 max-sm:pr-4 bg-[#1D1A24] [&_input]:text-white max-sm:[&_input]:text-sm max-sm:[&_input]:pl-3 max-sm:[&_input]:pr-6 max-sm:[&_input]:py-[8px] [&_input]:placeholder-[#A6A6A6] [&_input]:focus:outline-none [&_svg]:w-5 max-sm:[&_svg]:w-4 max-sm:[&_svg]:pt-[9px] [&_svg]:pt-[10px] [&_svg]:text-[#A6A6A6]">
        <input
          type="text"
          placeholder="Discover what's happening!"
          className="inter"
        />
        <Link href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
      </div>

      <div className="flex items-center max-lg:[&_button]:text-[8px] gap-x-2 [&_button]:px-6 [&_button]:md:block [&_button]:transition-all [&_button]:text-white [&_button]:font-semibold [&_button]:text-sm [&_button]:py-3 [&_button]:rounded-full [&_button]:hover:bg-gradient-to-l [&_button]:hover:from-[#ef005d] [&_button]:hover:to-[#47b4d5] [&_button]:hidden
">
        <Link href="#"><button className="bg-[#F80C5B] inter">
          Launch Event
        </button></Link>
        <Link href="#"><button className="bg-[#2EB2D6] inter">
          Get Early Access
        </button></Link>
        <Link href="#">
          <Image
            src="/images/redrocket.png"
            alt="logo"
            height={100}
            width={100}
            className="md:hidden block w-[53px]"
          />
        </Link>
       <Link href="#">
       <Image
          src="/images/blueArrow.png"
          alt="logo"
          height={100}
          width={100}
          className="md:hidden block w-[53px]"
        />
        </Link>
        <FontAwesomeIcon icon={faGear} width={45} height={30}/>
      </div>
    </header>
  );
}