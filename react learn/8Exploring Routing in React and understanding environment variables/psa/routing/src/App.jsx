import { useState } from 'react'
import './App.css'


import AllRoutes from './component/allRoutes';
import {Navbar} from './component/navbar'

function App() {
   

  return (
    <>
    <h5>PSA</h5>

     <Navbar/>

      <AllRoutes/>
    </>
  )
}

export default App
