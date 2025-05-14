import Link from "next/link"

export default function Completeage() {
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
                    <Link href="/welcome"><button className="bg-[#F80C5B] hover:bg-[#7238fd] transition-all text-sm absolute left-0 right-0 bottom-[60px] max-md:bottom-[-120px] rounded-full py-2 2xl:py-3 md:w-[549px] w-[80%] m-auto">Next</button></Link>
                </div>

            </div>
        </section>
    )
}
