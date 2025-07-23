import React, { useContext } from 'react'
import Filters from './Filters'
import { useState } from 'react'


const VerticalFilter = (props: any) => {

    const { filter, setIsFilter } = props

    

    return (
        <>
            <div className='flex flex-col'>

                {/* <FilterSlideBtn filter={filter} setIsFilter={setIsFilter} /> */}

                <div className={`absolute left-0 right-0 w-[30vw] h-[100vh] z-50 p-10 xl:block xl:static rounded-tr-xl xl:w-auto xl:h-auto xl:bg-transparent xl:p-0 xl:pr-10 ${filter ? "bg-pink-600 hidden" : "bg-[#f3eeff]"}`}>

                    <Filters prefix={"sidebar"}/>

                </div>
            </div>

        </>

    )
}

export default VerticalFilter