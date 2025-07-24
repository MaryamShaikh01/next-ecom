import React from 'react'
import LikeHeart from '../svg/LikeHeart'
import data from '../data.json'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import ProductCard from '../Cards/ProductCard'


const BestSellerProductSection = () => {



    const cardData = [
        {
            badge: "Only This gfhfhf",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-06.jpg.png'
        },

        {
            badge: "Only This Week",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-09.png'
        }
    ]
    return (
        <>

            <div className='m-auto px-2.5 sm:w-[80vw]'>
                <div className='grid grid-cols-1 2xl:grid-cols-[1fr_auto_1fr] gap-y-3'>

                    {/* <div> */}
                    <div className='  border-1 border-[var(--border)] lg:border-0 rounded-lg  grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
                        {data.slice(12, 16).map((product) =>

                            <ProductCard key={product.id} product={product} showHeart={true}/>
                        )}
                    </div>
                    {/* </div> */}


                    {/* <div> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 gap-y-2 gap-x-2 sm:gap-x-5'>
                        <Link href="/products">
                            <Image src="/best-seller-banner-1.png" alt='best seller banner image' width={500} height={600} className='  w-[100%] h-[390px] object-cover object-top ' />
                        </Link>
                        <Link href="/products">
                            <Image src="/best-seller-banner-2.png" alt='best seller banner image' width={500} height={600} className=' w-[100%] h-[390px]   object-cover object-top ' />
                        </Link>
                    </div>
                    {/* </div> */}


                    {/* <div> */}
                    <div className='border-1 border-[var(--border)] lg:border-0 rounded-lg grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>

                        {data.slice(16, 20).map((product) => [

                            <ProductCard key={product.id} product={product} showHeart={true} />
                        ])}
                    </div>
                    {/* </div> */}
                </div>

            </div>



        </>
    )
}

export default BestSellerProductSection