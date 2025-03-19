import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Coponents/Navbar'
import MainRoute from './Routes/MainRoute'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {

  return (
    <>
      <Navbar></Navbar>
      <MainRoute></MainRoute>    </>
  )
}

export default App
