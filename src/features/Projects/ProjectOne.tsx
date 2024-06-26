import styled from "styled-components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import BaseButton from "../../components/BaseButton";
import VueIcon from "../../assets/images/vueIcon.svg";
import TypeScriptIcon from "../../assets/images/typescript.svg";
import NodeIcon from "../../assets/images/nodejs.svg";
import GraphQLIcon from "../../assets/images/graphql.svg";
import PostgreSQLIcon from "../../assets/images/postgresql.svg";
import SkillsList from "../../components/SkillsList";

interface Props {}
const GITHUB_URL = "https://github.com/Michaelp1994/neurosurgery-logbook";
const LIVE_URL = "https://neurosurgery-logbook.herokuapp.com/";

const skills = [
  { name: "Vue3", Icon: VueIcon },
  { name: "Typescript", Icon: TypeScriptIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "PostgresQL", Icon: PostgreSQLIcon },
  { name: "GraphQL", Icon: GraphQLIcon },
];

const ProjectOne: React.FC<Props> = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage
          src="../../assets/images/logbook_photo.png"
          alt="Neurosurgery Logbook Screenshot"
        />
      </ImageWrapper>
      <InformationWrapper>
        <ProjectTitle>Neurosurgery Logbook</ProjectTitle>
        <ProjectInfo>
          The objective of this project was to redesign a surgery auditing web
          application to make it responsive and more user-friendly so that
          recording could be done immediately after surgery on the user's phone.
        </ProjectInfo>
        <BoldText>
          Please note the project is hosted on Heroku and make take time for the
          server to initialize.
        </BoldText>
        <SkillsList skills={skills} />
        <ButtonsWrapper>
          <GithubButton as="a" target="_blank" href={GITHUB_URL}>
            View Code
          </GithubButton>
          <LiveButton as="a" target="_blank" href={LIVE_URL}>
            View Live
          </LiveButton>
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

const ProjectTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const ProjectInfo = styled.p``;
const BoldText = styled.p`
  font-weight: bold;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
`;
const GithubButton = styled(BaseButton)`
  width: 200px;
`;
const LiveButton = styled(BaseButton)`
  width: 200px;
`;

export default ProjectOne;
