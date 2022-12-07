import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='side-bar'>
        <nav>
            <Link to="/"><h5>Home</h5></Link>
            <Link to="/projects"><h5>Projects</h5></Link>
            <Link to="/blog"><h5>Blog</h5></Link>
            <Link to="/contact"><h5>Contact</h5></Link> 
        </nav>
    </div>
  )
}
