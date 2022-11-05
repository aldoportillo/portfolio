import React from 'react'
import BlogList from '../components/BlogList'
import { nanoid } from 'nanoid'



export default function Blog() {

    const [backendData, setBackendData] = React.useState([{title: 'blog1'}, {title: 'blog2'}, {title: 'blog3'}])

    console.log(backendData)

    // React.useEffect(()=> {
    //     fetch('/api')
    //     .then(res => res.json())
    //     .then(data => setBackendData(data)) 
   
    // }, [])

    console.log(backendData)

     const renderBlogs = backendData.map( blog => {
        return(
            <BlogList key={nanoid()} title={blog.title}/>
        )
     })

  return (
    <>
    <div>Blog</div>

    {renderBlogs}
     {/* {(typeof backendData.randomArr === 'undefined') ? (
        <p>Loading...</p>
    ): (
        // <p>{backendData.randomArr}</p>
        {renderBlogs}
    )}  */}
    </>
  )
}
