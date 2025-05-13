import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Header() {

  return (
    <header className="bg-[#000000] text-white space-x-4 max-sm:px-2 px-6 py-4 flex items-center justify-between">
      <div>
      <Link href="/">
        <Image
          src="/images/vivaflare.png"
          alt="logo"
          height={50}
          width={115}
          className="max-sm:w-[130px]"
        />
        </Link>
      </div>

      <div className="headerSearch relative mr-0 flex align-middle items-center w-[50%] max-w-[50%] [&_input]:w-full [&_input]:px-10 [&_input]:py-3 rounded-full pr-6 max-sm:pr-4 bg-[#1D1A24] [&_input]:text-white [&_input]:text-sm max-sm:[&_input]:pl-3 max-sm:[&_input]:pr-6 max-sm:[&_input]:py-[8px] [&_input]:placeholder-[#A6A6A6] [&_input]:focus:outline-none [&_svg]:text-[#A6A6A6] [&_svg]:!h-fit">
        <input
          type="text"
          placeholder="Discover what's happening!"
          className="inter"
        />
        <Link href="#"><FontAwesomeIcon icon={faMagnifyingGlass} width={18} height={18}/></Link>
      </div>

      <div className="flex items-center max-lg:[&_button]:text-[8px] gap-x-2 [&_button]:px-6 [&_button]:md:block [&_button]:hover:transition-all [&_button]:ease-in-out [&_button]:text-white [&_button]:font-semibold [&_button]:text-sm [&_button]:py-3 [&_button]:rounded-full [&_button]:hover:bg-gradient-to-l [&_button]:hover:from-[#ef005d] [&_button]:hover:to-[#47b4d5] [&_button]:hidden [&_svg]:!h-fit">
        <Link href="#"><button className="bg-[#F80C5B] inter">
          Launch Event
        </button></Link>
        <Link href="/getearlyaccess"><button className="bg-[#2EB2D6] inter">
          Get Early Access
        </button></Link>
        <Link href="/getearlyaccess">
          <Image
            src="/images/redrocket.png"
            alt="logo"
            height={100}
            width={100}
            className="md:hidden block w-[30px] max-w-[38px]"
          />
        </Link>
       <Link href="#">
       <Image
          src="/images/blueArrow.png"
          alt="logo"
          height={100}
          width={100}
          className="md:hidden block w-[30px] max-w-[38px]"
        />
        </Link>
        <Link href="#"><FontAwesomeIcon icon={faGear} width={27} height={27}/></Link>
      </div>
    </header>
  );
}