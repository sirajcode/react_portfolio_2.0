import styled from "styled-components";
import { color, radius } from "../assets";

const blueBtn = `
   border: 0.125rem solid ${color.blue};
   background-color: ${color.bluebg};
   :hover {background-color: ${color.blue};}
`;
const greenBtn = `
   border: 0.125rem solid ${color.green};
   background-color: ${color.greenbg};
   :hover {background-color: ${color.green};}
   
`;
const redBtn = `
   border: 0.125rem solid ${color.red};
   background-color: ${color.redbg};
   :hover {background-color: ${color.red};}
`;
const yellowBtn = `
   border: 0.125rem solid ${color.yellow};
   background-color: ${color.yellowbg};
   :hover {background-color: ${color.yellow};}
`;

export const Button = styled.button`
  font-size:18px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 4px 16px;
  cursor: pointer;
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
