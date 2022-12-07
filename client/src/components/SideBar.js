import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar({isOpen, setIsOpen}) {
  return (
    <div className='side-bar'>
        <nav>
            <Link to="/" onClick={() => setIsOpen(!isOpen)}><h5>Home</h5></Link>
            <Link to="/projects" onClick={() => setIsOpen(!isOpen)}><h5>Projects</h5></Link>
            <Link to="/blog" onClick={() => setIsOpen(!isOpen)}><h5>Blog</h5></Link>
            <Link to="/contact" onClick={() => setIsOpen(!isOpen)}><h5>Contact</h5></Link> 
        </nav>
    </div>
  )
}
