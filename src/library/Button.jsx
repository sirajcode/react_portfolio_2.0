import styled from "styled-components";
import { color, radius, textSize } from "../assets";

const blueBtn = `
   background-color: ${color.bluebg};
   :hover {background-color: ${color.blue};}
`;
const greenBtn = `
   background-color: ${color.greenbg};
   :hover {background-color: ${color.green};}
   
`;
const redBtn = `
   background-color: ${color.redbg};
   :hover {background-color: ${color.red};}
`;
const yellowBtn = `
   background-color: ${color.yellowbg};
   :hover {background-color: ${color.yellow};}
`;

export const Button = styled.button`
  font-size: ${textSize.button};
  font-weight: 600;
  padding: 6px 16px;
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
  ${(p) => {
    if (p.blue) return `${blueBtn}`;
    else if (p.green) return `${greenBtn}`;
    else if (p.yellow) return `${yellowBtn} `;
    else if (p.red) return `${redBtn}`;
  }}
`;
