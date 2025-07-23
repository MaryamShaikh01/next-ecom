import React from 'react'
import LikeHeart from '../svg/LikeHeart'
import data from '../data.json'
import CartBasket from '../svg/CartBasket'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'


const DealsOfDaySection = () => {
    return (
        <>
            <div className='m-auto sm:w-[80vw] px-2.5'>

                {/* grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] */}
                <div className=' flex flex-col gap-y-5 2xl:grid 2xl:grid-cols-[auto_1fr] gap-x-8'>

                    <div className=' border-1 border-[var(--border)] rounded-xl  flex flex-col min-[340px]:flex-row 2xl:flex-col '>
                        {data.slice(0, 2).map((item) =>


                            <div className='flex flex-col lg:grid grid-cols-[auto_1fr] w-full sm:items-center items-start p-5 border-r-1 border-r-[var(--border)] border-b-1 border-b-[var(--border)] '>

                             <div className="relative w-full flex justify-center items-center ">
                                    <img src={item.image} alt={item.productTitle} className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                                    <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                        <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{item.discountPercentage}</span>
                                        <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                                    </div>
                                    <p className='absolute left-0 bottom-0 bg-gradient-to-r from-lime-300 to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>{item.badgeText}</p>

                                </div>


                                <div className=" flex flex-col justify-items-start w-full gap-y-1">

                                    <p className="line-clamp-1 text-sm">
                                        {item.productTitle}
                                    </p>
                                    <span className='flex items-center gap-3'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                                        </svg>
                                        <span className=''>3</span>
                                    </span>
                                    <strong className="text-[22px] font-bold text-[var(--accent)] flex items-center gap-x-2"> {item.ourPrice}<span className='text-base font-medium text-[var(--text-primary)] line-through'>{item.ourPrice}</span></strong>

                                             <Link href="/cart" className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3 hover:bg-violet-50 md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></Link>
                                </div>
                            </div>
                        )}

                    </div>


                    <div className='!border-4 !border-[var(--accent)] rounded-xl flex flex-col md:grid grid-cols-[auto_1fr] p-5 border-r-1 border-r-[var(--border)] col-start-2 row-start-1 row-span-2 border-b-1 border-b-[var(--border)] justify-center items-center gap-5'>
                        {
                            data.slice(1, 2).map((product) => (
                                <>

                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <Image src="/deals-large-product.png" alt="deals large product" width={400} height={400} className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] 2xl:w-[400px] 2xl:h-[400px] object-cover " />
                                            <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                                <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>32423</span>
                                             <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                                            </div>
                                            <p className='uppercase absolute left-0 bottom-0 bg-gradient-to-r from-lime-300  to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>Cold Sale</p>
                                        </div>
                                        <div className=" flex flex-col justify-items-start gap-y-1 ">
                                            <span className='flex items-center gap-3'>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 15" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#FACC15" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FACC15" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FACC15" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FACC15" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FACC15" />
                                                </svg>
                                                <span className=''>3</span>
                                            </span>
                                            <p className="line-clamp-1 text-xl font-semibold">
                                                Great Value Rising Crust Frozen Pizza, Supreme
                                            </p>

                                                <strong className="text-[22px] font-bold text-[var(--accent)] flex gap-x-2 items-center">$43.00<span className='text-base font-medium text-[var(--text-primary)] line-through'>$23.00</span></strong>
                                            <p>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                                                luctus malesuada tincidunt. Class aptent taciti sociosqu
                                                ad litora torquent Vivamus adipiscing nisl ut dolor
                                                dignissim semper.</p>
                                            <hr className='text-[var(--border)]' />
                                            <div className='flex flex-col gap-3 py-5'>

                                                <p >This product is about to run out</p>
                                                <span className='bg-gradient-to-r from-yellow-400 to-red-600 h-1.5'></span>
                                                <span>available only : <strong>18</strong></span>
                                            </div>
                                            <button className='bg-[var(--btn-green-bg)] flex  gap-3 items-center p-4 rounded-xl hover:bg-green-800 cursor-pointer'>
                                                <ShoppingBag className='text-white h-5 w-5' strokeWidth={1.5} />
                                                <span className='text-white font-bold'>Add to Cart</span>
                                            </button>
                                            {/* <button type='button' className=' border-1 border-[var(--primary)] rounded-3xl px-5 py-1 text-[var(--primary)] flex gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></button> */}
                                        </div>

                                </>
                            ))
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default DealsOfDaySection