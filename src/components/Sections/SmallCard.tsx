import React from 'react'
import Image from 'next/image';

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

    return (

        <>

            <div className=' flex px-[10px] m-auto w-[80vw] gap-4 pt-10 pb-5'>

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