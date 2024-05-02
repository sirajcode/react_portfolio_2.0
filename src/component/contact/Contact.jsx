import { ContactSection } from "./Contact.styled";
import { Text, HrefLink } from "../../library";
export const Contact = () => {
  return (
    <ContactSection>
      <Text margin_top="30px" margin_bottom="30px" weight="500" font="title">
       Say Hello,
      </Text>
      <Text font="text" margin_bottom="20px">
        Let's chat! Myinbox is like a portal to possibility, waiting for your
        project ideas to whoosh through.
      </Text>
      <Text font="text" weight="500">
        email me at:
      </Text>
      <HrefLink textColor="green" href="mailto:sirajbhutta50@gmail.com">
        sirajbhutta50@gmail.com
      </HrefLink>
      <Text margin_bottom="20px"></Text>
      <Text font="text" weight="500">
        for updates:
      </Text>
      <HrefLink
        textColor="green"
        target="_blank"
      >
        LinkedIn
      </HrefLink>
      {" | "}
      <HrefLink
        textColor="green"
        target="_blank"
      >
        github
      </HrefLink>
    </ContactSection>
  );
};
