import Link from 'next/link';
import React from 'react'

// const WeekCard = ({title, description , subtitle , btnText , imageUrl}) => {
//     return (
//         <>
//                 <div className=" bg-cover bg-no-repeat px-5 py-10 rounded-[12px]" style ={{backgroundImage : `url(${imageUrl})`}}>
//                     <p className='text-[var(--orange)] font-medium text-xs'>{title}</p>
//                     <p className='text-[22px] text-[var(--text-primary)] font-bold'>{description}</p>
//                     <p className='text-[var(--text-secondary)] text-[13px]'>{subtitle}</p>
//                     <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center'>{btnText}<img src="/Icon.svg" alt="" /></button>
//                 </div>  
//         </>
//     )
// }

// export default WeekCard; 
interface WeekCardProps {
    badge : string;
    title: string;
    subtitle : string;
    btnText : string;
    imageUrl : string;
}

const WeekCard = (props: WeekCardProps) => {
    const { badge, title, subtitle, btnText, imageUrl } = props;
    return (
        <>
        <Link href="/products">
            <div className="bg-center min-[400px]:bg-cover bg-no-repeat px-5 py-5 sm:py-10 rounded-[12px]  flex flex-col gap-y-1" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <p className='text-[var(--orange)] font-medium text-xs'>{badge}</p>
                     <p className='text-[22px] w-[70%] text-[var(--text-primary)] font-bold'>{title}</p>
                     <p className='text-[var(--text-secondary)] text-[13px]'>{subtitle}</p>
                     <button type='button' className='mt-2 border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center w-fit'>{btnText}<img src="/Icon.svg" alt="" /></button>
                 </div>
        </Link>
        </>
    )
}
export default WeekCard;
