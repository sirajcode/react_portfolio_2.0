import { useState } from "react";
import { Text, HrefLink } from "../../library";
import { AllProjects } from "../../assets";
import {
  List,
  Content,
  Main,
  Center,
  MainTabs,
  Tab,
} from "./Project.styled";

export const Project = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Main id="project">
      <Text family="VT323" font="title" weight="500" margin_bottom="20px">
        Some Things I’ve Built
      </Text>
      <MainTabs>
        <List>
          {AllProjects.map((tab, index) => (
            <Tab
              active={index === activeTab ?? true}
              key={index}
              onClick={() => handleTabClick(index)}
            >
              {tab.name}
            </Tab>
          ))}
        </List>
        <Content>
          <Text font="mdtitle" family="VT323">
            {AllProjects[activeTab]?.title}
          </Text>
          <ul>
            <li>{AllProjects[activeTab]?.goal}</li>
            <li>{AllProjects[activeTab]?.tech}</li>
            <li>{AllProjects[activeTab]?.detail}</li>
          </ul>

          {/* <HrefLink
            textColor="green"
            target="_blank"
            href={AllProjects[activeTab]?.link}
          >
            {AllProjects[activeTab]?.link}
          </HrefLink> */}
        </Content>
      </MainTabs>
      <Center>
        <HrefLink textColor="green" target="_blank">
          see full archive
        </HrefLink>
      </Center>
    </Main>
  );
};
