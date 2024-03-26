import { ArrowDown } from "../../assets";
import { MainPageHeader, AnimatedText, HeaderContent } from "./Header.styled";

export const Header = () => {
  return (
    <div>
      <MainPageHeader>
        <HeaderContent>
          <AnimatedText>Siraj</AnimatedText>
        </HeaderContent>
        <ArrowDown />
      </MainPageHeader>
    </div>
  );
};
// ArrowDown
