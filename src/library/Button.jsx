import styled from "styled-components";
import { color, radius } from "../assets";

const blueBtn = `
   border: 0.125rem solid ${color.blue};
   background-color: ${color.bluebg}
`;
const greenBtn = `
   border: 0.125rem solid ${color.green};
   background-color: ${color.greenbg}
`;
const redBtn = `
   border: 0.125rem solid ${color.red};
   background-color: ${color.redbg}
`;
const yellowBtn = `
   border: 0.125rem solid ${color.yellow};
   background-color: ${color.yellowbg}
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: ${radius.round};
  cursor: pointer;
  color: ${color.white};
  text-transform: ${(props) => (props.transform ? "uppercase" : "normal")};
  ${(p) => {
    if (p.blue) return `${blueBtn}`;
    else if (p.green) return `${greenBtn}`;
    else if (p.yellow) return `${yellowBtn}`;
    else if (p.red) return `${redBtn}`;
  }}
`;
