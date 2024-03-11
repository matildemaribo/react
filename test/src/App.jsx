import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hej from './komponenter/hej'
import Header from './komponenter/Header'
import Navigation from './komponenter/Navigation'
import Maincontent from './komponenter/Maincontent'
import Footer from './komponenter/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Header/>
      <Maincontent/>
      <Footer/>
    </>
  )
}

export default App
