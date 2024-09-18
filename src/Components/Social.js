import React from 'react';
import {HStack, Icon, IconButton, Text , Flex} from '@chakra-ui/react';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import { useMediaQuery, isNotSmallerScreen } from '@chakra-ui/media-query'; 
import { useColorMode } from '@chakra-ui/color-mode';
import {Image} from '@chakra-ui/image';
import {Button } from '@chakra-ui/react';
import { Circle, Box, VStack} from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react'



const Social = () => {

  const {colorMode} = useColorMode();
  const isDark = colorMode == "dark";

  const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");

  return (

    <VStack bg=" black"  p={5}>
    <Box mt={isNotSmallerScreen ? "0" : "10"}> 
      {/* margin from top is 0 if its not a smaller screen, else 16 */}


    <Text color={isDark ? "gray.200" : "white" } fontSize="4xl" fontWeight="semibold"> 3. Get In Touch  </Text>

      <Text color={isDark ? "gray.200" : "white" } mt= "5">I am interested and available to talk about and work on your project, on a freelance and/or full-time basis. 
       </Text>
         
         <Text color={isDark ? "gray.200" : "white" } > To reach me, {' '} 
         <Link color='teal.500' href='mailto:oluwatoyindotoyekunle@gmail.com'> Send me a mail.  </Link> </Text>
         <HStack alignSelf={'flex-start'}>

<Text color={isDark ? "gray.600" : "white" } mt={4} > Click on these icons to connect with me on social media. ...</Text>


//       <Icon as= {FaLinkedin} onClick={() => window.open("https://www.linkedin.com/in/oluwatoyin-oyekunle-91178098/")} boxSize= "8" />
//       <Icon as= {FaGithub} onClick={() => window.open("https://github.com/TyOyekunle")} boxSize= "8"/>
//       <Icon as= {FaInstagram} onClick={() => window.open("https://github.com/TyOyekunle")} boxSize= "8" />
     
</HStack>
          </Box>

 </VStack>


  )
}

export default Social



// < 
//     <HStack alignSelf={'flex-start'}>>

//       <Icon as= {FaLinkedin} onClick={() => window.open("https://www.linkedin.com/in/oluwatoyin-oyekunle-91178098/")} boxSize= "8" />
//       <Icon as= {FaGithub} onClick={() => window.open("https://github.com/TyOyekunle")} boxSize= "8"/>
//       <Icon as= {FaInstagram} onClick={() => window.open("https://github.com/TyOyekunle")} boxSize= "8" />
     


//       {/* <IconButton Icon as ={FaLinkedin } isRound= 'true' onClick={() => window.open("https://www.linkedin.com/in/oluwatoyin-oyekunle-91178098/")} >
//    </IconButton>
//   <IconButton ml={2} Icon as ={FaGithub } isRound= 'true' onClick={() => window.open("https://github.com/TyOyekunle")}> </IconButton>
//   <IconButton ml={2} Icon as ={FaInstagram } isRound= 'true' onClick={() => window.open("https://github.com/TyOyekunle")} > </IconButton> */}

//     </HStack>
   