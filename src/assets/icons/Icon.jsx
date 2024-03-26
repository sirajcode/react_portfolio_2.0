import styled, { keyframes } from "styled-components";
import { color } from "../data/variable";
import {
  SlEnvolope,
  SlFolderAlt,
  SlExclamation,
  SlArrowDown,
} from "react-icons/sl";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDjango, SiFastapi } from "react-icons/si";
import { BiLogoFlask, BiLogoTypescript } from "react-icons/bi";

export const AboutIcon = styled(SlExclamation)`
  width: 30px;
  height: 30px;
  color: ${color.green};
  margin-bottom: -4px;
`;
export const ProjectIcon = styled(SlFolderAlt)`
  width: 30px;
  height: 30px;
  color: ${color.red};
  margin-bottom: -4px;
`;
export const ContactIcon = styled(SlEnvolope)`
  width: 30px;
  height: 30px;
  color: ${color.yellow};
  margin-bottom: -4px;
`;
const blink = keyframes`
  to{opacity:0}
`;
export const ArrowDown = styled(SlArrowDown)`
  width: 15px;
  height: 15px;
  animation: ${blink} 2s steps(20, start) infinite;
`;

//stack icons
export const JsIcon = styled(RiJavascriptFill)`
  width: 30px;
  height: 30px;
`;
export const TypeIcon = styled(BiLogoTypescript)`
  width: 30px;
  height: 30px;
`;
export const ReIcon = styled(FaReact)`
  width: 30px;
  height: 30px;
`;
export const NextIcon = styled(TbBrandNextjs)`
  width: 30px;
  height: 30px;
`;
//backend
export const PyIcon = styled(FaPython)`
  width: 30px;
  height: 30px;
`;
export const DjIcon = styled(SiDjango)`
  width: 30px;
  height: 30px;
`;
export const FlaskIcon = styled(BiLogoFlask)`
  width: 30px;
  height: 30px;
`;
export const FastIcon = styled(SiFastapi)`
  width: 30px;
  height: 30px;
`;
