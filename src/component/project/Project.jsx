import { Text, HrefLink } from "../../library";
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
        Projects
      </Text>
      {SelectedProjects.map((data) => (
        <ProjectSection key={data.id}>
          <List>
            <img src={data.image} alt={data.title} />
          </List>
          <Content>
            <Text
              font="smtitle"
              weight="500"
              margin_bottom="8px"
              margin_top="10px"
            >
              {data.title}
            </Text>
            <Text font="button" margin_bottom="12px">
              {data.detail}
            </Text>
            <Stack>{data.one}</Stack>
            <Stack>{data.two}</Stack>
          </Content>
        </ProjectSection>
      ))}
      <Center>
        <HrefLink textColor="green" target="_blank">
          see full archive
        </HrefLink>
      </Center>
    </Main>
  );
};
