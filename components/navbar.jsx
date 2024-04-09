import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className='flex bg-blue-200 mb-4 p-4'>
        <div className='flex gap-4 mx-auto'>
          <Link
            href='/'
            className='text-center text-black font-bold text-4xl flex items-center'
          >
            Beanstalk
          </Link>

          <Link
            href='/about'
            className='hover:text-blue-400 text-center text-xl flex items-center'
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
