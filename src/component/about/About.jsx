import { Text } from "../../library";
import { AboutIcon } from "../../assets";
import { AboutSection } from "./About.styled";

const aboutme = [
  {
    id: 1,
    text: `I'm a passionate full-stack web developer with a knack for transforming ideas into user-friendly and functional web applications. I leverage a powerful tech stack that empowers me to tackle projects from the ground up.`,
  },
  {
    id: 2,
    text: `On the front-end, I utilize JavaScript, React.js, Next.js, with TypeScript to craft dynamic and interactive user experiences. This combination allows me to build visually appealing interfaces that are not only beautiful but also a joy to navigate.`,
  },
  {
    id: 3,
    text: `For the back-end, I rely on Python frameworks like Django, Flask, and FastAPI to ensure robust and scalable server-side functionality. This empowers me to create secure and efficient applications that can handle complex operations and grow with your needs.`,
  },
];

export const About = () => {
  return (
    <>
      <AboutSection>
        <Text font="title" weight="500">
          <AboutIcon /> About me
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
