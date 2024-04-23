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
          className='sm:w-full lg:w-3/4 h-[150px] mx-auto object-cover object-[10%]'
        />
        <Link
          href='/'
          className='absolute h-1/4 w-1/2 text-center text-black font-bold text-4xl flex items-center'
        ></Link>
      </div>
    </>
  );
};

export default Navbar;
