import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import Card from './Components/Card'
import TwinlyFeatures from './Components/Twinlyfeatures'
import Works from './Components/Works'
import Boost from './Components/Boost'
import Blogs from './Components/Blogs'
import Logo from './Components/Logo'
import Partner from './Components/Partner'
import Client from './Components/Client'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Featurs from './Pages/feature';
import BlogPage from './Pages/blogs';
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms';
import Demo from './Components/Demo';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feature' element={<Featurs />} />
      <Route path='/blogs' element={<BlogPage />} />
      <Route path='/Privacy' element={<Privacy />} />
      <Route path='Terms' element={<Terms />} />
       <Route path='Demo' element={<Demo />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
