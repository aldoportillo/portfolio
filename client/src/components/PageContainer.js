import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'



export default function PageContainer({children}) {

  const [isOpen, setIsOpen] = React.useState(false)

  function toggleMenu() {

  }

  return (
    <div className="container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu}/>
        {isOpen && <nav>
        <Link to="/"><h5>Home</h5></Link>
        <Link to="/projects"><h5>Projects</h5></Link>
        <Link to="/blog"><h5>Blog</h5></Link>
        <Link to="/contact"><h5>Contact</h5></Link> </nav>
      }
        {children}
        <Footer />
    </div>
  )
}
