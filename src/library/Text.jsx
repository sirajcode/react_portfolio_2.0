import styled from "styled-components";
import { textSize, color } from "../assets";

const FontSize = (p) => {
  const text = p.font;
  for (const pro in textSize) {
    if (text === pro) {
      return textSize[pro];
    }
  }
};

const TextColor = (p) => {
  const text = p.textColor;
  for (const pro in color) {
    if (text === pro) {
      return color[pro];
    }
  }
};

export const Text = styled.p`
  line-height: 1.5;
  font-weight: ${(p) => p.weight};
  text-transform: ${(p) => p.transform};
  text-align: ${(p) => p.align};
  font-size: ${FontSize};
  color: ${TextColor};
`;
