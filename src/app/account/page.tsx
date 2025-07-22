'use client'
import AccountBreadcrumb from '@/components/Account/AccountBreadCrumb'
import UserIcon from '@/components/svg/UserIcon'
import { CircleUserRound, Heart, ShoppingCart, UserRound, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Account = () => {

  const [activeTab, setActiveTab] = useState('tab1');

  const tabSelected = (currentTab: any) => {
    setActiveTab(currentTab);
  };

  return (
    <>
      <AccountBreadcrumb />

      <div className='m-auto px-2.5 sm:w-[80vw] grid grid-cols-[1fr_4fr] mb-10 gap-y-3 md:gap-y-5 gap-x-5'>

        <div className='grid grid-cols-[auto_1fr] gap-x-3 items-center col-span-full'>
          <p className='row-span-2 w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center'>
            <UserRound className='' strokeWidth={2.5} />
          </p>

          <p className='text-[var(--text-secondary)] text-xs'>Welcome back,</p>
          <p className='text-sm font-bold'>LoggedIn Username</p>

        </div>
        <div className='whitespace-nowrap overflow-x-auto sm:overflow-x-visible col-span-full  md:col-span-1 flex '>

          <div className='  border-1 border-[var(--border)] rounded-md  flex  w-fit md:w-full md:block h-fit'>
            <p className={`flex items-center gap-x-3 px-3 py-3 text-md font-semibold border-r-1 md:border-r-0 rounded-bl-md md:rounded-bl-none md:border-b-1 border-[var(--border)] rounded-tl-md md:rounded-tr-md ${activeTab === "tab1" ? "bg-[var(--primary)] text-white" : "bg-white "}`} onClick={() => { tabSelected('tab1') }}><ShoppingCart className='w-5 h-5' /> Orders</p>
            <p className={`flex items-center gap-x-3 px-3 py-3 text-md font-semibold md:border-b-1 border-[var(--border)] border-r-1 md:border-r-0 ${activeTab === "tab2" ? "bg-[var(--primary)] text-white" : "bg-white"}`} onClick={() => { tabSelected('tab2') }}><Heart className='w-5 h-5' />WishList</p>
            <p className={`flex items-center gap-x-3 px-3 py-3 text-md font-semibold  md:rounded-bl-md rounded-br-md  rounded-tr-md md:rounded-tr-none  ${activeTab === "tab3" ? "bg-[var(--primary)] text-white" : "bg-white"}`} onClick={() => { tabSelected('tab3') }}><CircleUserRound className='w-5 h-5' />Account Details</p>

          </div>
        </div>

        <div className='col-span-full md:col-span-1 px-3 py-3 border-1 border-[var(--border)] rounded-md text-md '>
          {activeTab === "tab1" && <div> Orders Content</div>}
          {activeTab === "tab2" &&
            <>

             
                <div
                  className="relative grid grid-cols-1 lg:grid-cols-[0.5fr_3fr_1fr_1fr] first:gap-x-0 gap-x-5  items-center border-b-1 border-b-[#EDEEF2] py-5" id="">
                  <button type="button" className=" absolute lg:static top-[20px] md:flex md:justify-center md:items-center right-0  cursor-pointer">

                    <X />

                  </button>
                  <div
                    className=" grid grid-cols-[auto_1fr_auto] items-start pr-5  md:items-center justify-center gap-x-5 ">

                    <Image src="/hand-tossed-pizza.png" alt="item 1" width="110" height="110"
                      className=" w-[80px] md:min-w-[110px] h-[80px] md:min-h-[110px] object-cover object-top rounded-[4px]" />
                    <div className="grid gap-y-1">

                      <p className="font-semibold text-[var(--dark-black)] p-20-16">Product Name</p>
                      <p className=" font-semibold text-[var(--dark-black)] p-20-16">Brand : <span
                        className="text-[var(--light-black)] font-normal p-20-16"> Product Brand</span></p>
                      <p className=" font-semibold text-[var(--dark-black)] p-20-16">Quantity : <span
                        className="text-[var(--light-black)] font-normal p-20-16"> 1</span></p>
                    </div>
                  </div>
                  <p className=" font-semibold text-[var(--light-black)] p-20-16">$44.0</p>
                  <button type="button"
                    className=" whitespace-nowrap cursor-pointer w-fit px-4 md:px-7 py-1.5 md:py-3 font-semibold rounded-lg bg-[var(--primary)] text-white">
                    Add to Cart</button>
                </div>
                <div
                  className="relative grid grid-cols-1 lg:grid-cols-[0.5fr_3fr_1fr_1fr] first:gap-x-0 gap-x-5  items-center border-b-1 border-b-[#EDEEF2] py-5" id="">
                  <button type="button" className=" absolute lg:static top-[20px] md:flex md:justify-center md:items-center right-0  cursor-pointer">

                    <X />

                  </button>
                  <div
                    className=" grid grid-cols-[auto_1fr_auto] items-start pr-5  md:items-center justify-center gap-x-5 ">

                    <Image src="/hand-tossed-pizza.png" alt="item 1" width="110" height="110"
                      className=" w-[80px] md:min-w-[110px] h-[80px] md:min-h-[110px] object-cover object-top rounded-[4px]" />
                    <div className="grid gap-y-1">

                      <p className="font-semibold text-[var(--dark-black)] p-20-16">Product Name</p>
                      <p className=" font-semibold text-[var(--dark-black)] p-20-16">Brand : <span
                        className="text-[var(--light-black)] font-normal p-20-16"> Product Brand</span></p>
                      <p className=" font-semibold text-[var(--dark-black)] p-20-16">Quantity : <span
                        className="text-[var(--light-black)] font-normal p-20-16"> 1</span></p>
                    </div>
                  </div>
                  <p className=" font-semibold text-[var(--light-black)] p-20-16">$44.0</p>
                  <button type="button"
                    className=" whitespace-nowrap cursor-pointer w-fit px-4 md:px-7 py-1.5 md:py-3 font-semibold rounded-lg bg-[var(--primary)] text-white">
                    Add to Cart</button>
                </div>

              <div className="flex flex-col justify-center items-center text-center">

                <div className="w-[80%] py-[40px] md:py-[80px] px-[20px] md:px-[40px] flex flex-col justify-center items-center gap-1 rounded-sm shadow-[-2px_-2px_4px_0px_rgba(0,_0,_0,_0.05),_2px_2px_4px_0px_rgba(0,_0,_0,_0.05)]">

                  <div className='w-[70px] h-[70px] sm:w-[170px] sm:h-[170px] bg-green-100 rounded-full flex items-center justify-center'>
                    <Heart className='text-green-600 w-20 h-20' />

                  </div>
                  <p className=" text-3xl font-semibold mt-10">Your wishlist is empty.</p>
                  <p className="text-center ">You don’t have any products in the wishlist yet. You will find a lot
                    of interesting products on our Shop page.</p>
                  <Link href="/products">
                    <button type="button"
                      className=" mt-10 w-fit px-3 md:px-8 py-3 font-semibold rounded-lg bg-[var(--primary)] text-white  cursor-pointer">
                      Continue Shopping</button>
                  </Link>

                </div>
              </div>
            </>

          }
          {activeTab === "tab3" && <div> Account Details Content</div>}
        </div>

      </div >
    </>
  )
}

export default Account