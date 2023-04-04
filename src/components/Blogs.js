import React, { useContext } from 'react'

import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
import { AppContext } from '../context/AppContext';

const Blogs = () => {
  const { posts, isLoading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] flex flex-col items-center gap-7 py-7 my-[70px] mx-auto'>
      {
        isLoading ?
          (
            <div className='mt-[170px]'>
              <Spinner />
            </div>
          ) :
          (
            posts.length === 0 ?
              (
                <div className='mt-[170px]'>
                  <p className='text-2xl text-red-500'>No posts found!</p>
                </div>
              ) :
              (
                posts.map((post) => {
                  return <BlogDetails key={post.id} post={post} />
                })
              )
          )
      }
    </div>
  )
}

export default Blogs