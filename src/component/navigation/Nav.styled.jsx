import styled from "styled-components";
import { color, radius, textSize } from "../../assets";

export const Navigation = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Navabar = styled.div`
  background-color: ${color.dark};
  font-family: Inter;
  color: ${color.light};
  padding: 6px 18px;
  border: none;
  border-radius: ${radius.round};
  font-size: ${textSize.button};
  font-weight: 700;

  background: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  a {
    color: ${color.light};
    font-weight: 400;
  }
`;
