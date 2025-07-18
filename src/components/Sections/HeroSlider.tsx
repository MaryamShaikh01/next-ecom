import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function App() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper heroBanner">
                <SwiperSlide className='relative rounded-lg '>
                    <div className='rounded-lg absolute  top-0 left-0 p-10 gap-y-3 2xl:w-[30vw] h-full justify-center flex flex-col items-start text-start'>

                        <p className='text-[#166534] bg-gradient-to-r from-green-100  w-fit px-5 py-2 rounded-lg font-semibold'>Weekend Discount</p>

                        <p className='text-[#39245F] font-bold text-2xl lg:text-5xl'>Get the best quality products at the lowest prices</p>
                        <p className='text-lg lg:text-2xl'>We have prepared special discounts for you on grocery products. Don't miss these opportunities</p>

                        <div className='flex items-center mt-10 gap-x-5'>

                            <Link href="/" className='w-fit h-fit text-white bg-[var(--primary)] px-5 py-3 rounded-lg font-semibold flex items-center gap-x-3'>Shop Now<FaArrowRightLong /></Link>

                            <div className='grid  '>

                                <p className='leading-0.5 text-[28px] font-bold text-[var(--accent)]'>$27.99 <span className='text-xl font-medium text-[var(--text-primary)] line-through'>$56.67</span></p>
                                <p className='text-xs text-[var(--text-secondary)]'>Don't miss this limited time offer.</p>
                            </div>
                        </div>
                    </div>

                    <Image src="/slider-01.png" alt='hero banner' width={1030} height={400} className=' rounded-lg  ' /></SwiperSlide>
               <SwiperSlide className='relative rounded-lg '>
                    <div className='rounded-lg absolute  top-0 left-0 p-10 gap-y-3 2xl:w-[30vw] h-full justify-center flex flex-col items-start text-start'>

                        <p className='text-[#166534] bg-gradient-to-r from-green-100  w-fit px-5 py-2 rounded-lg font-semibold'>Weekend Discount</p>

                        <p className='text-[#39245F] font-bold text-2xl lg:text-5xl'>Get the best quality products at the lowest prices</p>
                        <p className='text-2xl'>We have prepared special discounts for you on grocery products. Don't miss these opportunities</p>

                        <div className='flex items-center mt-10 gap-x-5'>

                            <Link href="/" className='w-fit h-fit text-white bg-[var(--primary)] px-5 py-3 rounded-lg font-semibold flex items-center gap-x-3'>Shop Now<FaArrowRightLong /></Link>

                            <div className='grid  '>

                                <p className='leading-0.5 text-[28px] font-bold text-[var(--accent)]'>$27.99 <span className='text-xl font-medium text-[var(--text-primary)] line-through'>$56.67</span></p>
                                <p className='text-xs text-[var(--text-secondary)]'>Don't miss this limited time offer.</p>
                            </div>
                        </div>
                    </div>

                    <Image src="/slider-02.png" alt='hero banner' width={1030} height={480} className=' rounded-lg   ' /></SwiperSlide>
            </Swiper>
        </>
    );
}