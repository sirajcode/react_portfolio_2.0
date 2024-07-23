import { Navigation, Navabar } from "./Nav.styled";
import { Text } from "../../library";
import { Link } from "react-router-dom";
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
          <Text family="Inter" font="text" weight="600">
            <Link to="/">{"<siraj.code/>"}</Link>
          </Text>

          <Text font="VT323"> </Text>
        </nav>
        <Navabar>
          <a href="#project">Projects</a> |{" "}
          <a href={resume} download="">
            Resume
          </a>
        </Navabar>
      </Navigation>
    </>
  );
};
