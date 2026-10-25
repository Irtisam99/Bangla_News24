import Image from 'next/image';
import React from 'react';
import Navlink from './Navlink';
import UserInfo from './UserInfo';
import BanglaDate from './BanglaData';

const Header = () => {


    return (
        <header className='relative container mx-auto '>
            <div className='flex flex-col items-center sm:flex-row justify-center gap-2'>
                <Image className='w-10 h-10' src={'/logo.webp'} alt='' height={50} width={50}></Image>

                <div className='flex flex-col items-center sm:items-start'>
                    <span className='text-2xl font-bold text-red-700'>Bangla News 24</span>
                    <span className='text-xs text-neutral-500'><BanglaDate></BanglaDate></span>
                </div>
            </div>

            <UserInfo></UserInfo>


            <Navlink></Navlink>
        </header>
    );
};

export default Header;