import { createContext , useState} from "react";

export const Authlogin = createContext()

export function IsloggedinProvider(props){
   const [isLoggedin, setIsLoggedin] = useState(false)
    
    let login =()=>setIsLoggedin(true);
    let logout = ()=>setIsLoggedin(false);
    

    return(
        <Authlogin.Provider value={  {
            isLoggedin,
            login,
            logout
        }}>
            {props.children}
        </Authlogin.Provider>
    )

}

 