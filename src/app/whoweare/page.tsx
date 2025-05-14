import Image from "next/image";
import Link from "next/link";

export default function Whoweare() {
  return (
    <section className="scrollbar relative h-full pt-[22px] px-[25px] pb-0">
      <div className="bg-[#14121B] h-full rounded-tl-[30px] rounded-tr-[30px]">
        <div className="grid pt-4 px-[10px] max-md:px-[45px] grid-cols-12 gap-4 container mx-auto items-center align-middle absolute top-0 right-0 m-auto h-full bottom-0 left-0">
          <div className="mx-auto lg:col-span-7 col-span-12 max-2xl:[&_button]:mb-4 max-2xl:[&_h2]:pt-7 [&_h2]:font-extrabold [&_h2]:leading-[0.6] text-white [&_h2]:lg:text-[30px] [&_h2]:2xl:text-[50px] [&_h3]:text-[65px] [&_h3]:text-transparent [&_h3]:leading-none [&_h3]:2xl:text-[85px] [&_h3]:bg-gradient-to-l [&_h3]:from-[#F80C67] [&_h3]:to-[#ED1C24] [&_h3]:bg-clip-text [&_h3]:font-[600] [&_strong]:pt-[10px] md:[&_strong]:w-[407px] [&_strong]:block [&_strong]:text-[20px] 2xl:[&_strong]:text-[23px] [&_p]:w-full lg:[&_p]:w-[625px] [&_p]:pt-[9px] [&_p]:pb-[16px] [&_button]:px-12 [&_button]:transition-all [&_button]:text-white [&_button]:font-semibold [&_button]:text-sm [&_button]:py-2 [&_button]:rounded-full [&_button]:bg-[#F80C5B] [&_button]:hover:bg-gradient-to-l [&_button]:hover:from-[#ef005d] [&_button]:hover:to-[#47b4d5]">
            <h2 className="inter">Who We Are</h2>
            <h3 className="caveat">VivaFlare!</h3>
            <strong className="rubik">A creation platform built for event lovers, planners, and trendsetters.</strong>
            <p>We empower people to discover, design, and bring events to life, whether it&apos;s a backyard concert, a fashion show, a music festival, or a professional convention. More than just ticketing, VivaFlare plans to connect communities through shared experiences, creative tools, and meaningful collaboration. Our platform celebrates the full creative process, by giving every contributor a seat at the table. VivaFlare is where creativity meets culture, and where every moment becomes an unforgettable movement.</p>
            <Link href="/joinus"><button className="inter">
              Join Us
            </button></Link>
          </div>
          <div className="lg:col-span-5 col-span-12 px-4 lg:px-0 mx-auto">
            <Image
              src="/images/whoweare.webp"
              alt="image"
              width={350}
              height={300}
              className="w-[380px] 2xl:w-[500px] h-[380px] 2xl:h-[500px] object-contain max-2xl:pt-10 max-md:pt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}