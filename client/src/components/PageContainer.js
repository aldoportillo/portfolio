import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import SlidingNav from './SlidingNav'




export default function PageContainer({children}) {

  const getWindowSize = () => {
    const {innerWidth} = window;
    return innerWidth
}

  const [isOpen, setIsOpen] = React.useState(false)

  const [windowSize, setWindowSize] = React.useState(getWindowSize())

  const location  = useLocation()

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  React.useEffect(()  => {
    setIsOpen(false)
  }, [location])
  return (
    <div className="container">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} windowSize={windowSize}/>
        <main>
          {children}
          <SlidingNav />
        </main>
        <Footer />
    </div>
  )
}
