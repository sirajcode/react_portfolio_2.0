import React from "react"
import styled from "styled-components";
import { Title, Text, LinkTextSerif, Container, Heading, LinkText,DimText } from './Styled/Utilities'

const Page = () => {
  return (
  
    <>
      <Container>
        <Header />
        <Projects />
        <Projects />
        <Projects />
        <Footer/>
      </Container>
    </>
  )
}

export default Page
 
const Header = () => {
  return (
    <HeaderMain>
      <Title>Hi, i am siraj.</Title>
      <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
      <HeaderMain/>
      <LinkTextSerif>checkout some of my work <span>↓</span></LinkTextSerif>
    </HeaderMain>
  );
}

const Projects = () => {
  return (
    <Main>
      <Heading>this is main title of an App</Heading>
      <Text>1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      <LinkText> link | link </LinkText>
      <DimText>this | is main | title of | an App</DimText>
    </Main>
  );
}

const Footer = () => {
  return (
    <FooterMain>
      <Title>Wanna Talk ?</Title>
      <LinkText> link: this is a link </LinkText>
      <LinkText> link: this is a link </LinkText>
    </FooterMain>
  );
}



const Main = styled.div`
  margin-top:90px;
  width:70%;
`
const HeaderMain = styled.div`
  margin-top:90px;
  width:85%;
`

const FooterMain = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
`