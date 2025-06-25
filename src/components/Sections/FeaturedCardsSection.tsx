import React from 'react'

const FeaturedCardsSection = () => {
    const featuredCardsData = [
        {
            badge: "Only This Week",
            title: "Make your grocery shopping easy with us",
            subtitle: "Only this week. Don’t miss...",
            btnText: "Shop Now",
            imageUrl: '/banner-08.png'
        },
        {
            badge: "Only This Week",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-09.png'

        },
    ];
    return (

        <>

            <div className='m-auto w-[80vw] grid grid-cols-2 gap-x-5'>
                {featuredCardsData.map((data) => (
                    <div className=" bg-cover bg-no-repeat px-5 py-10 rounded-[12px] flex flex-col gap-y-1" style={{ backgroundImage: `url(${data.imageUrl})` }}>
                        <p className='text-[var(--orange)] font-medium text-xs'>{data.badge}</p>
                        <p className='text-[22px] w-[70%] text-[var(--text-primary)] font-bold'>{data.title}</p>
                        <p className='text-[var(--text-secondary)] text-[13px]'>{data.subtitle}</p>
                        <button type='button' className='mt-2 border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center w-fit'>{data.btnText}<img src="/Icon.svg" alt="" /></button>

                    </div>
                ))}
            </div>



        </>
    )
}


export default FeaturedCardsSection