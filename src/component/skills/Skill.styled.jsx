import styled from "styled-components";
import { color, radius } from "../../assets";

export const Skills = styled.div`
  display: flex;
`;

export const Stack = styled.div`
  padding: 8px 8px 2px 8px;
  border-radius: ${radius.round};
  margin-right: 10px;
  color: ${color.light};
  background: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
