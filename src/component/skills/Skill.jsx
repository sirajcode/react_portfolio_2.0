import { Text } from "../../library";
import {  Skills, Stack } from "./Skill.styled";
import {
  JsIcon,
  ReIcon,
  NextIcon,
  PyIcon,
  DjIcon,
  FastIcon,
} from "../../assets";

const skillIcons = [
  { id: 1, icon: <JsIcon /> },
  { id: 3, icon: <ReIcon /> },
  { id: 4, icon: <NextIcon /> },
  { id: 5, icon: <PyIcon /> },
  { id: 6, icon: <DjIcon /> },
  { id: 8, icon: <FastIcon /> },
];

export const Skill = () => {
  return (
    <>
      <Text font="smtitle" family="Inter" weight="600" margin_bottom="10px">
        Tech stack
      </Text>
      <Skills>
        {skillIcons.map((data) => (
          <Stack key={data.id}>{data.icon}</Stack>
        ))}
      </Skills>
    </>
  );
};
