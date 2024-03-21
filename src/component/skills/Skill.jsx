import { Text } from "../../library";
import { StackName } from "./Skill.styled";
import { SkillsSection } from "./Skill.styled";

export const Skill = () => {
  return (
    <SkillsSection>
      <Text font="mdtitle">
        skills
      </Text>
      <StackName>Frontend: </StackName>
      <StackName>html </StackName>
      <StackName>css </StackName>
      <StackName>javascript </StackName>
      <StackName>typescript </StackName>
      <StackName>React js </StackName>
      <StackName>Next js </StackName>
      <Text></Text>
      <StackName>backend: </StackName>
      <StackName>python </StackName>
      <StackName>django </StackName>
      <StackName>django rest-framework </StackName>
      <StackName>flask </StackName>
      <StackName>rest api </StackName>
    </SkillsSection>
  );
};
