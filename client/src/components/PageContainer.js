import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'




export default function PageContainer({children}) {

  const getWindowSize = () => {
    const {innerWidth} = window;
    return innerWidth
}

  const [isOpen, setIsOpen] = React.useState(false)

  const [windowSize, setWindowSize] = React.useState(getWindowSize())

  function toggleMenu() {

  }

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} windowSize={windowSize}/>
        <div className='main'>
          {children}
          {isOpen && <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
        <Footer />
    </div>
  )
}
