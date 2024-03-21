import { ContactSection } from "./Contact.styled";
import { Text, HrefLink } from "../../library";
import { ContactIcon } from "../../assets";
export const Contact = () => {
  return (
    <ContactSection>
      <Text margin_top="30px" margin_bottom="30px" font="title">
        <ContactIcon /> Cotact
      </Text>
      <Text font="text" margin_bottom="20px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque,
        vel praesentium ea itaque tenetur nostrum,
      </Text>
      <Text font="text">Lorem ipsum dolo:</Text>
      <HrefLink textColor="green">sirjbhutta50@gmail.com</HrefLink>
      <Text margin_bottom="20px"></Text>
      <Text font="text">Lorem ipsum dolo:</Text>
      <HrefLink textColor="green">sirjbhutta50@gmail.com</HrefLink>
    </ContactSection>
  );
};
