import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const BlogPagination = () => {
  return (
   <>
    <Pagination className='py-5'>
      <PaginationContent>
        {/* <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" >
            2
          </PaginationLink>
        </PaginationItem>
        <IoIosArrowForward/>
        {/* <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
   </>
  )
}

export default BlogPagination