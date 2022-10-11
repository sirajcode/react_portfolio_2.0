import React from "react"
import { Title, Text, Container, Heading, LinkText, DimText, Arrow, FooterMain, HeaderMain,Main,SuperMain,Flex,Head } from "./Styled/Utilities";
import { HeaderData, ProjectsData, FooterTitle, Links } from './PageData';

const Page = () => {
  return (
    <>
      <Container>
        <Header />
        <Projects />
        {/* <Articals/> */}
        <Footer />
      </Container>
    </>
  )
}
export default Page

const Header = () => {
const { title, text, linktext } = HeaderData;
  return (
   <Flex>
      <HeaderMain>  
          <Title>{title}</Title>
          <Text>{text}</Text>
          <HeaderMain />
          <LinkText>{linktext}<Arrow>↓</Arrow></LinkText>
      </HeaderMain>
      <img src="" />
      </Flex>
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
    <>
     <Head>Projetcs</Head>
      <SuperMain>{Project}</SuperMain>
    </>
   
  );
}

// const Articals = () => {
//   return (
//     <>
//       <Head>Articals</Head>
//       <SuperMain>
//           <Main>
//             <Heading>Heading of Articals</Heading>
//             <LinkText>
//             <a href="" target="_blank" >link will be here</a>
//             </LinkText>
//             <DimText>About</DimText>
//           </Main>
//         </SuperMain>
//     </>
 
//   );
// }


const Footer = () => {
const FooterLinks = Links.map(({id,link,name,text}) => (<LinkText key={id}>[<a href={link} target="_blank" >{name}</a>]{text}</LinkText>));
return (
    <FooterMain>
      <Title>{FooterTitle}</Title>
      {FooterLinks}
    </FooterMain>
  );
}

