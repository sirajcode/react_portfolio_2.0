import styled, { css } from "styled-components";
import { color, radius, textSize } from "../../assets";

export const Main = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const MainTabs = styled.div`
  display: flex;
`;
export const List = styled.div`
  width: 30%;
`;
export const Tab = styled.div`
  cursor: pointer;
  margin-right: 20px;
  padding: 10px 20px;
  font-family: VT323;
  border-left: 2px solid ${color.Dark200};
  /* transition: border-left 0.5s; */
  :hover {
    background-color: rgba(0, 128, 0, 0.116);
  }
  ${({ active }) =>
    active &&
    css`
      color: ${color.green};
      background-color: rgba(0, 128, 0, 0.116);
      border-left: 2px solid ${color.green};
      transition: color 0.5s;
    `}
`;
export const Content = styled.div`
  font-family: Inter;
  width: 70%;
  ul {
    padding-left: 18px;
    li {
      margin-bottom: 8px;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
