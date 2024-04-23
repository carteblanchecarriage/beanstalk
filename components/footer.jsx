import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className='flex items-center justify-center h-24 bg-primaryColor mt-8'>
        <div>
          <Link href='/about' className='text-white hover:font-bold'>
            About
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
