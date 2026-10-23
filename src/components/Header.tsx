import Image from 'next/image';
import React from 'react';
import Navlink from './Navlink';

const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    })

    return (
        <header className='relative container mx-auto '>
            <div className='flex flex-col items-center sm:flex-row justify-center gap-2'>
                <Image className='w-10 h-10' src={'/logo.webp'} alt='' height={50} width={50}></Image>

                <div className='flex flex-col items-center sm:items-start'>
                    <span className='text-2xl font-bold text-red-700'>Bangla News 24</span>
                    <span className='text-xs text-neutral-500'>{date}</span>
                </div>
            </div>

            <div className='absolute right-0 top-1 flex gap-2 items-center text-sm'>
                
                <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700 ">সাইন ইন</button>
                <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">সাইন আপ</button>

            </div>

            <Navlink></Navlink>
        </header>
    );
};

export default Header;