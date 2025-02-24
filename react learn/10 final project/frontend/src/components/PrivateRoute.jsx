import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

import {Navigate} from "react-router-dom"

export default function PageLock({children}){
    const {authDetails}= useContext(AuthContext)   
    var {isLoggedIn} = authDetails 
 
    if(!isLoggedIn){
     return (<Navigate to='/login'/>)
    }
     return children;
 }
