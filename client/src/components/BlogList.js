import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogList({title, src}) {
  return (
    <div className='blog-list'>
        <Link to={`/blog/${title}`}>{title}</Link>
    </div>
  )
}
