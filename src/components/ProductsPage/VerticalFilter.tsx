import React from 'react'
import FilterSlideBtn from './FilterSlideBtn'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const VerticalFilter = (props: any) => {

    const { filter, setIsFilter } = props

    return (
        <>
            <div className='flex flex-col'>

                {/* <FilterSlideBtn filter={filter} setIsFilter={setIsFilter} /> */}


              
                <div className={`absolute left-0 right-0 w-[30vw] h-[100vh] z-50 p-10 xl:block xl:static rounded-tr-xl xl:w-auto xl:h-auto xl:bg-transparent xl:p-0 xl:pr-10 ${filter ? "bg-pink-600 hidden" : "bg-[#f3eeff]"}`}>

                    <details className="group xl:border-t-1 xl:border-b-1 border-[var(--border)] pb-5 xl:py-5">
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold">
                            Product Categories</summary>
                        <ul className="flex flex-col gap-y-2 mt-4">


                            <li className="flex items-center ">
                                <input id="fruits-veggies" type="checkbox" value="fruit-veggies" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='fruits-veggies' className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fruits & Vegetables</label>
                            </li>


                            <li className="flex items-center ">
                                <input id="baby-pregnancy" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='baby-pregnancy' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Baby & Pregnancy</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="beverages" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='beverages' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Beverages</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="meats-seafood" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='meats-seafood' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meats & Seafoods</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="biscuit-snacks" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='biscuit-snacks' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Biscuits & Snacks</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="breads-bakery" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='breads-bakery' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Breads & Bakery</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="breakfast-dairy" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='breakfast-dairy' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Breaksfast & Dairy</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="frozen-food" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='frozen-food' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frozen Foods</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="grocery-staples" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='grocery-staples' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Grocery & Staples</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="healthcare" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='healthcare' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Healthcare</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="household-needs" type="checkbox" value="" className="min-w-5 min-h-5 accent-[var(--primary)]" />
                                <label htmlFor='household-needs' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Household Needs</label>
                            </li>
                        </ul>
                    </details>

                    <details className="group border-t-1 border-b-1 border-[var(--border)] py-5">
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold  ">
                            Filter by Colors</summary>
                        <ul className="flex flex-col gap-y-2 mt-4">

                            <li className="flex items-center ">
                                <input id="green" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-4 checked:before:h-4 checked:before:bg-green-500 bg-gray-100 " />
                                <label htmlFor='green' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
                            </li>

                            <li className="flex items-center">
                                <input id="yellow" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-4 checked:before:h-4 checked:before:bg-yellow-500 bg-gray-100 " />
                                <label htmlFor='yellow' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
                            </li>

                        </ul>
                    </details>


                    <details className="group border-t-1 border-b-1 border-[var(--border)] py-5">
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold  ">
                            Filter by Brand</summary>
                        <ul className="flex flex-col gap-y-2 mt-4">

                            <li className="flex items-center ">
                                <input id="fresh" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-4 checked:before:h-4 checked:before:bg-green-500 bg-gray-100 " />
                                <label htmlFor='fresh' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">fresh</label>
                            </li>



                        </ul>
                    </details>

                    <details className="group border-t-1 border-b-1 border-[var(--border)] py-5">
                        <summary
                            className="block relative after:absolute after:z-[-1] after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:ml-5 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold  ">
                            Product Status</summary>
                        <ul className="flex flex-col gap-y-2 mt-4">

                            <li className="flex items-center ">
                                <input id="in-stock" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='sale' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock</label>
                            </li>

                            <li className="flex items-center ">
                                <input id="sale" type="checkbox" value="" className="relative appearance-none border-1 border-[var(--primary)] rounded-sm min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-sm checked:before:w-5 checked:before:h-5 checked:before:bg-[var(--primary)] bg-gray-100 checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:transform checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]  checked:after:w-5 checked:after:h-5 checked:after:pl-1 checked:after:content-[url('/checkbox-icon.svg')]" />
                                <label htmlFor='sale' className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">On Sale</label>
                            </li>



                        </ul>
                    </details>

                </div>
            </div>

        </>

    )
}

export default VerticalFilter