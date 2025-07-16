import React from 'react'
import { IoCubeOutline } from "react-icons/io5";

const FreeShipping = () => {
    return (
        <>
        <div className=''>

            <div className='bg-[#FFF5F5] border-1 border-[#FCA1A1] flex items-center gap-x-2  p-5 rounded-md'>
                    <IoCubeOutline />
                <p className='flex items-center text-black font-semibold '>
                    Add
                    <span className='text-[var(--accent)] mx-1'>$299.11</span>
                    to cart and get free shipping!
                </p>
            </div>
        </div>
        </>
    )
}

export default FreeShipping