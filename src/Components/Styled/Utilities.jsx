import styled, { keyframes, createGlobalStyle } from "styled-components";

export const Container = styled.div`
    padding:0 10%;
    margin: 0 auto;
    @media (max-width:748px){
     padding:0 10%;
    }
    @media (max-width:512px){
      padding:0 7%;
    }
`
export const HeaderMain = styled.div`
  margin-top:80px;
  width:70%;
  margin-bottom: 80px;
  @media (max-width:748px){
     width:95%;
  }
  @media (max-width:512px){
     width:100%;
  }
`



export const FooterMain = styled.div`
  margin-top: 90px;
  margin-bottom: 90px;
`
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
    font-size: 112px;
    font-weight: 700;
    line-height: 1.1;
    text-transform:uppercase;
    margin-bottom: 28px;
`
export const Heading = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
`
export const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height:1.4;
    `
export const DimText = styled(Text)`
    color:#d4d4d4;
`
export const LinkText = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;

`
//Global Styles
export const GlobalStyle = createGlobalStyle`

   *,*:before,*:after{box-sizing: border-box;}
/* ! margins */
body,h1,h2,h3,h4,h5,figure,picture,p,div,a{margin: 0;padding: 0;}
/* ! setting up body */
body{line-height: 1.5; min-height: 100vh;  font-family: 'Poppins';color:white;background-color:#333333;} 
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