import styled from "styled-components";
import { color, radius, textSize } from "../../assets";

export const ProjectSection = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const List = styled.div`
  width: 40%;
`;
export const Content = styled.div`
  width: 100%;
`;
export const Stack = styled.span`
  border: none;
  border-radius: ${radius.round};
  color: ${color.green};
  font-size: ${textSize.button};
  margin-right: 8px;
`;

export const Main = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
