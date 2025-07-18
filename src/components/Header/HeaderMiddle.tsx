import Link from 'next/link'
import React from 'react'

const HeaderMiddle = () => {
  return (
<>
    <div className='border-b-1 border-b-[var(--border)] hidden lg:block'>
      <div className='px-[10px] m-auto sm:w-[80vw] flex justify-between py-2.5 '>

      <div className='flex items-center gap-x-5'>

        <Link href="/" className='text-[var(--text-secondary)] text-xs font-medium'>About Us</Link>
        <Link href="/" className='text-[var(--text-secondary)] text-xs font-medium'>My Account</Link>
        <Link href="/" className='text-[var(--text-secondary)] text-xs font-medium'>Wishlist</Link>
        <p className='pl-5 border-l-1 h-fit border-l-[var(--border)] text-xs text-[var(--text-secondary)]'>We deliver to you everyday from <strong className='text-[var(--orange)]'>7:00 to 23:00</strong></p>
      </div>
      <div className="flex items-center gap-x-5">

        <p className="text-xs text-[var(--text-secondary)]">English</p>
        <p className="text-xs text-[var(--text-secondary)]">USD</p>
        <p className="text-xs text-[var(--text-secondary)]">Order Tracking</p>
      </div>
      </div>
    </div>



</>
  )
}

export default HeaderMiddle