import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


export default function Welcome() {
    return (
        <section className="relative h-full bg-[#14121B] scrollbar 2xl:overflow-hidden! m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px]">
            <div className="text-white text-center absolute top-0 right-0 w-fit m-auto 2xl:h-fit h-[100%] bottom-0 left-0 sm:px-0 px-4 [&_h2]:2xl:text-[42px] sm:[&_p]:w-[630px] [&_p]:mx-auto [&_p]:w-[100%] [&_h2]:md:text-[32px] 2xl:[&_h2]:pt-0 [&_h2]:pt-3 [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
                <h2 className="inter">Viva Flare Welcomes You!</h2>
                <p>Great! Now that you&apos;re in, let&apos;s personalize your experience. Which family best describes you? It&apos;s okay if you are a little bit of everything. Every family will be able to create events. For now, let us know who your closest family is, so we can get you started.</p>



                <Carousel className="pt-5">
                    <CarouselContent>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party1.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party2.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party3.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party4.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party5.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party6.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                        <CarouselItem className="basis-[66.3%] md:basis-[26.3%]"> <Image
                            src="/images/party7.webp"
                            alt="image"
                            height={50}
                            width={200}
                            className="w-[100%] rounded-[10px]"
                        /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    <h2 className="md:w-[740px] w-[100%] m-auto">Fans, Attendees, Advocates, and Guests</h2>
                </Carousel>



                <p className="2xl:mt-20 mt-26">You are beautiful. You are seen. You are loved.</p>
                <Link href="#"><button className="bg-[#F80C5B] hover:bg-[#7238fd] my-4 transition-all text-sm m-auto rounded-full py-2 2xl:py-3 md:w-[549px] w-[100%]">Next</button></Link>

            </div>
        </section>
    )
}
