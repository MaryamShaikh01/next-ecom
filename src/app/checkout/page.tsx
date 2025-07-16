import BillingDetails from '@/components/Checkout/BillingDetails'
import CheckoutBreadcrumb from '@/components/Checkout/CheckoutBreadcrumb'
import Coupon from '@/components/Checkout/Coupon'
import FreeShipping from '@/components/Checkout/FreeShipping'
import YourOrder from '@/components/Checkout/YourOrder'
import React from 'react'

const Checkout = () => {
    return (
        <>
            <CheckoutBreadcrumb />

            <Coupon />
            <div className='grid grid-cols-[1fr_300px] m-auto w-[80vw]  px-[10px]'>

            <BillingDetails/>
            <YourOrder/>
            </div>
        </>
    )
}

export default Checkout