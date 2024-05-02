import { Text } from "../../library";
import { AboutSection } from "./About.styled";

const aboutme = [
  {
    id: 1,
    text: ` A passionate full-stack web developer with a knack for transforming ideas into user-friendly and functional web applications. I utilize JavaScript, React.js, Next.js, with TypeScript to craft dynamic and interactive user experiences and rely on Python frameworks like Django, Flask, and FastAPI to ensure robust and scalable server-side functionality.`,
  },
  {
    id: 2,
    text: ``,
  },
  {
    id: 3,
    text: ``,
  },
];

export const About = () => {
  return (
    <>
      <AboutSection>
        <Text font="title" weight="500">
          Hi, i am siraj
        </Text>
        {aboutme.map((data) => (
          <Text margin_top="20px" font="text" key={data.id}>
            {data.text}
          </Text>
        ))}
      </AboutSection>
    </>
  );
};
