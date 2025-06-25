import React from 'react'
import Star from '../svg/Star'

const TestimonialSection = () => {
    return (
        <>
        <div className='m-auto w-[80vw] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] border-1 rounded-[12px]'>

            <div className=' rounded-[12px] p-5'>

                <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                    <img src="/user-image.png" alt="" width={50} height={50} className='w-fit h-fit rounded-[12px]'/>
                    <div className='flex flex-col justify-center'>
                        <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>
                       
                        <span className='flex items-center'>
                            <Star></Star>
                            <span>41</span>
                        </span>
                    </div>
                </div>
                <p className='pt-5'>Good quality product can only be found in good stores</p>
            </div>

   <div className='p-5'>

                <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                    <img src="/user-image.png" alt="" width={50} height={50} className='w-fit h-fit rounded-[12px]'/>
                    <div className='flex flex-col justify-center'>
                        <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>
                       
                        <span className='flex items-center'>
                            <Star></Star>
                            <span>41</span>
                        </span>
                    </div>
                </div>
                <p className='pt-5'>Good quality product can only be found in good stores</p>
            </div>

               <div className='p-5'>

                <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                    <img src="/user-image.png" alt="" width={50} height={50} className='w-fit h-fit rounded-[12px]'/>
                    <div className='flex flex-col justify-center'>
                        <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>
                       
                        <span className='flex items-center'>
                            <Star></Star>
                            <span>41</span>
                        </span>
                    </div>
                </div>
                <p className='pt-5'>Good quality product can only be found in good stores</p>
            </div>
               <div className=' p-5'>

                <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                    <img src="/user-image.png" alt="" width={50} height={50} className='w-fit h-fit rounded-[12px]'/>
                    <div className='flex flex-col justify-center'>
                        <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>
                       
                        <span className='flex items-center'>
                            <Star></Star>
                            <span>41</span>
                        </span>
                    </div>
                </div>
                <p className='pt-5'>Good quality product can only be found in good stores</p>
            </div>
        </div>
        </>
    )
}

export default TestimonialSection