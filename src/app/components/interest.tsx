import Image from "next/image"
import Link from "next/link"

export default function Interest() {
    return (
        <section className="relative h-full bg-[#14121B] scrollbar m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px]">
            <div className="text-white text-center absolute top-0 right-0 w-fit mx-auto m-auto h-[96%] 2xl:h-fit bottom-0 left-0 sm:px-0 px-4 [&_h2]:2xl:text-[42px] sm:[&_h2]:w-[549px] [&_h2]:w-[100%] 2xl:[&_h2]:m-auto [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-center [&_p]:text-[13px] [&_p]:2xl:text-[17px]">
                <h2 className="inter">Viva Flare Welcomes You!</h2>
                <p>We care about what you love.</p>
                <p>Tell us your 3-5 interests so we can further personalize your experience.</p>
                <div className="grid grid-cols-12 pt-3 md:gap-0 gap-[12px]">
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Music & Nightlife</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Arts & Culture</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Food & Drink</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Learning & Development</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-3 md:gap-0 gap-[12px]">
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Creative Workshops & DIY</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Health & Wellness</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Networking & Social</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>The Great Outdoors</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 pt-3 md:gap-0 gap-[12px] pb-5">
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Games & Pop Culture</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Causes & Community</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>Tech & Innovation</p>
                    </div>
                    <div className="col-span-6 md:col-span-3 [&_p]:pt-3">
                        <Image
                            src="/images/cheers.webp"
                            alt="image "
                            width={100}
                            height={100}
                            className="2xl:w-[120px] 2xl:h-[120px] rounded-[100%] mx-auto"
                        />
                        <p>LGBTQ+ Events</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
