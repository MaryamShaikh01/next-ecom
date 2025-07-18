import React from 'react'
import Star from '../svg/Star'
import Image from 'next/image'

const TestimonialSection = () => {
    return (
        <>
            <div className='m-auto sm:w-[80vw] px-2.5 mb-[40px]'>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] border-1 border-[var(--border)] rounded-[12px]'>

                    <div className='    p-5 border-r-1 border-r-[var(--border)]'>

                        <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                            <Image src="/user-image.png" alt="" width={50} height={50} className='min-w-15 min-h-15 rounded-[12px]' />
                            <div className='flex flex-col justify-center'>
                                <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>

                               <span className='flex items-center gap-x-1'>
                                    <Star></Star>
                                    <span className='text-xs'>41</span>

                                </span>
                            </div>
                        </div>
                        <p className='pt-5'>Good quality product can only be found in good stores</p>
                    </div>

                    <div className='    p-5 border-r-1 border-r-[var(--border)]'>


                        <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                            <Image src="/user-image.png" alt="" width={50} height={50} className='min-w-15 min-h-15 rounded-[12px]' />
                            <div className='flex flex-col justify-center'>
                                <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>
  <span className='flex items-center gap-x-1'>
                                    <Star></Star>
                                    <span className='text-xs'>41</span>

                                </span>
                            </div>
                        </div>
                        <p className='pt-5'>Good quality product can only be found in good stores</p>
                    </div>

                    <div className='    p-5 border-r-1 border-r-[var(--border)]'>


                        <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                            <Image src="/user-image.png" alt="" width={50} height={50} className='min-w-15 min-h-15 rounded-[12px]' />
                            <div className='flex flex-col justify-center'>
                                <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>

                               <span className='flex items-center gap-x-1'>
                                    <Star></Star>
                                    <span className='text-xs'>41</span>

                                </span>
                            </div>
                        </div>
                        <p className='pt-5'>Good quality product can only be found in good stores</p>
                    </div>
                    <div className='    p-5 border-r-1 border-r-[var(--border)]'>


                        <div className='grid grid-cols-[auto_1fr] gap-x-5  border-b-1 border-b-[var(--border)] pb-5'>

                            <Image src="/user-image.png" alt="" width={50} height={50} className='min-w-15 min-h-15 rounded-[12px]' />
                            <div className='flex flex-col justify-center'>
                                <strong className='flex flex-col leading-5'>Machic  <span className='text-[var(--text-secondary)] text-xs'>Featured</span> </strong>

                                <span className='flex items-center gap-x-1'>
                                    <Star></Star>
                                    <span className='text-xs'>41</span>

                                </span>
                            </div>
                        </div>
                        <p className='pt-5'>Good quality product can only be found in good stores</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TestimonialSection