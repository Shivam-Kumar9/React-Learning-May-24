//step : 3 Consume Context

// some thing required for this 
//(a)konsa dabba
//(b)"useContext" hook from react

import { AuthContext } from "../main" 
//auth context is a named exported so we have to import in {}
import { useContext } from "react"
// usecontext ko destructure kar ke import kia


export default function BottomMainRight(){
       //const val =  useContext( AuthContext) ----this is working but we can destructure it
       const {isLoggedIN} =  useContext( AuthContext)
       //useContext ko invoke kia jese use state ko karte the 
       
     
      console.log("btm-R-compo",isLoggedIN) 
    return ( <div> Bottom Main Right-{isLoggedIN.toString()} </div> )
  }

   