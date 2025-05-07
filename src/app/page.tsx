// import TheCall from "./components/thecall";
// import Whoweare from "./components/whoweare";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"


// export default function Home() {
//   return (
//     <>

//       <Pagination>
//   <PaginationContent>
//     <PaginationItem>
//       <PaginationPrevious href="#" />
//       <TheCall />
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#">1</PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationEllipsis />
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationNext href="#" />
//       <Whoweare />
//     </PaginationItem>
//   </PaginationContent>
// </Pagination>

//     </>
//   );
// }


import TheCall from "./components/thecall";
import Whoweare from "./components/whoweare";


export default function Home() {
  return (
    <>
      <TheCall />
      {/* <Whoweare /> */}
    </>
  );
}

