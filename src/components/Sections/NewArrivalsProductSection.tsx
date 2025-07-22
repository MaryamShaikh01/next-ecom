'use client'


import React from 'react'
import data from '../data.json'
import LikeHeart from '../svg/LikeHeart';
import Image from 'next/image'
import { Star } from 'lucide-react';
import Link from 'next/link';



const NewArrivalsProductSection = () => {


  return (
    <div className='px-2.5 m-auto sm:w-[80vw] '>

      <div className='mb-[40px]  rounded-[12px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>

        {data.slice(0, 6).map((item) => (

          <div key={item.id} className='flex flex-col p-3 sm:p-5 border-r-1 border-t-1 border-b-1 first:border-t-1 first:border-l-1 first:rounded-tl-lg last:rounded-br-lg border-[var(--border)]'>

            <div className="relative flex justify-center items-center ">
              <Image src={item.image} alt={item.productTitle} width={1000} height={1000} className="w-[150px] h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
              <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{item.discountPercentage}</span>
              </div>
            </div>

            <div className=" flex flex-col justify-items-start gap-y-1 ">

              {
                item.badgeText ? (
                  <p className={`${item.badgeText == "ORGANIC" ? "bg-gradient-to-r from-lime-300  to-green-300 text-[var(--badgeGreenText)]" : "bg-gradient-to-r from-cyan-200 to-cyan-50 text-[#0891B2]"} text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1  flex items-center gap-x-1`}>
                    <Image src={item.badgeImage} alt="badge icon" width={10} height={10} className='' />
                    {item.badgeText}
                  </p>
                ) : <span className='h-6'></span>
              }



              <p className="line-clamp-2 text-sm h-10">
                {item.productTitle}
              </p>
              <span className='flex items-center gap-x-1'>

                <span className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star className='fill-yellow-500 last:fill-none w-4 h-4' strokeWidth="0.5" stroke='yellow' width={20} height={20} />
                  ))}
                </span>


                <span className='text-sm'>4</span>
              </span>
              <strong className="text-lg md:text-[22px] font-bold text-[var(--accent)] whitespace-nowrap"> {item.ourPrice} <span className='text-sm md:text-base font-medium text-[var(--text-primary)] line-through'>{item.originalPrice}</span></strong>

                     <Link href="/cart" className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3 hover:bg-violet-50 md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></Link>
            </div>


          </div>

        ))}

      </div>
    </div>



  );
};

export default NewArrivalsProductSection;