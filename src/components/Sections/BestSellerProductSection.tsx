import React from 'react'
import LikeHeart from '../svg/LikeHeart'

const BestSellerProductSection = () => {

    const cardData = [
        {
            badge: "Only This Week",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-09.png'
        },

        {
            badge: "Only This Week",
            title: "Get your everyday needs here with us",
            subtitle: "A different kind of grocery store",
            btnText: "Shop Now",
            imageUrl: '/banner-09.png'
        }
    ]
    return (
        <>
            <div className='m-auto w-[80vw] grid  grid-cols-[auto_auto_350px_auto_auto]'>

                <div className='flex flex-col  p-5'>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="/banana-bunch.png" alt="banana image" className="w-[200px] h-[200px] object-cover" />
                        <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                            <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>56%</span>
                            <LikeHeart></LikeHeart>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center ">

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa?
                        </p>
                        <strong className=""> $0.99 <span className=''>009$</span></strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                        </svg>

                        <button type='button' className='w-fit border-1 border-[var(--primary)] rounded-3xl px-5 py-2.5 flex gap-3 text-[var(--primary)]'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                    </div>


                </div>

                <div className='flex flex-col  p-5'>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="/banana-bunch.png" alt="banana image" className="w-[200px] h-[200px] object-cover" />
                        <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                            <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>56%</span>
                            <LikeHeart></LikeHeart>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center ">

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa?
                        </p>
                        <strong className=""> $0.99 <span className=''>009$</span></strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                        </svg>

                        <button type='button' className='w-fit border-1 border-[var(--primary)] rounded-3xl px-5 py-2.5 flex gap-3 text-[var(--primary)]'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                    </div>


                </div>

                    <div className=" bg-cover bg-no-repeat px-5 py-10 rounded-[12px] flex flex-col gap-y-1 bg-[url('/banner-10.png')]">
                        <p className='text-[var(--orange)] font-medium text-xs'>A different kind of grocery</p>
                        <p className='text-[22px] w-[70%] text-[var(--text-primary)] font-bold'>A different kind of grocery store</p>
                        <p className='text-[var(--text-secondary)] text-[13px]'>A different kind of grocery store</p>
                        <button type='button' className='mt-2 border-1 border-var(--border) rounded-full bg-white text-xs font-bold px-[12px] py-[8px] flex gap-2 items-center w-fit'>text<img src="/Icon.svg" alt="" /></button>
                    </div>

                    <div className='flex flex-col  p-5'>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="/banana-bunch.png" alt="banana image" className="w-[200px] h-[200px] object-cover" />
                        <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                            <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>56%</span>
                            <LikeHeart></LikeHeart>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center ">

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa?
                        </p>
                        <strong className=""> $0.99 <span className=''>009$</span></strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                        </svg>

                        <button type='button' className='w-fit border-1 border-[var(--primary)] rounded-3xl px-5 py-2.5 flex gap-3 text-[var(--primary)]'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                    </div>


                </div>

                <div className='flex flex-col  p-5'>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="/banana-bunch.png" alt="banana image" className="w-[200px] h-[200px] object-cover" />
                        <div className='absolute top-0 left-0 flex justify-between items-center w-full'>
                            <span className='rounded-3xl bg-[var(--accent)] px-2 py-1 text-[10px] font-extrabold text-white'>56%</span>
                            <LikeHeart></LikeHeart>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center ">

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa?
                        </p>
                        <strong className=""> $0.99 <span className=''>009$</span></strong>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                        </svg>

                        <button type='button' className='w-fit border-1 border-[var(--primary)] rounded-3xl px-5 py-2.5 flex gap-3 text-[var(--primary)]'>Add to cart <img src="/plus-icon.svg" alt="" /></button>
                    </div>


                </div>

            </div>
        </>
    )
}

export default BestSellerProductSection