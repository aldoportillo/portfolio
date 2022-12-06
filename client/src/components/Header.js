import React from 'react'
import { Link } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'

export default function Header() {

  const [isOpen, setIsOpen] = React.useState(false)

  function toggleMenu() {

  }
  return (
    <header>
      <h1>Aldo Portillo</h1>
      {isOpen && <nav>
        <Link to="/"><h5>Home</h5></Link>
        <Link to="/projects"><h5>Projects</h5></Link>
        <Link to="/blog"><h5>Blog</h5></Link>
        <Link to="/contact"><h5>Contact</h5></Link> </nav>
      }
      <Hamburger hideOutline={false} label="Open Menu" rounded size={38} toggled={isOpen} toggle={setIsOpen} direction="left" duration={0.9} onToggle={toggleMenu()}/>
    </header>
  )
}
