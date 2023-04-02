import { useState, createContext } from "react";

import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const fetchBlogPosts = async (page = 1) => {
        setIsLoading(true);

        try {
            const response = await fetch(`${baseUrl}?page=${page}`);
            const data = await response.json();

            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (error) {
            console.log("Error in fetching posts data");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }

        setIsLoading(false);
    }

    const handlePageChange = (page) => {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        isLoading,
        setIsLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
};