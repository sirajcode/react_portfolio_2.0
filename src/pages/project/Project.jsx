import React from "react";
import { Container } from "./Project.styled";
import { Nav, Contact, Detail } from "../../component";

export const Project = () => {
  return (
    <Container>
      <Nav />
      <Detail />
      <Contact />
    </Container>
  );
};
