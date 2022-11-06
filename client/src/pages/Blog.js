import React from 'react'
import BlogList from '../components/BlogList'
import { nanoid } from 'nanoid'
import { blogData } from '../data/blogData'


export default function Blog() {

    const [backendData, setBackendData] = React.useState(blogData)

    console.log(backendData)

    // React.useEffect(()=> {
    //     fetch('/api')
    //     .then(res => res.json())
    //     .then(data => setBackendData(data)) 
   
    // }, [])

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
