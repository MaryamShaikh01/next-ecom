import React from 'react'
import { IoCubeOutline } from "react-icons/io5";

const FreeShipping = () => {
    return (
        <>
        {/* <div className=''> */}

            <div className='bg-[#FFF5F5] border-1 border-[#FCA1A1]  p-5 rounded-md'>
                <div className='flex items-center gap-x-2 '>

                    <IoCubeOutline  className='min-w-5 min-h-5'/>
                <p className='flex items-center text-black font-semibold flex-wrap '>
                    Add
                    <span className='text-[var(--accent)] mx-1'>$299.11</span>
                    to cart and get free shipping!
                </p>
                </div>
                <span className='bg-[rgba(0,_0,_0,_0.08)] w-full h-1 block mt-2 rounded-lg'></span>
            </div>
        {/* </div> */}
        </>
    )
}

export default FreeShipping