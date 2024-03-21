import { Text } from "../../library";
import { AboutIcon } from "../../assets";
import { AboutSection } from "./About.styled";

export const About = () => {
  return (
    <>
      {" "}
      <AboutSection>
        <Text font="title">
          <AboutIcon /> About me
        </Text>
        <Text margin_top="20px" font="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eius voluptatem. Quibusdam magni vel quam veniam. Delectus nemo cumque
        </Text>
        <Text margin_top="20px" font="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eius voluptatem. Quibusdam magni vel quam veniam. Delectus nemo cumque
        </Text>
      </AboutSection>
    </>
  );
};
