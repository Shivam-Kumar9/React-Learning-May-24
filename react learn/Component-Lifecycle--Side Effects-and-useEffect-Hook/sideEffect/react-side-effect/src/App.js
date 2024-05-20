import  './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [count,setCOunt]=useState(2)
   // useEffect (callbackFunc || anonymuus fun )

   useEffect(function () {
    //side effects can be performed here;
    document.title=`Counter Application`;
   },[])
    // use Effect ( cbFun, dependency array)
    /*
    useEffect (func(){
      //this function will only be called during mount phase;
    },[])
    */
   //that will will work only in intital rendering when (mount phase)

  // document.title = ` Counter Application`;

  // fetch some data from server; ( side effect )

  return ( 
    <div> 
      <h1>useEffect</h1>
    </div>
  ); 
}

export default App;

// side effect or Effects --> they should not be performed during component render phase.

// Why? It blocks the rendering process. it's not a good Users experience.

//side effects - has to be preformed
// can't block render process

//you can perform side effect after the rendering process.

{/************important*************** 
 useEffect( function(){},  []) 
 
 second argument [dependency array] (react have rule that you can't use {},()but only []  )always will be there you have to otherwise
 cb first fun will called again and again  

*****************important*********************/}