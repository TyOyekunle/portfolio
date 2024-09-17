import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import { Circle, Flex, Box, Text, VStack} from '@chakra-ui/layout';
import {Button , Stack} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import {Image} from '@chakra-ui/image';
import {Picture} from "../assets/picture.jpg"



const About = () => {

    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");

  return (
    <VStack bg=" black"  p={5} mt= "10">
        {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" /> */}
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0" }
       alignSelf="flex-start" >
    {/* if opened on smaller screen, align in column else align in row */}
    
    <Flex >
    <Box mt={isNotSmallerScreen ? "0" : "10"}> 
      {/* margin from top is 0 if its not a smaller screen, else 16 */}


    <Text fontSize="4xl" fontWeight="semibold"> 2. About me  </Text>
    {/* <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
      Oluwatoyin Oyekunle </Text>
      <Text fontSize="3xl" fontWeight="semibold"> Frontend developer </Text> */}

      <Text mt= "5">Hi there! I’m a Software Engineer(Web) based in Portharcourt,
         Nigeria </Text>
         
         <Text>and I love to build things for the web.</Text>


<Text mt= "5"> I utilize React, Javascript, HTML and CSS to develop highly-responsive user interface components. </Text>
    <Text mt= "5">My goal? To contribute my
 quota in making the internet a beautiful and interactive ecosystem.</Text>
 
<Text mt= "5">I enjoy watching movies and cooking in my free time. </Text>
       </Box>

<Box>
    <Image alignSelf='center' mt={isNotSmallerScreen ? "0" : "22"}
      mb={isNotSmallerScreen ? "0" : "12" } borderRadius="full" 
      backgroundColor="transparent"
      boxShadow= "lg" boxSize="300px" 
      src='https://avatars.githubusercontent.com/u/74738940?v=4'
      alt="Oluwatoyin Oyekunle"
    //   fallbackSrc='https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2glMjBsYWR5fGVufDB8fDB8fHww'
    
    />
    </Box>
    </Flex>

    </Flex>
    </VStack>
  )
}

export default About
