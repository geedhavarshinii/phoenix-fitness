import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import FeaturesSection from './components/FeaturesSection'
import OwnerSection from './components/OwnerSection'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <OwnerSection />
    </>
  )
}

export default App
