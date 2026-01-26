import React from 'react'
import NavBar from './Component/NavBar'
import Hero from './Component/Hero'
import About from './Component/About'
import Speaker from './Component/Speaker'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Catalyst from './Component/Catalyst'
import CTA from './Component/CTA'
import Registration from './Component/Registration'

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Hero />
      <CTA />
      <About />
      <Catalyst />
      <Speaker />
      <Registration />
      
      <Contact />
      <Footer />
    </div>
  )
}

export default App
