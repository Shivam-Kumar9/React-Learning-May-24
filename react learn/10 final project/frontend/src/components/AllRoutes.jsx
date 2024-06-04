import { Routes, Route } from 'react-router-dom' 

import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}