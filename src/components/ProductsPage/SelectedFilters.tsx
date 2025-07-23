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
import { useCheckboxValueContext } from '../CheckboxValueContext';

const SelectedFilters = (props: any) => {
  const { data, setData } = useCheckboxValueContext()


  const { filter, setIsFilter } = props


  const ClearFilter = () => {
    setData([])
  }

  const removeItem = (currentItemValue: string) => {
    setData((previousValue) => previousValue.filter((item) => 
      item !== currentItemValue
    ))
  }

  return (
    <div className='flex flex-wrap items-start gap-x-3 pb-5 '>
      <Sheet>
        <SheetTrigger className='block xl:hidden text-sm'>All Filters</SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>
              Description
            </SheetDescription>
          </SheetHeader>
          <div className={`absolute left-0 right-0  h-[100vh] p-10  ${filter ? "bg-gray-100" : "bg-[#f7f3ff]"}`}>

            <Filters prefix={"sheet"} />

          </div>


        </SheetContent>
      </Sheet>

      {
        data.length > 0 && (
          <p className='text-sm flex items-center gap-x-1' onClick={ClearFilter}>
            <IoClose className='cursor-pointer' />
            Clear Filters
          </p>
        )
      }

      {data.map((currentItemValue, index) => (
        <p key={index} className="text-sm flex items-center gap-x-1">
          <IoClose className="cursor-pointer" onClick={() => removeItem(currentItemValue)} />
          {currentItemValue}
        </p>
      ))}

    </div>

  )
}

export default SelectedFilters