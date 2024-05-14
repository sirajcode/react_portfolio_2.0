import { Text, Line, Button } from "../../library";
import {
  AboutSection,
  AboutContent,
  Profile,
  Card,
  CardContent,
  Tags,
  AboutMain,
} from "./About.styled";
import { Skill } from "../skills/Skill";
import { PngImage } from "../../assets";

const aboutme = [
  {
    id: 1,
    text: ` A passionate full-stack web developer with a knack for transforming ideas into user-friendly and functional web applications. I utilize JavaScript, React.js, Next.js, with TypeScript to craft dynamic and interactive user experiences and rely on Python frameworks like Django, Flask, and FastAPI to ensure robust and scalable server-side functionality.`,
  },
];

export const About = () => {
  return (
    <AboutMain>
      <AboutSection>
        <AboutContent>
          <Text font="title" family="VT323" weight="500">
            Hi, i am siraj
          </Text>
          {aboutme.map((data) => (
            <Text family="Inter" margin_top="8px" font="text" key={data.id}>
              {data.text}
            </Text>
          ))}
        </AboutContent>
        <Profile>
          <Card>
            <CardContent>
              <img src={PngImage} alt="" />
              <Text
                margin_top="20px"
                align="center"
                family="VT323"
                font="mdtitle"
                weight="500"
              >
                M. Siraj
              </Text>
              <Text
                align="center"
                family="Inter"
                font="button"
                weight="300"
              >
                Full-stack web developer
              </Text>
              <Tags>
                <Button green>React</Button> <Button green>NextJs</Button>{" "}
                <Button green>Django</Button>
              </Tags>
            </CardContent>
          </Card>
        </Profile>
      </AboutSection>
      <Skill />
    </AboutMain>
  );
};
