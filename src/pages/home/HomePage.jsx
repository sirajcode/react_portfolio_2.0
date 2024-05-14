import { About, Header, Nav, Project, Skill, Contact } from "../../component";
import { Container } from "./Home.styled";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Nav />
        <About />
        <Project />
        <Contact />
      </Container>
    </>
  );
};
