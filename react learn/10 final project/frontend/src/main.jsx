import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <ChakraProvider>
          <App />
     </ChakraProvider>
  </BrowserRouter>
)
// you use any way you wapping app with browser/Chakra both are indpendent 