import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Stat from '../Components/Stat'
import Successstories from '../Components/successstories'
import Start from '../Components/start'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Stat />
        <Successstories />
        <Start />
        <Footer />
    </div>
  )
}

export default Home