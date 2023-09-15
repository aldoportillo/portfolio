import React from 'react'
import Loader from '../components/Loader'

export default function NewBlogs({devData, isLoading}) {

    const renderBlogs = devData?.map(blog => {
        return(
            <>
            <div key={blog.id} className='blog-name'>
                <h3>{blog.title}</h3>
                {/* <h3>{blog.reading_time_minutes}</h3> */}
                <h3>{blog.readable_publish_date}</h3>
                {/* <h3>{blog.tag_list}</h3> */}
            </div>
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
