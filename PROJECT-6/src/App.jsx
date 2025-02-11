import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalCrud from './Pages/LocalCrud'
import PageNotFound from './Pages/PageNotFound'
import MainRoutes from './Routes/MainRoutes'
import NavbarCode from './Components/Navbar'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <NavbarCode></NavbarCode>
    <MainRoutes></MainRoutes>
    <Footer></Footer>
    </>
  )
}

export default App