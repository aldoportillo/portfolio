import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogEntry({title, content, imgArr}) {
    console.log(imgArr)
  return (
    <div className='blog-entry'>
        <h3>{title}</h3>
        <p>{content}</p>
        <img src={imgArr[1]} alt="" /> 
        
        <Link to="/blog"><button>Back to blogs page</button></Link>
    </div>

    
  )
}
