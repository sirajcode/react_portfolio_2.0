import styled from "styled-components";
import { color, radius } from "../../assets";

export const ProjectSection = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  border: none;
  border-radius: ${radius.round};
  cursor: pointer;
  padding: 20px;
  :hover {
    background-color: ${color.bluebg};
  }
  @media (max-width: 767px) {
    display: block;
  }
`;
export const List = styled.div`
  width: 25%;
  img {
    border: none;
    border-radius: ${radius.round};
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
    width: 50%;
  }
`;
export const Content = styled.div`
  margin-top: -8px;
  padding-left: 20px;
  width: 75%;
  @media (max-width: 767px) {
    padding-left: 0px;
    width: 100%;
  }
`;
export const Stack = styled.span`
  border: none;
  border-radius: ${radius.round};
  background-color: ${color.bluebg};
  padding: 4px 10px;
  margin-right: 5px;
`;

export const Main = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
