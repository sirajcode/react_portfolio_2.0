import styled, { css } from "styled-components";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDjango, SiFastapi } from "react-icons/si";
import { BiLogoFlask, BiLogoTypescript } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

const icon = css`
  width: 25px;
  height: 25px;
  @media screen and (max-width: 768px) {
    height: 18px;
    width: 18px;
  }
`;
//contact icons
export const Whatsapp = styled(IoLogoWhatsapp)`
  ${icon}
`;
export const Phone = styled(BiSolidPhoneCall)`
  ${icon}
`;
export const Mail = styled(BiLogoGmail)`
  ${icon}
`;
export const LinkIcon = styled(SiFastapi)`
  ${icon}
`;


//stack icons
export const JsIcon = styled(RiJavascriptFill)`
  ${icon}
`;
export const TypeIcon = styled(BiLogoTypescript)`
  ${icon}
`;
export const ReIcon = styled(FaReact)`
  ${icon}
`;
export const NextIcon = styled(TbBrandNextjs)`
  ${icon}
`;
//backend
export const PyIcon = styled(FaPython)`
  ${icon}
`;
export const DjIcon = styled(SiDjango)`
  ${icon}
`;
export const FlaskIcon = styled(BiLogoFlask)`
  ${icon}
`;
export const FastIcon = styled(SiFastapi)`
  ${icon}
`;
