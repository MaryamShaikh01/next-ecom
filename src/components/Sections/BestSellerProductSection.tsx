import React from 'react'
import LikeHeart from '../svg/LikeHeart'
import data from '../data.json'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'


const BestSellerProductSection = () => {



    const cardData = [
        {
            badge: "Only This gfhfhf",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-06.jpg.png'
        },

        {
            badge: "Only This Week",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-09.png'
        }
    ]
    return (
        <>

            <div className='m-auto px-2.5 sm:w-[80vw]'>
                <div className='grid grid-cols-1 2xl:grid-cols-[1fr_auto_1fr] gap-y-3'>

                    {/* <div> */}
                    <div className='  border-1 border-[var(--border)] lg:border-0 rounded-lg  grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
                        {data.slice(12, 16).map((item) =>

                            <div key={item.id} className='flex flex-col p-5 border-r-1 border-r-[var(--border)]'>
                                <div className="relative  flex justify-center items-center ">
                                    <img src={item.image} alt={item.productTitle} className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                                    <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                        <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{item.discountPercentage}</span>
                                         <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                                    </div>
                                </div>

                                <div className=" flex flex-col justify-items-start gap-y-1">
                                    {/* {item.badgeText && 
                                
                                <p className='bg-gradient-to-r from-lime-300  to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>{item.badgeText}</p>
                                } */}


                                    {
                                        item.badgeText ? (
                                            <p className={`${item.badgeText == "ORGANIC" ? "bg-gradient-to-r from-lime-300  to-green-300 text-[var(--badgeGreenText)]" : "bg-gradient-to-r from-cyan-200 to-cyan-50 text-[#0891B2]"} text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1  flex items-center gap-x-1`}>
                                                <Image src={item.badgeImage} alt="badge icon" width={10} height={10} className='' />
                                                {item.badgeText}
                                            </p>
                                        ) : <span className='h-6'></span>
                                    }


                                    <p className="line-clamp-2 h-10 text-sm">
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
                                    <strong className="text-lg md:text-[22px] font-bold text-[var(--accent)] whitespace-nowrap"> {item.ourPrice} <span className='text-sm md:text-base font-medium text-[var(--text-primary)] line-through'>{item.originalPrice}</span></strong>

                                          <Link href="/cart" className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3 hover:bg-violet-50 md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></Link>
                                </div>


                            </div>
                        )}
                    </div>
                    {/* </div> */}


                    {/* <div> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 gap-y-2 gap-x-2 sm:gap-x-5'>
                        <Image src="/banner-06.jpg.png" alt='best seller banner image' width={400} height={600} className='rounded-lg  w-[100%] h-[390px] object-cover object-bottom ' />
                        <Image src="/banner-06.jpg.png" alt='best seller banner image' width={400} height={600} className='rounded-lg w-[100%] h-[390px]  object-cover object-bottom ' />
                    </div>
                    {/* </div> */}


                    {/* <div> */}
                    <div className='border-1 border-[var(--border)] lg:border-0 rounded-lg grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>

                        {data.slice(16, 20).map((item) => [

                            <div key={item.id} className='flex flex-col p-5 border-r-1 border-r-[var(--border)]'>
                                <div className="relative flex justify-center items-center">
                                    <img src={item.image} alt={item.productTitle} className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                                    <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                        <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{item.discountPercentage}</span>
                                    <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                                    </div>
                                </div>

                                <div className=" flex flex-col justify-items-start gap-y-1">

                                    {
                                        item.badgeText ? (
                                            <p className={`${item.badgeText == "ORGANIC" ? "bg-gradient-to-r from-lime-300  to-green-300 text-[var(--badgeGreenText)]" : "bg-gradient-to-r from-cyan-200 to-cyan-50 text-[#0891B2]"} text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1  flex items-center gap-x-1`}>
                                                <Image src={item.badgeImage} alt="badge icon" width={10} height={10} className='' />
                                                {item.badgeText}
                                            </p>
                                        ) : <span className='h-6'></span>
                                    }
                                    <p className="line-clamp-2 h-10 text-sm">
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
                                     <strong className="text-lg md:text-[22px] font-bold text-[var(--accent)] whitespace-nowrap"> {item.ourPrice} <span className='text-sm md:text-base font-medium text-[var(--text-primary)] line-through'>{item.originalPrice}</span></strong>

                                    <button type='button' className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3  md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                                </div>


                            </div>
                        ])}
                    </div>
                    {/* </div> */}
                </div>

            </div>



        </>
    )
}

export default BestSellerProductSection