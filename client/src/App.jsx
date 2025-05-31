import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import FeaturesSection from './components/FeaturesSection'
import OwnerSection from './components/OwnerSection'
import TrainersSection from './components/TrainersSection'
import TestimonialSection from './components/Testimonials'
import PricingSection from './components/PricingSection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

export function GymHours() {
  return (
    <div className="bg-pink-100 text-center py-6 text-pink-700 font-medium text-lg">
      🕒 Open Monday – Saturday · 6 : 30 AM – 7 : 00 PM
    </div>
  );
}

function App() {
  
  return (
    <>
    <Navbar/>
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <OwnerSection />
    <TrainersSection />
    <TestimonialSection />
    <PricingSection />
    <ContactUs />
    <GymHours />
    <Footer />
    </>
  )
}

export default App
