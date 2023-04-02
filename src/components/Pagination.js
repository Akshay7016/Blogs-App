import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-t-2 fixed bottom-0 bg-white'>
      <div className='w-11/12 max-w-[670px] flex justify-between py-2'>
        <div className='flex gap-3'>
          {
            page > 1 &&
            <button
              className='rounded-md border-2 py-1 px-3'
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>
          }
          {
            page < totalPages &&
            <button
              className='rounded-md border-2 py-1 px-3'
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          }
        </div>

        <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination