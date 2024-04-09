import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  return (
    <>
      <div className='flex bg-blue-200 mb-4'>
        <div className='flex mx-auto'>
          <Link
            href='/'
            className='p-6 text-center text-black font-bold text-4xl '
          >
            <h1>Beanstalk</h1>
          </Link>

          <Link href='/about'>
            <h1>About</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
