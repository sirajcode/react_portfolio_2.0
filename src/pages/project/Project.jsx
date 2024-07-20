import React from "react";
import { Container } from "./Project.styled";
import { About, Nav, Projects, Contact } from "../../component";
import { Button, Text } from "../../library";

export const Project = () => {
  return (
    <Container>
      <Nav />
      <Text
        margin_top="40px"
        align="center"
        font="lg"
        family="Inter"
        weight="600"
      >
        Name of the project
      </Text>
      <Text
        margin_top="20px"
        align="center"
        font="text"
        family="Inter"
        weight="400"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error quos
        culpa similique
      </Text>
      <Button align="center">Click here for preview</Button>
      <Contact />
    </Container>
  );
};
