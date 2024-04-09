import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

import { getPosts } from './api/getHeadless';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts }) {
  // we'll work on pagination later, for now put all the data into state

  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    // Sort posts by createdAt field in descending order
    const sortedPosts = sortPostsByNewestDate(posts);

    // Update state with sorted posts
    setSortedPosts(sortedPosts);
  }, [posts]); // Trigger effect when `posts` change

  const sortPostsByNewestDate = (posts) => {
    // Sort posts by createdAt field in descending order
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  return (
    <>
      <div className='flex flex-col justify-between items-center align-middle'>
        <div className='mb-6'>
          {sortedPosts.map((post, index) => (
            <div key={index}>
              <Link href={`/posts/${post.slug}`} className='group'>
                <div className='card rounded-none w-3/5 h-72 m-2 bg-gray-50 hover:bg-gray-100 mx-auto'>
                  <figure>
                    <Image
                      src={post.featureImage.url}
                      width={post.featureImage.width}
                      height={post.featureImage.height}
                      alt='cool image'
                      className='h-[200px] w-full object-cover'
                    />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>{post.postTitle}</h2>
                    <p className='h-16 overflow-hidden'>{post.postPreview}</p>

                    <p>
                      {new Date(post.createdAt).toLocaleString('en-US', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return { props: { posts }, revalidate: 10 };
}
