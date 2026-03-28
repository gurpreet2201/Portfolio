import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './component/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './component/HeroSection'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {3
  const [darkMode,setDarkMode] = useState(true)



  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100

    })
    document.documentElement.classList.add('dark')

  },[]);

  useEffect(()=>{
    AOS.refresh()
  },[darkMode])



  const toggleDark = () =>{
    const newDark = !darkMode;
    setDarkMode(newDark)
    document.documentElement.classList.toggle('dark');
  }


  return (
    <div className={darkMode ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
      : "bg-linear-to-br from-gray-50 via-[#0d182e] to-gray-50 min-h-screen"
     }>


    <Navbar darkMode={darkMode} toggleDark={toggleDark} />
    <HeroSection darkMode={darkMode} />
    <Skills darkMode={darkMode} />
    <Project darkMode={darkMode}/>
    <About darkMode={darkMode}  />
    <Contact darkMode={darkMode}  />
    <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
