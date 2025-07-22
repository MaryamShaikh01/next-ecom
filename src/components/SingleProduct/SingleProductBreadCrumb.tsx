import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const SingleProductBreadCrumb = () => {
  return (
     <div className='m-auto sm:w-[80vw] flex gap-x-2 px-[10px] py-5 whitespace-nowrap flex-wrap'>
          <p className='flex items-center text-xs text-[var(--text-secondary)] '>Home <IoIosArrowForward/></p>
          <p className='flex items-center text-xs text-[var(--text-secondary)] '>Fruits & Vegetables <IoIosArrowForward/></p>
          <p className='flex items-center text-xs text-[var(--text-secondary)] '>Exotic Fruits & Veggies <IoIosArrowForward/></p>
          <p className='flex items-center text-xs gap-x-1'>Marketside Fresh Organic Bananas, Bunch</p>
        </div>
  )
}

export default SingleProductBreadCrumb