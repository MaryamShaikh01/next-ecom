'use client'

import GridIcon from '@/components/svg/GridIcon'
import ListIcon from '@/components/svg/ListIcon'
import React, { useState } from 'react'
import LikeHeart from '@/components/svg/LikeHeart';
import BreadCrumb from '@/components/ProductsPage/BreadCrumb';
import Banner from '@/components/ProductsPage/Banner';
import HorizontalFilter from '@/components/ProductsPage/HorizontalFilter';
import AllFilteredProducts from '@/components/ProductsPage/AllFilteredProducts';
import VerticalFilter from '@/components/ProductsPage/VerticalFilter';
import FilterSlideBtn from '@/components/ProductsPage/FilterSlideBtn';
import SelectedFilters from '@/components/ProductsPage/SelectedFilters';
import CheckboxValueProvider from '@/components/CheckboxValueContext';

const AllProducts = () => {

    const [isGrid, setIsGrid] = useState(true)
    const [filter, setIsFilter] = useState(true)

    return (
        <>
            <CheckboxValueProvider >

            <BreadCrumb />

            <div className=' grid grid-cols-1  xl:grid-cols-[1fr_5fr] m-auto sm:w-[80vw] px-[10px]'>
                <VerticalFilter filter={filter} setIsFilter={setIsFilter} />
                <div>
                    <SelectedFilters />
                    <Banner />
                    <HorizontalFilter isGrid={isGrid} setIsGrid={setIsGrid} />
                    <AllFilteredProducts isGrid={isGrid} />
                </div>

            </div>

            </CheckboxValueProvider >

        </>
    )
}

export default AllProducts


