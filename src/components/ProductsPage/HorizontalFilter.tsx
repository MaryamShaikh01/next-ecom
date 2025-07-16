'use client'

import React, { useState } from 'react'
import GridIcon from '../svg/GridIcon'
import ListIcon from '../svg/ListIcon'
import data from '@/components/data.json';


const HorizontalFilter = (props: any) => {

    const { isGrid, setIsGrid } = props

    console.log(setIsGrid, "value of setisgrid is ")

    return (
        <>
            <div
                className=" flex items-center justify-end gap-2 p-2.5  rounded-[6px] bg-[var(--secondary)] my-3">
                <p className="mr-auto text- text-[var(--text-secondary)]">Showing all {data.length} items</p>

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
                <div className="hidden sm:flex">

                    <button onClick={() => { setIsGrid(true) }}
                        className={`border-y-1 border-y-[#DEE2E7] border-l-2 border-l-[#DEE2E7] p-2 rounded-tl-md rounded-bl-md ${isGrid ? "bg-[var(--primary)]" : "bg-auto"}`}>
                        <GridIcon isGrid={isGrid} />
                    </button>
                    <button onClick={() => { setIsGrid(false) }}
                        className={`border-1 border-[var(--border)] p-2 rounded-tr-md rounded-br-md  ${isGrid ? "bg-auto" : "bg-[var(--primary)]"} `}>
                        <ListIcon isGrid={isGrid} />
                    </button>
                </div>
            </div>
        </>

    )
}

export default HorizontalFilter