import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './Componants/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
     <MainRoutes></MainRoutes>
    </>
  )
}

export default App
