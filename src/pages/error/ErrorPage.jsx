import { ErrorContainer } from "./ErrorPage.styled";
import { Text } from "../../library";

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Text font="title" margin_bottom="10px">
        Look Like You lost !
      </Text>
      <Text margin_bottom="10px">the page you looking for does,nt exist.</Text>
      <a href="/">Go back to the home page</a>
    </ErrorContainer>
  );
};
