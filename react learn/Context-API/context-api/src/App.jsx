import { useState } from 'react'
import './App.css'
 
   
function Navbar(){
  return <div>Navbar</div>
}

function Main({userLoggedIN}){
  return(
  <div>
    Main
    <TopMain/>
    <BottomMain userLoggedIN={userLoggedIN}/>
  </div>
  )
}

function TopMain(){
  return (<div>
    Top Main
  </div>)
}

function BottomMain({userLoggedIN}){
  return(
    <div>
      Bottom Main
      <BottomMainLeft/>
      <BottomMainRight userLoggedIN={userLoggedIN}/>
    </div>
  )
}

function BottomMainLeft(){
  return ( <div>
    Bottom Main Left
  </div> )
}

function BottomMainRight({userLoggedIN}){
  return ( <div>
    Bottom Main Right - {userLoggedIN.toString()}
  </div> )
}

function Footer(){
  return ( <div>
    Footer
  </div> )
}  


function App(){
  const [userLoggedIN, setUserLoggedIN]= useState(false)
   // bottom main right required prop so the casual way is to use prop drilling [and that big NOOO in react you can but should not ] beacuse if you miss giving prop to any child in between then it code will break  
  return(
    <div>
      App
      <Navbar/>
      <Main  userLoggedIN={userLoggedIN}/>
      <Footer/>
    </div>
  )
}

export default App