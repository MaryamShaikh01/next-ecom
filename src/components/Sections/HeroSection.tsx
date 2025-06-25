import React from 'react'

const HeroSection = () => {
  return (
    <div className='px-[10px] m-auto w-[80vw] grid grid-cols-[auto_1fr]'>



      <ul className='border-1 border-[var(--border)] rounded-[10px]'>
        <li className='flex items-center gap-x-2 pl-5 px-3 py-3 border-b -1 border-b-[var(--border)]'><img src="/grid-icon.svg" alt="grid icon" width={20} height={20} />All Categories <img src="/dropdown.png" alt="dropdown image" width={10} height={0} className='w-fit h-fit ml-auto' /></li>
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