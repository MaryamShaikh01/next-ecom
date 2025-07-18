'use client'

import LoginBreadcrumb from '@/components/Account/LoginBreadcrumb'
import Link from 'next/link'
import React, { useState } from 'react'

const Account = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(true)

  return (
    <>
      <LoginBreadcrumb />

      <div className='m-auto w-[90vw] sm:w-[500px] px-2.5 flex flex-col items-center py-10 pb-40'>
        <div className='flex pb-5 gap-x-5'>
          <p className={`text-[28px] font-semibold cursor-pointer ${isLoggedIn ? "text-balance" : "text-[var(--text-secondary)]"}`} onClick={()=>{
            setIsLoggedIn(true)
          }}>Login</p>
          <p className={`text-[28px] font-semibold cursor-pointer ${!isLoggedIn ? "text-balance" : "text-[var(--text-secondary)]"}`} onClick={()=>{
            setIsLoggedIn(false)
          }}>Register</p>

        </div>


        {/* if login */}

        {
          isLoggedIn ? (

      
        <div className='w-full flex flex-col gap-y-4'>
          <p className='text-sm text-center'>If you have an account, sign in with your username or email address.</p>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="usernameEmail" className='text-sm'>Username or email address*</label>
            <input type="text" id='usernameEmail' name='usernameEmail' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
          </div>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="password" className='text-sm'>Password*</label>
            <input type="text" id='password' name='password' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
          </div>

          <div className='flex flex-col sm:flex-row gap-y-2 justify-between gap-x-2 '>

            <div className='flex items-center  gap-x-2'>

              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className='text-sm'>Remember me</label>
            </div>

            <Link href="/" className='text-sm text-blue-600'>Lost your password?</Link>
          </div>

          <button className='bg-[var(--primary)] text-white font-semibold px-5 py-2 rounded-lg cursor-pointer'>Log In</button>

        </div>
    )
: (


        <form action="" method='post' className='w-full flex flex-col gap-y-4'>
          <p className='text-sm text-center'>There are many advantages to creating an account : the payment process is
            faster, shipment tracking is possible and much more.</p>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="username" className='text-sm'>Username*</label>
            <input required type="text" id='username' name='username' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
          </div>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="email" className='text-sm'>Email*</label>
            <input required type="email" id='email' name='email' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
          </div>

          <div className='flex flex-col gap-y-1'>
            <label htmlFor="password" className='text-sm'>Password*</label>
            <input required type="password" id='password' name='password' placeholder='' className='text-sm px-2 py-2 border-1 border-[var(--border)] rounded-lg' />
          </div>

          <div className='flex flex-col  gap-y-2  gap-x-2 '>

            <div className=' flex items-center gap-x-2'>
              <input type="checkbox" name="customer" id="customer" className='relative appearance-none border-1 border-[#767676] rounded-full min-w-4 min-h-4 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-full checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-blue-600 ' />
              <label htmlFor="customer" className=' text-sm font-medium cursor-pointer'>I am a customer</label>
            </div>

            <div className=' flex items-center gap-x-2'>
              <input type="checkbox" name="vendor" id="vendor" className='relative appearance-none border-1 border-[#767676] rounded-full min-w-4 min-h-4 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-full checked:before:w-2.5 checked:before:h-2.5 checked:before:bg-blue-600 ' />
              <label htmlFor="vendor" className=' text-sm font-medium cursor-pointer'>I am a vendor</label>
            </div>
          </div>

          <p className='text-sm'>Your personal data will be used to support your experience throughout this
            website, to manage access to your account, and for other purposes described in
            our <Link href="/" className='text-[var(--primary)]'>privacy policy</Link>.</p>

          <button className='bg-[var(--primary)] text-white font-semibold px-5 py-2 rounded-lg cursor-pointer'>Register</button>


        </form>
)
}

      </div>

    </>
  )
}

export default Account