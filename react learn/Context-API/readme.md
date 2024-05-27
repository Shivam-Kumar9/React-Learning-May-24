 # Lifcycle Phase /Event of a React Component : 
  lifecycle event : you cannot perform side effect directly.
 1. mount Phase / mount event
 2. update phase / update event
 3. unmount phase / unmount event


 # Side effects or effects : 

 * side effect reffers to an action that ineratcts with elementss outside of the component redering process 
  for eg 
  1. fetching data   
  2. modifying the DOM  
  3. Subscription :- setting up listners for events or data changers that triggers update within the component. ( tracker behavior like a user where he is spending  time )
  4. timer - using set interval, set interval
  5. logging : recording information or error to the console or external services. 
  6. server 
  7. localstorage 

  # use effect is not required in 1st- project because it is fetching data  when button is clicked  after cliking button fetch function works (i think if you put a function directly to the UI then useEffect needed) 
  *  you cannot perform side effect directly to the life cycle event .
  * supose i  called  fetchData()  directing the it certently takes time like 400ms for that time we are blocking rendering process that is not a good idea ,SO in react i cant use it directly  i ruin the experience .
  # i we want to use directly to ui then we have to use useEFFect  ( useEffect( ()=>{code here  },[])  )