import styled from "styled-components";
import React from "react";

import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <Wrapper id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Subtitle>
        Here is a selection of some of the projects I've built:
      </Subtitle>
      <ProjectWrapper>
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </ProjectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 9rem;
`;
const SectionTitle = styled.h1`
  font-size: var(--heading-size);
  font-weight: 700;
`;

const Subtitle = styled.h4`
  margin-bottom: 50px;
  font-size: 1.1rem;
  line-height: 1.5;
  letter-spacing: 0.05rem;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 84px;
`;
export default Projects;
