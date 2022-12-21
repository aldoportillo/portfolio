import React from 'react'
import BlogList from '../components/BlogList'
import { nanoid } from 'nanoid'


export default function Blog({blogData}) {


    const renderBlogs = blogData.map( blog => {
        return(
            <BlogList key={nanoid()} title={blog.title} date={blog.date} />
        )
    })
  return (
    <div className='blog-page'>
    <h2>Blogs</h2>
      {renderBlogs}
    </div>
  )
}
