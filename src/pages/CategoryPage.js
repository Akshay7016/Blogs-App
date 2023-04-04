import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../components/Header'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);

  return (
    <div>
      <Header />
      <div className=' w-11/12 max-w-[670px] flex items-center gap-2 mt-[100px] -mb-[80px] mx-auto'>
        <button
          onClick={() => navigate(-1)}
          className='rounded-md border-2 py-1 px-3'>
          Back
        </button>
        <h2 className='font-bold text-xl'>Blogs on <span className='text-blue-500 underline'>{category}</span></h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default CategoryPage