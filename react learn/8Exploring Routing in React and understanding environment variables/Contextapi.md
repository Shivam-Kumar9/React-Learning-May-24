 # Cotext Api 
  --- 3- steps
1. step 1. Create Context 
2. step 2. Provide Context 
3. step 3. Consume Context

short form CPC

 ## step 1 create Context 
  const AuthContext = React.createContext();
*  authcontext is just a variable you can write any name 
*  auth context has too many values but we need only { AuthContext.provider}
 
## step 2.A  giving obj in value (prop)  :- it is like a box  in box box of  auth context 

 * if you want to put more values then  PUT it like key value paire
  
function Wrapper(prop){
    return(
        <AuthContext.Provider
         value={{isLoggedIn : true , 
                 hobbies : ['learn','read','play'] }}>
          {prop.children}
         </AuthContext.Provider>   ===  it is react componenet provided by react   
    )
}
 
 reactDOM.createRoot(document.getElementById(""rooot)).render(
  <Wrapper>
  <App/>
  </Wrapper>
 )


 -: 

* diff way  

* auth cotext wraped around app  

# prop values ={ string ,number , boolean , object array , function , null ,undefined} 






## step 3 consume 
--- which page you want to use it 
some thing required for this 
(a)konsa dabba
(b)"useContext" hook from react

import { AuthContext } from "../main"  
1. import that auth react component to that page 

import { useContext } from "react"
2. use this in any compo like use state --- left side-- curly because  value is in obj {deStructure} --right side = useContext( that exported storage  )
