import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split('/').at(-1);

  const { isLoading, setIsLoading } = useContext(AppContext);

  const fetchRelatedBlogs = async () => {
    setIsLoading(true);
    let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error in Related blogs API");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  },
    // eslint-disable-next-line
    [location.pathname]);

  return (
    <div>
      <Header />
      <div className='w-11/12 max-w-[670px] py-2 mx-auto my-[90px]'>
        <button
          onClick={() => navigate(-1)}
          className='rounded-md border-2 py-1 px-3 mb-5'
        >
          Back
        </button>

        {
          isLoading ?
            (
              <div className='flex justify-center mt-[140px]'>
                <Spinner />
              </div>
            ) :
            blog ?
              (
                <div>
                  <BlogDetails post={blog} />
                  <h2 className='font-bold text-3xl mt-[50px] mb-[30px]'>Related Blogs</h2>
                  <div className='flex flex-col gap-4'>
                    {
                      relatedBlogs.map((post) => {
                        return <BlogDetails key={post.id} post={post} />
                      })
                    }
                  </div>
                </div>
              ) :
              (
                <div className='mt-[140px]'>
                  <p className='text-2xl text-red-500 flex justify-center'>No Blogs Found</p>
                </div>
              )
        }
      </div>
    </div>
  )
}

export default BlogPage