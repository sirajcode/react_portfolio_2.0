import styled, {createGlobalStyle } from "styled-components";
import { ImHome,ImProfile,ImTerminal } from "react-icons/im";

// updated: 24/12/2022


//container 
export const Container = styled.div`
  padding:3% 10%;
  margin: 0 auto;
  @media (max-width:512px){
  padding:3% 7%;
}
`
//Navbar sections
export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width:748px){
    flex-direction: column-reverse;
    }
`
export const Nav = styled.div`
  width:35%;
  margin-top: 35px;
  display:flex;
  justify-content: space-between;
  @media (max-width:748px){
  margin-top: 50px;
  width:90%;
  }
`
export const Logo = styled.div`
  width:26%; 
  @media (max-width:748px){
  width:100%;
  }
`
export const Section = styled.div`
  text-align: center;
`
//icons
export const HomeIcon = styled(ImHome)`
  transform: scale(2);
  margin-bottom: 7px;

`;
export const ProfileIcon = styled(ImProfile)`
  transform: scale(2);
  margin-bottom: 7px;
`;
export const TerminalIcon  = styled(ImTerminal)`
  transform: scale(2);
  margin-bottom: 7px;
`;


export const AboutMe = styled.div`
  margin-top:80px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  p{
    width: 50%;
    @media (max-width:748px){
    width: 100%;
  }
  }
  img{
   width: 40%;
   @media (max-width:748px){
    margin-top: 40px;
    width: 100%;
  }}
  @media (max-width:748px){
  flex-direction: column;
  margin-top:50px;
  }
`;
 











//text
export const Text = styled.p`
font-weight: 400;
line-height:1.5;
text-transform: ${props => props.transform ? 'uppercase' : 'normal'};
// font size
font-size:${({ fontSize }) => {
  if (fontSize === '1') return '18'
      else if(fontSize === '2') return '24px'
      else if(fontSize === '3') return '46px'
  return '18px'
}};
text-align: ${({align}) => {
    if (align === 'center') return 'center'
    else if (align === 'right') return 'right'
    return  'left'
}};
margin: ${({ margin }) => {
      if(margin === '1') return '2px'
      else if(margin === '2') return '4px'
      else if(margin === '3') return '8px'
      else if(margin === '4') return '16px'
      else if(margin === '5') return '32px'
      else if (margin === '6') return '64px'
  return 'none'
}}; 

// margin top
margin-top: ${({ marginTop }) => {
      if(marginTop === '1') return '2px'
      else if(marginTop === '2') return '4px'
      else if(marginTop === '3') return '8px'
      else if(marginTop === '4') return '16px'
      else if(marginTop === '5') return '32px'
      else if (marginTop === '6') return '64px'
      else if(marginTop === '-1') return '-12px'
  return 'none'
}}; 

//margin bottom
margin-bottom: ${({ marginBottom }) => {
      if(marginBottom === '1') return '2px'
      else if(marginBottom === '2') return '4px'
      else if(marginBottom === '3') return '8px'
      else if(marginBottom === '4') return '16px'
      else if(marginBottom === '5') return '32px'
      else if(marginBottom === '6') return '64px'
  return 'none'
}}; 

// margin left 
margin-left: ${({ marginLeft }) => {
      if(marginLeft === '1') return '2px'
      else if(marginLeft === '2') return '4px'
      else if(marginLeft === '3') return '8px'
      else if(marginLeft === '4') return '16px'
      else if(marginLeft === '5') return '32px'
      else if(marginLeft === '6') return '64px'
  return 'none'
}};  

// margin right
margin-right: ${({ marginRight }) => {
      if(marginRight === '1') return '2px'
      else if(marginRight === '2') return '4px'
      else if(marginRight === '3') return '8px'
      else if(marginRight === '4') return '16px'
      else if(marginRight === '5') return '32px'
      else if(marginRight === '6') return '64px'
  return 'none'
}};

//padding
padding: ${({ padding }) => {
      if(padding === '1') return '2px'
      else if(padding === '2') return '4px'
      else if(padding === '3') return '8px'
      else if(padding === '4') return '16px'
      else if(padding === '5') return '32px'
      else if(padding === '6') return '64px'
  return 'none'
}}; 

// padding top
padding-top: ${({ paddingTop }) => {
      if(paddingTop === '1') return '2px'
      else if(paddingTop === '2') return '4px'
      else if(paddingTop === '3') return '8px'
      else if(paddingTop === '4') return '16px'
      else if(paddingTop === '5') return '32px'
      else if(paddingTop === '6') return '64px'
  return 'none'
}}; 

//padding bottom
padding-bottom: ${({ paddingBottom }) => {
      if(paddingBottom === '1') return '2px'
      else if(paddingBottom === '2') return '4px'
      else if(paddingBottom === '3') return '8px'
      else if(paddingBottom === '4') return '16px'
      else if(paddingBottom === '5') return '32px'
      else if(paddingBottom === '6') return '64px'
  return 'none'
}}; 

// padding left 
padding-left: ${({ paddingLeft }) => {
      if(paddingLeft === '1') return '2px'
      else if(paddingLeft === '2') return '4px'
      else if(paddingLeft === '3') return '8px'
      else if(paddingLeft === '4') return '16px'
      else if(paddingLeft === '5') return '32px'
      else if(paddingLeft === '6') return '64px'
  return 'none'
}};  

// padding right
padding-right: ${({ paddingRight }) => {
      if(paddingRight === '1') return '2px'
      else if(paddingRight === '2') return '4px'
      else if(paddingRight === '3') return '8px'
      else if(paddingRight === '4') return '16px'
      else if(paddingRight === '5') return '32px'
      else if(paddingRight === '6') return '64px'
  return 'none'
}};
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
//Footer Section



//Global Styles
export const GlobalStyle = createGlobalStyle`
   *,*:before,*:after{box-sizing: border-box;}
/* ! margins */
body,h1,h2,h3,h4,h5,figure,picture,p,div,a{margin: 0;padding: 0;}
/* ! setting up body */
body{line-height: 1.5; min-height: 100vh;  font-family: 'VT323'; color:#ffffff;background-color:#262626;} 
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