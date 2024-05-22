import {useEffect, useState, useRef} from 'react';

function Timer() {
    const [count, setCount] = useState(10);
    const intervalRef = useRef(null)
     
    useEffect(() => {

     return ()=> {
        console.log(`cleanup callled`);
        clearInterval(intervalRef.current)
     }
     //nothing here any update after ref will bw shown   
    //   function cleanupFunction() {
    //     console.log(`cleanup function cllaed`)
    //     clearInterval(intervalId)
    //   }
  
    // return  cleanupFunction;
       
        }, []);

        const startTimer = () => {
        
          if(intervalRef.current !== null){//code writen because if user clicked many time in one sec code loose 
            //after adding this one more thing happend --it makes unable to click start twice but when we click stop then it stops but after that when we click start again it doesnot start again 
            //this is because after stop click refcurrent value is not null so it enters 25 line code and do not start 
            //solv:- so we added on line code in stop fun that refcurrent val is null 
           console.log('do not go further and return from here');
           return
          }
            
            console.log("timer started");
            intervalRef.current = setInterval(() => {
                console.log(`internval running`, Date.now());
                setCount((prevCount) => {
                  if (prevCount === 1) {
                    clearInterval(intervalRef.current);
                  }
                  return prevCount - 1;
                });
              }, 1000);
            }

        const stopTimer = () => {
             console.log("timer stopped")
             clearInterval(intervalRef.current)
             intervalRef.current=null //set default value of intervalRef
             }
        const timerReset = () =>{
             console.log("timer-stoped");
             stopTimer()
             console.log("timer-value will be 0");
             setCount(10)
            }       
  
    return (
      <div style={{border:"1px dashed red" , padding:"10px", margin:"10px"}}>
        
        <h3>Count: {count}</h3>
          <button onClick={startTimer}>Start Timer</button>
          <button onClick={stopTimer}>Stop Timer</button>
          <button onClick={timerReset}>Reset Timer</button>
      </div>
    );
  }
  
  export default Timer

  // very important 
  {/*  for devloper this is good code
        as a user he player with start timer like  he click multiple times in a second t
        THEN-----code break loose----MEaNS it start runing very fast  
        As as a codder what is happening (when clicked once ---interval start****second click---parallel another interval started ....same action repeated  ) 
    
     solution :- we need to have a condition to if it clicked once THEn unable to click twice.   
*/} 