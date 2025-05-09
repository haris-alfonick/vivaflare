import Link from "next/link"

export default function Congratulation() {
    return (
        <section className="relative h-full bg-[#14121B] m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px]">
            <div className="text-white text-center absolute top-0 right-0 w-fit mx-auto mt-16 h-[100%] bottom-0 left-0 sm:px-0 px-4 [&_h2]:2xl:text-[42px] sm:[&_h2]:w-[549px] [&_h2]:w-[100%] [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
                <h2 className="inter">CONGRATULATIONS</h2>
                <p>You&apos;re now part of the family!</p>
                <p className="w-[549px] pt-3">You will also get early access to our platform&apos;s updates and upcoming features. Isn&apos;t that cool? You get to be part of our beta-testing crew where feedback helps shape a community platform made for you!</p>
                <p className="pt-3">You can always opt-out any time by e-mail.</p>

                <p className="absolute left-0 right-0 bottom-[150px]">You are beautiful. You are seen. You are loved.</p>
                <Link href="#"><button className="bg-[#F80C5B] hover:bg-[#7238fd] transition-all sm:mx-0 text-sm absolute left-0 right-0 bottom-[90px] rounded-full py-2 2xl:py-3 md:w-[549px] w-[100%]">Next</button></Link>

            </div>
        </section>
    )
}
