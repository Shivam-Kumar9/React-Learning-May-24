import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import {Footer}  from './components/Footer'

function App(){
    console.log("object");
     
     return(
      <div>
        App
        <Navbar/>
        <Main />
        <Footer/>
      </div>
    )
  }


 export default App ;