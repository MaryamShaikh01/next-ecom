import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, X } from 'lucide-react'

const WishList = () => {
    return (
        <>
        <div className='border-1 border-[var(--border)] rounded-md text-md  px-3 py-3'>

            <div
                className="relative grid grid-cols-1 lg:grid-cols-[0.5fr_3fr_1fr_1fr] first:gap-x-0 gap-x-5  items-center  border-b-1 border-b-[#EDEEF2] py-5" id="">
                <button type="button" className=" absolute lg:static top-[20px] md:flex md:justify-center md:items-center right-0  cursor-pointer">

                    <X />

                </button>
                <div
                    className=" grid grid-cols-[auto_1fr_auto] items-start pr-5  md:items-center justify-center gap-x-5 ">

                    <Image src="/hand-tossed-pizza.png" alt="item 1" width="110" height="110"
                        className=" w-[80px] md:min-w-[110px] h-[80px] md:min-h-[110px] object-cover object-top rounded-[4px]" />
                    <div className="grid gap-y-1">

                        <p className="font-semibold text-[var(--dark-black)] p-20-16">Product Name</p>
                        <p className=" font-semibold text-[var(--dark-black)] p-20-16">Brand : <span
                            className="text-[var(--light-black)] font-normal p-20-16"> Product Brand</span></p>
                        <p className=" font-semibold text-[var(--dark-black)] p-20-16">Quantity : <span
                            className="text-[var(--light-black)] font-normal p-20-16"> 1</span></p>
                    </div>
                </div>
                <p className=" font-semibold text-[var(--light-black)] p-20-16">$44.0</p>
                 <button type="button"
                    className=" whitespace-nowrap cursor-pointer w-fit px-4 md:px-7 py-1.5 md:py-3 font-semibold rounded-lg bg-[var(--primary)] hover:bg-violet-900 text-white">
                    Add to Cart</button>
            </div>



            <div
                className="relative grid grid-cols-1 lg:grid-cols-[0.5fr_3fr_1fr_1fr] first:gap-x-0  items-center  py-5" id="">
                <button type="button" className=" absolute lg:static top-[20px] md:flex md:justify-center md:items-center right-0  cursor-pointer">

                    <X />

                </button>
                <div
                    className=" grid grid-cols-[auto_1fr_auto] items-start pr-5  md:items-center justify-center gap-x-5 ">

                    <Image src="/hand-tossed-pizza.png" alt="item 1" width="110" height="110"
                        className=" w-[80px] md:min-w-[110px] h-[80px] md:min-h-[110px] object-cover object-top rounded-[4px]" />
                    <div className="grid gap-y-1">

                        <p className="font-semibold text-[var(--dark-black)] p-20-16">Product Name</p>
                        <p className=" font-semibold text-[var(--dark-black)] p-20-16">Brand : <span
                            className="text-[var(--light-black)] font-normal p-20-16"> Product Brand</span></p>
                        <p className=" font-semibold text-[var(--dark-black)] p-20-16">Quantity : <span
                            className="text-[var(--light-black)] font-normal p-20-16"> 1</span></p>
                    </div>
                </div>
                <p className=" font-semibold text-[var(--light-black)] p-20-16">$44.0</p>
                <button type="button"
                    className=" whitespace-nowrap cursor-pointer w-fit px-4 md:px-7 py-1.5 md:py-3 font-semibold rounded-lg bg-[var(--primary)] hover:bg-violet-900 text-white">
                    Add to Cart</button>
            </div>
        </div>

            <div className="flex flex-col justify-center items-center text-center">

                <div className="w-[80%] py-[40px] md:py-[80px] px-[20px] md:px-[40px] flex flex-col justify-center items-center gap-1 rounded-sm shadow-[-2px_-2px_4px_0px_rgba(0,_0,_0,_0.05),_2px_2px_4px_0px_rgba(0,_0,_0,_0.05)]">

                    <div className='w-[70px] h-[70px] sm:w-[170px] sm:h-[170px] bg-green-100 rounded-full flex items-center justify-center'>
                        <Heart className='text-green-600 w-20 h-20' />

                    </div>
                    <p className=" text-3xl font-semibold mt-10">Your wishlist is empty.</p>
                    <p className="text-center ">You don’t have any products in the wishlist yet. You will find a lot
                        of interesting products on our Shop page.</p>
                    <Link href="/products">
                        <button type="button"
                            className=" mt-10 w-fit px-3 md:px-8 py-3 font-semibold rounded-lg bg-[var(--primary)] text-white  cursor-pointer">
                            Continue Shopping</button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default WishList