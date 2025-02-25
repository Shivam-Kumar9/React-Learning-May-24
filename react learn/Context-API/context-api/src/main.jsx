import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// step 1 : Create Context

export const AuthContext = React.createContext()
// auth context is just name (give any)
// in it there are many values but we need only provider :-<authcontext.provider/>  

// step 2 : Provide Context 

// in this we give obj as prop
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext.Provider value={{ isLoggedIN : true}}>
    <App />
  </AuthContext.Provider>,
)

//in prop ----> string number boolean object array function ,null undefined



