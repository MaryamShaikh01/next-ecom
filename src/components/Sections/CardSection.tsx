import React from 'react'
import WeekCard from '../Cards/WeekCard';

const ShopNowCard = () => {

  const cards = [
    {
      badge: "Only This Week",
      title: "Quality eggs at an affordable price",
      subtitle: "Eat one every day",
      btnText: "Shop Now",
      imageUrl: '/banner-01.jpg'
    },
    {
      badge: "Only This Week",
      title: "Snacks that nourishes our mind and body",
      subtitle: "Shine the morning...",
      btnText: "Shop Now",
      imageUrl: '/banner-02.png'

    },
    {
      badge: "Only This Week",
      title: "Unbeatable quality, unbeatable prices.",
      subtitle: "Only this week. Don’t miss...",
      btnText: "Shop Now",
      imageUrl: '/banner-03.png'

    }
  ];
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] xl:gap-x-8 gap-x-3 gap-y-3  px-2.5 m-auto sm:w-[80vw]'>
        {cards.map((card, index) => (
          <WeekCard key={index} {...card} />
        ))}
      </div>

    </>
  )
}

export default ShopNowCard