import Image from "next/image";
import Link from "next/link";

export default function Whoweare() {
  return (
    <section className="relative h-full bg-[#14121B] m-7 mb-0! rounded-tl-[30px] rounded-tr-[30px]">
      <div className="grid grid-cols-12 gap-4 container mx-auto items-center align-middle absolute top-0 right-0 m-auto h-fit bottom-0 left-0">
        <div className="mx-auto px-[15px] md:px-0 lg:col-span-6 col-span-12 [&_h2]:font-extrabold [&_h2]:leading-[0.3] text-white [&_h2]:lg:text-[30px] [&_h2]:2xl:text-[50px] [&_h3]:text-[65px] [&_h3]:text-transparent [&_h3]:leading-none [&_h3]:2xl:text-[85px] [&_h3]:bg-gradient-to-l [&_h3]:from-[#F80C67] [&_h3]:to-[#ED1C24] [&_h3]:bg-clip-text [&_h3]:font-[600] [&_strong]:pt-[8px] 2xl:[&_strong]:pt-[20px] md:[&_strong]:w-[407px] [&_strong]:block [&_strong]:text-[20px] 2xl:[&_strong]:text-[23px] [&_p]:w-full lg:[&_p]:w-[505px] [&_p]:py-[10px] 2xl:[&_p]:py-[20px] [&_button]:px-12 [&_button]:transition-all [&_button]:text-white [&_button]:font-semibold [&_button]:text-sm [&_button]:py-2 [&_button]:rounded-full [&_button]:bg-[#F80C5B] [&_button]:hover:bg-gradient-to-l [&_button]:hover:from-[#ef005d] [&_button]:hover:to-[#47b4d5]
">
          <h2 className="inter">Who We Are</h2>
          <h3>VivaFlare!</h3>
          <strong className="rubik">A creation platform built for event lovers, planners, and trendsetters.</strong>
          <p>We empower people to discover, design, and bring events to life, whether it&apos;s a backyard concert, a fashion show, a music festival, or a professional convention. More than just ticketing, VivaFlare plans to connect communities through shared experiences, creative tools, and meaningful collaboration. Our platform celebrates the full creative process, by giving every contributor a seat at the table. VivaFlare is where creativity meets culture, and where every moment becomes an unforgettable movement.</p>
          <Link href="#"><button className="inter">
            Join Us
          </button></Link>
        </div>
        <div className="lg:col-span-6 col-span-12 px-4 lg:px-0 mx-auto">
          <Image
            src="/images/whoweare.webp"
            alt="image"
            width={350}
            height={300}
            className="w-[380px] 2xl:w-[500px] h-[380px] 2xl:h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}