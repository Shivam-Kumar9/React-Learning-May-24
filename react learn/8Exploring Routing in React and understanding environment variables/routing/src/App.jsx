import { useState } from 'react'
import './App.css'
import  Home from './pages/Home';
import  About  from './pages/About';
import  Contact  from './pages/Contact';
import  Learn  from './pages/Learn';
import { Route, Routes, Link} from 'react-router-dom';

function App() {
   

  return (
    <>
    <h5>ROuting</h5>

    <div id='navbar'>
      <Link to='/'>HOME</Link>
      <Link to='/Contact'>CONTACT</Link>
      <Link to='/About'>ABOUT</Link>
      <Link to='/Learn'>LEARN</Link>

    </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Learn' element={<Learn/>}/>
      </Routes> 
    </>
  )
}

export default App
