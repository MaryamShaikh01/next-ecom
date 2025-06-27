import React from 'react'

const Footer = () => {
  return (
    <>
<div className='px-[10px] m-auto w-[80vw]'>



    <div className='flex justify-between'>
<div>

      <p className='text[20px] font-bold text-[var(- -text-primary)]'>Join our newsletter for £10 offs</p>
      <p className='text-[13px] font-normal text-[var(--text-secondary)]'> Register now to get latest updates on promotions &
        coupons.Don’t worry, we not spam!</p>
</div>
<div>

        <div className='flex gap-0 border-1 rounded-[12px] w-fit'>

      <input type="email" name="email" id="email" placeholder="Enter your email address" className="bg-white  px-10 py-1 bg-[url(/img/Icon/email.svg)] bg-no-repeat bg-position-[10px] border-1 rounded-lt-[12px] rounded-lb-[12px] "></input>
      <button className='bg-[var(--primary)] text-white rounded-tr-[11px] rounded-br-[11px] px-5'>Send</button>
        </div>
        <p>By subscribing you agree to our <span className='text-[var(--primary)]'>Terms & Conditions and Privacy & Cookies Policy.</span></p>
</div>

    </div>



</div>
    </>
  )
}

export default Footer