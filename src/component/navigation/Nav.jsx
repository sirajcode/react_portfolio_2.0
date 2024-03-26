import { Navigation } from "./Nav.styled";
import { Button } from "../../library";
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
          <Button blue onClick={scrollToSection}>
            {" "}
            projects
          </Button>
        </nav>
        <nav>
          <Button yellow download="" href={resume}>
            resume
          </Button>
        </nav>
      </Navigation>
    </>
  );
};
