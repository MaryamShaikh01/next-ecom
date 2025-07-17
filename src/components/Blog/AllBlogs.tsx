import React from 'react'
import Image from 'next/image'

interface BlogPost {
    imageUrl: string,
    badgeText: string,
    title: string,
    date: string,
    tags: string,
    description: string,
    id?: number,
}

interface AllBlogPost {
    blogData: BlogPost[],

}

const AllBlogs = ({ blogData }: AllBlogPost) => {

    return (
        <>
            <div className='flex flex-col gap-y-5 pb-5'>
                {blogData.map((blog) => (
                    <>
                        <div className='flex flex-col gap-y-3' >
                            <div className='relative'>
                                <Image src={blog.imageUrl} alt={blog.title} width={1000} height={1000} className='object-cover object-bottom w-full h-[250px] md:h-[400px] 2xl:h-[500px] rounded-lg ' />
                                <p className='absolute top-5 left-5 text-[var(--primary)] bg-white px-4 py-2 rounded-lg text-sm font-semibold uppercase'>{blog.badgeText}</p>
                            </div>
                            <p className='text-4xl font-bold'>{blog.title}</p>

                            <div className='flex '>
                                <p className='text-[var(--text-secondary)] text-sm'>{blog.date}</p>
                                <span className='h-1.5 w-1.5 my-auto mx-3 rounded-full bg-[var(--border)]'></span>
                                <p className='text-[var(--text-secondary)] text-sm'>{blog.tags}</p>
                            </div>
                            <p className='text-[var(--text-secondary)] text-sm'>{blog.description}</p>

                            <button type='button' className='text-white bg-[var(--primary)] font-semibold px-4 py-2 rounded-lg w-fit'>Read More</button>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default AllBlogs