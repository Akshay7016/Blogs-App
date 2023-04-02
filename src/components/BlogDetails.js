import React from 'react'

const BlogDetails = ({ post }) => {
    return (
        <div>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-sm mt-[4px]'>
                By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
            </p>
            <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
            <p className='text-[17px] mt-[14px]'>{post.content}</p>
            <div className='flex gap-2 mt-[5px]'>
                {
                    post.tags.map((tag, index) => {
                        return <span key={index} className="text-xs text-blue-600 underline font-bold">#{tag}</span>
                    })
                }
            </div>
        </div>
    )
}

export default BlogDetails;