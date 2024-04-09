import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className='flex justify-center items-center mb-12'>
        <Image
          src='/banner.png'
          width='2379'
          height='876'
          alt='banner'
          className='w-full h-[150px] mx-auto object-cover'
        />
        <Link
          href='/'
          className='absolute h-1/4 w-1/2 text-center text-black font-bold text-4xl flex items-center'
        ></Link>
      </div>
      <Link
        href='/about'
        className='hover:text-blue-400 text-center text-xl flex items-center fixed right-10 top-10'
      >
        About
      </Link>
    </>
  );
};

export default Navbar;
