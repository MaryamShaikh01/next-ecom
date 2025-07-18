import Basket from '@/components/svg/Basket'
import Heart from '@/components/svg/WishListHeart'
import MapSvg from '@/components/svg/Map'
import UserIcon from '@/components/svg/UserIcon'
import React from 'react'
import Navigation from '../ShadCN/Navigation'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'


const HeaderBottom = () => {
    return (
        <div className='border-b-1 border-b-[var(--border)]'>
            <div className='px-[10px] m-auto sm:w-[80vw] flex gap-x-5 items-center flex-wrap md:flex-nowrap justify-between py-4'>
                <div className='flex items-center gap-x-5'>

                    <Link href="/" className='flex items-center gap-x-5 w-max'>
                        <img src="/logo.svg" alt="jin store logo" />
                        <p className='text-2xl text-black font-bold relative'>JinStore <span className='text-[var(--primary)] font-normal text-[7px] absolute top-0 right-0'>com</span></p>

                    </Link>

                    <div className='flex items-center'>

                        <MapSvg ></MapSvg>

                        <p className='flex flex-col leading-3 text-[11px] whitespace-nowrap text-[#4f5159]'>Deliver to <span className='text-[13px] text-[var(--text-primary)] font-medium'>all</span></p>
                    </div>
                </div>

                <input type="search" name="search" id="search-cloth" placeholder="Search for products, categories or brands..."
                    className="hidden lg:block bg-[var(--secondary)] w-[55%] pl-10  py-2.5 bg-[url('/search.svg')] bg-no-repeat bg-position-[10px]  rounded-[8px]" />

                <div className='flex items-center gap-x-5'>
                    <UserIcon></UserIcon>
                    <p className='flex flex-col leading-3 text-[11px] text-[#4f5159]'>Sign In<span className='text-[13px] text-[var(--text-primary)] font-medium'>Account</span></p>
                    <Heart></Heart>
                    <Basket></Basket>
                </div>

            </div>
            <div className='px-[10px] m-auto sm:w-[80vw] block lg:hidden pb-4'>
                <input type="search" name="search" id="search-cloth" placeholder="Search for products, categories or brands..."
                    className="bg-[var(--secondary)]  w-full m-auto pl-10  py-2.5 bg-[url('/search.svg')] bg-no-repeat bg-position-[10px]  rounded-[8px]" />
            </div>


            <div className='px-[10px] m-auto sm:w-[80vw] hidden lg:flex justify-between py-4'>
                <div className='flex justify-between items-center gap-x-5'>

                    <Select>
                        <SelectTrigger className="w-[60px] p-0 mt-0 gap-0 text-[15px] font-semibold border-none shadow-none cursor-pointer">
                            <SelectValue placeholder="Home" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[60px] p-0 mt-0 gap-0 text-[15px] font-semibold border-none shadow-none cursor-pointer">
                            <SelectValue placeholder="Shop" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <p className='text-[15px] font-semibold'>Fruits & Vegetables</p>
                    <p className='text-[15px] font-semibold'>Beverages</p>
                    <p className='text-[15px] font-semibold'>Blog</p>
                    <p className='text-[15px] font-semibold'>Contact</p>

                </div>
                <div className='flex justify-between items-center gap-x-5'>

                    <Select>
                        <SelectTrigger className="w-[180px] text-[15px] font-semibold border-none shadow-none cursor-pointer">
                            <SelectValue placeholder="Trending Products" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>


                    <Select>
                        <SelectTrigger className="w-[230px] text-[15px] font-semibold text-[var(--accent)] border-none shadow-none cursor-pointer">
                            <SelectValue placeholder="Almost Finished" />
                            <span className=' px-2 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg'>SALE</span>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

        </div>


    )
}

export default HeaderBottom 