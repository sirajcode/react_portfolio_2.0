import React from "react";
import {
  Container,
  Text,
  Section,
  Nav,
  Navigation,
  AboutMe,
  Logo,
  Project,
  FooterNav,
  FooterLinks,
} from "../Styled/Utilities";
import {
  NavData,
  HeaderData,
  SkillsData,
  ProjectsData,
  Protitle,
  Links,
} from "../../assets/PageData";

const Page = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </Container>
    </>
  );
};
export default Page;
// todo:  top header -  can be changed when i want to change  

//nav section
const Navbar = () => {
  const { title, text } = HeaderData;
  const data = NavData.map(({ id, link, icon, name, attr }) => (
    <Section key={id} align="center" text="#ffffff" href={link} download={attr}>
      {icon}
      <Text align="center" transform="uppercase">
        {name}
      </Text>
    </Section>
  ));
  return (
    <Navigation>
      <Nav>{data}</Nav>
      <Logo>
        <Text fontSize="3">{title}</Text>
        <Text fontSize="2" marginTop="-1">
          {text}
        </Text>
      </Logo>
    </Navigation>
  );
};
//header section
const Header = () => {
  const { desc, link } = HeaderData;
  return (
    <AboutMe>
      <Text fontSize="2">{desc}</Text>
      <img src={link} alt="old Computer File" />
    </AboutMe>
  );
};
// skills section
const Skills = () => {
  const { skilltitle, skill1, skill2, skill3 } = SkillsData;
  return (
    <>
      <Text fontSize="3" marginTop="5" marginBottom="5">
        {skilltitle}
      </Text>
      <Text fontSize="2" transform="uppercase">
        {skill1}
      </Text>
      <Text fontSize="2" transform="uppercase">
        {skill2}
      </Text>
      <Text fontSize="2" transform="uppercase">
        {skill3}
      </Text>
    </>
  );
};
//projects section
const Projects = () => {
  const content = ProjectsData.map(({ id, link, title, detail }) => (
    <div key={id}>
      <Text fontSize="2" marginTop="4" marginBottom="2" transform="uppercase">
        <Section href={link}>{title}</Section>
      </Text>
      <Text fontSize="2">{detail}</Text>
    </div>
  ));
  return (
    <Project id="project">
      <Text fontSize="3" marginTop="5" marginBottom="5">
        {Protitle}
      </Text>
      {content}
    </Project>
  );
};
//footer section
const Footer = () => {
  const contact = Links.map(({ id, link, name }) => (
    <Section key={id} href={link}>
      <Text fontSize="2">{name}</Text>
    </Section>
  ));
  return (
    <FooterNav>
      <FooterLinks>{contact}</FooterLinks>
    </FooterNav>
  );
};
