import { Text } from "../../library";
import { SkillsSection, Skills, Stack } from "./Skill.styled";
import {
  JsIcon,
  TypeIcon,
  ReIcon,
  NextIcon,
  PyIcon,
  DjIcon,
  FlaskIcon,
  FastIcon,
} from "../../assets";

const skillIcons = [
  { id: 1, icon: <JsIcon /> },
  { id: 2, icon: <TypeIcon /> },
  { id: 3, icon: <ReIcon /> },
  { id: 4, icon: <NextIcon /> },
  { id: 5, icon: <PyIcon /> },
  { id: 6, icon: <DjIcon /> },
  { id: 7, icon: <FlaskIcon /> },
  { id: 8, icon: <FastIcon /> },
];

export const Skill = () => {
  return (
    <SkillsSection>
      <Text font="mdtitle" weight="500" margin_bottom="10px">
        Skills
      </Text>
      <Skills>
        {skillIcons.map((data) => (
          <Stack key={data.id}>{data.icon}</Stack>
        ))}
      </Skills>
    </SkillsSection>
  );
};
