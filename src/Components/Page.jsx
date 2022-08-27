import React from "react"
import { Title, Text, Container, Heading, LinkText, DimText, Arrow, FooterMain, HeaderMain, } from "./Styled/Utilities";
import { HeaderData, ProjectsData, FooterTitle, Links } from './PageData';
import styled from "styled-components";

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

  const { title, text, linktext } = HeaderData;

  return (
    <HeaderMain>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <HeaderMain />
      <LinkText>{linktext}<Arrow>↓</Arrow></LinkText>
    </HeaderMain>
  );
}

const Projects = () => {
  const Project = ProjectsData.map((data) =>

      <Main key={data.id}>
        <Heading >{data.heading}</Heading>
        <LinkText> <a href={data.link1} target="_blank" >CODE</a> | <a href={data.link2} target="_blank" >PREVIEW</a>  </LinkText>
        <DimText>{data.tech}</DimText>
      </Main>
  );
  return (
    <SuperMain>{Project}</SuperMain>
  );
}

const Footer = () => {

  const FooterLinks = Links.map((fdata) => (<LinkText key={fdata.id}>[<a href={fdata.link} target="_blank" >{fdata.name}</a>]{fdata.text} </LinkText>));

  return (
    <FooterMain>
      <Title>{FooterTitle}</Title>
      {FooterLinks}
    </FooterMain>
  );
}




const Main = styled.div`
  color: white;
  border: 2px solid #4d4d4d;
  padding: 15px;
 
`
const SuperMain = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width:748px){
  grid-template-columns: repeat(2, 1fr);
  }
@media (max-width:512px){
  grid-template-columns: repeat(1, 1fr);
  }
`