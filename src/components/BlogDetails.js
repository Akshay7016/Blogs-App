import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
        <div>
            <NavLink to={`/blog/${post.id}`}>
                <p className='font-bold text-lg'>{post.title}</p>
            </NavLink>
            <p className='text-sm mt-[4px]'>
                By {" "}
                <span className='italic'>{post.author}</span> on {" "}
                <NavLink to={`/categories/${post.category.replace(" ", "-")}`}>
                    <span className='font-bold underline'>{post.category}</span>
                </NavLink>
            </p>
            <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
            <p className='text-[17px] mt-[14px]'>{post.content}</p>
            <div className='flex gap-2 mt-[5px]'>
                {
                    post.tags.map((tag, index) => {
                        return (
                            <NavLink key={index} to={`/tags/${tag.replace(" ", "-")}`}>
                                <span className="text-xs text-blue-600 underline font-bold">#{tag}</span>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogDetails;