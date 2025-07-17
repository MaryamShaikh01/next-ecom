import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

interface BlogPost {
    imageUrl: string,
    badgeText?: string,
    title: string,
    date: string,
    tags?: string,
    description?: string,
    id?: number,
}

interface AllBlogPost {
    blogData: BlogPost[],
}

const BlogList = ({ blogData }: AllBlogPost) => {
    return (
        <>
            <div>

                <div className='flex  flex-col gap-y-5 pb-5'>
                    <p className='text-sm font-semibold'>Blog Post List</p>
                    {blogData.map((blog) => (
                        <>
                            <div className='grid grid-cols-[auto_1fr] gap-x-5 lg:gap-y-2 items-center lg:items-start' >
                                <Image src={blog.imageUrl} alt={blog.title} width={50} height={50} className='w-14 h-14 object-cover rounded-full row-span-2' />
                                <p className='text-sm font-bold'>{blog.title}</p>
                                <p className='text-xs text-[var(--text-secondary)]'>{blog.date}</p>
                            </div>
                        </>
                    ))}
                </div>

                <div className=' border-t-1 border-[var(--border)]'>
                    <p className='col-span-full text-sm font-semibold py-5'>Social Media Widget</p>

                    <div className='lg:flex lg:flex-col gap-y-2 flex flex-wrap gap-x-2'>

                        <div className='bg-[#1877F2] p-3 rounded-lg  items-center '>
                            <Link href="https://www.facebook.com/" target='_blank' className='flex  gap-x-5 text-white font-bold'><FaFacebookF className='text-xl text-white bg-[#1877F2] ' /> Facebook</Link>
                        </div>
                        <div className='bg-[#1DA1F2] p-3 rounded-lg  items-center '>
                            <Link href="https://www.facebook.com/" target='_blank' className='flex  gap-x-5 text-white font-bold'><FaTwitter className='text-xl text-white bg-[#1DA1F2] ' /> Twitter</Link>
                        </div>
                        <div className='bg-[#5b5b5b] p-3 rounded-lg  items-center'>
                            <Link href="https://www.facebook.com/" target='_blank' className='flex  gap-x-5 text-white font-bold'><FaInstagram className='text-xl text-white bg-[#5b5b5b] ' /> Instagram</Link>
                        </div>
                        <div className='bg-[#0077B5] p-3 rounded-lg  items-center'>
                            <Link href="https://www.facebook.com/" target='_blank' className='flex  gap-x-5 text-white font-bold'><FaLinkedinIn className='text-xl text-white bg-[#0077B5] ' /> Linked In</Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default BlogList