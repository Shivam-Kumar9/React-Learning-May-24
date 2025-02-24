import { createContext, useState } from "react";
//1
export const AuthContext = createContext()
//2A  
export default function AuthContextProvider({ children }) {
    const [authDetails, SetAuthDetails] = useState({
        isLoggedIn: false,
        token: null,
    });

    const login = (token) => {
        SetAuthDetails({
            isLoggedIn: true,
            token: token
        })
    }

    const logout = () => {
        SetAuthDetails({
            isLoggedIn: false,
            token: null
        })
    }

    return <AuthContext.Provider value={{ authDetails, login, logout }}
    >
        {children}
    </AuthContext.Provider>
}
//2B  func imp to main.jsx and wrapp
// 3  consume - loginpage == 
