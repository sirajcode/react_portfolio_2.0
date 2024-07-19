import { Navigation, Navabar } from "./Nav.styled";
import { Text } from "../../library";
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
          <Text family="Inter" font="smtitle" weight="600">
            {"<siraj.code/>"}
          </Text>
          <Text font="VT323"> </Text>
        </nav>
        <Navabar>
            <a href="/">
              Projects
            </a>{" "}
            |{" "}
            <a href={resume} download="">
              Resume
            </a>
        </Navabar>
      </Navigation>
    </>
  );
};
