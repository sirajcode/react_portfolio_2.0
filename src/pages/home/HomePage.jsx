import { About, Header, Nav, Project, Skill, Contact } from "../../component";
import { Separator } from "../../library";
import { Container } from "./Home.styled";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Nav />
        <About />
        <Skill />
        <Project />
        <Contact />
      </Container>
    </>
  );
};
