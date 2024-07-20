import styled from "styled-components";
import { color, radius } from "../../assets";
export const AboutMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const AboutContent = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const Profile = styled.div`
  margin-left: 50px;
  width: 40%;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const Card = styled.div`
  padding: 30px;
  border-radius: ${radius.round};
  text-align: center;
  background: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  margin-top: 20px;
`;
