import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

const CartProducts = () => {
    return (

        <>


            <div className="flex lg:flex-col">

                <div className="bg-[var(--primary)] lg:bg-[var(--primary)] shrink-0  sm:flex sticky top-0 ">
                    <div
                        className=" px-2.5 lg:py-3 place-items-start lg:place-items-center m-auto w-fit lg:w-[85vw] 2xl:sm:w-[80vw] h-full hidden md:grid grid-cols-1 grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr] lg:grid lg:grid-rows-1 lg:grid-cols-[4fr_1fr_1fr_1fr_1fr_1fr] gap-3">
                        <p className="uppercase text-white font-semibold text-md place-self-center md:justify-self-start">Product Details</p>
                        <p className="uppercase text-white font-semibold text-md">Price</p>
                        <p className="uppercase text-white font-semibold text-md">Quantity</p>
                        <p className="uppercase text-white font-semibold text-md">Shipping</p>
                        <p className="uppercase text-white font-semibold text-md">Subtotal</p>
                        <p className="uppercase text-white font-semibold text-md">Action</p>
                    </div>

                    <div className="px-[10px] lg:py-[20px] lg:place-items-center m-auto w-fit lg:w-[85vw] 2xl:sm:w-[80vw]   h-full grid md:hidden grid-cols-1 grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr] gap-y-3 ">
                        <Image src="/icons8-product-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain " />
                        <Image src="/icons8-price-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain " />
                        <Image src="/icons8-numbers-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain " />
                        <Image src="/icons8-delivery-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain " />
                        <Image src="/icons8-cost-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain " />
                        <Image src="/icons8-delete-button-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain " />
                    </div>

                </div>

                <div className="flex overflow-x-auto lg:py-10">

                    <div className=" m-auto lg:w-[85vw] 2xl:sm:w-[80vw] flex lg:flex-col gap-y-5">

                        <div className="cart-item max-w-[350px] md:max-w-[100%] w-fit md:w-[100%] px-[20px]  grid grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr]  md:grid md:grid-rows-1 lg:grid-cols-[4fr_1fr_1fr_1fr_1fr_1fr]  gap-3 justify-items-center items-center border-r-1 border-[var(--border)] md:border-r-0"
                        >
                            <div className="grid grid-cols-[auto_1fr] gap-x-5 justify-self-start self-start">
                                <Image className="min-w-[105px] min-h-[120px] row-span-4" src="/cart-product-2.png"
                                    alt="cart product" width="100" height="100" />
                                <p className="product-name text-[var(--dark-black)] text-lg font-semibold">Name</p>
                                <span className="product-color text-[var(--light-black)] text-sm">Color : Yellow</span>
                                <span className="product-size text-[var(--light-black)] text-sm">Size : XS</span>
                            </div>
                            <p className="product-price text-[var(--dark-black)] text-lg font-semibold">$09.00</p>
                            <button className="flex items-center gap-1 rounded-xl bg-[var(--light-bg-colour)] text-lg font-semibold">
                                <span
                                    className="rounded-tl-xl rounded-bl-xl bg-[var(--light-bg-colour)] pr-2 pl-5 py-2.5 cursor-pointer ext-lg font-semibold hover:bg-purple-300">-</span>
                                <span className='ext-lg font-semibold'>8</span>
                                <span
                                    className=" justify-self-start rounded-tr-xl rounded-br-xl bg-[var(--light-bg-colour)] pl-2 pr-5 py-2.5 cursor-pointer text-xs hover:bg-purple-300">+</span>

                            </button>
                            <p className="text-[#BEBCBD] text-lg font-semibold">FREE</p>
                            <p className="text-[var(--dark-black)] text-lg font-semibold">$29.00</p>
                            <button className="delete-cart-item-btn"><Image src="/delete-icon.svg" alt="delete icon" width={20} height={20} /></button>
                        </div>

                        <div className="cart-item max-w-[350px] md:max-w-[100%] w-fit md:w-[100%] px-[20px]  grid grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr]  md:grid md:grid-rows-1 lg:grid-cols-[4fr_1fr_1fr_1fr_1fr_1fr]  gap-3 justify-items-center items-center border-r-1 border-[var(--border)] md:border-r-0"
                        >
                            <div className="grid grid-cols-[auto_1fr] gap-x-5 justify-self-start self-start">
                                <Image className="min-w-[105px] min-h-[120px] row-span-4" src="/cart-product-2.png"
                                    alt="cart product" width="100" height="100" />
                                <p className="product-name text-[var(--dark-black)] text-lg font-semibold">Name</p>
                                <span className="product-color text-[var(--light-black)] text-sm">Color : Yellow</span>
                                <span className="product-size text-[var(--light-black)] text-sm">Size : XS</span>
                            </div>
                            <p className="product-price text-[var(--dark-black)] text-lg font-semibold">$09.00</p>
                            <button className="flex items-center gap-1 rounded-xl bg-[var(--light-bg-colour)] ext-lg font-semibold">
                                <span
                                    className="rounded-tl-xl rounded-bl-xl bg-[var(--light-bg-colour)] pr-2 pl-5 py-2.5 cursor-pointer ext-lg font-semibold hover:bg-purple-300">-</span>
                                <span >8</span>
                                <span
                                    className=" justify-self-start rounded-tr-xl rounded-br-xl bg-[var(--light-bg-colour)] pl-2 pr-5 py-2.5 cursor-pointer ext-lg font-semibold hover:bg-purple-300">+</span>

                            </button>
                            <p className="text-[#BEBCBD] text-lg font-semibold">FREE</p>
                            <p className="text-[var(--dark-black)] text-lg font-semibold">$29.00</p>
                            <button className="delete-cart-item-btn"><Image src="/delete-icon.svg" alt="delete icon" width={20} height={20} /></button>
                        </div>


                    </div>
                </div>


            </div>

            <div className='border-t-1 border-[var(--border)] '>

                <div className=" grid px-[10px] m-auto sm:w-[80vw]">

                    <table className=" text-[#505050] mt-5 ">
                        <tr className="">
                            <th className=" text-[--dark-black] text-[18px] font-medium text-start py-1.5 ">
                                Sub Total</th>
                            <td className=" py-1.5 px-2 text-end text-[#606060]">$513.00</td>
                        </tr>
                        <tr className="">
                            <th className="text-[--dark-black] text-[18px] font-medium  text-start  py-1.5 ">
                                Shipping</th>
                            <td className=" py-1.5 px-2 text-end ">$5.00</td>
                        </tr>

                        <tr className="">
                            <th className="text-[var(--dark-black)] text-[20px] font-semibold text-start py-5 pr-10">
                                Grand Total</th>
                            <td className=" py-1.5 px-2 text-end text-[20px] text-[var(--dark-black)] font-semibold">
                                $518.00</td>
                        </tr>

                    </table>
                    <hr className="text-[var(--border)]" />
                    <Link href="/checkout" type="button"
                        className="justify-self-center w-fit my-5 px-8 py-2 font-semibold rounded-lg bg-[var(--primary)] text-white cursor-pointer">
                        Proceed To Checkout</Link>
                </div>
            </div>


            <div className='m-auto px-2.5 sm:w-[80vw] flex flex-col-reverse md:grid md:grid-cols-[4fr_1fr] gap-x-5'>

                <div className='flex flex-col '>
                    <div className='ml-auto text-lg font-semibold hidden md:block'>Price</div>

                    <div className='flex flex-col lg:grid grid-cols-[auto_1fr_100px] w-full  py-5 border-y-1 border-[var(--border)]'>

                        <div className="relative w-full flex justify-center items-center ">
                            <img src="/protein-shake.png" alt="protein shake" className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                            <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>25%</span>
                            </div>
                            <p className='absolute left-0 bottom-0 bg-gradient-to-r from-lime-300 to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>BadgeText</p>

                        </div>


                        <div className=" flex flex-col justify-items-start w-full gap-y-1">

                            <p className="line-clamp-1 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores!
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
                            <strong className="flex md:hidden text-[22px] font-bold text-[var(--accent)]  items-center gap-x-2">$35.00<span className='text-base font-medium text-[var(--text-primary)] line-through'>$22.00</span></strong>
                            <p className='text-xs font-semibold text-[var(--dark-gray)]'>Eligible for Free Shipping</p>
                            <p className='text-xs font-semibold text-[var(--dark-gray)] '>See more like this</p>

                            <div className='flex  items-center gap-x-2 w-fit border-1 border-[var(--primary)] rounded-full font-semibold'><span className='cursor-pointer  text-lg font-semibold  px-3'>-</span>5 <span className='cursor-pointer text-lg font-semibold   px-3'>+</span></div>



                        </div>
                        <div className='ml-auto font-semibold text-xl'>$009.99</div>
                    </div>
                    <div className='flex flex-col lg:grid grid-cols-[auto_1fr] w-full sm:items-center items-start pb-5 border-b-1 border-[var(--border)]'>

                        <div className="relative w-full flex justify-center items-center ">
                            <img src="/protein-shake.png" alt="protein shake" className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                            <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>25%</span>
                                <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                            </div>
                            <p className='absolute left-0 bottom-0 bg-gradient-to-r from-lime-300 to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>BadgeText</p>

                        </div>


                        <div className=" flex flex-col justify-items-start w-full gap-y-1">

                            <p className="line-clamp-1 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores!
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
                            <strong className="text-[22px] font-bold text-[var(--accent)] flex items-center gap-x-2">$35.00<span className='text-base font-medium text-[var(--text-primary)] line-through'>$22.00</span></strong>

                            <Link href="/cart" className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3 hover:bg-violet-50 md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="add icon" /></Link>
                        </div>
                    </div>
                    <div className='flex flex-col lg:grid grid-cols-[auto_1fr] w-full sm:items-center items-start pb-5 border-b-1 border-[var(--border)]'>

                        <div className="relative w-full flex justify-center items-center ">
                            <img src="/protein-shake.png" alt="protein shake" className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                            <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>25%</span>
                                <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                            </div>
                            <p className='absolute left-0 bottom-0 bg-gradient-to-r from-lime-300 to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>BadgeText</p>

                        </div>


                        <div className=" flex flex-col justify-items-start w-full gap-y-1">

                            <p className="line-clamp-1 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores!
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
                            <strong className="text-[22px] font-bold text-[var(--accent)] flex items-center gap-x-2">$35.00<span className='text-base font-medium text-[var(--text-primary)] line-through'>$22.00</span></strong>

                            <Link href="/cart" className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3 hover:bg-violet-50 md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="add icon" /></Link>
                        </div>
                    </div>
                </div>
                <div className='border-t-1 border-[var(--border)] '>

                    <div className=" grid ">

                        <table className=" text-[#505050] mt-5 ">
                            <tr className="">
                                <th className=" text-[--dark-black] text-[18px] font-medium text-start py-1.5 ">
                                    Sub Total</th>
                                <td className=" py-1.5 px-2 text-end text-[#606060]">$513.00</td>
                            </tr>
                            <tr className="">
                                <th className="text-[--dark-black] text-[18px] font-medium  text-start  py-1.5 ">
                                    Shipping</th>
                                <td className=" py-1.5 px-2 text-end ">$5.00</td>
                            </tr>

                            <tr className="">
                                <th className="text-[var(--dark-black)] text-[20px] font-semibold text-start py-5 pr-10">
                                    Grand Total</th>
                                <td className=" py-1.5 px-2 text-end text-[20px] text-[var(--dark-black)] font-semibold">
                                    $518.00</td>
                            </tr>

                        </table>
                        <hr className="text-[var(--border)]" />
                        <Link href="/checkout" type="button"
                            className="justify-self-center w-full text-center my-5 px-2 py-2 font-semibold rounded-lg bg-[var(--primary)] text-white cursor-pointer">
                            Proceed To Checkout</Link>
                    </div>
                </div>

            </div>


        </>
    )
}

export default CartProducts