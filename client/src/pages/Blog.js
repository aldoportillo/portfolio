import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'


export default function Blog({blogData, isLoading}) {


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
    //Conditional
    <div className='blog-page'>
      {
      isLoading ? 
      <Loader /> :
      <>
        <h2>Blogs</h2>
        {renderBlogs}
      </>
      }
    </div>
  )
}
