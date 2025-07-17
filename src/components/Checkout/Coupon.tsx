import React from 'react'

const Coupon = () => {
  return (
    <>
      <div className="m-auto w-[80vw] px-[10px] pb-5">
        <div className="flex border-1 border-[var(--border)] rounded-[6px]">
          <input type="text" name="coupon-code" id="coupon-code" placeholder="Have a coupon? Click here to enter your code"
            className=" w-[100%] inline-block pl-2 text-sm" />
          <button type='button' className="border-l-1 border-l-[var(--border)] rounded-tr-md rounded-br-md text-white bg-[var(--primary)] py-2 px-5 cursor-pointer ">Apply</button>
        </div>
      </div>
    </>
  )
}

export default Coupon