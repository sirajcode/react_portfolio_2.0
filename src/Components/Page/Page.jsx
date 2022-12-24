import React from "react";
import {Container,Flex,Text,HomeIcon, TerminalIcon,ProfileIcon,Section,Nav} from "../Styled/Utilities";
import { HeaderData } from './PageData';

const Page = () => {
  return (
    <>
      <Container>
        <Navbar/>
      </Container>
    </>
  )
}
export default Page


const Navbar = () => {
  return (
    <Flex>
      <Nav>
        <Section>
          <HomeIcon/>
          <Text align='center' transform='uppercase'>Home</Text>
        </Section>
        
        <Section>
          <TerminalIcon />
          <Text align='center' transform='uppercase'>Projects</Text>
        </Section>

        <Section>
          <ProfileIcon/>
          <Text align='center' transform='uppercase'>Resume</Text>
        </Section>

      </Nav>

      <div>
         <Text fontSize='3'>
          M. Siraj
        </Text>
        <Text fontSize='2' marginTop='-1'>
          Front-end developer
        </Text>
      </div>
</Flex>
  

  );
}


const Header = () => {
  return (
    <>
    </>
  );
}

const Projects = () => {
  return (
    <>    
    </>
   
  );
}

const Footer = () => {
return (
    <>  
    </>
  );
}

