import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

export default function Header({openNav,  setOpenNav, windowSize}) {

  return (
    <header>
      <div className='h-nav'>
        <h1><Link to="/">Aldo Portillo</Link></h1>
        { windowSize >= 1025 ? <SideBar /> : 
         <div className='hamburger'><Hamburger hideOutline={false} label="Open Menu" rounded size={38} toggled={openNav} toggle={setOpenNav} direction="left" duration={0.9} /></div>}
      </div>
      {/* <div className='v-nav'>
        {windowSize < 1025 && isOpen && <SideBar />}
      </div> */}
      
    </header>
  )
}
