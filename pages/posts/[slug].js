import { useRouter } from 'next/router';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import supabase from '../../utils/supabase';
import { getPosts } from '../api/getHeadless';
import Markdown from 'react-markdown';

export default function Post({ post }) {
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('id, user, comment, color')
        .eq('slug', slug);

      if (error) {
        throw error;
      }
      console.log(data);

      setAllComments(data || []);
    } catch (error) {}
  };

  useEffect(() => {
    fetchComments();
    console.log(allComments);
  }, [allComments]);

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    setHexColor(`#${randomColor}`);
  };

  const uploadComment = async () => {
    setIsLoading(true);
    if (!user || !comment || !hexColor) {
      setIsLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ slug: slug, user: user, comment: comment, color: hexColor }])
        .select();

      if (error) {
        setIsLoading(false);
        throw error;
      }
      setUser('');
      setComment('');
      setHexColor('');
      fetchComments();
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error('Error inserting comment:', error);
      return null;
    }
  };

  return (
    <>
      <div className='lg:w-3/5 mx-auto p-6 sm:w-full'>
        <h1 className='font-bold text-2xl mb-4'>{post.postTitle}</h1>
        <p className='mb-8'>
          {new Date(post.createdAt).toLocaleString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          })}
        </p>
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
                <div className='mb-4'>
                  {' '}
                  {/* Ensure this div is not inside a <p> */}
                  <Image
                    src={src}
                    alt={alt}
                    width={500} // Adjust width and height as needed
                    height={500}
                    loading='lazy'
                  />
                </div>
              );
            },
          }}
        >
          {post.postContent.markdown}
        </Markdown>
      </div>
      <div className='mx-auto items-center flex flex-col w-full'>
        {hexColor ? (
          <div className='w-3/4'>
            <span
              className='inline-block w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 mr-3'
              style={{ backgroundColor: hexColor }}
            ></span>
            <p>name</p>
            <textarea
              className='bg-gray-100 inline-block mb-4 w-full p-2'
              onChange={(event) => setUser(event.target.value)}
            ></textarea>
            <p>comment</p>
            <textarea
              className='bg-gray-100 block mb-4 w-full h-24 p-2'
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
            <button
              className='bg-primaryColor hover:bg-gray-300 text-white font-bold py-2 px-4 rounded mb-4'
              type='button'
              onClick={uploadComment}
            >
              {isLoading ? (
                <p className='bg-primaryColor'>Uploading</p>
              ) : (
                'Upload Comment'
              )}
            </button>
          </div>
        ) : (
          <button
            className='bg-primaryColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
            type='button'
            onClick={generateRandomColor}
          >
            Add Comment
          </button>
        )}
        <div className='w-3/4 mx-12'>
          {allComments.map((comment) => (
            <div key={comment.id} className='flex flex-col mb-6'>
              <div>
                <span
                  className='inline-block w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 mr-3'
                  style={{ backgroundColor: comment?.color }}
                ></span>
                <span className='text-gray-900 font-semibold'>
                  {comment?.user}
                </span>
              </div>
              <p className='text-gray-600 overflow-wrap'>{comment?.comment}</p>
            </div>
          ))}
        </div>
        <div className='mt-4'></div>
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

  return { props: { post }, revalidate: 60 };
}

export async function getStaticPaths() {
  try {
    const posts = await getPosts();

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.log('this is an error', error);
    return { paths: [], fallback: false };
  }
}
