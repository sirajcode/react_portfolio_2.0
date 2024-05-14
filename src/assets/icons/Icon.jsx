import styled, { keyframes } from "styled-components";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDjango, SiFastapi } from "react-icons/si";
import { BiLogoFlask, BiLogoTypescript } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

const icon = {
  size: "25px",
};
//contact icons
export const Whatsapp = styled(IoLogoWhatsapp)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const Phone = styled(BiSolidPhoneCall)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const Mail = styled(BiLogoGmail)`
  width: ${icon.size};
  height: ${icon.size};
`;

//stack icons
export const JsIcon = styled(RiJavascriptFill)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const TypeIcon = styled(BiLogoTypescript)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const ReIcon = styled(FaReact)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const NextIcon = styled(TbBrandNextjs)`
  width: ${icon.size};
  height: ${icon.size};
`;
//backend
export const PyIcon = styled(FaPython)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const DjIcon = styled(SiDjango)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const FlaskIcon = styled(BiLogoFlask)`
  width: ${icon.size};
  height: ${icon.size};
`;
export const FastIcon = styled(SiFastapi)`
  width: ${icon.size};
  height: ${icon.size};
`;
