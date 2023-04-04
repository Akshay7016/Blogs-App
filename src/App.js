import React, { useContext, useEffect } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

import { AppContext } from './context/AppContext'

const App = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    //find page no. from query. If not found then set to 1
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      //means we had to show TagPage
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag, null);
    }
    else if (location.pathname.includes("categories")) {
      // means we had to show CategoryPage
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      // Do normal call with page number only
      fetchBlogPosts(Number(page), null, null)
    }
  },
    // location.search contains value of page, means page no. changes then run useEffect
    // eslint-disable-next-line
    [location.pathname, location.search]
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  )
}

export default App