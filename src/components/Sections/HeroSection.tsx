'use client'
import React from 'react'
import HeroSlider from './HeroSlider'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <>
            <div className='px-[10px] m-auto sm:w-[80vw] grid grid-cols-[auto_1fr] lg:gap-x-8 pt-8'>


                <div className='border-1 border-[var(--border)] rounded-[10px] h-fit w-[230px] hidden lg:block first:rounded-tl-lg'>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} className='place-self-start' /> All Categories</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/apple.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Fruits & Vegetables</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/meat.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Meats & Seafood</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/boiled-egg.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Breaksfast & Dairy</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/toast-bread.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Breads & Bakery</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/cup.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Beverages</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/snowflake.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Frozen Foods</p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/bar.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Biscuits & Snacks </p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/wheat.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Grocery & Staples </p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/scoop.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Household Needs </p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/toilet-paper.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Healthcare </p>
                    </Link>
                    <Link href="/" className='flex items-center  gap-x-2 px-3 py-3 border-b  border-b-[var(--border)] hover:bg-red-200'>
                        <p className='flex items-center gap-x-2'><img src="/baby-boy.svg" alt="grid icon" width={20} height={20} className='place-self-start ' /> Baby & Pregnancy </p>
                    </Link>

                </div>

                <HeroSlider />


            </div>
        </>
    )
}

export default HeroSection