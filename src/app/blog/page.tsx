import BlogBreadcrumb from '@/components/Blog/BlogBreadcrumb'
import React from 'react'
import Image from 'next/image'
import AllBlogs from '@/components/Blog/AllBlogs'
import BlogList from '@/components/Blog/BlogList'
import BlogPagination from '@/components/Blog/BlogPagination'

const Blog = () => {

    const blogData = [
        {
            id : 1,
            badgeText: "Uncategorized",
            imageUrl: "/blog-image-1.png",
            title: "How grocers are approaching delivery as the market evolves",
            date: "November 3, 2023",
            tags: "Klbtheme, store, themeforest",
            description: "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba, och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon",
        },
        {
            id : 2,
            badgeText: "Uncategorized",
            imageUrl: "/blog-image-2.png",
            title: "How grocers are approaching delivery as the market evolves",
            date: "November 3, 2023",
            tags: "Klbtheme, store, themeforest",
            description: "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba, och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon",
        },
        {
            id : 3,
            badgeText: "Uncategorized",
            imageUrl: "/blog-image-3.png",
            title: "How grocers are approaching delivery as the market evolves",
            date: "November 3, 2023",
            tags: "Klbtheme, store, themeforest",
            description: "Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba, och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon",
        }
    ]

    return (
        <>
            <BlogBreadcrumb />

            <div className='m-auto w-[80vw] px-2.5'>

                {/* blog */}

                <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-y-10 gap-x-20'>



                   <AllBlogs blogData={blogData}/>


                    <BlogList blogData={blogData}/>



                </div>

                <BlogPagination/>
            </div>

        </>
    )
}

export default Blog