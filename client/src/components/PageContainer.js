import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'




export default function PageContainer({children}) {

  const [isOpen, setIsOpen] = React.useState(false)

  function toggleMenu() {

  }

  return (
    <div className="container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu}/>
        {isOpen && <SideBar />}
        {children}
        <Footer />
    </div>
  )
}
