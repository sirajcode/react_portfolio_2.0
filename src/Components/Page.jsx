import React from "react"
import { Title, Text, Container, Heading, LinkText, DimText, Arrow, FooterMain, HeaderMain,Main,SuperMain } from "./Styled/Utilities";
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
const Project = ProjectsData.map(({id,icon,heading,link1,link2,name1,name2,tech,sep}) =>
  <Main key={id}>
    <DimText>{icon}</DimText>
    <Heading>{heading}</Heading>
    <LinkText>
    <a href={link1} target="_blank" >{name1}</a>
    {sep}
    <a href={link2} target="_blank" >{name2}</a>
    </LinkText>
    <DimText>{tech}</DimText>
  </Main>
);
return (
    <SuperMain>{Project}</SuperMain>
  );
}
const Footer = () => {
const FooterLinks = Links.map(({id,link,name,text}) => (<LinkText key={id}>[<a href={link} target="_blank" >{name}</a>]{text}</LinkText>));
return (
    <FooterMain>
      <Title>{FooterTitle}</Title>
      {FooterLinks}
    </FooterMain>
  );
}

