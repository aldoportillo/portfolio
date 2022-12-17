import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

export default function Header({isOpen,  setIsOpen, windowSize}) {

  return (
    <header>
      <div className='h-nav'>
        <h1><Link to="/">Aldo Portillo</Link></h1>
        { windowSize >= 1025 &&<SideBar />}
        {windowSize < 1025 && <Hamburger hideOutline={false} label="Open Menu" rounded size={38} toggled={isOpen} toggle={setIsOpen} direction="left" duration={0.9} />}
      </div>
      <div className='v-nav'>
        {windowSize < 1025 && isOpen && <SideBar />}
      </div>
      
    </header>
  )
}
