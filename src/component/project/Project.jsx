// import { Button } from "../../library";
import { AllProjects } from "../../assets";
import { Main, Card, CardContent } from "./Project.styled";
import { Text,Pill } from "../../library";

export const Project = () => {
  return (
    <Main id="project">
      <Text font="lg" family="VT323" weight="500">
        Some Things I’ve Built
      </Text>

      <div>
        <Card>
          {AllProjects.map((project) => (
            <CardContent key={project.id}>
              <img
                src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1024x615.jpg"
                alt="project image"
              />
              <Text color="light" margin_top="10px" weight="500" font="text" family="poppins">
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
