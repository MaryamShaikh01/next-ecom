'use client'

import React from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Card = () => {

    const cards = [
        {
            imageUrl: "/payment-1.svg",
            heading: "Payment only online",
            subheading: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
        },
        {
            imageUrl: "/stocks-sales-2.svg",
            heading: "New stocks and sales",
            subheading: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
        },
        {
            imageUrl: "/quality-assaurance-3.svg",
            heading: "Quality assurance",
            subheading: "Tasigförsamhet beteendedesign. Mobilecheckout. Ylig kärrtorpa.",
        },
        {
            imageUrl: "/delivery-4.svg",
            heading: "Delivery from 1 hour",
            subheading: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
        },
    ]

    const pathname = usePathname();
    return (

        <>

            <div className={`grid lg:grid-cols-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  px-[10px] m-auto sm:w-[80vw] gap-4 pb-5 ${pathname === '/contact' ? 'pt-0' : 'pt-10'}`}>

                {
                    cards.map((item) => (
                        <div className=' grid grid-cols-[auto_1fr] gap-x-3'>
                            <Image
                                src={item.imageUrl}
                                width={50}
                                height={50}
                                alt="Picture of the author"
                                className='col-start-1 row-start-2 pt-5'
                            />
                            <p className='col-start-2 text-base font-bold text-[var(--text-primary)]'>{item.heading}</p>
                            <p className='col-start-2 text-[13px] text-[var(--text-secondary )]'>{item.subheading}</p>
                        </div>
                    ))
                }

            </div>

        </>
    )
}

export default Card