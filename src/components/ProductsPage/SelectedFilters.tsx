import React from 'react'
import { IoClose } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from '@radix-ui/react-slider';
import Filters from './Filters';

const SelectedFilters = (props: any) => {


  const { filter, setIsFilter } = props


  return (
    <div className='flex flex-wrap items-start gap-x-3 pb-5 '>
      <Sheet>
        <SheetTrigger className='block xl:hidden text-sm'>All Filters</SheetTrigger>
        <SheetContent>

          <div className={`absolute left-0 right-0  h-[100vh] p-10  ${filter ? "bg-gray-100" : "bg-[#f7f3ff]"}`}>

            <Filters />

          </div>


        </SheetContent>
      </Sheet>

      <p className='text-sm flex items-center gap-x-1'>
        <IoClose className='cursor-pointer' />
        Clear Filters
      </p>
      <p className='text-sm flex items-center gap-x-1'>
        <IoClose className='cursor-pointer' />

        Fruits and Vegetables
      </p>
      <p className='text-sm flex items-center gap-x-1'>
        <IoClose className='cursor-pointer' />

        data dispaly here
      </p>

    </div>

  )
}

export default SelectedFilters