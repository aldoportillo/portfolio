import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'

export default function Header({isOpen, toggleMenu, setIsOpen}) {

  return (
    <header>
      <h1>Aldo Portillo</h1>
      <Hamburger hideOutline={false} label="Open Menu" rounded size={38} toggled={isOpen} toggle={setIsOpen} direction="left" duration={0.9} onToggle={toggleMenu()}/>
    </header>
  )
}
