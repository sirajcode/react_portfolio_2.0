import { ProjectIcon } from "../../assets";
import { Text, Button } from "../../library";
import { SelectedProjects } from "../../assets";
import {
  ProjectSection,
  List,
  Content,
  Stack,
  Main,
  Center,
} from "./Project.styled";

export const Project = () => {
  return (
    <Main id="project">
      <Text font="title" weight="500">
        <ProjectIcon /> Projects
      </Text>
      {SelectedProjects.map((data) => (
        <ProjectSection key={data.id}>
          <List>
            <img src={data.image} alt={data.title} />
          </List>
          <Content>
            <Text font="smtitle" weight="500" margin_bottom="4px">
              {data.title}
            </Text>
            <Text font="text" margin_bottom="20px">
              {data.detail}
            </Text>
            <Stack>{data.one}</Stack>
            <Stack>{data.two}</Stack>
          </Content>
        </ProjectSection>
      ))}
      <Center>
        <Button green>project's archive</Button>
      </Center>
    </Main>
  );
};
