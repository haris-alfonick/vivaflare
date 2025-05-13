import Image from "next/image"
import Link from "next/link"

export default function Getearlyaccess() {
  return (
    <section className="relative scrollbar bg-[#14121B] m-3 lg:m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px] 2xl:h-[calc(100vh_-_198px)] h-[calc(100vh_-_181px)]">
      <div className="text-white text-center absolute top-0 right-0 w-fit mx-auto mt-3 2xl:m-auto! h-fit bottom-0 left-0 sm:px-0 px-4 [&_h2]:2xl:text-[42px] [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
        <h2 className="inter">Viva Flare Welcomes You!</h2>
        <p>Let&apos;s get you signed in.</p>
        <Link href="#" className="mx-auto w-fit block">
          <Image
            src="/images/mail.png"
            alt="image"
            width={50}
            height={50}
            className="mx-auto"
          />
        </Link>
        <form className="space-y-2 2xl:space-y-4 [&_input]:px-6 [&_input]:py-3 [&_input]:rounded-full [&_input]:bg-[#1D1A24] [&_input]:text-white [&_input]:w-[100%] md:[&_input]:w-[549px] [&_input]:placeholder-[#A6A6A6] [&_input]:text-sm [&_input]:focus:outline-none [&_label]:font-[400] [&_p]:text-start [&_p]:font-[600] [&_p]:py-6" action="#">
          <div className="flex 2xl:gap-2 gap-1 items-start flex-col">
            <label>*Email</label>
            <input
              type="text"
              placeholder="Enter Here"
              className="inter"
              required
            />
          </div>
          <div className="flex 2xl:gap-2 gap-1 items-start flex-col">
            <label>*Password</label>
            <input
              type="text"
              placeholder="Enter Here"
              className="inter"
              required
            />
          </div>
          <Link href="#" className="w-fit block"><p>Forgot Password?</p></Link>
        </form>
        <p className="text-sm py-6 2xl:text-[16px]">I am not a robot reCAPTCHA</p>
        <p className="text-sm 2xl:text-[16px]">Don&apos;t have an account? <Link href="#"><strong>Sign Up</strong></Link></p>
        <p className="caveat !text-[19px] py-6">Change is in the air.</p>
        <Link href=""><button className="bg-[#F80C5B] hover:bg-[#7238fd] mb-6 transition-all text-sm rounded-full py-2 2xl:py-3 md:w-[549px] w-[100%]">Next</button></Link>

      </div>
    </section>
  )
}
