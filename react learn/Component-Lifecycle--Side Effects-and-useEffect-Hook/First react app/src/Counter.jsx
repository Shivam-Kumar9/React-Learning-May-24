import React from 'react';

function Second(){
    const [count,setCount]= React.useState(1)
    
     function add(){
        setCount(count+1)
     }
     function minus(){
        setCount(prevCount=>prevCount-1)
     }
    return(<>
     <h1>{count}</h1>
     <button onClick={add}  >INC</button>
     <button onClick={minus}  >DEC</button>
     </>)
}
export default Second;