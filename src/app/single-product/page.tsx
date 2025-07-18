import SingleProductBreadCrumb from '@/components/SingleProduct/SingleProductBreadCrumb'
import React from 'react'
import ProductDetails from '@/components/SingleProduct/ProductDetails'
import SectionHeading from '@/components/Sections/SectionHeading'
import RelatedProducts from '@/components/SingleProduct/RelatedProducts'

const SingleProduct = () => {
  return (
    <>
      <SingleProductBreadCrumb />

      <ProductDetails />
      <div>

        <div className="flex justify-between items-center px-[10px] m-auto sm:w-[80vw] gap-x-3 py-5  ">
            <p  className="text-lg text-[var(--text-primary)] font-bold whitespace-nowrap col-span-2 md:col-auto">Related products</p>
            <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] w-fit flex gap-2 items-center whitespace-nowrap'>View All <img src="/Icon.svg" alt="" /></button>

        </div>
      </div>
      {/* <SectionHeading title={"Related products"} /> */}
      <RelatedProducts />


    </>
  )
}

export default SingleProduct