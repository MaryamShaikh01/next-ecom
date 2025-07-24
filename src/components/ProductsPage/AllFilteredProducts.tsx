import React, { useState } from 'react'
import LikeHeart from '../svg/LikeHeart'
import data from '@/components/data.json';
import Image from 'next/image'
import { Heart, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '../Cards/ProductCard';

const AllFilteredProducts = (props: any) => {

    const searchParams = useSearchParams();

    const searchedTerm = searchParams.get('search');

    console.log(searchedTerm, "searchQuery") // juice

    const [allProducts, setAllProducts] = useState(data);

    const filteredProducts = allProducts.filter((item) =>
        item.productTitle?.trim().toLowerCase().includes((searchedTerm || "").toLowerCase())
    );

    console.log(filteredProducts.length, "filteredProducts")

    const { isGrid } = props

    return (
        <>
            {
                isGrid ? (
                    <div className='border-[var(--border)] rounded-[12px] grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mb-5 border-1'>


                        {filteredProducts.length == 0 ? (<p className='p-2'>No products found </p>) :

                            <>
                                {filteredProducts.map((product) =>
                                    <ProductCard key={product.id} product={product} showHeart={true} />
                                )}
                            </>
                        }
                    </div>

                )
                    : (
                        <>

                            <div className=' border-[var(--border)] rounded-[12px] grid grid-cols-1 lg:grid-cols-2 min-[2600px]:grid-cols-3  border-1 mb-10'>

                                {filteredProducts.length == 0 ? (<p className='p-2'>No products found </p>) :

                                    <>

                                        {filteredProducts.map((item) =>
                                            <div key={item.id} className='flex p-2 sm:p-5 gap-x-2 border-b-1 last:border-b-0  border-r-1 border-[var(--border)]'>
                                                <div className="relative flex justify-center items-center ">
                                                    <Image src={item.image} alt={item.productTitle} width={100} height={100} className="min-w-[150px] min-h-[150px] sm:w-[177px] sm:h-[177px] object-contain " />
                                                    <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                                        <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{item.discountPercentage}</span>
                                                        <Heart strokeWidth={1.5} className='hover:fill-red-600' stroke='#b91c1c' />
                                                    </div>
                                                </div>

                                                <div className=" flex flex-col justify-center gap-y-1">

                                                    {
                                                        item.badgeText ? (
                                                            <p className={`${item.badgeText == "ORGANIC" ? "bg-gradient-to-r from-lime-300  to-green-300 text-[var(--badgeGreenText)]" : "bg-gradient-to-r from-cyan-200 to-cyan-50 text-[#0891B2]"} text-[11px]  font-extrabold w-fit rounded-[14px] px-2.5 py-1  flex items-center gap-x-1`}>
                                                                <Image src={item.badgeImage} alt="badge icon" width={10} height={10} className='w-3.5 h-3.5' />
                                                                {item.badgeText}
                                                            </p>



                                                        ) : <span className='h-6'></span>
                                                    }

                                                    <p className="line-clamp-2 h-10 sm:h-auto text-sm font-medium">
                                                        {item.productTitle}
                                                    </p>
                                                    <span className='flex items-center gap-x-1'>

                                                        <span className='flex items-center'>
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star className='fill-yellow-500 last:fill-none w-4 h-4' strokeWidth="0.5" stroke='yellow' width={20} height={20} />
                                                            ))}
                                                        </span>


                                                        <span className='text-sm'>4</span>
                                                    </span>
                                                    <strong className="text-lg md:text-[22px] font-bold text-[var(--accent)] whitespace-nowrap"> {item.ourPrice} <span className='text-sm md:text-base font-medium text-[var(--text-primary)] line-through'>{item.originalPrice}</span></strong>

                                                    <Link href="/cart" className='text-sm  border-1 border-[var(--primary)] rounded-3xl px-3 hover:bg-violet-50 md:px-5 py-1 text-[var(--primary)] flex gap-x-1 md:gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="add icon" /></Link>
                                                </div>


                                            </div>
                                        )}
                                    </>

                                }
                            </div>

                        </>
                    )
            }
        </>

    )
}

export default AllFilteredProducts