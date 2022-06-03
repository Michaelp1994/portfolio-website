import styled from "styled-components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import BaseButton from "../../components/BaseButton";
import NodeIcon from "../../assets/images/nodejs.svg";
import TypeScriptIcon from "../../assets/images/typescript.svg";
import SkillsList from "../../components/SkillsList";

interface Props {}

const skills = [
  { name: "Typescript", Icon: TypeScriptIcon },
  { name: "Node.js", Icon: NodeIcon },
];
const GITHUB_URL = "https://github.com/Michaelp1994/eslint-plugin-typegraphql";

const ProjectThree: React.FC<Props> = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage
          src="../../assets/images/typegraphql_eslint_computer.png"
          alt="TypeGraphQL Eslint Plugin Screenshot"
        />
      </ImageWrapper>
      <InformationWrapper>
        <ProjectTitle>TypeGraphQL ESlint Plugin</ProjectTitle>
        <ProjectInfo>
          TypeGraphQL is a popular nodeJS library for building GraphQL schemas
          and resolvers using Typescript. The library has no official ESLint
          plugin and large projects can suffer from inconsistencies and bugs,
          especially in large teams. This plugin intended to port existing
          GraphQL standards over to TypeGraphQL.
        </ProjectInfo>
        <SkillsList skills={skills} />
        <ButtonsWrapper>
          <GithubButton as="a" target="_blank" href={GITHUB_URL}>
            View Code
          </GithubButton>
        </ButtonsWrapper>
      </InformationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;
const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 500px;
`;
const ImageWrapper = styled.div`
  flex: 1;
  min-width: 350px;
  max-width: 500px;
`;

const ProjectImage = styled.img``;
const ProjectTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const ProjectInfo = styled.p``;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: space-evenly;
`;
const GithubButton = styled(BaseButton)`
  width: 200px;
`;
export default ProjectThree;
