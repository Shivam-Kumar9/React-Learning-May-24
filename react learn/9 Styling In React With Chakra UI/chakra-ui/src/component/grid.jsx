import { SimpleGrid , Box } from '@chakra-ui/react'

export default function GridSimple(){
    return(<> <SimpleGrid columns={2} spacing={10}>
        <Box bg={{
            base : 'teal',
            sm : 'red',
            md : 'green',
            lg : 'blue',
            xl : 'yellow',
            "2Xl" : 'green', 
// number se staart nahi hota  (key) to string me dala
        }} height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
     </>)
}