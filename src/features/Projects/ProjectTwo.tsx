import styled from "styled-components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import BaseButton from "../../components/BaseButton";
import ReactIcon from "../../assets/images/reactIcon.svg";
import TypeScriptIcon from "../../assets/images/typescript.svg";
import GatsbyIcon from "../../assets/images/gatsby.svg";
import HTMLIcon from "../../assets/images/html.svg";
import CSSIcon from "../../assets/images/css.svg";
import SkillsList from "../../components/SkillsList";

const skills = [
  { name: "React", Icon: ReactIcon },
  { name: "Typescript", Icon: TypeScriptIcon },
  { name: "Gatsby", Icon: GatsbyIcon },
  { name: "HTML5", Icon: HTMLIcon },
  { name: "CSS3", Icon: CSSIcon },
];

interface Props {}
const GITHUB_URL = "https://github.com/Michaelp1994/portfolio-website";

const ProjectTwo: React.FC<Props> = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <StaticImage
          src="../../assets/images/project_two.webp"
          alt="Personal Portfolio Screenshot"
        />
      </ImageWrapper>
      <InformationWrapper>
        <ProjectTitle>Personal Portfolio</ProjectTitle>
        <ProjectInfo>
          The website you are currently viewing was designed and developed by
          me. It was written in React and uses styled-components for styling.
          Hosted on Netlify.
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
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

const ProjectInfo = styled.p`
  text-align: right;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: space-evenly;
`;

const GithubButton = styled(BaseButton)`
  width: 200px;
`;

export default ProjectTwo;
