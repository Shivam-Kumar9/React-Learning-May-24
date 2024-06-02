import { Route, Routes} from 'react-router-dom';
import  Home from '../pages/Home';
import  About  from '../pages/About';
import  Contact  from '../pages/Contact';
import  Learn  from '../pages/Learn';
import  User from '../pages/users';
import  Login from '../pages/login';
import UserDetails from '../pages/UserDetails';

export default function AllRoutes(){
return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Learn' element={<Learn/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user/:id' element={<UserDetails/>}/>
    </Routes> 
   </>
)
// :id kch bhe likho wo variable ke jese react karega .
}