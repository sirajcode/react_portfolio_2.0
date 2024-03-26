import { ContactSection } from "./Contact.styled";
import { Text, HrefLink } from "../../library";
import { ContactIcon } from "../../assets";
export const Contact = () => {
  return (
    <ContactSection>
      <Text margin_top="30px" margin_bottom="30px" weight="500" font="title">
        <ContactIcon /> Cotact
      </Text>
      <Text font="text" margin_bottom="20px">
        Feeling inspired and ready to make magic happen online? Let's chat! My
        inbox is like a portal to possibility, waiting for your project ideas to
        whoosh through. Just fire off an email and we can discuss how to turn
        your vision into a web masterpiece.
      </Text>
      <Text font="text" weight="500">
        email me at:
      </Text>
      <HrefLink textColor="green">sirjbhutta50@gmail.com</HrefLink>
      <Text margin_bottom="20px"></Text>
      <Text font="text" weight="500">
       sometime i am at:
      </Text>
      <HrefLink textColor="green">LinkedIn</HrefLink>
      {" "}
      <HrefLink textColor="green">github</HrefLink>
    </ContactSection>
  );
};
