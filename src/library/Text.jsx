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

const Color = (p) => {
  const text = p.color;
  for (const pro in color) {
    if (text === pro) {
      return color[pro];
    }
  }
};

export const Text = styled.p`
  line-height: 1.5;
  font-weight: ${(p) => p.weight};
  font-family: ${(p) => p.family};
  text-transform: ${(p) => p.transform};
  text-align: ${(p) => p.align};
  margin: ${(p) => p.margin};
  margin-top: ${(p) => p.margin_top};
  margin-bottom: ${(p) => p.margin_bottom};
  margin-left: ${(p) => p.margin_left};
  margin-right: ${(p) => p.margin_right};
  padding: ${(p) => p.padding};
  padding-top: ${(p) => p.padding_top};
  padding-bottom: ${(p) => p.padding_bottom};
  padding-left: ${(p) => p.padding_left};
  padding-right: ${(p) => p.padding_right};
  font-size: ${FontSize};
  color: ${Color};
  a{
    color: ${color.light} !important;
  }
`;

export const Line = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
`;
