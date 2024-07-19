import styled from "styled-components";
import { color, textSize } from "../assets";

const TextColor = (p) => {
  const text = p.color;
  for (const pro in color) {
    if (text === pro) {
      return color[pro];
    }
  }
};

export const HrefLink = styled.a`
  font-size: ${textSize.button};
  cursor: pointer;
  text-align: ${(p) => p.align};
  color: ${TextColor};
  text-transform: ${(p) => p.transform};
  :hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;
