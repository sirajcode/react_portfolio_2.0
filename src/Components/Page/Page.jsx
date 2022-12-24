import React from "react";
import {Container,Text,HomeIcon, TerminalIcon,ProfileIcon,Section,Nav,Navigation,AboutMe,Logo} from "../Styled/Utilities";
import { HeaderData } from '../../assets/PageData';

const Page = () => {
  return (
    <>
      <Container>
       <Navbar/>
        <Header />
        <Skills />
        <Projects/>
      </Container>
    </>
  )
}
export default Page


const Navbar = () => {
  return (
    <Navigation>
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
      <Logo>
         <Text fontSize='3'>
          M. Siraj
        </Text>
        <Text fontSize='2' marginTop='-1'>
          Front-end developer
        </Text>
      </Logo>
</Navigation>
  );
}

const Header = () => {
  return (
    <AboutMe>
      <Text fontSize='2' >
        Engineering professional familiar with responsive web design and a firm believer in mobile first approach skilled with Javascript and React js.Mostly I use Javascript, React js, Html, CSS, Styled-components, Tailwind, Bootstrap, and Material UI for crafting beautiful user interfaces.
      </Text>
      <img src="../../../src/assets/oldpc.png" alt="old Computer File" />
    </AboutMe>
  );
}

const Skills = () => {
  return (
    <> 
      <Text fontSize='3' marginTop='6'>Skills</Text>
      <Text fontSize='2' transform='uppercase' >Javascript / React js.</Text>  
      <Text fontSize='2' transform='uppercase' >CSS / SASS / Styled Component /   Bootstrap / Tailwind</Text>  
      <Text fontSize='2' transform='uppercase' >Rest Api</Text>  
    </>
   
  );
}

const Projects = () => {
  return (
 
      <> 
      <Text fontSize='3' marginTop='6'>Projects</Text>
      <Text fontSize='2'>Javascript / React js.</Text>   
    </>
   
  );  
}

const Footer = () => {
return (
    <>  
    </>
  );
}

