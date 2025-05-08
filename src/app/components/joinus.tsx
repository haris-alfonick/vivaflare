// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import React, { useRef } from "react"
// import Autoplay from "embla-carousel-autoplay"
// import useEmblaCarousel from "embla-carousel-react"

// export default function Joinus() {
//   const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
//   const [embla] = useEmblaCarousel({ loop: true }, [autoplay.current])

//   return (
//     <section className="relative h-full bg-[#14121B] overflow-x-hidden">
//       <div className="grid grid-cols-12 gap-4 container mx-auto items-center align-middle absolute top-0 right-0 m-auto h-fit bottom-0 left-0">
//         <div className="lg:col-span-6 col-span-12 mx-auto">
//           <Image
//             src="/images/joinus.webp"
//             alt="image"
//             width={350}
//             height={300}
//             className="w-[380px] 2xl:w-[500px] h-[380px] 2xl:h-[500px] object-contain"
//           />
//         </div>

//         <div className="mx-auto px-[15px] md:px-0 lg:order-[1] order-[-1] lg:col-span-6 col-span-12 text-white [&_h2]:font-extrabold [&_h2]:leading-[0.3] [&_h2]:lg:text-[30px] [&_h2]:2xl:text-[50px] [&_h3]:text-[505px] [&_h3]:md:text-[65px] [&_h3]:2xl:text-[85px] [&_h3]:text-transparent [&_h3]:leading-none [&_h3]:bg-gradient-to-l [&_h3]:from-[#F80C67] [&_h3]:to-[#ED1C24] [&_h3]:bg-clip-text [&_h3]:font-[600]">
//           <h2 className="inter">No Pressure, but...</h2>
//           <h3 className="">Join Us!</h3>

//           <div className="overflow-hidden" ref={embla}>
//             <div className="flex [&_p]:w-full [&_p]:lg:w-[505px] [&_p]:pt-[8px] [&_strong]:block [&_strong]:pt-[8px] [&_strong]:text-[25px] [&_strong]:2xl:text-[30px] [&_div]:flex-shrink-0 [&_div]:w-full">
//               <div>
//                 <strong className="rubik">Creatives</strong>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit 
//                 </p>
//               </div>
//               <div>
//                 <strong className="rubik">Enthusiasts</strong>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit 
//                 </p>
//               </div>
//               <div>
//                 <strong className="rubik">Clients</strong>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit 
//                 </p>
//               </div>
//               <div>
//                 <strong className="rubik">Vendors</strong>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit 
//                 </p>
//               </div>
//               <div>
//                 <strong className="rubik">Advocate</strong>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit 
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-3 py-4 [&_button]:border [&_button]:border-white [&_button]:text-sm [&_button]:font-semibold [&_button]:px-6 [&_button]:py-[5px] [&_button]: [&_button]:text-white [&_button]:rounded-full">
//             <Link href="#">
//               <button>
//                 Creatives
//               </button>
//             </Link>
//             <Link href="#">
//               <button>
//               Enthusiasts
//               </button>
//             </Link>
//             <Link href="#">
//               <button>
//               Clients
//               </button>
//             </Link>
//             <Link href="#">
//               <button>
//               Vendors
//               </button>
//             </Link>
//             <Link href="#">
//               <button>
//               Advocate
//               </button>
//             </Link>
//             </div>
//             <Link href="#">
//               <button className="bg-[#F80C5B] hover:bg-gradient-to-l hover:from-[#ef005d] hover:to-[#47b4d5] inter px-6 py-3 rounded-full text-white font-semibold text-sm transition-all">
//                 Get Early Access
//               </button>
//             </Link>

//         </div>
//       </div>
//     </section>
//   )
// }



import Image from "next/image"
import Link from "next/link"

export default function Joinus() {
  return (
    <section className="relative h-full bg-[#14121B] overflow-x-hidden">
      <div className="grid grid-cols-12 gap-4 container mx-auto items-center align-middle absolute top-0 right-0 m-auto h-fit bottom-0 left-0">
        <div className="lg:col-span-6 col-span-12 mx-auto">
          <Image
            src="/images/joinus.webp"
            alt="image"
            width={350}
            height={300}
            className="w-[380px] 2xl:w-[500px] h-[380px] 2xl:h-[500px] object-contain"
          />
        </div>

        <div className="mx-auto px-[15px] md:px-0 lg:order-[1] order-[-1] lg:col-span-6 col-span-12 text-white [&_h2]:font-extrabold [&_h2]:leading-[0.3] [&_h2]:lg:text-[30px] [&_h2]:2xl:text-[50px] [&_h3]:text-[50px] [&_h3]:md:text-[65px] [&_h3]:2xl:text-[85px] [&_h3]:text-transparent [&_h3]:leading-none [&_h3]:bg-gradient-to-l [&_h3]:from-[#F80C67] [&_h3]:to-[#ED1C24] [&_h3]:bg-clip-text [&_h3]:font-[600]">
          <h2 className="inter">No Pressure, but...</h2>
          <h3 className="">Join Us!</h3>

          <div className="slider-container sm:w-[507px] w-[100%] overflow-hidden">
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

          <div className="flex flex-wrap gap-3 py-4 [&_button]:border [&_button]:border-white [&_button]:text-sm [&_button]:font-semibold [&_button]:px-6 [&_button]:py-[5px] [&_button]: [&_button]:text-white [&_button]:rounded-full">
            <Link href="#">
              <button>
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
            <button className="bg-[#F80C5B] hover:bg-gradient-to-l hover:from-[#ef005d] hover:to-[#47b4d5] inter px-6 py-3 rounded-full text-white font-semibold text-sm transition-all">
              Get Early Access
            </button>
          </Link>

        </div>
      </div>
    </section>
  )
}
