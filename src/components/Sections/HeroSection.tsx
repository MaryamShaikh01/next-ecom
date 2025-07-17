import React from 'react'

const HeroSection = () => {
  return (
    <div className='px-[10px] m-auto w-[80vw] grid grid-cols-[auto_1fr]'>



      <ul className='border-1 border-[var(--border)] rounded-[10px]'>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />All Categories <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto' /></li>

<div className='flex'>

     <img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />

 <details className="group xl:border-t-1 xl:border-b-1 border-[var(--border)] pb-5 xl:py-5">
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold">
                            Product Categories</summary>
                        <ul className="flex flex-col gap-y-2 mt-4">


                            <li className="flex items-center ">
                                <input id="fruits-veggies" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='fruits-veggies' className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fruits & Vegetables</label>
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

                            <li className="flex items-center ">
                                <input id="household-needs" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='household-needs' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Household Needs</label>
                            </li>
                        </ul>
                    </details>
</div>


        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Fruits and Vegetable <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit  ml-auto ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Meats & Seafood <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Breaksfast & Dairy <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto  ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Breads & Bakery     <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Beverages <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Frozen Foods <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto  ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Biscuits & Snacks <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Grocery & Staples<img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto  ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Household Needs <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Healthcare <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto  ' /></li>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />Baby & Pregnancy <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit  ml-auto ' /></li>
      </ul>


      
      {/* <details className="text-[var(--text-primary)] font-semibold " open>


                  <summary
                      className="text-22-18px py-5 border-b-1 border-b-[#eae9ea] block relative after:absolute after:z-[-1] after:content-[url('/img/filter.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-9 px-10">
                      Filter</summary>
                  <ul className="text-[#8A8989] flex flex-col gap-[18px] py-10">
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Tops</summary>
                              <ul className="px-10">
                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Printed T-Shirts</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Plain T-Shirts</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Kurti</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Boxers</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Full Sleeve T-Shirts</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Joggers</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Pyjamas</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                      <li>
                          <details className="group">
                              <summary
                                  className="block relative after:absolute after:z-[-1] after:content-[url('/img/Icon.svg')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-10 after:transition-[0.2s] group-open:after:rotate-[90deg] px-10">
                                  Jeans</summary>
                              <ul className="px-10">

                                  <li>One</li>
                                  <li>One</li>
                              </ul>
                          </details>
                      </li>
                  </ul>
              </details> */}

    </div>
  )
}

export default HeroSection