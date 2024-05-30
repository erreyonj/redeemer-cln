import React from 'react'

import Splash from '../components/Splash'
import Services from '../components/Services'
import About from '../components/About'
import Gallery from '../components/Gallery'
import HmReviews from '../components/HmReviews'
import Contact from '../components/Contact'


const HomePage = () => {
  return (
    <>
      <Splash />
      <Services isPage={false} />
      <About />
      <Gallery />
      {/* <HmReviews /> */}
      <Contact /> 
    </>
  )
}

export default HomePage
