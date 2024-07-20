// import { Button } from "../../library";
import { AllProjects } from "../../assets";
import { Main, Card, CardContent } from "./Projects.styled";
import { Text, Pill } from "../../library";

export const Projects = () => {
  return (
    <Main id="project">
      <Text font="mdtitle" family="Inter" weight="600">
        Things I’ve Built
      </Text>

      <div>
        <Card>
          {AllProjects.map((project) => (
            <CardContent key={project.id} href={project.link} target="_blank">
              <img
                src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1024x615.jpg"
                alt="project image"
              />
              <Text
                color="light"
                margin_top="10px"
                weight="500"
                font="text"
                family="Inter"
              >
                {project.title}
              </Text>
              {project.tech.map((stack, index) => (
                <Pill key={index}>{stack}</Pill>
              ))}
            </CardContent>
          ))}
        </Card>
      </div>
      <div>
        {/* <Button>
          see full archive
        </Button> */}
      </div>
    </Main>
  );
};
