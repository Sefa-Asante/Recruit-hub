import React from 'react'
import Navbar from '../Components/Navbar'
import CompHero from '../Components/CompHero'
import ApplicationListing from '../Components/ApplicationListing'
import Footer from '../Components/Footer'


const Company = () => {
  return (
    <div>
      <Navbar />
      <CompHero />
      <ApplicationListing />
      <Footer />
    </div>
  )
}

export default Company