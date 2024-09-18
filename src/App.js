import logo from './logo.svg';
import './App.css';
import { Flex, VStack, Heading ,  Spacer, HStack} from "@chakra-ui/layout"; 
import { IconButton, Icon , Text} from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/color-mode"; 
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Header from "./Components/Header";
import Social from "./Components/Social";
import Profile from "./Components/Profile";
import About from "./Components/About"


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
    <Flex w="100%">
    <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400"> 
     ChampTycodes 
    </Heading>

    <Spacer></Spacer>

<HStack spacing='10'>
    <Text fontWeight="semibold"> 1. About </Text>
    <Text fontWeight="semibold"> 2. Projects </Text>
    <Text fontWeight="semibold"> 3. Contact</Text>
    </HStack>
  <IconButton ml={8} icon= {isDark ?  <FaSun /> : <FaMoon />} isRound="true" 
  onClick={toggleColorMode} >  </IconButton>
  {/* if it is dark then faSun is true, if it is not then faMoon and is round is true and onclick, just toggle color mode. */}
  
  </Flex>
  
  <Header></Header>
   <About></About>
   <Profile></Profile> 
   <Social></Social>
  </VStack>
  );
}

export default App;
