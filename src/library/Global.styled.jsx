import { createGlobalStyle } from "styled-components";

//Global Styles
export const GlobalStyle = createGlobalStyle`
   *,*:before,*:after{box-sizing: border-box;}
/* ! margins */
body,h1,h2,h3,h4,h5,figure,picture,p,div,a{margin: 0;padding: 0; }
/* ! setting up body */
body{line-height: 1.5; min-height: 100vh;  font-family: "Inter", sans-serif; color:#ffffff;background-color:#262626;} 
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
 `;
