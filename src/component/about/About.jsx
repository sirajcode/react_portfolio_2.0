import { Text,Pill } from "../../library";
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
          <Text font="mdtitle" family="Inter" weight="600">
            Hi, i am Siraj
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
                family="Inter"
                font="smtitle"
                weight="600"
                color="light"
              >
                M. Siraj
              </Text>
              <Text
                align="center"
                family="Inter"
                font="button"
                weight="300"
                color="light"
              >
                Full-stack web developer
              </Text>
              <Tags>
                <Pill>React</Pill> <Pill>NextJs</Pill> <Pill>Django</Pill>
              </Tags>
            </CardContent>
          </Card>
        </Profile>
      </AboutSection>
      <Skill />
    </AboutMain>
  );
};
