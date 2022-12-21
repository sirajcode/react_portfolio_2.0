import React from "react"
import { Title, Text, Container, Heading, LinkText, DimText, Arrow, FooterMain, HeaderMain,Main,SuperMain,Flex,Head } from "../Styled/Utilities";
import { HeaderData, ProjectsData, FooterTitle, Links } from './PageData';

const Page = () => {
  return (
    <>
      <Container>
        <Header />
         <Projects />
        <Footer />
      </Container>
    </>


  )
}
export default Page

const Header = () => {
const { title, text } = HeaderData;
  return (
   <Flex>
      <HeaderMain>  
          <Title>{title}</Title>
          <Text>{text}</Text>
          <HeaderMain />
      </HeaderMain>
      <img src="" />
      </Flex>
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

