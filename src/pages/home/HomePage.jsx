import { About, Header, Nav, Project, Skill, Contact } from "../../component";
import { Separator } from "../../library";
import { Container } from "./Home.styled";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Nav />
        <Header />
        <Separator />
        <About />
        <Skill />
        <Separator />
        <Project />
        <Separator />
        <Contact />
      </Container>
    </>
  );
};
