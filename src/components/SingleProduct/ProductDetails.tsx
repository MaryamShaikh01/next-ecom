'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import ProductSwiper from '@/components/SingleProduct/ProductSwiper'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Link from 'next/link';


const ProductDetails = () => {

    const [tab, setTab] = useState(true)

    return (
        <>
            <div className='sm:w-[80vw] m-auto px-[10px]  grid col-span-1 xl:grid-cols-2 gap-10 '>

                <div className='grid h-fit gap-y-3'>
                    <ProductSwiper/>
                </div>

                <div className='flex flex-col gap-y-5'>

                    <p className='text-4xl font-bold '>Marketside Fresh Organic Bananas, Bunch</p>
                    <div className='flex border-b-1 border-[var(--border)] pb-2 mt-[-10]'>
                        <span className='flex items-center gap-3'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 15" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FACC15" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FACC15" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FACC15" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FACC15" />
                            </svg>
                            <span className='text-[13px] text-[var(--text-secondary)]'>3</span>
                        </span>
                        <span className='border-r-2 border-[var(--border)] mx-3 h-3 my-auto'></span>
                        <span className='text-[13px] text-[var(--text-secondary)]'>SKU:</span>
                        <p className='text-[13px]'>EKJGSUI98</p>

                    </div>
                    <p className='text-sm text-[var(--text-secondary)]'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti
                        sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.</p>

                    <strong className='text-[var(--accent)] text-3xl block'>$66.0 <span className='text-xl text-[var(--text-primary)] font-medium line-through'>$99.0</span></strong>

                    <button type='button' className='bg-[var(--btn-green-bg)] text-white px-3.5 py-3 rounded-lg text-sm font-bold w-fit'>Order on WhatsApp</button>

                    <div className='bg-[var(--light-cream-bg)] border-1 border-[#FFEDD5] rounded-md p-4'>
                        <p className='text-[var(--orange)] text-sm flex items-center font-bold gap-x-2 flex-wrap gap-y-2'>Special Offer:
                            <div className='flex flex-wrap items-center gap-x-1'>

                                <span className='bg-[#FFEDD5] border-1 border-[#FED7AA] justify-center flex items-center w-8 h-8  rounded-md'>2</span>
                                <span className='bg-[#FFEDD5] border-1 border-[#FED7AA] justify-center flex items-center w-8 h-8 rounded-md'>4</span>
                                <span>:</span>
                                <span className='bg-[#FFEDD5] border-1 border-[#FED7AA] justify-center flex items-center w-8 h-8  rounded-md'>5</span>
                                <span className='bg-[#FFEDD5] border-1 border-[#FED7AA]  justify-center flex items-center w-8 h-8 rounded-md'>6</span>
                            </div>
                            <span className='text-[var(--text-secondary)] font-extralight'>Remains until the end of the offer.</span>
                        </p>
                    </div>

                    <div className='flex gap-x-3 gap-y-3 flex-wrap'>
                        <button type='button' className='border-1 border-[var(--gray-border)] py-3 font-medium rounded-md flex items-center  '><FaMinus className=' mx-5 text-xs '/> <span className=' text-sm'>1</span> <FaPlus className='mx-5 text-xs'/></button>
                        
                        <button type='button' className='cursor-pointer bg-[var(--btn-green-bg)] text-white px-10 py-3 rounded-lg text-sm font-bold flex items-center gap-x-3'> <Image src="/basket-icon.svg" alt='basket icon' width={30} height={30} className='w-5 h-5' />Add to cart</button>

                        <Link href="/cart" className='cursor-pointer bg-black text-white px-10 py-3 rounded-lg text-sm font-bold flex items-center gap-x-3 '> <Image src="/basket-icon.svg" alt='basket icon' width={10} height={10} className='w-5 h-5' />Buy Now</Link>
                    </div>

                    <div className='border-1 border-[var(--gray-border)] rounded-md py-3'>
                        <div className='flex gap-x-5 border-b-1 border-b-[var(--border)] px-5 pb-3 items-center'>
                            <Image src="/payment-icon.svg" alt='payment icon' width={30} height={30} className='w-8 h-8' />
                            <p className='text-[var(--text-secondary)]'><span className='text-[var(--text-secondary)] font-semibold'>Payment : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque.</p>
                        </div>

                        <div className='flex gap-x-5  px-5 pt-3 items-center'>
                            <Image src="/warranty-icon.svg" alt='payment icon' width={30} height={30} className='w-8 h-8' />
                            <p className='text-[var(--text-secondary)]'><span className='text-[var(--text-secondary)] font-semibold'>Warranty : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque.</p>
                        </div>
                    </div>

                    <div className='flex gap-x-5 flex-wrap gap-y-3'>
                        <button type='button' className='flex items-center gap-x-3'>
                            <span className='border-1 p-2 rounded-md border-[var(--border)]'>
                                <AiOutlineHeart className='w-4 h-4 text-black' />

                            </span>
                            <p className='text-sm font-medium'>Add to wishlist</p>
                        </button>
                        <button type='button' className='flex items-center gap-x-3'>
                            <span className='border-1 p-2 rounded-md border-[var(--border)]'>
                                <FiShare className='w-4 h-4 text-black' />

                            </span>
                            <p className='text-sm font-medium'>Share this Product</p>
                        </button>
                        <button type='button' className='flex items-center gap-x-3'>
                            <span className='border-1 p-2 rounded-md border-[var(--border)]'>
                                <Image src="/compare-icon.svg" alt='compare icon' height={10} width={10} className='min-w-4 min-h-4' />

                            </span>
                            <p className='text-sm font-medium'>Compare</p>
                        </button>

                    </div>
                </div>

            </div>

            <div className='sm:w-[80vw] m-auto px-[10px]'>
                <div className='flex  border-b-1 border-[var(--border)]'>

                    <button type='button' className={`pr-4 py-4 border-b-2 border-b-white ${tab ? "border-b-2 !border-b-black" : "bg-auto"}`} onClick={() => {
                        setTab(true)
                    }}>Description</button>
                    <button type='button' className={`pr-4 py-4 border-b-2 border-b-white  ${!tab ? "border-b-2 !border-b-black" : "bg-auto"}`} onClick={() => {
                        setTab(false)
                    }}>Reviews</button>
                </div>
                {
                    tab ? (

                        <div className='pt-4 flex flex-col gap-y-3'>
                            <p className=''>Description ipsum dolor, sit amet consectetur adipisicing elit. Repellat, fuga totam. Ab nostrum nulla voluptates perferendis quisquam officiis tempora sequi accusantium aliquam id doloribus eos ad quibusdam, esse architecto cumque?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, fuga totam. Ab nostrum nulla voluptates perferendis quisquam officiis tempora sequi accusantium aliquam id doloribus eos ad quibusdam, esse architecto cumque?</p>
                        </div>
                    )
                        :

                        <div className='pt-4 flex flex-col gap-y-3'>

                            <p>Reviews ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deleniti aliquid adipisci, esse soluta quas ipsa! Perspiciatis inventore, ut nostrum aperiam repellendus nesciunt alias veritatis, expedita sequi excepturi asperiores delectus?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deleniti aliquid adipisci, esse soluta quas ipsa! Perspiciatis inventore, ut nostrum aperiam repellendus nesciunt alias veritatis, expedita sequi excepturi asperiores delectus?</p>
                        </div>

                }
            </div>
        </>
    )
}

export default ProductDetails