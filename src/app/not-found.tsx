import Image from "next/image";

export default function NotFound() {
    return (
        <>
        <div className="bg-violet-100">

            <div className='m-auto w-[80vw] px-[10px] flex flex-col justify-center items-center py-10 pb-20 gap-y-5'>

                <Image src="/not-found-image.svg" alt='empty cart icon' width={50} height={50} className='w-3xl h-[250px] my-7' />
                <p className='text-6xl font-bold'>Page not found</p>
                <p className="text-lg text-[var(--text-secondary)] text-center">The page you want to go is not currently available</p>
                <button type='button' className='rounded-lg px-4 py-2 bg-[var(--primary)] text-white font-bold cursor-pointer'>Go to Homepage</button>

            </div>
        </div>
        </>
    );
}


