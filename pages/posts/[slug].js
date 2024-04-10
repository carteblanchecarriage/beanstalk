import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import { getPosts } from '../api/getHeadless';
import Markdown from 'react-markdown';

export default function Post({ post }) {
  const router = useRouter();
  const { slug } = router.query;
  const imageUrl =
    'https://lh7-us.googleusercontent.com/8ulnzjouxypy_ZCEcFqCQCwOSxlSj_MQgcBPexdy-hy0_eHar9d4TeqFSlNHaqSi5kugawL5iy1uYM23VNm9pStBMO_DhL4MjVC9fgheU09Sxun7s_dwV3ZaVY8V0gaJEk0RoykVgEOtZvC6kx4vamU';

  const share = async () => {
    const shareData = {
      url: ``,
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('ggggggggggggggggggg', err);
    }
  };

  return (
    <>
      <div className='lg:w-3/5 mx-auto p-6 sm:w-full'>
        <Markdown
          components={{
            p: ({ children }) => <p className='mb-4'>{children}</p>,
            h1: ({ children }) => (
              <h1 className='font-bold text-2xl mb-4'>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className='font-bold text-xl mb-4'>{children}</h2>
            ),
            img: ({ node, ...props }) => {
              const { src, alt } = props;
              return (
                <div className='flex justify-center'>
                  {' '}
                  <Image
                    src={src}
                    alt={alt}
                    width={500} // Adjust width and height as needed
                    height={500}
                  />
                </div>
              );
            },
          }}
        >
          {post.postContent.markdown}
        </Markdown>
      </div>
    </>
  );
}

// GraphQL query
export async function getStaticProps(context) {
  const posts = await getPosts();

  const { params } = context;
  const slug = params.slug;

  const post = posts.find((item) => item.slug === slug);

  return { props: { post }, revalidate: 10 };
}

export async function getStaticPaths() {
  try {
    const posts = await getPosts();

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));
    console.log(paths);

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.log('this is an error', error);
    return { paths: [], fallback: false };
  }
}
