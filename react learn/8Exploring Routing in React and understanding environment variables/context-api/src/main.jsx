import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {IsloggedinProvider} from './AuthContext/AuthContextProvider.jsx'
import {ThemeContextProvider} from './AuthContext/ThemeContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <ThemeContextProvider>
    <IsloggedinProvider>
      <App />
   </IsloggedinProvider>
  </ThemeContextProvider>
)

 