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
                className=" flex items-center sm:justify-end gap-x-2 gap-y-2 p-2.5  rounded-[6px] bg-[var(--secondary)] my-3 whitespace-nowrap overflow-x-auto justify-start">
                <p className="mr-auto text- text-[var(--text-secondary)]">Showing all {data.length} items</p>


                <p className=" text- text-[var(--text-secondary)] ml-10">Sort: <span className='text-[var(--text-primary)]'>Sort by latest</span></p>

                <span className='min-h-4 min-w-0.5 bg-[var(--border)]'></span>

                <p className=" text- text-[var(--text-secondary)]">Show: <span className='text-[var(--text-primary)]'>{data.length} Items</span></p>


                <div className="flex">

                    <button onClick={() => { setIsGrid(true) }}
                        className={`cursor-pointer border-y-1 border-y-[#DEE2E7] border-l-2 border-l-[#DEE2E7] p-2 rounded-tl-md rounded-bl-md ${isGrid ? "bg-[var(--primary)]" : "bg-auto"}`}>
                        <GridIcon isGrid={isGrid} />
                    </button>

                    <button onClick={() => { setIsGrid(false) }}
                        className={`cursor-pointer border-1 border-[var(--border)] p-2 rounded-tr-md rounded-br-md  ${isGrid ? "bg-auto" : "bg-[var(--primary)]"} `}>
                        <ListIcon isGrid={isGrid} />
                    </button>
                </div>
            </div>
        </>

    )
}

export default HorizontalFilter