import React from 'react'
import Image from 'next/image'

const CartProducts = () => {
  return (

    <>


    <div className="flex lg:flex-col pb-[60px]">

        <div className="bg-[var(--primary)] lg:bg-[var(--primary)] shrink-0  sm:flex sticky top-0 ">
            <div
                className=" px-[10px] lg:py-[20px] place-items-center m-auto w-fit lg:w-[85vw] 2xl:sm:w-[80vw] h-full hidden md:grid grid-cols-1 grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr] lg:grid lg:grid-rows-1 lg:grid-cols-[4fr_1fr_1fr_1fr_1fr_1fr] justify-items-start gap-3">
                <p className="uppercase text-white font-semibold text-lg justify-self-start">Product Details</p>
                <p className="uppercase text-white font-semibold text-lg">Price</p>
                <p className="uppercase text-white font-semibold text-lg">Quantity</p>
                <p className="uppercase text-white font-semibold text-lg">Shipping</p>
                <p className="uppercase text-white font-semibold text-lg">Subtotal</p>
                <p className="uppercase text-white font-semibold text-lg">Action</p>
            </div>

            <div className="px-[10px] lg:py-[20px] lg:place-items-center m-auto w-fit lg:w-[85vw] 2xl:sm:w-[80vw]   h-full grid md:hidden grid-cols-1 grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr] gap-y-3 ">
                <Image src="/icons8-product-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain "/>
                <Image src="/icons8-price-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain "/>
                <Image src="/icons8-numbers-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain "/>
                <Image src="/icons8-delivery-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain "/>
                <Image src="/icons8-cost-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain "/>
                <Image src="/icons8-delete-button-30.png" alt="" width="30" height="30" className="w-[30px] h-[100%] object-contain "/>
            </div>

        </div>

<div className="flex overflow-x-auto lg:pt-10">

            <div className=" m-auto lg:w-[85vw] 2xl:sm:w-[80vw] flex lg:flex-col" id="cart-container">

               <div className="cart-item max-w-[350px] md:max-w-[100%] w-fit md:w-[100%] px-[20px]  grid grid-rows-[4fr_1fr_1fr_1fr_1fr_1fr]  md:grid md:grid-rows-1 lg:grid-cols-[4fr_1fr_1fr_1fr_1fr_1fr]  gap-3 justify-items-center items-center border-r-1 md:border-r-0"
                    id="${item.liked}">
                    <div className="grid grid-cols-[auto_1fr] gap-x-5 justify-self-start self-start">
                        <Image className="min-w-[105px] min-h-[120px] row-span-4" src="/cart-product-2.png"
                            alt="cart product" width="100" height="100"/>
                        <p className="product-name text-[var(--dark-black)] text-lg font-semibold">Name</p>
                        <span className="product-color text-[var(--light-black)] text-sm">Color : Yellow</span>
                        <span className="product-size text-[var(--light-black)] text-sm">Size : XS</span>
                    </div>
                    <p className="product-price text-[var(--dark-black)] text-lg font-semibold">$09.00</p>
                    <button className="flex items-center gap-1 rounded-xl bg-[var(--light-bg-colour)] text-xs">
                        <span id="decreaseQuantity"
                            className="rounded-tl-xl rounded-bl-xl bg-[var(--light-bg-colour)] pr-2 pl-5 py-2.5 cursor-pointer text-xs hover:bg-purple-300">-</span>
                        <span id="quantity">8</span>
                        <span id="increaseQuantity"
                            className=" justify-self-start rounded-tr-xl rounded-br-xl bg-[var(--light-bg-colour)] pl-2 pr-5 py-2.5 cursor-pointer text-xs hover:bg-purple-300">+</span>

                    </button>
                    <p className="text-[#BEBCBD] text-lg font-semibold">FREE</p>
                    <p className="text-[var(--dark-black)] text-lg font-semibold">$29.00</p>
                    <button className="delete-cart-item-btn"><Image src="/delete-icon.svg" alt="delete icon" width={20} height={20}/></button>
                </div> 




            </div>
        </div>


    </div>

    </>
  )
}

export default CartProducts