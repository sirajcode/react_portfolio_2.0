import styled, { keyframes } from "styled-components";

export const MainPageHeader = styled.div`
  border: 0.125rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SimpleText = styled.p`
  margin-bottom: -30px;
  font-size: 28px;
`;

const rotate = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const AnimatedText = styled.span`
  font-size: 100px;
  font-weight: bold;
  background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${rotate} 7s ease infinite;
`;