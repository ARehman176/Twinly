import { useState } from 'react'

import '../App.css'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/Herosection'
import Card from '../Components/Card'
import TwinlyFeatures from '../Components/Twinlyfeatures'
import Works from '../Components/Works'
import Boost from '../Components/Boost'
import Blogs from '../Components/Blogs'
import Logo from '../Components/Logo'
import Partner from '../Components/Partner'
import Client from '../Components/Client'
import Footer from '../Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <HeroSection />
     <Card />
     <TwinlyFeatures />
  <Works />
  <Boost/>
  <Blogs />
  <Logo />
  <Partner />
  <Client />
  <Footer/>
    </>
  )
}

export default App
