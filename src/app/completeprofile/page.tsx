import Link from "next/link"

export default function CompleteProfile() {
    return (
        <section className="relative bg-[#14121B] m-3 lg:m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px] 2xl:h-[calc(100vh_-_198px)] h-[calc(100vh_-_181px)]">
            <div className="text-white text-center absolute top-0 right-0 w-fit mx-auto mt-6 h-[100%] bottom-0 left-0 px-0 [&_h2]:2xl:text-[42px] sm:[&_h2]:w-[549px] [&_h2]:w-[100%] [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
                <h2 className="inter">Complete Your Profile</h2>
                <p>You&apos;ve signed in — now just a couple more details!</p>
                <form className="pt-5 space-y-2 2xl:space-y-4 [&_input]:px-6 [&_input]:py-3 [&_input]:rounded-full [&_input]:bg-[#1D1A24] [&_input]:text-white [&_input]:w-[100%] md:[&_input]:w-[549px] [&_input]:placeholder-[#A6A6A6] [&_input]:text-sm [&_input]:focus:outline-none [&_label]:font-[400] [&_p]:text-start [&_p]:font-[600] [&_p]:py-0 2xl:[&_p]:py-10" action="#">
                    <div className="flex 2xl:gap-2 gap-1 items-start flex-col">
                        <label>*Phone number</label>
                        <input
                            type="text"
                            placeholder="Enter Here"
                            className="inter"
                            required
                        />
                    </div>
                </form>
                <p className="caveat !text-[19px] absolute left-0 right-0 bottom-[110px]">This will be a home for all creatives, event enthusiasts, and lovers of life.</p>
                <Link href="/completeage"><button className="bg-[#F80C5B] hover:bg-[#7238fd] transition-all sm:mx-0 text-sm absolute left-0 right-0 bottom-[60px] rounded-full py-2 2xl:py-3 md:w-[549px] w-[100%]">Next</button></Link>

            </div>
        </section>
    )
}
