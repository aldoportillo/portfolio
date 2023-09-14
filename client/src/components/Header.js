import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function Header({openNav,  setOpenNav, windowSize}) {

  return (
    <header>
        <h1><Link to="/">Aldo Portillo</Link></h1>
        { windowSize >= 1025 ? <NavBar /> : 
         <div className='hamburger'><Hamburger hideOutline={false} label="Open Menu" rounded size={38} toggled={openNav} toggle={setOpenNav} direction="left" duration={0.9} /></div>}
    </header>
  )
}
