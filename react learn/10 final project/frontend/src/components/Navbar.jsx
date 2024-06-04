import { Link as ReactRouterLink } from 'react-router-dom'
import { Center, Link as ChakraLink ,Flex ,Button } from '@chakra-ui/react'

import { AuthContext } from '../context/AuthContextProvider'
import { useContext } from 'react'

var Links = [
    { to : '/',
    label : 'HOME'} ,
    { to : '/contact',
    label : 'CONTACT'}  ,
    { to : '/about',
    label : 'ABOUT'} ,
    { to : '/tasks',
    label : 'TASKS'} ,
    { to : '/login',
    label : 'LOGIN'}
]



export default function Navabar(){
    const {logout} = useContext(AuthContext )

    return(
        <Flex align='Center' justify='space-around' background='gray.200' color='gray.900' padding='4'>
        {Links.map(link=>(
            <ChakraLink 
            as={ReactRouterLink} 
            key={link.to} 
            to={link.to}
            color='gray.900'
            textDecoration='none'
            fontSize='l'
             >{link.label}</ChakraLink>
        ))}

        <Button variant='outline' colorScheme='red' onClick={logout}>LOGOUT</Button>
        </Flex>
    )
}