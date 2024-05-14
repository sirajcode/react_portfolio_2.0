import styled from "styled-components";
import { color, radius, textSize } from "../assets";

const blueBtn = `
   background-color: ${color.bluebg};
   :hover {background-color: ${color.blue};}
`;
const greenBtn = `
   background-color: ${color.Dark300};
   color: ${color.Dark50};
   border:1px solid ${color.Dark50};
`;

export const Button = styled.button`
  font-size: 12px;
  font-weight: 500;
  padding: 3px 8px;
  cursor: pointer;
  border: none;
  border-radius: ${radius.round};
  color: ${color.white};
  text-transform: ${(p) => p.transform};
  margin: ${(p) => p.margin};
  margin-top: ${(p) => p.margin_top};
  margin-bottom: ${(p) => p.margin_bottom};
  margin-left: ${(p) => p.margin_left};
  margin-right: ${(p) => p.margin_right};
  font-family: Inter;
  ${(p) => {
    if (p.green) return `${greenBtn}`;
  }}
`;
