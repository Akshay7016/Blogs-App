import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Blogs from '../components/Blogs';
import Header from '../components/Header'
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            <div className=' w-11/12 max-w-[670px] flex items-center gap-2 mt-[100px] -mb-[80px] mx-auto'>
                <button
                    onClick={() => navigate(-1)}
                    className='rounded-md border-2 py-1 px-3'>
                    Back
                </button>
                <h2 className='font-bold text-xl'>Blogs Tagged <span className='text-blue-500 underline'>#{tag}</span></h2>
            </div>

            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage