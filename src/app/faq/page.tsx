import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section className="relative scrollbar h-full pt-[22px] px-[25px] pb-0">
      <div className="bg-[#14121B] h-full rounded-tl-[30px] rounded-tr-[30px]">
        <div className="text-white text-center absolute max-sm:px-[35px] max-md:pt-4 top-0 right-0 w-fit m-auto 2xl:h-fit h-full bottom-0 left-0 2xl:[&_h2]:mt-0 [&_h2]:mt-4 [&_h2]:mx-auto [&_h2]:2xl:text-[42px] sm:[&_h2]:w-[549px] [&_h2]:w-[100%] [&_h2]:md:text-[32px] [&_h2]:text-[25px] [&_h2]:font-bold [&_p]:text-sm [&_p]:2xl:text-[16px]">
          <h2 className="inter">FAQ&apos;S</h2>
          <p>We&apos;re committed to providing a safe and age-appropriate community experience.</p>
          <Accordion type="single" collapsible className="w-full lg:w-[980px] pt-10 pb-4">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6 flex flex-col mr-0! md:mr-3! gap-[25px] sm:mr-3">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="col-span-12 mt-6 md:mt-0 md:col-span-6 flex flex-col ml-0! md:ml-3! gap-[25px] sm:ml-3">
                <AccordionItem value="item-5">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>How long until we deliver your first blog post?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consectetur esse libero vitae corrupti officiis, obcaecati delectus modi id dolorum optio voluptatem unde quae quidem.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  )
}