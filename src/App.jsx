import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

import './App.css'
import './index.css'

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to set the menu open state
  const handleSetMenuOpen = (value) => {
    setMenuOpen(value);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={handleSetMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={handleSetMenuOpen} />
        <Home/>
        <About/>
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
