import styled from "styled-components";
import React from "react";
import ReactIcon from "../../assets/images/reactIcon.svg";
import JavaScriptIcon from "../../assets/images/javascript.svg";
import TypeScriptIcon from "../../assets/images/typescript.svg";
import VueIcon from "../../assets/images/vueIcon.svg";
import HTMLIcon from "../../assets/images/html.svg";
import CSSIcon from "../../assets/images/css.svg";
import NodeIcon from "../../assets/images/nodejs.svg";
import DockerIcon from "../../assets/images/docker.svg";
import ElectronIcon from "../../assets/images/electron.svg";
import GitIcon from "../../assets/images/git.svg";
import GraphqlIcon from "../../assets/images/graphql.svg";
import PostgresqlIcon from "../../assets/images/postgresql.svg";
import JestIcon from "../../assets/images/jest.svg";
import AWSIcon from "../../assets/images/aws.svg";
import PythonIcon from "../../assets/images/python.svg";
import PHPIcon from "../../assets/images/php.svg";

interface Props {}

const gridItems = [
  {
    title: "HTML5",
    Logo: HTMLIcon,
  },
  {
    title: "CSS3",
    Logo: CSSIcon,
  },
  {
    title: "TypeScript",
    Logo: TypeScriptIcon,
  },
  {
    title: "JavaScript",
    Logo: JavaScriptIcon,
  },
  {
    title: "React",
    Logo: ReactIcon,
  },
  {
    title: "Vue",
    Logo: VueIcon,
  },
  {
    title: "NodeJs",
    Logo: NodeIcon,
  },
  {
    title: "Docker",
    Logo: DockerIcon,
  },
  {
    title: "Electron",
    Logo: ElectronIcon,
  },
  {
    title: "Git",
    Logo: GitIcon,
  },
  {
    title: "GraphQL",
    Logo: GraphqlIcon,
  },
  {
    title: "Jest",
    Logo: JestIcon,
  },
  {
    title: "PostgreSQL",
    Logo: PostgresqlIcon,
  },
  {
    title: "AWS",
    Logo: AWSIcon,
  },
  {
    title: "Python",
    Logo: PythonIcon,
  },
  {
    title: "PHP",
    Logo: PHPIcon,
  },
  // {
  //   title: "C++",
  //   Logo: CPlusPlusIcon,
  // },
];

const Technology: React.FC<Props> = () => {
  return (
    <Wrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <Subtitle>
        This is a non-exhaustive list of the technologies I use:
      </Subtitle>
      <GridWrapper>
        {gridItems.map(({ title, Logo }) => (
          <GridItem key={title}>
            <ItemIcon as={Logo} />
            <ItemTitle>{title}</ItemTitle>
          </GridItem>
        ))}
      </GridWrapper>
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

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12.5%;
  min-width: 100px;
  padding: 12px;
`;

const ItemIcon = styled.svg``;
const ItemTitle = styled.div`
  margin-top: 8px;
  text-align: center;
`;
export default Technology;
