import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function PageContainer({children}) {
  return (
    <div className="container">
        <Header />
        {children}
        <Footer />
    </div>
  )
}
