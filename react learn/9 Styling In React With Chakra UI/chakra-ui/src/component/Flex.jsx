import { Flex, Spacer,Box } from "@chakra-ui/react";

export default function Flexo() {
  return (
    <>
      
      <Flex align="center" justify="space-evenly">
        Flex Container

        <Box bg='red.600' p={10}>
        Box with Flex ppo
        </Box>
      <Box>
        Box with Flex uio
      </Box>
      </Flex>
      
    </>
  ); 
}
/*
 display="flex"
alignItems="center"
justifyContent="space-between"
*/