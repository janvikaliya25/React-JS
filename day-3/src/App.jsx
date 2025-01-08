import React, { useState } from 'react'
import Counter2 from './counter2'
import Counter3 from './counter3'
import './App.css'

function App() {
  let [state, setState] = React.useState(0)

  function decrease() {
    if (state <= 0) {
      return
    }
    else {
      setState(state - 1)

    }
  }
  function increase() {
    setState(state + 1)
  }

  return (
    <div class="w-50" id="main">
      <h1 class="text-center">Counter</h1>
      <div class="d-flex justify-content-between align-items-center" id="div">
        <div class="border border-2 mt-5 border-dark w-25 d-flex justify-content-evenly align-items-center" id="childe">
          <h1  class="text-center">{state}</h1>
        </div>
        <div class="border border-2 mt-5 border-dark w-25 d-flex justify-content-evenly align-items-center" id="childe">
          <h1 class="text-center"><Counter2 janvi={state}></Counter2></h1>
        </div>
        <div class="border border-2 mt-5 border-dark w-25 d-flex justify-content-evenly align-items-center" id="childe">
          <h1 class="text-center"><Counter3 kaliya={state}></Counter3></h1>
        </div>
      </div>
      <button onClick={decrease}  class="btn btn-secondary" id="btn">-</button>
      <button onClick={increase}  class="btn btn-secondary" id="btn1">+</button>
    </div>
  )
}

export default App
