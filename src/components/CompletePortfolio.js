import React from 'react'
import Database from './Database'
import Footer from './Footer'
import Navbar from './Header/Navbar'
import About from './NavComponents/About'
import Contact from './NavComponents/Contact/Contact'
import Home from './NavComponents/Home'
import Portfolio from './NavComponents/Portfolio'
import Resume from './NavComponents/Resume/Resume'

const CompletePortfolio = () => {
  return (
    <div>
      <Database>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </Database>
    </div>
  )
}

export default CompletePortfolio