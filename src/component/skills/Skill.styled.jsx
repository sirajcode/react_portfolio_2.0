import styled from "styled-components";
import { color, radius } from "../../assets";

export const Skills = styled.div`
  display: flex;
`;

export const Stack = styled.div`
  padding: 8px 8px 2px 8px;
  border-radius: ${radius.round};
  margin-right: 10px;
  background-color: ${color.dark};
  color: ${color.light};
`;
