import SingleProductBreadCrumb from '@/components/SingleProduct/SingleProductBreadCrumb'
import React from 'react'
import ProductDetails from '@/components/SingleProduct/ProductDetails'
import SectionHeading from '@/components/Sections/SectionHeading'
import RelatedProducts from '@/components/SingleProduct/RelatedProducts'

const SingleProduct = () => {
  return (
<>
<SingleProductBreadCrumb/>
<ProductDetails/>
      <SectionHeading title={"Related products"} />
      <RelatedProducts/>


</>
  )
}

export default SingleProduct