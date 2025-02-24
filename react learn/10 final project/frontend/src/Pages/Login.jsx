import { Box, Heading, Input, Button, VStack, Container } from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from 'axios';
import {AuthContext} from  '../context/AuthContextProvider'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const {login, authDetails : { isLoggedIn }}= useContext(AuthContext)
  
  async function handleClick(){
       try {
           let res = await axios({
            method : 'post',
            url    : 'https://reqres.in/api/login', 
            data   :  {email, password}
           })

           console.log(res?.data.token); 
           login(res?.data.token)

           if(isLoggedIn){
               // redirect user to homepage
               navigate(`/`)
           }

       } catch (error) {
        
       }
  } 
 console.log(authDetails);
  return ( 
    <Container maxW={'700px'}>
       <VStack spacing={4}>
       
       <Heading as="h1" size="xl">
         Login page
       </Heading>

       <Input
         type="email"
         placeholder="Enter Email"
         value={email}
         onChange={(e) => {
           setEmail(e.target.value);
         }}
       />

       <Input
         type="password"
         placeholder="Enter Password"
         value={password}
         onChange={(e) => {
           setPassword(e.target.value);
         }}
       />

       <Button
         onClick={() => {
           handleClick();
         }}
         variant="outline"
         colorScheme="red"
       >
         LOGIN
       </Button>
     
   </VStack>
    </Container>
   
  );
}
