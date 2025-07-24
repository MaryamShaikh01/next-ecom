import React, { useState } from 'react'

const Orders = () => {


    const [activetab, setActiveTab] = useState('tab1')

    return (
        <>

            <div className="grid border-1 border-[var(--border)] rounded-md text-md  px-3 py-3">


                <p className="w-fit text-2xl text-[var(--dark-black)] font-semibold">My Order</p>
                <div className='whitespace-nowrap overflow-x-auto sm:overflow-x-visibl'>

                    <ul className="flex justify-between items-start pt-2  pb-5 max-[400px]:w-[95vw] ">
                        <li className={`text-[18px]  px-[20px] md:px-[53px] py-[6px] md:py-[12px] rounded-tr-lg rounded-tl-lg cursor-pointer ${activetab === "tab1" ? "bg-violet-50 border-b-2" : "bg-none"}`} onClick={() => setActiveTab('tab1')}
                        >Active</li>
                        <li className={`text-[18px]  px-[20px] md:px-[53px] py-[6px] md:py-[12px] rounded-tr-lg rounded-tl-lg cursor-pointer ${activetab === "tab2" ? "bg-violet-50 border-b-2" : "bg-none"}`} onClick={() => setActiveTab('tab2')}
                        >Cancelled
                        </li>
                        <li className={`text-[18px]  px-[20px] md:px-[53px] py-[6px] md:py-[12px] rounded-tr-lg rounded-tl-lg cursor-pointer ${activetab === "tab3" ? "bg-violet-50 border-b-2" : "bg-none"}`} onClick={() => setActiveTab('tab3')}
                        >Completed
                        </li>
                    </ul>
                </div>

                {
                    activetab === "tab1" && (
                        <div className="" >

                            <div className=" grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-x-5 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex flex-wrap items-center gap-x-2 ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)]">#123456789</span> <span className='bg-[var(--primary)] text-white rounded-lg px-2 text-sm'>In Progress</span> </strong>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Inprogress </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Estimated Delivery Date : <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2   border-b-1 border-b-[#EDEEF2] py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="/apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/* onclick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>

                            <div className="pt-5 grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex flex-wrap items-center gap-x-2 ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)]">#123456789</span> <span className='bg-[var(--primary)] text-white rounded-lg px-2 text-sm'>In Progress</span> </strong>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Inprogress </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Estimated Delivery Date : <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2   border-b-1 border-b-[#EDEEF2] py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/* onclick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>


                            <div className="pt-5 grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex items-center flex-wrap gap-x-2  ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)] ">#123456789</span> <span className='bg-[var(--primary)] text-white rounded-lg px-2 text-sm'>In Progress</span> </strong>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Inprogress </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Estimated Delivery Date : <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/*  onClick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>



                        </div>
                    )
                }

                {
                    activetab === "tab2" && (
                        <div className="" >

                            <div className=" grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-x-2 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex flex-wrap items-center gap-x-2 ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)] line-through">#123456789</span> <span className='bg-[var(--accent)] text-white rounded-lg px-2 text-sm'>Cancelled</span> </strong>

                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Cancelled </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Estimated Delivery Date Was: <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2   border-b-1 border-b-[#EDEEF2] py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="/apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/* onclick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>

                            <div className="pt-5 grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex flex-wrap items-center gap-x-2 ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)] line-through">#123456789</span> <span className='bg-[var(--accent)] text-white rounded-lg px-2 text-sm'>Cancelled</span> </strong>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Cancelled </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Estimated Delivery Date Was: <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2    py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/* onclick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>

                        </div>

                    )
                }

                {
                    activetab === "tab3" && (
                        <div className="" >

                            <div className=" grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-x-2 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex flex-wrap items-center gap-x-2 ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)]">#123456789</span> <span className='bg-[var(--btn-green-bg)] text-white rounded-lg px-2 text-sm'>Completed</span> </strong>

                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Completed </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Delivered On : <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2   border-b-1 border-b-[#EDEEF2] py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="/apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/* onclick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>

                            <div className="pt-5 grid gap-x-4">

                                <div
                                    className="flex flex-col w-fit sm:w-auto min-[500px]:grid min-[500px]:grid-cols-2 gap-y-2 bg-[var(--light-bg-colour)]  rounded-lg">
                                    <strong className="col-span-full text-xl font-semibold text-[var(--dark-black)] pb-2 flex flex-wrap items-center gap-x-2 ">Order no:
                                        <span className=" text-xl text-[var(--dark-black)]">#123456789</span> <span className='bg-[var(--btn-green-bg)] text-white rounded-lg px-2 text-sm'>Completed</span> </strong>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Date : <span
                                        className="text-sm text-[var(--light-border)]"> 2 June 2023 2:40 PM </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Order Status : <span
                                        className="text-sm text-[var(--light-border)]"> Completed </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Delivered On : <span
                                        className="text-sm text-[var(--light-border)]">8 June 2023 </span></p>
                                    <p className="text-[var(--light-black)] text-sm font-medium">Payment Method : <span
                                        className="text-sm text-[var(--light-border)]"> Cash on delivery </span></p>
                                </div>

                                <div
                                    className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-2    py-5">
                                    <div
                                        className=" grid grid-cols-1  min-[360px]:grid-cols-[auto_1fr_auto] items-start pr-5  lg:items-center justify-center gap-y-2 gap-x-5 ">

                                        <img src="apple-juice.png" alt="item 1" width="110" height="110"
                                            className=" w-[80px] md:w-[110px] h-[80px] md:h-[110px] object-cover" />
                                        <div className="grid max-[400px]:grid-cols-2 gap-y-1">

                                            <p className=" font-semibold text-[var(--dark-black)] text-base col-span-full">Blue Flower
                                                Print Crop Top</p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Color : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> Yellow</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Quantity : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> 1</span></p>
                                            <p className=" font-semibold text-[var(--dark-black)] text-sm">Total : <span
                                                className="text-[var(--light-black)] font-normal text-sm"> $23.00</span></p>
                                        </div>
                                    </div>
                                    {/* onclick="viewDetails(event)" */}
                                    <button type="button"
                                        className="whitespace-nowrap cursor-pointer w-fit px-4 sm:px-7 py-1.5 sm:py-3 font-semibold rounded-lg bg-[var(--primary))] text-white hover:bg-violet-900">
                                        View Details</button>
                                </div>


                            </div>

                        </div>

                    )
                }


            </div>

        </>
    )
}

export default Orders