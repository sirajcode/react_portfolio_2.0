import { Navigation } from "./Nav.styled";
import { Button } from "../../library";
export const Nav = () => {
  return (
    <>
      <Navigation>
        <div>
          <Button margin_right='10px' green>projects</Button>
          <Button red>About me </Button>
        </div>
        <div>
          <Button yellow>download resume</Button>
        </div>
      </Navigation>
    </>
  );
};
