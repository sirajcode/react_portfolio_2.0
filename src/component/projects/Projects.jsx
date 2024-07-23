// import { Button } from "../../library";
import { AllProjects } from "../../assets";
import { Main, Card, CardContent } from "./Projects.styled";
import { Text, Pill } from "../../library";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();
  const goToPage = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };
  return (
    <Main id="project">
      <Text font="mdtitle" family="Inter" weight="600">
        Things I’ve Built
      </Text>

      <div>
        <Card>
          {AllProjects.map((project) => (
            <CardContent
              key={project.id}
              onClick={() => goToPage(project)}
              target="_blank"
            >
              <img src={project.image} alt={project.title} />
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
