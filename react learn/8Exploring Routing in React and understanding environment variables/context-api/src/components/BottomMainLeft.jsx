import { ThemeContext } from "../AuthContext/ThemeContextProvider";
import { useContext } from "react";
import '../App.css'


function BottomMainLeft(){
    const {theme, changeTheme} = useContext(ThemeContext)
    return ( <div className={theme}>
      Bottom Main Left 
      <h1>{`THEME ==> ${theme}`}</h1>
      <button onClick={changeTheme} className={theme}> Theme</button>
    </div> )
  }
 
export default BottomMainLeft ;