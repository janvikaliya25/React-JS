import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Form from './Componants/Form'
// import Product from './Componants/Product'
// import Home from './Componants/Home'
import MainRoutes from './Router/MainRoutes'
import Navbar from './Componants/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <MainRoutes></MainRoutes>
    </>
  )
}

export default App
