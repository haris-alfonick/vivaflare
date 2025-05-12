import Image from "next/image"
import Link from "next/link"

export default function Joinus() {
  return (
    <section className="relative h-full bg-[#14121B] scrollbar m-3 lg:m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px]">
      <div className="grid grid-cols-12 gap-4 container mx-auto items-center align-middle absolute top-0 right-0 2xl:mt-0 mt-6 h-full bottom-0 left-0">
        <div className="lg:col-span-6 col-span-12 max-lg:mx-auto">
          <Image
            src="/images/joinus.webp"
            alt="image"
            width={350}
            height={300}
            className="w-[380px] 2xl:w-[500px] h-[380px] 2xl:h-[500px] object-contain"
          />
        </div>

        <div className="mx-auto px-[15px] md:px-0 lg:order-[1] order-[-1] lg:col-span-6 col-span-12 text-white [&_h2]:font-extrabold [&_h2]:leading-[0.3] max-md:[&_h2]:text-[22px] [&_h2]:lg:text-[30px] [&_h2]:2xl:text-[50px] [&_h3]:text-[50px] [&_h3]:md:text-[65px] [&_h3]:2xl:text-[85px] [&_h3]:text-transparent [&_h3]:leading-none [&_h3]:bg-gradient-to-l [&_h3]:from-[#F80C67] [&_h3]:to-[#ED1C24] [&_h3]:bg-clip-text [&_h3]:font-[600]">
          <h2 className="inter">No Pressure, but...</h2>
          <h3>Join Us!</h3>

          <div className="slider-container sm:w-[520px] w-[100%] overflow-hidden">
            <div className="flex [&_p]:pt-[8px] [&_strong]:block [&_strong]:pt-[8px] [&_strong]:text-[25px] [&_strong]:2xl:text-[30px] [&_div]:w-full">
              <div className="slide">
                <strong className="rubik">Creatives</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <div className="slide">
                <strong className="rubik">Enthusiasts</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <div className="slide">
                <strong className="rubik">Clients</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <div className="slide">
                <strong className="rubik">Vendors</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <div className="slide">
                <strong className="rubik">Advocate</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 pb-6 [&_button]:border [&_button]:border-white [&_button]:text-[12px] [&_button]:font-semibold [&_button]:px-6 [&_button]:py-[5px] [&_button]: [&_button]:text-white [&_button]:rounded-full">
            <Link href="#">
              <button className="bg-white text-black!">
                Creatives
              </button>
            </Link>
            <Link href="#">
              <button>
                Enthusiasts
              </button>
            </Link>
            <Link href="#">
              <button>
                Clients
              </button>
            </Link>
            <Link href="#">
              <button>
                Vendors
              </button>
            </Link>
            <Link href="#">
              <button>
                Advocate
              </button>
            </Link>
          </div>
          <Link href="">
            <button className="mb-6 bg-[#F80C5B] hover:bg-gradient-to-l hover:from-[#ef005d] hover:to-[#47b4d5] inter px-6 py-3 rounded-full text-white font-semibold text-sm transition-all">
              Get Early Access
            </button>
          </Link>

        </div>
      </div>
    </section>
  )
}