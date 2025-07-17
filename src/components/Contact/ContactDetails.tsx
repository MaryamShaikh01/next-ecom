import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";

import Link from 'next/link'


const ContactDetails = () => {
  return (
    <>

        <div className='grid grid-cols-2  border-b-1 border-[var(--border)] pb-10 '>
                <p className='col-span-2 text-[22px] font-semibold'>Our Offices</p>
                <p className='col-span-2 text-[13px] text-[var(--text-secondary)] pb-6'>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om
                    prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens
                    biov dijevis.</p>

                <div className='grid grid-cols-[auto_1fr] gap-x-3 '>
                    <TfiLocationPin className='row-span-5 min-w-5 min-h-5' />
                    <span className='text-xs'>United States</span>
                    <p className='text-lg font-medium'>United States  Office</p>
                    <p className='text-[13px] text-[var(--text-secondary)] pt-1'>205 Middle Road, 2nd Floor, New York</p>

                    <Link href="tel:+02 1234 567 88" className='font-semibold pt-3'>+02 1234 567 88</Link>
                    <Link href="mailto:mail@gmail.com" className='text-blue-600 text-sm'>mail@gmail.com</Link>
                </div>

                <div className='grid grid-cols-[auto_1fr] gap-x-3 '>
                    <TfiLocationPin className='row-span-5 min-w-5 min-h-5' />
                    <span className='text-xs'>Munich</span>
                    <p className='text-lg font-medium'>Munich States Office</p>
                    <p className='text-[13px] text-[var(--text-secondary)] pt-1'>205 Middle Road, 2nd Floor, New York</p>

                    <Link href="tel:+5 456 123 22" className='font-semibold pt-3'>+5 456 123 22</Link>
                    <Link href="mailto:contact@example.com" className='text-blue-600 text-sm'>contact@example.com</Link>
                </div>


            </div>

           
   
    </>
  )
}

export default ContactDetails