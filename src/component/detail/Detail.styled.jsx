import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";
import { radius } from "../../assets";

export const DetailSec = styled.div`
  text-align: center;
  img {
    border-radius: ${radius.round};
    margin-top: 60px;
  }
`;
export const Arrow = styled(MdArrowOutward)`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: -3px;
  margin-left: 5px;
`;
export const DetailStack = styled.div`
  margin-top: 40px;
`;
