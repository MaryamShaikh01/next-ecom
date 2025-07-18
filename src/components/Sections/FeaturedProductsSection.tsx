import React from 'react'
import Star from '../svg/Star'
import LikeHeart from '../svg/LikeHeart'
import data from '../data.json'
import Image from 'next/image'


const FeaturedProductsSection = () => {
    return (
        <>
            <div className='px-2.5 m-auto sm:w-[80vw]'>

                <div className='mb-[40px] border-1 border-[var(--border)] rounded-[12px]  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] '>

                    {
                        data.slice(6, 12).map((product) => (

                            <div className='flex flex-col p-5 border-r-1 border-r-[var(--border)]'>
                                <div className="relative flex justify-center items-center ">
                                    <Image src={product.image} alt={product.productTitle} width={177} height={177} className="w-[177px] h-[177px] object-cover" />
                                    <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                        <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{product.discountPercentage}</span>
                                        <LikeHeart></LikeHeart>
                                    </div>
                                </div>

                                <div className=" flex flex-col gap-y-1 justify-center ">

                                    <p className="line-clamp-1 text-sm">
                                        {product.productTitle}
                                    </p>
                                    <strong className="text-[22px] font-bold text-[var(--accent)]"> {product.ourPrice} <span className='text-base font-medium text-[var(--text-primary)] line-through'>{product.originalPrice}</span></strong>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                                    </svg>

                                    <button type='button' className='mt-1 border-1 border-[var(--primary)] rounded-3xl px-5 py-1 text-[var(--primary)] flex gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                                </div>


                                


                            </div>

                        ))
                    }



                </div>
            </div>
        </>
    )
}

export default FeaturedProductsSection