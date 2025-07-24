'use client'


import React from 'react'
import data from '../data.json'
import LikeHeart from '../svg/LikeHeart';
import Link from 'next/link';
import ProductCard from '../Cards/ProductCard';

const RelatedProducts = () => {
  return (
    <div className='m-auto sm:w-[80vw] px-2.5'>

      <div className='mb-[40px] border-1 border-[var(--border)] rounded-[12px]  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>

        {data.slice(0, 6).map((product) => (

          <ProductCard key={product.id} product={product} showHeart={true} />

        ))}

      </div>
    </div>

  )
}

export default RelatedProducts