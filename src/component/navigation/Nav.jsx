import { Navigation } from "./Nav.styled";
import { Button,Text } from "../../library";
export const Nav = () => {
  const resume = "this is my resume";
  const scrollToSection = () => {
    const section = document.getElementById("project");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navigation>
        <nav>
          <Text family="VT323" font="smtitle" weight="500">
            {"<siraj.code/>"}
          </Text>
          <Text font="VT323"> </Text>
        </nav>
        <nav>
          <Button  dark download="" href={resume}>
            Project | Resume | Contact
          </Button>
        </nav>
      </Navigation>
    </>
  );
};
