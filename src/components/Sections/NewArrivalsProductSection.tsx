'use client'


import React from 'react'
import data from '../data.json'
import LikeHeart from '../svg/LikeHeart';
import Image from 'next/image'
import { Star } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '../Cards/ProductCard';



const NewArrivalsProductSection = () => {


  return (
    <div className='px-2.5 m-auto sm:w-[80vw] '>

      <div className='mb-[40px]  rounded-[12px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>

        {data.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} showHeart={false} />
        ))}

      </div>
    </div>



  );
};

export default NewArrivalsProductSection;