import React from 'react'

const ContactForm = () => {
  return (
    <>
    
            <form action="/" method='post' className='grid grid-cols-2 gap-x-5 gap-y-3 h-fit '>
                <p className='col-span-2 text-[13px] text-[var(--text-secondary)]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ipsa. Totam ab quidem illum magni atque ipsa itaque aspernatur eveniet.</p>

                <div className='flex  flex-col'>
                    <label htmlFor="name" className='text-[13px]'>Your name*</label>
                    <input type="text" id='name' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
                </div>
                <div className='flex  flex-col'>
                    <label htmlFor="email" className='text-[13px]'>Your email*</label>
                    <input type="email" id='email' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
                </div>
                <div className='col-span-2 flex  flex-col'>
                    <label htmlFor="subject" className='text-[13px]'>Subject*</label>
                    <input type="text" id='subject' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
                </div>
                <div className='col-span-2 flex  flex-col'>
                    <label htmlFor="message" className='text-[13px]'>Your message*</label>
                    <textarea name="message" id="message" cols={30} rows={2} className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg'></textarea>
                </div>
                <button type='button' className='text-white bg-[var(--primary)] px-5 py-3 w-fit rounded-lg font-bold text-sm'>Send Message</button>

            </form>
            
    
    </>
  )
}

export default ContactForm