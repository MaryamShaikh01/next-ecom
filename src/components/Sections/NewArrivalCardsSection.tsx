import React from 'react'
import WeekCard from '../Cards/WeekCard';
import Link from 'next/link'

const MoreProductsSection = () => {
    const moreProductCardsData = [
    {
      badge: "Only This Week",
      title: "Provides you experienced quality products",
      subtitle: "Eat one every day",
      btnText: "Shop Now",
      imageUrl: '/banner-10.png'
    },
    {
      badge: "Only This Week",
      title: "Snacks that nourishes our mind and body",
      subtitle: "Shine the morning...",
      btnText: "Shop Now",
      imageUrl: '/banner-05.png'

    },
    {
      badge: "Only This Week",
      title: "Unbeatable quality, unbeatable prices.",
      subtitle: "Only this week. Don’t miss...",
      btnText: "Shop Now",
      imageUrl: '/banner-06.png'

    },
     {
      badge: "Only This Week",
      title: "Unbeatable quality, unbeatable prices.",
      subtitle: "Only this week. Don’t miss...",
      btnText: "Shop Now",
      imageUrl: '/banner-07.png'

    }
  ];
  return (

    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 md:gap-x-8 md:gap-y-8 min-h-[500px] px-2.5 m-auto sm:w-[80vw] '>
        {moreProductCardsData.map((card) => (
          <Link href="/products" className='flex'>
          <div className=" min-[350px]:bg-cover bg-no-repeat bg-center px-5 py-10 rounded-[12px] flex flex-col gap-y-1" style={{ backgroundImage: `url(${card.imageUrl})` }}>
                    <p className='text-[var(--orange)] font-medium text-xs'>{card.badge}</p>
                     <p className='text-[22px] w-[80%] text-[var(--text-primary)] font-bold'>{card.title}</p>
                     <p className='text-[var(--text-secondary)] text-[13px]'>{card.subtitle}</p>
                     <button type='button' className='mt-2 border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center w-fit'>{card.btnText}<img src="/Icon.svg" alt="" /></button>
                 </div>
          </Link>
        ))}
      </div>
  )
}

export default MoreProductsSection



// import React from 'react'
// import WeekCard from './Cards/WeekCard';

// const ShopNowCard = () => {

//   const cards = [
//     {
//       badge: "Only This Week",
//       title: "Quality eggs at an affordable price",
//       subtitle: "Eat one every day",
//       btnText: "Shop Now",
//       imageUrl: '/banner-01.jpg'
//     },
//     {
//       badge: "Only This Week",
//       title: "Snacks that nourishes our mind and body",
//       subtitle: "Shine the morning...",
//       btnText: "Shop Now",
//       imageUrl: '/banner-02.png'

//     },
//     {
//       badge: "Only This Week",
//       title: "Unbeatable quality, unbeatable prices.",
//       subtitle: "Only this week. Don’t miss...",
//       btnText: "Shop Now",
//       imageUrl: '/banner-03.png'

//     }
//   ];
//   return (
//     <>
//       <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-8   px-[10px] m-auto sm:w-[80vw] py-10'>
//         {cards.map((card, index) => (
//           <WeekCard key={index} {...card} />
//         ))}
//       </div>

//     </>
//   )
// }

// export default ShopNowCard