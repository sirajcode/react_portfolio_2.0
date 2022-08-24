import React from "react"
import styled,{keyframes} from "styled-components";
import { Title, Text, Container, Heading, LinkText, DimText } from "./Styled/Utilities";
import { HeaderData, ProjectsData, FooterTitle,Links } from "./PageData";

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
      <LinkText>{linktext}</LinkText><Arrow>↓</Arrow>
    </HeaderMain>
  );
}

const Projects = () => {
 
  const Project = ProjectsData.map((data) =>
    <Main key={data.id}>
      <Heading>{data.heading}</Heading>
      <Text>{data.description}</Text>
      <LinkText> <a href={data.link1} target="_blank" >CODE</a> | <a href={data.link2} target="_blank" >PREVIEW</a>  </LinkText>
      <DimText>{data.tech}</DimText>
    </Main>
  );
  return (
    <>{Project}</>
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


const HeaderMain = styled.div`
  margin-top:90px;
  width:85%;
`
const Main = styled.div`
  margin-top:90px;
  width:60%;
`
const FooterMain = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
`
const blink = keyframes`
  0% {
    opacity:0.3;
  }

  100%{
    opacity: 0.9;
  }
`;
const Arrow = styled.span`
  margin-left : 10px;
  animation: ${blink} 1s ease  infinite;
`