import React from "react";
import { DetailSec, DetailStack, Arrow } from "./Detail.styled";
import { Text, Button, Pill } from "../../library";
import { useLocation } from "react-router-dom";

export const Detail = () => {
  const location = useLocation();
  const { project } = location.state || {};
  return (
    <DetailSec>
      {project ? (
        <>
          <Text margin_top="60px" font="title" family="Inter" weight="600">
            {project.title}
          </Text>
          <Text margin_top="30px" font="text" family="Inter" weight="400">
            {project.detail}
          </Text>

          <a href={project.preview} target="_blank">
            <Button margin_top="30px" target="_blank">
              Click here for preview <Arrow />
            </Button>
          </a>

          <img
            src={project.image}
            alt={project.title}
          />
          <DetailStack>
            {project.tech.map((stack, index) => (
              <Pill key={index}>{stack}</Pill>
            ))}
          </DetailStack>

          <Text margin_top="30px" font="title" family="Inter" weight="600">
            Why We Need {project.name}
          </Text>
          <Text margin_top="30px" font="text" family="Inter" weight="400">
            {project.goal}
          </Text>
          <a href={project.code} target="_blank">
            <Button margin_top="30px">
              Click here to see code <Arrow />
            </Button>
          </a>
        </>
      ) : (
        <p>Item not found.</p>
      )}
    </DetailSec>
  );
};

export default Detail;
