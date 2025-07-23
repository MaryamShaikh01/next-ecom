import React from 'react'
import WishList from '@/components/Account/WishList'
import Orders from '@/components/Account/Orders'
import AccountDetails from '@/components/Account/AccountDetails'
import { CircleUserRound, Heart, ShoppingCart, UserRound, X } from 'lucide-react'
import { useState } from 'react'

const LoggedUserTabData = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const tabSelected = (currentTab: any) => {
        setActiveTab(currentTab);
    };

    return (
        <>
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
                    {activeTab === "tab1" && <div>

                        <Orders />


                    </div>}
                    {activeTab === "tab2" &&
                        <>

                            <WishList />

                        </>

                    }
                    {activeTab === "tab3" && <div>

                        <AccountDetails />

                    </div>}
                </div>

            </div >
        </>
    )
}

export default LoggedUserTabData