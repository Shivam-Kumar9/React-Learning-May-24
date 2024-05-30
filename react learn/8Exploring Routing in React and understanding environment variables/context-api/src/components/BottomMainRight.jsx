 

import { Authlogin } from "../AuthContext/AuthContextProvider" 
 
import { useContext } from "react"
 


export default function BottomMainRight(){
      
       const { isLoggedin,login,logout} =  useContext(Authlogin )
      
       
     
      console.log("btm-R-compo") 
    return ( <div> 
      Bottom Main Right === { isLoggedin.toString()}
      <br /> 
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
      </div> )
  }

   