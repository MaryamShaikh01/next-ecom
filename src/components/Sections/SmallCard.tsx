import React from 'react'
import Image from 'next/image';

const Card = () => {
    return (

        <>

<div className='border-b-1 border-b-[var(--border)] flex px-[10px] m-auto w-[80vw] gap-4 pt-10 pb-5'>

            <div className=' grid grid-cols-[auto_1fr]'>
                <Image
                    src="/payment-1.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className='col-start-1 row-start-2 pt-5'
                />

                    <p className='col-start-2 text-base font-bold text-[var(--text-primary)]'>Payment only online</p>
                    <p className='col-start-2 text-[13px] text-[var(--text-secondary )]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
            </div>
              <div className='grid grid-cols-[auto_1fr]'>
                <Image
                    src="/payment-1.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className='col-start-1 row-start-2 pt-5'
                />

                    <p className='col-start-2 text-base font-bold text-[var(--text-primary)]'>Payment only online</p>
                    <p className='col-start-2 text-[13px] text-[var(--text-secondary )]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
            </div>
              <div className=' grid grid-cols-[auto_1fr]'>
                <Image
                    src="/payment-1.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className='col-start-1 row-start-2 pt-5'
                />

                    <p className='col-start-2 text-base font-bold text-[var(--text-primary)]'>Payment only online</p>
                    <p className='col-start-2 text-[13px] text-[var(--text-secondary )]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
            </div>
              <div className=' grid grid-cols-[auto_1fr]'>
                <Image
                    src="/payment-1.svg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className='col-start-1 row-start-2 pt-5'
                />

                    <p className='col-start-2 text-base font-bold text-[var(--text-primary)]'>Payment only online</p>
                    <p className='col-start-2 text-[13px] text-[var(--text-secondary )]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
            </div>

</div>

        </>
    )
}

export default Card