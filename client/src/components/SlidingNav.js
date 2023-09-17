import React from 'react'
import { Link } from 'react-router-dom'

export default function SlidingNav({navWidth}) {
  return (
    <nav className='sliding-nav' style={{"width": `${navWidth}vw`}}>
      <Link to="/">Home</Link>
      {/* <Link to="/projects">Projects</Link> */}
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
