import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    padding:0 20%;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-family: 'Playfair Display';
    font-size: 48px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 1px;
     margin-bottom: 28px;
`
export const Heading = styled.h2`
    font-family: 'Playfair Display';
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 18px;
`
export const Text = styled.p`
    font-size: 22px;
    font-weight: 400;
    line-height:1.4;
    margin-bottom: 14px;
`
export const DimText = styled(Text)`
    margin-top:5px;
    color:#90a4ae;
    letter-spacing:1px;
`
export const LinkText = styled.p`
    font-size: 24px;
    font-weight: 400;

`
export const LinkTextSerif = styled(LinkText)`
    font-family: 'Playfair Display';
`

















export const GlobalStyle = createGlobalStyle`

   *,*:before,*:after{box-sizing: border-box;}
/* ! margins */
body,h1,h2,h3,h4,h5,figure,picture,p,div,a{margin: 0;padding: 0;}
/* ! setting up body */
body{line-height: 1.5; min-height: 100vh;  font-family: 'Barlow Condensed';color:#37474f;} 
/* ! pictures and images */
img,picture{max-width:100%;display: block;}
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