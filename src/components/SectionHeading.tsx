import React from 'react'

const SectionHeading = () => {
    return (
        <div className="flex justify-between items-center px-[10px] m-auto w-[80vw] gap-3">
            <p  className="text-lg text-[var(--text-primary)] font-bold ">New Arrivals</p>
            <p className="text-[13px] text-[var(--text-secondary)] mr-auto">Dont miss this opportunity at a special discount just for this week.</p>
            <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center'>View All <img src="/Icon.svg" alt="" /></button>

        </div>
    )
}

export default SectionHeading