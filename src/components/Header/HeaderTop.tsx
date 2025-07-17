import React from 'react'

const HeaderTop = () => {
  return (
    <div className='bg-[var(--primary)] py-2.5 hidden lg:block'>
        <div className='px-[10px] m-auto sm:w-[70vw] flex items-center justify-between'>


        <p className='text-white font-semibold text-xs'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
        <div className='flex items-center gap-x-1'>
            <p className='text-white font-medium text-xs opacity-[0.7] pr-2.5'> Until the end of the sale:  </p>
            <span className='text-white font-medium text-[11px] flex items-center gap-1'><strong className='text-white text-lg font-bold'>47</strong>days</span>
            <span className='text-white font-medium text-[11px] flex items-center gap-1'><strong className='text-white text-lg font-bold '>06</strong>hours</span>
            <span className='text-white font-medium text-[11px] flex items-center gap-1'><strong className='text-white text-lg font-bold '>55</strong>minutes</span>
            <span className='text-white font-medium text-[11px] flex items-center gap-1'><strong className='text-white text-lg font-bold '>51</strong>sec.</span>
        </div>
        </div>
    </div>
  )
}

export default HeaderTop