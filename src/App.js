import React, { useContext, useEffect } from 'react'

import Blogs from './components/Blogs'
import Header from './components/Header'
import Pagination from './components/Pagination'

import { AppContext } from './context/AppContext'

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },
    // eslint-disable-next-line
    [])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App