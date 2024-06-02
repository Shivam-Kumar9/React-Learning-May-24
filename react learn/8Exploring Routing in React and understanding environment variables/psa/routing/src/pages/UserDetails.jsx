import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
 

export default function UserDetails(){

    const [loading, setLoading] = useState(false);
   const [getuser, setUser] = useState({});
  const [error, setError] = useState(false);
  const {id} =  useParams()

   async function fetchAndUpdateData(user_id){
      setLoading(true)
      setError(false)
     try{
          var res = await axios({
            method : 'get',
            url : `https://reqres.in/api/users/${user_id}`
          })
         // console.log(res.data)
          setUser(res?.data?.data)
          setLoading(false)
     }
     catch(error){
         setError(true)
         setLoading(false)
         
     }
   }

   useEffect(()=>{
    fetchAndUpdateData(id)
   },[id])
    

    if(loading){
        return(<h1>loading....</h1>)
    }
    if(error){
        return(<h1>somthing went wrong</h1>)
    }
 
   console.log(getuser);
   const  { avatar, email , first_name, last_name} = getuser
    return(
        <div>
         <h1>user detail</h1>
         {/* <div>{JSON.stringify(getuser)}</div> */}
         <div style={{textAlign:'center'}}>
            <img src={avatar} alt="dp" />
            <h3>Name : {first_name} {last_name}</h3>
            <h4>Email : {email}</h4>
         </div>
        </div>
    )
}