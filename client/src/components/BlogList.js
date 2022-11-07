import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogList({title, date}) {
  return (
    <div className='blog-list'>
        <Link to={`/blog/${title}`}>
            <h3>{title}</h3>
            <p>{date}</p>
        </Link>
        
    </div>
  )
}
