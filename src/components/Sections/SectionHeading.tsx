import React from 'react'

const SectionHeading = (props: { title: string; description?: string; }) => {
    const {title , description} = props;
    return (
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] justify-between items-center px-[10px] m-auto sm:w-[80vw] gap-x-3 py-5  ">
            <p  className="text-lg text-[var(--text-primary)] font-bold whitespace-nowrap col-span-2 md:col-auto">{title}</p>
            <p className="text-[13px] text-[var(--text-secondary)] mr-auto">{description}</p>
            <button type='button' className='border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center whitespace-nowrap'>View All <img src="/Icon.svg" alt="" /></button>

        </div>
    )
}

export default SectionHeading