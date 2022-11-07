import React from 'react'
import BlogList from '../components/BlogList'
import { nanoid } from 'nanoid'


export default function Blog({blogData}) {

    const [backendData, setBackendData] = React.useState(blogData)


    const renderBlogs = backendData.map( blog => {
        return(
            <BlogList key={nanoid()} title={blog.title} />
        )
    })
  return (
    <div className='blog-page'>
    <h2>Blogs</h2>

    {renderBlogs}
     {/* {(typeof backendData.randomArr === 'undefined') ? (
        <p>Loading...</p>
    ): (
        // <p>{backendData.randomArr}</p>
        {renderBlogs}
    )}  */}
    </div>
  )
}
