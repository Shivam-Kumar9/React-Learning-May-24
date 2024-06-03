import { Box } from "@chakra-ui/react"  
import { color } from "framer-motion"


  function  BoxExample() {
    return (
       <Box bg='red.500' w='100%' p={4} color='blue'>this is first box </Box>
    )
  }
 // bg - background 
 // w= width
 // p = padding 
 //color  = text coloor

 // these called style prop

// p ={10}   ------ if you go into spacing -- that is 2.5rem *16px = to px 
// p = '5px'  
// red.400 ---- default color shade  --- s erach default theme 
  export default BoxExample