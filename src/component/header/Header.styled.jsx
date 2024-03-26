import styled, { keyframes } from "styled-components";

export const MainPageHeader = styled.div`
 padding-bottom:50px;
 text-align: center;
`;
export const HeaderContent = styled.div`
  height: calc(82vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const background = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
export const AnimatedText = styled.span`
  font-size: 120px;
  font-weight: 600;
  background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${background} 7s ease infinite;
`;
