import styled, { css } from "styled-components";
import { color, radius, textSize } from "../../assets";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
`;
export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 10px;
  margin-top: 10px;
`;
export const CardContent = styled.div`
  
  padding: 8px;
  border: 1px solid white;
  background-color: ${color.dark};
  border-radius: ${radius.round};
  border: 1px solid transparent;
  /* :hover {
    border: 1px solid ${color.light};
  } */
  img {
    border-radius: calc(${radius.round} - 5px);
  }
  @media screen and (max-width: 768px) {
  }
`;
