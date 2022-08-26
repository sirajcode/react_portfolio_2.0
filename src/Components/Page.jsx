import React from "react"
import { Title, Text, Container, Heading, LinkText, DimText, Arrow, Main, FooterMain, HeaderMain, SuperMain } from "./Styled/Utilities";
import { HeaderData, ProjectsData, FooterTitle, Links } from './PageData'

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
    <>
      <Main key={data.id}>
        <Heading >{data.heading}</Heading>
        <Text>{data.description}</Text>
        <LinkText> <a href={data.link1} target="_blank" >CODE</a> | <a href={data.link2} target="_blank" >PREVIEW</a>  </LinkText>
        <DimText>{data.tech}</DimText>
      </Main>
      <img src="real.jpg" alt="projectimage" />
    </>
  );
  return (
    <SuperMain>
      {Project}
    </SuperMain>

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







