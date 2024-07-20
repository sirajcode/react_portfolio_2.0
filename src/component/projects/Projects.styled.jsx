import styled from "styled-components";
import { radius } from "../../assets";

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
export const CardContent = styled.a`
  padding: 8px;
  border: 1px solid white;
  border-radius: ${radius.round};
  cursor: pointer;

  background: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);

  img {
    border-radius: calc(${radius.round} - 5px);
  }
  @media screen and (max-width: 768px) {
  }
`;
