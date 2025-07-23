import BillingDetails from '@/components/Checkout/BillingDetails'
import CheckoutBreadcrumb from '@/components/Checkout/CheckoutBreadcrumb'
import Coupon from '@/components/Checkout/Coupon'
import FreeShipping from '@/components/Checkout/FreeShipping'
import YourOrder from '@/components/Checkout/YourOrder'
import React from 'react'

const Checkout = () => {
    return (
        <>
            <CheckoutBreadcrumb/>
            <Coupon />
            <div className='grid col-span-1 lg:grid-cols-[3fr_1.5fr] gap-5 m-auto sm:w-[80vw]  px-[10px] pb-5'>
                <BillingDetails />
                <YourOrder />
            </div>
        </>
    )
}

export default Checkout