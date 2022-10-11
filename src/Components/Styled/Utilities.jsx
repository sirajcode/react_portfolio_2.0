import styled, { keyframes, createGlobalStyle } from "styled-components";

//container 
export const Container = styled.div`
    padding:0 10%;
    margin: 0 auto;
    @media (max-width:512px){
      padding:0 7%;
    }
`
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    img{
      width:50%;
    }
    @media (max-width:512px){
    flex-direction: column;
    }
`
//sections

//Header Section
export const HeaderMain = styled.div`
  margin-top:80px;
  width:50%;
  margin-bottom: 80px;
  @media (max-width:748px){
     width:95%;
  }
  @media (max-width:512px){
     width:100%;
  }
` 
//Projects Sections 
export const Main = styled.div`
  color: white;
  border: 2px solid #4d4d4d;
  border-radius:7px;
  padding: 15px;
 
`
export const SuperMain = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width:748px){
  grid-template-columns: repeat(2, 1fr);
  }
@media (max-width:512px){
  grid-template-columns: repeat(1, 1fr);
  }
`
//Footer Section
export const FooterMain = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
`
//Arrow and Animation
export const blink = keyframes`
  0% {
      opacity: 0.3;
  }
  100%{
     opacity:0.9;
  }
`;
export const Arrow = styled.span`
  margin-left : 10px;
  animation: ${blink} 0.9s ease  infinite;
`

//text & Headings
export const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 28px;
`
export const Heading = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
     margin-top: 10px;
    color:#d4d4d4;
`
export const Head = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 30px;
    color:#d4d4d4;
`
export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height:1.4;
    `
export const DimText = styled(Text)`
    color:#d4d4d4;
`
export const LinkText = styled.p`
    font-size: 16px;
    font-weight: 500; 
    margin-bottom: 5px;

`
//Global Styles
export const GlobalStyle = createGlobalStyle`

   *,*:before,*:after{box-sizing: border-box;}
/* ! margins */
body,h1,h2,h3,h4,h5,figure,picture,p,div,a{margin: 0;padding: 0;}
/* ! setting up body */
body{line-height: 1.5; min-height: 100vh;  font-family: 'Poppins'; color:#d4d4d4;background-color:#333333;} 
/* ! pictures and images */
img,picture{max-width:100%;display: block;}
a{text-decoration:none; color:#0078d4;}
/* ! buttons, inputs fields, selections */
input,button,select,a{font:inherit;}
@media(prefers-reduced-motion:reduced){
    *,*:before,*:after {
            animation-duration: 0.1ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
}
 `