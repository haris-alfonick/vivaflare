// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTrigger,
// } from "@/components/ui/agedialog"
// import Link from "next/link";

// export default function AgeDialogue() {
//   return (
//     <section className="relative h-full pt-[22px] px-[25px] pb-0">
// <div className="bg-[#14121B] h-full rounded-tl-[30px] rounded-tr-[30px]">
//       <div className="text-white max-md:px-[35px] [&_h2]:mt-4 text-center absolute top-0 right-0 w-fit max-md:m-auto mx-auto mt-6 h-fit md:h-full bottom-0 left-0 sm:px-0 px-4 [&_h2]:2xl:text-[42px] sm:[&_h2]:w-[549px] [&_h2]:w-[100%] [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
//         <h2 className="inter">Confirm Your Age</h2>
//         <p>We&apos;re committed to providing a safe and age-appropriate community experience.</p>
//         <form className="pt-5 space-y-2 2xl:space-y-4 [&_input]:px-6 [&_input]:py-3 [&_input]:rounded-full [&_input]:bg-[#1D1A24] [&_input]:text-white [&_input]:w-[100%] md:[&_input]:w-[549px] [&_input]:placeholder-[#A6A6A6] [&_input]:text-sm [&_input]:focus:outline-none [&_label]:font-[400] [&_p]:text-start [&_p]:font-[600] [&_p]:py-0 2xl:[&_p]:py-10" action="#">
//           <div className="flex 2xl:gap-2 gap-1 items-start flex-col">
//             <label>*Enter Your Age</label>
//             <input
//               type="text"
//               placeholder="Enter Here"
//               className="inter"
//               required
//             />
//           </div>
//         </form>
//         <p className="max-md:w-[270px] mx-auto caveat !text-[19px] absolute left-0 right-0 max-md:bottom-[-72px] bottom-[110px]">This will be a home for all creatives, event enthusiasts, and lovers of life.</p>
//         <Dialog>
//           <DialogTrigger>
//             <button className="bg-[#F80C5B] hover:bg-[#7238fd] transition-all sm:mx-0 text-sm absolute left-0 right-0 bottom-[60px] rounded-full py-2 2xl:py-3 md:w-[549px] w-[93%] mx-auto">Next</button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <Image
//                 src="/images/warning.webp"
//                 alt="logo"
//                 height={50}
//                 width={90}
//                className="mx-auto max-sm:w-[65px]"
//               />
//               <DialogDescription className="pt-4">
//                 Hey there! Our platform is for users 18 and up right now, but we&apos;re working on making it available for younger users soon. We can&apos;t wait to have you onboard when the time comes!
//               </DialogDescription>
//               <Link href="/" className="w-fit m-auto">
//               <button className="bg-[#F80C5B] text-white w-[150px] text-sm rounded-full mt-4 py-3 mx-auto">Go to Homepage</button>
//               </Link>
//             </DialogHeader>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   )
// }




"use client"
import { useEffect, useState } from "react"
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/agedialog"
import Link from "next/link";
export default function AgeDialogue() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(true)
  }, [])
  return (
    <section className="relative h-full pt-[22px] px-[25px] pb-0">
      <div className="bg-[#14121B] h-full rounded-tl-[30px] rounded-tr-[30px]">
        <div className="text-white max-md:px-[35px] [&_h2]:mt-4 text-center absolute top-0 right-0 w-fit max-md:m-auto mx-auto mt-6 h-fit md:h-full bottom-0 left-0 sm:px-0 px-4 [&_h2]:2xl:text-[42px] sm:[&_h2]:w-[549px] [&_h2]:w-[100%] [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
          <h2 className="inter">Confirm Your Age</h2>
          <p>We&apos;re committed to providing a safe and age-appropriate community experience.</p>
          <form className="pt-5 space-y-2 2xl:space-y-4 [&_input]:px-6 [&_input]:py-3 [&_input]:rounded-full [&_input]:bg-[#1D1A24] [&_input]:text-white [&_input]:w-[100%] md:[&_input]:w-[549px] [&_input]:placeholder-[#A6A6A6] [&_input]:text-sm [&_input]:focus:outline-none [&_label]:font-[400] [&_p]:text-start [&_p]:font-[600] [&_p]:py-0 2xl:[&_p]:py-10" action="#">
            <div className="flex 2xl:gap-2 gap-1 items-start flex-col">
              <label>*Enter Your Age</label>
              <input
                type="text"
                placeholder="Enter Here"
                className="inter"
                required
              />
            </div>
          </form>
          <p className="max-md:w-[270px] mx-auto caveat !text-[19px] absolute left-0 right-0 max-md:bottom-[-72px] bottom-[110px]">This will be a home for all creatives, event enthusiasts, and lovers of life.</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <button className="bg-[#F80C5B] hover:bg-[#7238fd] transition-all text-sm absolute left-0 right-0 bottom-[60px] max-md:bottom-[-120px] rounded-full py-2 2xl:py-3 md:w-[549px] w-[80%] m-auto">Next</button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Image
                  src="/images/warning.webp"
                  alt="logo"
                  height={50}
                  width={90}
                  className="mx-auto max-sm:w-[65px]"
                />
                <DialogDescription className="pt-4">
                  Hey there! Our platform is for users 18 and up right now, but we&apos;re working on making it available for younger users soon. We can&apos;t wait to have you onboard when the time comes!
                </DialogDescription>
                <Link href="/" className="w-fit m-auto">
                  <button className="bg-[#F80C5B] text-white w-[150px] text-sm rounded-full mt-4 py-3 mx-auto">Go to Homepage</button>
                </Link>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
