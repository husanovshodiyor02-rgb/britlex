import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import Skils from './components/Skils'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Skils/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App