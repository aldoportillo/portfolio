import React from 'react'
import { Link } from 'react-router-dom'


export default function Blog({blogData}) {


    const renderBlogs = blogData.map( blog => {
        return(
          <div className='blog-list'>
        <Link to={`/blog/${blog._id}`} state={{ from: "blog", data: blog}}>
            <h3>{blog.title}</h3>
            <p>{blog.date}</p>
        </Link>
        </div> 
        )
    })
  return (
    <div className='blog-page'>
    <h2>Blogs</h2>
      
        {renderBlogs}
      
    </div>
  )
}
