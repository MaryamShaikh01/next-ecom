import React from 'react'

const YourOrder = () => {
    return (
        <>
            <div className='border-1 border-[var(--border)] rounded-md p-5 h-fit bg-[rgba(0,_0,_0,_0.01)]'>
                <p className='font-semibold text-lg'>Your Order</p>

                <p className='text-[var(--text-secondary)] text-sm font-medium flex justify-between py-2 border-b-1 border-[var(--border)]'>Product <span className='text-sm'>Subtotal</span></p>

                <p className='text-sm font-medium flex justify-between flex-wrap py-2 border-b-1 border-[var(--border)] '>Marketside Fresh Organic
                    Bananas, Bunch <span className='font-semibold'>x 1</span> <span className='ml-auto'>$0.87</span></p>

                <p className='text-[var(--text-secondary)] text-sm font-medium flex justify-between  py-2 border-b-1 border-[var(--border)] '>Subtotal <span className='text-black'>$0.87</span></p>

                <div className='grid grid-cols-2  py-2 border-b-1 border-[var(--border)] '>

                    <p className='text-[var(--text-secondary)] text-sm font-medium row-span-2 justify-self-start place-self-center'>Shipping : </p>

                    <div className='ml-auto flex items-center gap-x-2'>
                        <label htmlFor="flatRate" className='text-[var(--text-secondary)] text-xs font-medium'>Flat rate $15.00</label>
                        <input type="checkbox" name="flatRate" id="flatRate" className='relative appearance-none border-1 border-[var(--primary)] rounded-full min-w-3 min-h-3 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-full checked:before:w-3 checked:before:h-3 checked:before:bg-[var(--primary)] bg-gray-100' />
                    </div>

                    <div className='ml-auto  flex items-center gap-x-2'>
                        <label htmlFor="localPickup" className='text-[var(--text-secondary)] text-xs font-medium'>Local pickup</label>
                        <input type="checkbox" name="localPickup" id="localPickup" className='relative appearance-none border-1 border-[var(--primary)] rounded-full min-w-3 min-h-3 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-full checked:before:w-3 checked:before:h-3 checked:before:bg-[var(--primary)] bg-gray-100' />
                    </div>

                </div>

                <p className='text-sm font-medium flex justify-between py-2 border-b-1 border-[var(--border)]'>Total <span className='font-bold'>$15.89</span></p>

                <p className="flex items-center gap-x-2 py-2">
                    <input name="payMethod" id="bankTransfer" type="radio" value="" className="relative appearance-none border-1 border-gray-400 checked:border-black rounded-xl min-w-4 min-h-4 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-black" />
                    <label htmlFor='bankTransfer'  className=" text-sm text-gray-900 font-semibold">Direct Bank Transfer</label>
                </p>

                <p className='text-sm text-[var(--text-secondary)] pb-2'>Make your payment directly into our bank account. Please
                    use your Order ID as the payment reference. Your order
                    will not be shipped until the funds have cleared in our
                    account.</p>

                <p className="flex items-center gap-x-2 py-2">
                    <input name="payMethod" id="checkPayment" type="radio" value="" className="relative appearance-none border-1 border-gray-400 checked:border-black rounded-xl min-w-4 min-h-4 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-black   " />

                    <label htmlFor='checkPayment' className=" text-sm text-gray-900 font-semibold">Check Payments</label>
                </p>

                <p className="flex items-center gap-x-2 pb-2">
                    <input name="payMethod" id="cod" type="radio" value="" className="relative appearance-none border-1 border-gray-400  checked:border-black rounded-xl min-w-4 min-h-4 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-black  " />

                    <label htmlFor='cod' className=" text-sm text-gray-900 font-semibold">Cash On Delivery</label>
                </p>

                <p className='text-sm text-[var(--text-secondary)] py-2'>Make your payment directly into our bank account. Please
                    use your Order ID as the payment reference. Your order
                    will not be shipped until the funds have cleared in our
                    account.</p>

                <p className="flex items-center gap-x-2 py-2">

                    <input id="termsAgree" type="checkbox" value="" className="relative appearance-none border-1 border-gray-400 checked:border-black rounded-sm min-w-4 min-h-4 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-3 checked:before:h-3 checked:before:bg-black bg-white " />

                    <label htmlFor='termsAgree' className=" text-sm text-gray-900 font-semibold">I have read and agree to the website <span className='text-[var(--primary)]'>terms and conditions</span> </label>

                </p>

                <button className='px-5 py-1.5 bg-[var(--primary)] text-white font-bold rounded-lg w-full mt-2 cursor-pointer'>Place Order</button>
            </div>
        </>
    )
}

export default YourOrder