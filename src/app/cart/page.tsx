import React from 'react'
import Image from 'next/image'
import CartBreadCrumb from '@/components/Cart/CartBreadCrumb'
import CartProducts from '@/components/Cart/CartProducts'

const Cart = () => {
  return (
    <>
    <CartBreadCrumb/>
      <div className='m-auto w-[80vw] px-[10px] flex flex-col justify-center items-center py-10 gap-y-5'>

        <Image src="/empty-cart-icon.svg" alt='empty cart icon' width={10} height={10} className='w-30 h-30 my-7' />
        <p className='text-[var(--accent)] uppercase text-lg font-bold'>Your cart is currently empty</p>
        <button type='button' className='rounded-lg px-4 py-2 bg-black text-white font-bold cursor-pointer'>Return to Shop</button>

      </div>

      <CartProducts/>
    </>
  )
}

export default Cart