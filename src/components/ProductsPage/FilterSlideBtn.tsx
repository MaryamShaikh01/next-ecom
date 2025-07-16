import React, { useState } from 'react'

const FilterSlideBtn = (props : any) => {

const {filter , setIsFilter} = props

  return (
<div className=''>

    <button className='xl:hidden z-60 absolute bg-purple-300 rounded-lg ' onClick={()=>{setIsFilter(!filter)}}>Slide</button>
</div>
  )
}

export default FilterSlideBtn