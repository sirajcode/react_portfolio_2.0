import styled from "styled-components";
import { color, radius } from "../../assets";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:60px;
  margin-bottom: 60px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: normal;
  }
`;
export const Content = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContactBtn = styled.div`
  margin-top: 20px;
  padding: 8px 8px 2px 8px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.dark};
  border-radius:${radius.round};
  a{
    color: ${color.light};
  }
`;
