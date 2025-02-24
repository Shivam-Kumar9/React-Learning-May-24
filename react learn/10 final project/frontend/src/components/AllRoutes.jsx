import { Routes, Route } from 'react-router-dom' 

import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Tasks from '../Pages/Tasks'

import PageLock from './PrivateRoute'




export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<PageLock><Home/></PageLock>}/>
            <Route path='/contact' element={<PageLock><Contact/></PageLock>}/>
            <Route path='/about' element={<PageLock><About/></PageLock>}/>
            <Route path='/tasks' element={<PageLock><Tasks/></PageLock>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}