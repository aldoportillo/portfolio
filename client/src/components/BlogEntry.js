import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogEntry({title, content}) {
  return (
    <div className='blog-entry'>
        <h3>{title}</h3>
        <p>{content}</p>
        <Link to="/blog"><button>Back to blogs page</button></Link>
    </div>

    
  )
}
