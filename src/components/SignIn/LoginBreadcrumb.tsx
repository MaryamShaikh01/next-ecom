import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const LoginBreadcrumb = () => {
  return (
    <>
     <div className='m-auto sm:w-[80vw] flex gap-x-2 px-[10px] py-5'>
                 <p className='flex items-center text-xs text-[var(--text-secondary)] '>Home <IoIosArrowForward/></p>
                 <p className='flex items-center text-xs gap-x-1'>Login</p>
               </div>
    </>
  )
}

export default LoginBreadcrumb