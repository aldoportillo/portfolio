import React from 'react'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

export default function NewBlogs({devData, isLoading}) {

    const renderBlogs = devData?.map(blog => {
        return(
            <>
            <Link key={blog.id} className='blog-name' to={`/blog/${blog.id}`} state={{ from: "blog", data: blog}}>
                <h3>{blog.title}</h3>
                {/* <h3>{blog.reading_time_minutes}</h3> */}
                <h3>{blog.readable_publish_date}</h3>
                {/* <h3>{blog.tag_list}</h3> */}
            </Link>
            <hr />
            </>
        )
    })
  return (
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
