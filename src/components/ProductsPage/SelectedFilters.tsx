import React from 'react'
import { IoClose } from "react-icons/io5";


const SelectedFilters = () => {
  return (
    <div className='flex  gap-x-3 pb-5 '>
      <p className='text-sm flex items-center gap-x-1'>
        <IoClose className='cursor-pointer' />
        Clear Filters
      </p>
      <p className='text-sm flex items-center gap-x-1'>
        <IoClose className='cursor-pointer' />

        Fruits and Vegetables
      </p>
    </div>

  )
}

export default SelectedFilters