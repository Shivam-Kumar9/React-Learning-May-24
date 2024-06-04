import {Box, Heading , Button, useToast} from '@chakra-ui/react'
import { useNavigate} from  'react-router-dom'

export default function Home(){
    const toast = useToast();
    const navigate = useNavigate();

 function handleClick(){
    toast({
        title: 'About page.',
        description: "You are going to About page.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
 
     navigate(`/about`)   
 }
  
    return(
        <>
        <Box>
            <Heading as='h1' size='xl'>Home page</Heading>
        
            <Button onClick={handleClick} colorScheme='red' variant='solid'>Go to About Page</Button>
         </Box>
       
        </>
    )
}

// navigate hook work as window.location-href in js  