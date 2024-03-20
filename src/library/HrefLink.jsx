import styled from "styled-components";
import { color } from "../assets";

const TextColor = (p) => {
  const text = p.textColor;
  for (const pro in color) {
    if (text === pro) {
      return color[pro];
    }
  }
};

export const HrefLink = styled.a`
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  text-align: ${(p) => p.align};
  color: ${TextColor};
  text-transform: ${(p) => p.transform};
  :hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;
