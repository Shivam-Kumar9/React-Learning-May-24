import  axios from 'axios'
import  {useState , useEffect} from 'react'
import  {Link} from 'react-router-dom'

export default function User(){
     
    const [ getdata,setData ] = useState([])

    async function fetchAndUpdateData(){
        try{
         const res= await axios({
                method: "get",
                url : "https://reqres.in/api/users?page=2"
            })
            
           setData(res?.data.data) 
        } 
        catch(error){
         console.log(error)
        }
    }

    useEffect(()=>{
        fetchAndUpdateData()
    },[])
  
    console.log(getdata)

    return(<>
    <h1>user</h1>
    {getdata.length > 0?(getdata.map(user=>(
        <div key={user.id} id='user_div'>
             
            <h3>Name : {user.first_name} {user.last_name}</h3>
            <Link to={`/user/${user.id}`}>click, To  get info</Link>
        </div>
      ))
    )  :( 
     <h1>Loading....</h1>  ) } 
    </>)
} 

