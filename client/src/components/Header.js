import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import SideBar from './SideBar'

export default function Header({isOpen, toggleMenu, setIsOpen, windowSize}) {

  return (
    <header>
      <h1>Aldo Portillo</h1>
      { windowSize >= 1025 &&<SideBar />}
      {windowSize < 1025 && <Hamburger hideOutline={false} label="Open Menu" rounded size={38} toggled={isOpen} toggle={setIsOpen} direction="left" duration={0.9} onToggle={toggleMenu()}/>}
    </header>
  )
}
