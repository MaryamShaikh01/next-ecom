import GridIcon from '@/components/svg/GridIcon'
import ListIcon from '@/components/svg/ListIcon'
import React from 'react'
import data from '@/components/data.json';
import LikeHeart from '@/components/svg/LikeHeart';
import BreadCrumb from '@/components/Sections/BreadCrumb';

const AllProducts = () => {
    return (
        <>
<BreadCrumb/>
            <div className='grid grid-cols-[1fr_5fr] m-auto w-[80vw]'>
                <div className='h-fit'>

                    <details className="group ">
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold mb-4 ">
                            Product Categories</summary>
                        <ul className="flex flex-col gap-y-2">


                            <li className="flex items-center ">
                                <input id="fruits-veggies" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='fruits-veggies' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fruits & Vegetables</label>
                            </li>


                            <li className="flex items-center ">
                                <input id="baby-pregnancy" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='baby-pregnancy' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Baby & Pregnancy</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="beverages" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='beverages' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Beverages</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="meats-seafood" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='meats-seafood' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meats & Seafoods</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="biscuit-snacks" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='biscuit-snacks' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Biscuits & Snacks</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="breads-bakery" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='breads-bakery' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Breads & Bakery</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="breakfast-dairy" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='breakfast-dairy' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Breaksfast & Dairy</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="frozen-food" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='frozen-food' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frozen Foods</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="grocery-staples" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='grocery-staples' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Grocery & Staples</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="healthcare" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='healthcare' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Healthcare</label>
                            </li>

                            <li className="flex items-center mb-3 ">
                                <input id="household-needs" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='household-needs' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Household Needs</label>
                            </li>
                        </ul>
                    </details>

                    <details>
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold mb-4">
                            Product Categories</summary>
                        <ul className='flex flex-col gap-y-2'>

                            <li className="flex items-center ">
                                <input id="green" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-5 checked:before:h-5 checked:before:bg-green-500 bg-gray-100 " />
                                <label htmlFor='green' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
                            </li>
                        </ul>
                    </details>
                </div>

                <div>
                    <div className="  bg-cover bg-no-repeat px-5 py-10 rounded-[12px] flex flex-col gap-y-1" style={{ backgroundImage: `url(/banner-12.png)` }}>
                        {/* <div className='w-[400px]'> */}

                        <p className='text-[#7C2D12] font-semibold text-xs bg-[#FFEDD5] w-fit px-2 py-1 rounded-4xl'>Only This Week</p>
                        <p className='text-[22px] w-[50%] text-[var(--text-primary)] font-bold'>Grocery store with different measures</p>
                        <p className='text-[var(--text-secondary)] w-[50%] text-[13px]'>We have prepared special discounts for you on grocery
                            products...</p>
                        <button type='button' className='mt-2 border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center w-fit'>Shop Now<img src="/Icon.svg" alt="" /></button>
                        {/* </div> */}

                    </div>

                    <div
                        className="flex items-center justify-end gap-2 p-2.5  rounded-[6px] bg-[var(--secondary)] my-3">
                        <p className="mr-auto text- text-[var(--text-secondary)]">Showing all 12 items</p>

                        <input type="checkbox" name="verify-filter" id="verify-filter"
                            className="w-[15px] h-[15px] rounded-[2px] border-2 border-[#8B96A5]" />
                        <label htmlFor="verify-filter" className="mr-3">Verified Only
                        </label>
                        <div
                            className="border-1 light-gray-border rounded-[6px] py-1.5 pl-2.5 pr-2 w-fit flex items-center gap-7">

                            <select name="pieces" id="pieces" className="appearance-none focus:outline-0 ">
                                <option value="1">Featured</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z"
                                    fill="#8B96A5" />
                            </svg>
                        </div>
                        <div className="flex">

                            <button
                                className="border-y-1 border-y-[#DEE2E7] border-l-2 border-l-[#DEE2E7] p-2 rounded-tl-md rounded-bl-md hover:bg-[#EFF2F4]">
                                <GridIcon />
                            </button>
                            <button
                                className="border-1 light-gray-border p-2 rounded-tr-md rounded-br-md hover:bg-[#EFF2F4]  ">
                                <ListIcon />
                            </button>
                        </div>
                    </div>

                    <div className='order-1 border-[var(--border)] rounded-[12px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] pb-10 border-1'>
                        {data.map((item) =>
                            <div key={item.id} className='flex flex-col p-5 border-r-1 border-r-[var(--border)]'>
                                <div className="relative ">
                                    <img src={item.image} alt={item.productTitle} className="w-[200px] h-[200px] object-cover" />
                                    <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                                        <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>{item.discountPercentage}</span>
                                        <LikeHeart></LikeHeart>
                                    </div>
                                </div>

                                <div className=" flex flex-col justify-items-start gap-y-1">
                                    <p className='bg-gradient-to-r from-lime-300  to-green-300 text-[10px] font-extrabold w-fit rounded-[14px] px-2.5 py-1 text-[var(--badgeGreenText)]'>{item.badgeText}</p>
                                    <p className="line-clamp-1 text-sm">
                                        {item.productTitle}
                                    </p>
                                    <span className='flex items-center gap-3'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 15" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                                        </svg>
                                        <span className=''>3</span>
                                    </span>
                                    <strong className="text-[22px] font-bold text-[var(--accent)]"> {item.ourPrice} <span className='text-base font-medium text-[var(--text-primary)] line-through'>{item.originalPrice}</span></strong>

                                    <button type='button' className=' border-1 border-[var(--primary)] rounded-3xl px-5 py-1 text-[var(--primary)] flex gap-3 items-center justify-between'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                                </div>


                            </div>
                        )}
                    </div>
                </div>


            </div>

        </>

    )
}

export default AllProducts


