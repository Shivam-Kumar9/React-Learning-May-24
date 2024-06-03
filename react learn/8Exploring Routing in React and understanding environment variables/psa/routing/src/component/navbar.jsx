import {Link} from 'react-router-dom'

const Links=[
    {
        to : "./",
        lable : "Home"
    },
    {
        to : "/Contact",
        lable : "CONTACT"
    },
    {
        to : '/About',
        lable : "ABOUT"
    },
    {
        to : '/Learn',
        lable : "LEARN"
    }
    ,
    {
        to : '/users',
        lable : "User"
    },
    {
        to : '/login',
        lable : "LOGIN"
    },
    // {
    //     to : '/User/1',
    //     lable : "userDetail"
    // }
]

export function Navbar(){
   return(
    <div id='navbar'>
      {
        Links.map((link)=>(
            <Link to={link.to} key={link.to} >{link.lable}</Link>
        ))
      }
    </div>
   )
} 