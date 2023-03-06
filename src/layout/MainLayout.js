import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div>
        <Nav/>
            <div>
                {children}
            </div>
        <Footer/>
    </div>
  )
}

export default MainLayout