import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const fetchBlogPosts = async (page = 1, tag = null, category = null) => {
        setIsLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if (tag) {
            url = url + `&tag=${tag}`;
        }
        if (category) {
            url = url + `&category=${category}`
        }
        try {
            const response = await fetch(url);
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
        navigate({ search: `?page=${page}` })
        setPage(page);
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