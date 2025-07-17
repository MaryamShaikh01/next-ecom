import React from 'react'

const ContactBanner = () => {
  return (
    <>
        <div className='m-auto w-[80vw] px-[10px] flex  flex-col justify-center items-center text-center py-10 border-b-1 border-[var(--border)]'>
                <p className='text-[13px] font-bold'>Connect With Us</p>
                <p className='text-[56px] font-bold'>You can ask us questions</p>
                <p className='text-sm'>Contact us for all your questions and opinions, or you can solve your <br /> problems in a shorter time with our contact offices.</p>
            </div>
    </>
  )
}

export default ContactBanner