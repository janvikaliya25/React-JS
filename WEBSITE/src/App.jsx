import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import Navbarcode from './Componants/Navbarcode'
import Footer from './Componants/Footer'

  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbarcode></Navbarcode>
     <MainRoutes></MainRoutes>
     <Footer></Footer>
    </>
  )
}

export default App
