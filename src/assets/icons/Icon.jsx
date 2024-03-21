import styled from "styled-components";
import { color } from "../data/variable";
import { SlEnvolope } from "react-icons/sl";
import { SlFolderAlt } from "react-icons/sl";
import { SlExclamation } from "react-icons/sl";

export const AboutIcon = styled(SlExclamation)`
  /* transform: scale(1); */
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
