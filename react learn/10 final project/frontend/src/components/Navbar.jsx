import { Link as ReactRouterLink } from 'react-router-dom'
import { Center, Link as ChakraLink ,Flex } from '@chakra-ui/react'

var Links = [
    { to : '/',
    label : 'HOME'} ,
    { to : '/contact',
    label : 'CONTACT'}  ,
    { to : '/login',
    label : 'LOGIN'}  ,
    { to : '/about',
    label : 'ABOUT'}  
]



export default function Navabar(){
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
        </Flex>
    )
}