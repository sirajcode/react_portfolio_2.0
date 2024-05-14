import styled from "styled-components";
import { color } from "../../assets";
export const AboutMain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
`;
export const AboutContent = styled.div`
  width: 60%;
`;
export const Profile = styled.div`
  margin-left: 50px;
  width: 40%;
`;
export const Card = styled.div`
  padding: 30px;
  background-color: ${color.Dark400};
  border-radius: 20px;
  text-align: center;
  border: 1px solid transparent;

  :hover {
    border: 1px solid ${color.Dark50};
  }
`;
export const CardContent = styled.div`
  img {
    margin: 0 auto;
    width: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background: blue;
    border-radius: 50%;
  }
`;
export const Tags = styled.div`
  margin-top: 26px;
`;
