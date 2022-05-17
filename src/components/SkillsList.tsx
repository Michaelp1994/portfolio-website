import styled from "styled-components";
import React from "react";
import Tooltip from "@reach/tooltip";

interface Props {
  skills: Array<Skill>;
}

interface Skill {
  name: string;
  Icon: any;
}
const SkillsList: React.FC<Props> = ({ skills }) => {
  return (
    <Wrapper>
      {skills.map(({ name, Icon }) => (
        <SkillTooltip label={name} key={name}>
          <SkillItem>
            <Icon />
          </SkillItem>
        </SkillTooltip>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const SkillTooltip = styled(Tooltip)`
  background-color: hsla(0, 0%, 0%, 0.75);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;

const SkillItem = styled.div`
  width: 36px;
  height: 36px;
`;
export default SkillsList;
