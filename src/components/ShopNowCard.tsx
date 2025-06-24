import React from 'react'

const ShopNowCard = () => {
  return (
    <>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-8   px-[10px] m-auto w-[80vw] py-10'>

    <div className="bg-[url('/banner-01.jpg')] bg-cover bg-no-repeat px-5 py-10 rounded-[12px]  ">
    <p className='text-[var(--orange)] font-medium text-xs'>Only This Week</p>
    <p className='text-[22px] text-[var(--text-primary)] font-bold'>Quality eggs at an <br/>affordable price</p>
    <p className='text-[var(--text-secondary)] text-[13px]'>Eat one every day</p>
    <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center'>Shop Now <img src="/Icon.svg" alt="" /></button>
    </div>

  <div className="bg-[url('/banner-01.jpg')] bg-cover bg-no-repeat px-5 py-10 rounded-[12px]  ">
    <p className='text-[var(--orange)] font-medium text-xs'>Only This Week</p>
    <p className='text-[22px] text-[var(--text-primary)] font-bold'>Quality eggs at an <br/>affordable price</p>
    <p className='text-[var(--text-secondary)] text-[13px]'>Eat one every day</p>
    <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center'>Shop Now <img src="/Icon.svg" alt="" /></button>
    </div>

      <div className="bg-[url('/banner-01.jpg')] bg-cover bg-no-repeat px-5 py-10 rounded-[12px] ">
    <p className='text-[var(--orange)] font-medium text-xs'>Only This Week</p>
    <p className='text-[22px] text-[var(--text-primary)] font-bold'>Quality eggs at an <br/>affordable price</p>
    <p className='text-[var(--text-secondary)] text-[13px]'>Eat one every day</p>
    <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center'>Shop Now <img src="/Icon.svg" alt="" /></button>
    </div>

    </div>
    </>
  )
}

export default ShopNowCard