import React from 'react'
import { useMediaQuery, isNotSmallerScreen } from '@chakra-ui/media-query';
import { Flex,Box, VStack, Heading ,  Spacer, HStack, Center} from "@chakra-ui/layout"; 
import { IconButton, Icon , Text} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import {Image} from '@chakra-ui/image';
import {Button } from '@chakra-ui/react';





const Profile = () => {
  
  const {colorMode} = useColorMode();
  const isDark = colorMode == "dark";

    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");
  return (
    // <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
    // maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}} >
    // </Flex>
    <VStack >
      
<Text textAlign='left' color={isDark ? "white" : "black" } fontSize="4xl" fontWeight="semibold"> 3. Featured Projects  </Text>


<Flex ml={isNotSmallerScreen ? "2" : "10"} direction={isNotSmallerScreen ? "row" : "column"} mt={2}>

   {/* <VStack> */}
    <HStack m={isNotSmallerScreen ? "2" : "4"} >
   <Flex  rounded="xl" direction="row" mt={4} bg="blue.400" h={isNotSmallerScreen ? "10vh" : "50vh"}   justify="flex-end">
     
<Box>
   <center><Text color="white"  fontSize="l" fontWeight="normal">  Title: Crypto Tracker </Text></center>

   <center> <Text mt={4} color="white"  fontSize="small" fontWeight="normal"> 
    This simple cryptocurrency tracker app allows users to monitor the prices and trends of various cryptocurrencies in real-time. 
    It fetches data from the coingecko API.</Text></center>
    
    <center><Button mt={5} mb={2} ml={10} colorScheme='blue' _hover= {{background: 'red'}}  
    _focus={{background: 'yellow'}} 
    onClick={() => window.open("https://tyoyekunle.github.io/Crypto-Tracker-App/")} >
       View project </Button></center>
       </Box>
    </Flex>

   <Flex  rounded="xl" direction="row" mt={4} bg="blue.400" h={isNotSmallerScreen ? "10vh" : "50vh"}  justify="flex-end">
    <Box>

    <center><Text color="white"  fontSize="l" fontWeight="normal">  Title: AgriVista Website </Text></center>
     
   <center> <Text mt={4} color="white"  fontSize="small" fontWeight="normal"> 
    This website for AgriVista Farm was created using React js.</Text></center>

     <center> <Text color="white"  fontSize="small" fontWeight="normal" >It introduces the company and its services 
    which is to offer Agricultural produce for sale to consumers. </Text></center>

   <center><Button mt={5} mb={2} ml={10} colorScheme='blue' _hover= {{background: 'red'}}  
    _focus={{background: 'yellow'}} 
    onClick={() => window.open("https://tyoyekunle.github.io/AgriVista-Farm-website/")} >
       View project </Button> </center> 
    </Box>
   
    </Flex>
    
    
    <Flex rounded="xl"  mt={4} direction="row" bg="blue.400" h={isNotSmallerScreen ? "10vh" : "50vh"} justify="flex-end">
    <Box>
    <center><Text color="white"  fontSize="l" fontWeight="normal">  Title: Easy Health Website </Text></center>
   
    <center> <Text mt={4} color="white"  fontSize="small" fontWeight="normal"> 
    This website for Easy Health was created using React js. It introduces the company and its services which is to connect everyone 
    to healthcare services from the comfort of their homes.</Text></center>
     
  <center> <Button mt={5} mb={2} ml={10} colorScheme='blue' _hover= {{background: 'red'}}  
    _focus={{background: 'yellow'}} 
    onClick={() => window.open("https://tyoyekunle.github.io/Easy-Health-Website-87-/")} >
       View project </Button></center> 
    </Box>
    </Flex>
  

    <Flex  rounded="xl" direction="row" mt={4} bg="blue.400" h={isNotSmallerScreen ? "10vh" : "50vh"}  justify="flex-end">
    <Box>
    <center><Text color="white"  fontSize="l" fontWeight="normal">  Title: Quote App</Text></center>
   
    <center><Text mt={4} color="white"  fontSize="l" fontWeight="normal"> 
    Implementation of a website that generates random quotes when refreshed.
     It connects to a quotes API.</Text></center>
   

    <center><Button mt={5} mb={2} ml={10} colorScheme='blue' _hover= {{background: 'red'}}  
    _focus={{background: 'yellow'}} 
    onClick={() => window.open("https://tyoyekunle.github.io/Quote-App/")} >
       View project </Button></center>
    </Box>
   
    </Flex>

    </HStack>
    
    
    
</Flex>

</VStack>
  )
}

export default Profile

  {/* </VStack> */}

    {/* <Flex w="100%" rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
    <Box>
    <Text color="white" p="4" fontSize="l" fontWeight="semibold"> 
      Crypto Tracker app </Text>
      </Box>
    </Flex>

    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
    <Box>
    <Text color="white" p="4" fontSize="l" fontWeight="semibold"> 
      Easy Health Website </Text>
      </Box>
    </Flex>

    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
    <Box>
    <Text color="white" p="4" fontSize="l" fontWeight="semibold"> 
     Quote App </Text>
      </Box>
    </Flex>

    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" justify="flex-end">
    <Box>
    <Text color="white" p="4" fontSize="l" fontWeight="semibold"> 
     Sturdie Website design </Text>
      </Box>
    </Flex> */}
   
   

    
    
