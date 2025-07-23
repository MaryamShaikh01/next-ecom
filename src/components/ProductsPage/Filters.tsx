'use client'
import React, { useContext, useState } from 'react'
import { MyContext, useCheckboxValueContext } from '../CheckboxValueContext'

interface PrefixProp {
    prefix: string
}

const Filters = ({ prefix }: PrefixProp) => {

    const { data, setData } = useCheckboxValueContext()

    const handleDataChange = (e: any) => {

        const value = e.target.value

        setData((previousValue) =>
            e.target.checked ? [...previousValue, value] : previousValue.filter((values) => values !== value)
        )

        console.log(data , "filtered data ")
        
    };

    return (
        <>
            <details className="group xl:border-t-1 xl:border-b-1 border-[var(--border)] pb-5 xl:py-5">
                <summary
                    className="block cursor-pointer relative after:absolute  after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-0 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold">
                    Product Categories</summary>
                <ul className="flex flex-col gap-y-2 mt-4">

                    <li className="flex items-center">
                        <input
                            id={`${prefix}-fruits-veggies`}
                            type="checkbox"
                            className="min-w-5 min-h-5 accent-[var(--primary)] "
                            onChange={handleDataChange}
                            value="Fruits & Vegetables"
                        />
                        <label htmlFor={`${prefix}-fruits-veggies`} className="whitespace-nowrap ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Fruits & Vegetables</label>
                    </li>


                    <li className="flex items-center ">
                        <input id={`${prefix}-baby-pregnancy`} type="checkbox" value="Baby & Pregnancy" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-baby-pregnancy`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Baby & Pregnancy</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-beverages`} type="checkbox" value="Beverages" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-beverages`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Beverages</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-meats-seafood`} type="checkbox" value="Meats & Seafood" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-meats-seafood`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Meats & Seafoods</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-biscuit-snacks`} type="checkbox" value="Biscuit & Snacks" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-biscuit-snacks`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Biscuits & Snacks</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-breads-bakery`} type="checkbox" value="Breads & Bakery" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-breads-bakery`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Breads & Bakery</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-breakfast-dairy`} type="checkbox" value="Breakfast & Dairy" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-breakfast-dairy`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Breaksfast & Dairy</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-frozen-food`} type="checkbox" value="Frozen Food
" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-frozen-food`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Frozen Foods</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-grocery-staples`} type="checkbox" value="Grocery & Staples" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-grocery-staples`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Grocery & Staples</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-healthcare`} type="checkbox" value="Healthcare" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-healthcare`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Healthcare</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-household-needs`} type="checkbox" value="Household Needs" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-household-needs`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Household Needs</label>
                    </li>
                </ul>
            </details>

            <details className="group border-t-1 border-b-1 border-[var(--border)] py-5">
                <summary
                    className="block cursor-pointer relative after:absolute  after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-0 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold  ">
                    Filter by Colors</summary>
                <ul className="flex flex-col gap-y-2 mt-4">

                    <li className="flex items-center ">
                        <input id={`${prefix}-green`} type="checkbox" value="Green" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-4 checked:before:h-4 checked:before:bg-green-500 bg-gray-100 " onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-green`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
                    </li>

                    <li className="flex items-center">
                        <input id={`${prefix}-yellow`} type="checkbox" value="Yellow" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-4 checked:before:h-4 checked:before:bg-yellow-500 bg-gray-100 " onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-yellow`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
                    </li>

                </ul>
            </details>


            <details className="group border-t-1 border-b-1 border-[var(--border)] py-5">
                <summary
                    className="block cursor-pointer relative after:absolute after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-0 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold  ">
                    Filter by Brand</summary>
                <ul className="flex flex-col gap-y-2 mt-4">

                    <li className="flex items-center ">
                        <input id={`${prefix}-fresh`} type="checkbox" value="Fresh" className="relative appearance-none border-1 border-[var(--primary)] rounded-xl min-w-5 min-h-5 checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:transform checked:before:translate-x-[-50%] checked:before:translate-y-[-50%] checked:before:rounded-xl checked:before:w-4 checked:before:h-4 checked:before:bg-green-500 bg-gray-100 " onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-fresh`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">fresh</label>
                    </li>



                </ul>
            </details>

            <details className="group border-t-1 border-b-1 border-[var(--border)] py-5">
                <summary
                    className="block cursor-pointer relative after:absolute after:content-[url('/dropdown.png')] after:top-[50%] after:transform after:translate-y-[-50%] after:right-0 after:transition-[0.2s] group-open:after:rotate-[-90deg] text-sm font-semibold  ">
                    Product Status</summary>
                <ul className="flex flex-col gap-y-2 mt-4">

                    <li className="flex items-center ">
                        <input id={`${prefix}-in-stock`} type="checkbox" value="In Stock" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-in-stock`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock</label>
                    </li>

                    <li className="flex items-center ">
                        <input id={`${prefix}-sale`} type="checkbox" value="Sale" className="min-w-5 min-h-5 accent-[var(--primary)]" onChange={handleDataChange} />
                        <label htmlFor={`${prefix}-sale`} className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">On Sale</label>
                    </li>



                </ul>
            </details>

        </>
    )
}

export default Filters