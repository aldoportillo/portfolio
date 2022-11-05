import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import BlogEntry from './BlogEntry'

export default function BlogList({title, src}) {
  return (
    <div className='blog-list'>
        <Routes>
            <Route path={`/${title}`} element={<BlogEntry title={title} />} />
        </Routes>
        
        <Link to={`/${title}`}>{title}</Link>
    </div>
  )
}
