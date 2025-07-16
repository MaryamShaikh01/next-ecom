import React from 'react'

const Banner = () => {
  return (
       <div className="  bg-cover bg-no-repeat px-5 py-10 rounded-[12px] flex flex-col gap-y-1" style={{ backgroundImage: `url(/banner-12.png)` }}>
                        {/* <div className='w-[400px]'> */}

                        <p className='text-[#7C2D12] font-semibold text-xs bg-[#FFEDD5] w-fit px-2 py-1 rounded-4xl'>Only This Week</p>
                        <p className='text-[22px] w-[50%] text-[var(--text-primary)] font-bold'>Grocery store with different measures</p>
                        <p className='text-[var(--text-secondary)] w-[50%] text-[13px]'>We have prepared special discounts for you on grocery
                            products...</p>
                        <button type='button' className='mt-2 border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center w-fit'>Shop Now<img src="/Icon.svg" alt="" /></button>
                        {/* </div> */}

                    </div>
  )
}

export default Banner