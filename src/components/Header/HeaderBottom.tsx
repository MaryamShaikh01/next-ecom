import Basket from '@/components/svg/Basket'
import Heart from '@/components/svg/WishListHeart'
import MapSvg from '@/components/svg/Map'
import UserIcon from '@/components/svg/UserIcon'
import React from 'react'
import Navigation from '../ShadCN/Navigation'



const HeaderBottom = () => {
    return (
        <div className='border-b-1 border-b-[var(--border)]'>
            <div className='px-[10px] m-auto w-[80vw] flex justify-between py-4'>
                <div className='flex items-center gap-x-5'>
                    <img src="/logo.svg" alt="" />
                    <p className='text-2xl text-black font-bold relative'>JinStore <span className='text-[var(--primary)] font-normal text-[7px] absolute top-0 right-0'>com</span></p>
                    <MapSvg></MapSvg>
                    <p className='flex flex-col leading-3 text-[11px] text-[#4f5159]'>Deliver to <span className='text-[13px] text-[var(--text-primary)] font-medium'>all</span></p>

                </div>
                <input type="search" name="search" id="search-cloth" placeholder="Search for products, categories or brands..."
                    className="bg-[var(--secondary)] w-[55%] pl-10  py-2.5 bg-[url('/search.svg')] bg-no-repeat bg-position-[10px]  rounded-[8px]" />
                <div className='flex items-center gap-x-5'>


                    <UserIcon></UserIcon>
                    <p className='flex flex-col leading-3 text-[11px] text-[#4f5159]'>Sign In<span className='text-[13px] text-[var(--text-primary)] font-medium'>Account</span></p>
                    <Heart></Heart>
                    <Basket></Basket>
                </div>

            </div>
            <div className='px-[10px] m-auto w-[80vw] flex justify-between py-4'>
                <div className='flex justify-between items-center gap-x-5'>
                <Navigation></Navigation>
                <p className='text-[15px] font-semibold'>Shop</p>
                <p className='text-[15px] font-semibold'>Fruits & Vegetables</p>
                <p className='text-[15px] font-semibold'>Beverages</p>
                <p className='text-[15px] font-semibold'>Blog</p>
                <p className='text-[15px] font-semibold'>Contact</p>

                </div>
                <div className='flex justify-between items-center gap-x-5'>

                <p className='text-[15px] font-semibold'>Trending Products</p>
                <p className='text-[15px] font-semibold text-[var(--accent)]'>Almost Finished <span className='ml-2 px-2 py-1.5 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg'>SALE</span></p>
                </div>
            </div>

        </div>


    )
}

export default HeaderBottom 