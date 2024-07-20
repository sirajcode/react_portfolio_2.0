import { About, Nav, Projects, Contact } from "../../component";
import { Container } from "./Home.styled";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Nav />
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
};
