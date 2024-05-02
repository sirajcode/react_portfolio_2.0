import { Navigation } from "./Nav.styled";
import { HrefLink } from "../../library";
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
          <HrefLink textColor="green" onClick={scrollToSection}>
            Projects
          </HrefLink>
        </nav>
        <nav>
          <HrefLink textColor="green" download="" href={resume}>
            download resume
          </HrefLink>
        </nav>
      </Navigation>
    </>
  );
};
