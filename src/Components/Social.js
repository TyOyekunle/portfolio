import React from 'react';
import {HStack, Icon, IconButton} from '@chakra-ui/react';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Social = () => {
  return (
    
    <HStack alignSelf={'flex-start'}>

      <Icon as= {FaLinkedin} onClick={() => window.open("https://www.linkedin.com/in/oluwatoyin-oyekunle-91178098/")} boxSize= "8" />
      <Icon as= {FaGithub} onClick={() => window.open("https://github.com/TyOyekunle")} boxSize= "8"/>
      <Icon as= {FaInstagram} onClick={() => window.open("https://github.com/TyOyekunle")} boxSize= "8" />
     


      {/* <IconButton Icon as ={FaLinkedin } isRound= 'true' onClick={() => window.open("https://www.linkedin.com/in/oluwatoyin-oyekunle-91178098/")} >
   </IconButton>
  <IconButton ml={2} Icon as ={FaGithub } isRound= 'true' onClick={() => window.open("https://github.com/TyOyekunle")}> </IconButton>
  <IconButton ml={2} Icon as ={FaInstagram } isRound= 'true' onClick={() => window.open("https://github.com/TyOyekunle")} > </IconButton> */}

    </HStack>



  )
}

export default Social
