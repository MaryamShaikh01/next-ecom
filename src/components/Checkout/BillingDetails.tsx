import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FreeShipping from './FreeShipping'

const BillingDetails = () => {
  return (
    <>
      <div className=''>

        <FreeShipping />

        <div className='pt-2'>

          <p className="text-[15px] text-[var(--text-primary)] font-bold ">Billing Details</p>
          <form action="" className='grid grid-cols-2 gap-x-4 gap-y-3'>
            <div className='flex  flex-col col-span-2 sm:col-span-1'>
              <label htmlFor="fname" className='text-[13px]'>First Name</label>

              <input type="text" placeholder='First name' id="fname" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2 sm:col-span-1'>
              <label htmlFor="lname" className='text-[13px]'>Last Name</label>

              <input type="text" placeholder='Last name' id="lname" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="companyName" className='text-[13px]'>Company name (optional)</label>

              <input type="text" placeholder='Enter company name' id="companyName" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="countryName" className='text-[13px]'>Country / Region *</label>

              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">United States (US)</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="streetAddress" className='text-[13px]'>Street address *</label>

              <input type="text" placeholder='House number and street name' id="streetAddress" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />

              <input type="text" placeholder='Apartment, suite, unit, etc. (optional)' className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="town" className='text-[13px]'>Town / City *</label>

              <input type="text" placeholder='Enter town / city' id="town" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="state" className='text-[13px]'>State *</label>

              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="zipCode" className='text-[13px]'>ZIP Code *</label>

              <input type="text" placeholder='Enter zipcode' id="zipCode" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="phone" className='text-[13px]'>Phone *</label>

              <input type="tel" placeholder='Enter phone' id="phone" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex flex-col col-span-2'>
              <label htmlFor="email" className='text-[13px]'>Email address *</label>

              <input type="email" placeholder='Enter email' id="email" className='text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' />
            </div>

            <div className='flex items-center gap-x-2 col-span-2'>

              <input type="checkbox" name="createAccount" id="createAccount" />
              <label htmlFor="createAccount" className='text-sm'> Create an account? </label>
            </div>

            <div className='flex items-center gap-x-2 col-span-2'>

              <input type="checkbox" name="diffAddress" id="diffAddress" />
              <label htmlFor="diffAddress" className='font-semibold text-sm'> Ship to different address ? </label>
            </div>

            <div className='flex flex-col gap-x-2 col-span-2 pt-4 '>
              <label htmlFor="notes" className='text-[13px]'>Order notes (optional)</label>
              <textarea name="notes" id="notes" cols={30} rows={3} className='col-span-2 text-[13px] rounded-lg mt-1 px-3 py-2 border-1 border-[var(--gray-border)] focus:outline-0 ' placeholder='Notes about your order, e.g. special notes for delivery.'>
              </textarea>
            </div>

          </form>
        </div>
      </div>

    </>
  )
}

export default BillingDetails