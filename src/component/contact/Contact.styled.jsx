import styled from "styled-components";
import { color } from "../../assets";

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 40%;
`;
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
export const ContactBtn = styled.div`
  margin-top: 10px;
  padding: 8px 8px 2px 8px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.Dark400};
  border-radius: 0.56rem;
  border: 1px solid transparent;
  :hover {
    border: 1px solid;
    border-color: ${color.Dark50};
  }
`;
