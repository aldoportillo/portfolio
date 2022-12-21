import React from 'react'
import { Link } from 'react-router-dom'


export default function Blog({blogData}) {


    const renderBlogs = blogData.map( blog => {
        return(
        <Link to={`/blog/${blog._id}`} state={{ from: "blog", data: blog}}>
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
        </Link>
        )
    })
  return (
    <div className='blog-page'>
    <h2>Blogs</h2>
      <div className='blog-list'>
        {renderBlogs}
      </div> 
    </div>
  )
}
