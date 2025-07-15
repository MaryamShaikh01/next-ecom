import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-[var(--secondary)]'>

        <div className='px-[10px] m-auto w-[80vw]'>



          <div className='flex justify-between border-b-1 border-b-[var(--border)]  py-10'>
            <div>

              <p className='text-xl font-bold text-[var(- -text-primary)]'>Join our newsletter for £10 offs</p>
              <p className='text-[13px] font-normal text-[var(--text-secondary)]'> Register now to get latest updates on promotions &
                coupons.Don’t worry, we not spam!</p>
            </div>
            <div>

              <div className='flex gap-0 border-1 border-[var(--border)] rounded-lg w-full mb-3 '>

                <input type="email" name="email" id="email" placeholder="Enter your email address" className="shadow-[0px_1px_2px_0px_rgba(0_0_0_0.05)] rounded-tl-lg rounded-bl-lg bg-white  pl-12 pr-10 py-3 bg-[url(/email-icon.svg)] bg-no-repeat bg-position-[18px] w-full "></input>
                <button className='bg-[var(--primary)] text-white rounded-tr-[7px] rounded-br-[7px] px-5'>Send</button>
              </div>


              <p className='text-[var(--text-secondary)]'>By subscribing you agree to our <span className='text-[var(--primary)]'>Terms & Conditions and Privacy & Cookies Policy.</span></p>
            </div>

          </div>

          <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-5  py-10'>

            <div>
              <p className='text-sm font-semibold'>Do You Need Help?</p>
              <p className='text-[13px] font-normal text-[var(--text-secondary)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iusto!</p>
              <div className='grid grid-cols-[auto_1fr] items-center gap-x-5 py-5'>
                <img src="/call-icon.svg" alt="call icon" width={20} height={20} className='w-fit h-fit row-span-2 ' />
                <p className='text-[13px] font-normal text-[var(--text-secondary)]'>Monday-Friday : 8am - 9pm</p>
                <Link href="tel:0 800 300-353" className='text-xl font-semibold'>0 800 300-353</Link>
              </div>

              <div className='grid grid-cols-[auto_1fr] items-center gap-x-5 pb-5'>
                <img src="/mail-icon.svg" alt="call icon" width={20} height={20} className='w-fit h-fit row-span-2 ' />
                <p className='text-[13px] font-normal text-[var(--text-secondary)]'>Need help with your order?</p>
                <Link href="mailto:info@example.com" className='text-xl font-semibold'>info@example.com</Link>
              </div>
            </div>

            <ul className=''>
              <li className='text-sm font-semibold mb-2'>Make Money With Us</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Sell on Grogin</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Sell Your Services on Grogin</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Sell on Grogin Business</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Sell Your Apps on Grogin</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Become an Affilate</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Advertise Your Products</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Sell-Publish with Us</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Become an Blowwe Vendor</li>
            </ul>

            <ul>
              <li className='text-sm font-semibold mb-2'>Let Us Help You</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Accessibility Statement</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Your Orders</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Returns & Replacements</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Shipping Rates & Policies</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Refund and Returns Policy</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Privacy Policy</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Terms and Conditions</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Cookie Settings</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Help Center</li>
            </ul>

            <ul className=''>
              <li className='text-sm font-semibold mb-2'>Get to Know Us</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Careers for Grogin</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>About Grogin</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Inverstor Relations</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Grogin Devices</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Customer reviews</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Social Responsibility</li>
              <li className='text-[13px] text-[var(--text-secondary)] mb-1'>Store Locations</li>
            </ul>

            <ul>
              <li className='text-sm font-semibold mb-2'>Download Our App</li>
              <li className='flex gap-x-5 items-center mb-2'>
                <img src="/google-play.png" alt="google play icon" width={50} height={50} className='w-fit h-fit' />
                <p className='text-xs font-medium'>Download App Get
                  -10% Discount</p>
              </li>
              <li className='flex gap-x-5 items-center'>
                <img src="/app-store.png" alt="app store icon" width={50} height={50} className='w-fit h-fit' />
                <p className='text-xs font-medium'>Download App Get
                  -10% Discount</p>
              </li>

              <li className='mt-10'>
                <span className='text-xs'>Follow us on social media:</span>
                <ul className='flex gap-x-1 mt-2'>

                  <li className='bg-white p-3 rounded-lg flex items-center'><img src="/facebook.svg" alt="facebook icon" width={50} height={50} className='w-fit h-fit' /></li>
                  <li className='bg-white p-3 rounded-lg flex items-center'><img src="/twitter.svg" alt="facebook icon" width={50} height={50} className='w-fit h-fit' /></li>
                  <li className='bg-white p-3 rounded-lg flex items-center'><img src="/instagram.svg" alt="facebook icon" width={50} height={50} className='w-fit h-fit' /></li>
                  <li className='bg-white p-3 rounded-lg flex items-center'><img src="/linkedin.svg" alt="facebook icon" width={50} height={50} className='w-fit h-fit' /></li>
                </ul>
              </li>
            </ul>


          </div>

          <div className='py-10 border-t-1 border-t-[var(--border)] flex flex-row-reverse sm:flex-row justify-between'>
            <div>

              <p className='text-[var(--text-secondary)] text-xs mb-3'>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className='text-[var(--primary)]'>BlackRise Themes.</span></p>
              <ul className='flex gap-x-3'>
                <li><img src="/visa-logo.svg" alt="klarna logo" width={50} height={50} className='w-fit  h-fit' /></li>
                <li><img src="/mastercard-logo.svg" alt="klarna logo" width={50} height={50} className='w-fit h-fit' /></li>
                <li><img src="/paypal-logo.svg" alt="klarna logo" width={50} height={50} className='w-fit h-fit' /></li>
                <li><img src="/skrill-logo.svg" alt="klarna logo" width={50} height={50} className='w-fit h-fit' /></li>
                <li><img src="/klarna-logo.svg" alt="klarna logo" width={50} height={50} className='w-fit h-fit' /></li>
              </ul>
            </div>

            <ul className='flex gap-x-5'>
              <li className='underline'><Link href="/" className='text-xs'>Terms and Conditions</Link></li>
              <li className='underline'><Link href="/" className='text-xs'>Privacy Policy</Link></li>
              <li className='underline'><Link href="/" className='text-xs'>Order Tracking</Link></li>
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer