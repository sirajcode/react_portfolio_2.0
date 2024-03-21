import { About, Header, Nav, Project, Skill,Contact } from "../../component";
import { Separator } from "../../library";
import { HeadContainer, Container } from "./Home.styled";
export const HomePage = () => {
  return (
    <>
      <HeadContainer>
        <Header />
        <Nav />
      </HeadContainer>
      <Container>
        <About />
        <Skill />
        <Separator />
        <Project />
        <Separator />
        <Contact/>
      </Container>
    </>
  );
};
