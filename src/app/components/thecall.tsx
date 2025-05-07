import Link from "next/link";

export default function TheCall() {
  return (
    <>
      <section className="relative h-full bg-[url('/images/thecallbanner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-l from-[#bd033cc4] to-[#1F025E99] z-0" />
        <div className="sm:px-0 px-[20px] text-center w-full 2xl:w-[650px] md:w-[500px] align-middle absolute top-0 right-0 m-auto h-fit bottom-0 left-0 z-10 [&_h2]:text-[25px] [&_h2]:leading-[1.2] [&_h2]:lg:text-[40px] [&_h2]:2xl:text-[66px] [&_h2]:text-center [&_h2]:text-white [&_p]:text-white [&_p]:sm:text-[24px] [&_p]:2xl:text-[32px] [&_button]:font-semibold [&_button]:px-6 [&_button]:py-2 [&_button]:text-white [&_button]:hover:cursor-pointer [&_button]:mt-6 [&_button]:rounded-full [&_p]:leading-[1.2]">
          <h2 className="rubik">Unleash Your Event Ignite The Culture.</h2>
          <p>
            Takes one moment to make a movement
          </p>
          <Link href="#">
            <button className="transition-all bg-gradient-to-l from-[#ED1C24] to-[#F80C67] hover:from-[#d3007d] hover:to-[#743bf6]">
              Get Early Access
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
