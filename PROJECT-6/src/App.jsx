import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalCrud from './Pages/LocalCrud'
import PageNotFound from './Pages/PageNotFound'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <MainRoutes></MainRoutes>
    </>
  )
}

export default App