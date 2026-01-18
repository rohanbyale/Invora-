import React from 'react'
import Hero from './componets/Hero'
import About from './componets/About'
import Gallery from './componets/Gallery'

import HorizontalScroll from './componets/HorizontalScroll'
import ServicePanel from './componets/ServicePanel'
import TestimonialSection from './componets/Testimonial'
import Footer from './componets/Footer'
const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
  <HorizontalScroll />
  <ServicePanel />
  <TestimonialSection />
  <Footer />
  
    </div>
  )
}

export default App