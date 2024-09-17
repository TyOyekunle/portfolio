import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import {Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import {Image} from '@chakra-ui/image';



const Header = () => {

const {colorMode} = useColorMode();
const isDark = colorMode == "dark";

const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
        {/* <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" /> */}
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0" }
       alignSelf="flex-start" >
    {/* if opened on smaller screen, align in column else align in row */}
    
    <Box mt={isNotSmallerScreen ? "0" : "16"}> 
      {/* margin from top is 0 if its not a smaller screen, else 16 */}


    <Text fontSize="5xl" fontWeight="semibold"> Hi, I am  </Text>
    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
      Oluwatoyin Oyekunle </Text>
      <Text fontSize="3xl" fontWeight="semibold"> Frontend developer </Text>

      <Text color={isDark ? "gray.200" : "gray.500" } > I am a solutions-driven Frontend Developer. I specialize in building 
        interactive and functional interfaces across platforms. </Text>

        <Button mt={20} colorScheme='blue' _hover= {{background: 'red'}}  
    _focus={{background: 'yellow'}} 
    onClick={() => window.open("https://github.com/TyOyekunle")} >
       View my projects </Button>
    </Box>


    {/* <Image alignSelf='center' mt={isNotSmallerScreen ? "0" : "12"}
      mb={isNotSmallerScreen ? "0" : "12" } borderRadius="full" 
      backgroundColor="transparent"
      boxShadow= "lg" boxSize="300px" 
      src='https://avatars.githubusercontent.com/u/12619420?v=4'
    /> */}
    

    </Flex>
    </Stack>
  )
}

export default Header
