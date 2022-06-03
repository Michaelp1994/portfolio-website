import styled from "styled-components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// import personalPhoto from "../../assets/images/me.jpg";
import LinkedInLogo from "../../assets/images/linkedIn.svg";
import GithubLogo from "../../assets/images/github.svg";
import EmailLogo from "../../assets/images/email.svg";

const LINKEDIN_URL = "https://www.linkedin.com/in/michael-poulgrain/";
const GITHUB_URL = "https://github.com/Michaelp1994/";
const EMAIL = "mailto:michael.poulgrain@gmail.com";

interface Props {}

const Introduction: React.FC<Props> = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../assets/images/me.jpg"
        alt="Michael Poulgrain"
        className="personalPhoto"
      />
      <AboutMeSection>
        <HeaderText>Hi, I'm Michael!</HeaderText>
        <SubtitleText>
          I'm a software engineer with a dedication to combining elegant design
          with the best user experience. Australian born, currently residing in
          the Netherlands. Contact me for a chat.
        </SubtitleText>
        <SocialWrapper>
          <LogoWrapper href={LINKEDIN_URL}>
            <Logo as={LinkedInLogo} />
          </LogoWrapper>
          <LogoWrapper href={GITHUB_URL}>
            <Logo as={GithubLogo} />
          </LogoWrapper>
          <LogoWrapper href={EMAIL}>
            <Logo as={EmailLogo} />
          </LogoWrapper>
        </SocialWrapper>
      </AboutMeSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 48px;
  gap: 50px;
`;

const AboutMeSection = styled.div`
  flex: 2;
`;

const HeaderText = styled.h1`
  font-size: var(--heading-size);
  font-weight: 700;
  margin-bottom: 12px;
`;

const SubtitleText = styled.h4`
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: 0.05rem;
`;

const SocialWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;
`;

const Logo = styled.svg`
  width: 48px;
  height: 48px;
`;

const LogoWrapper = styled.a`
  display: block;
  transition: transform 100ms;
  &:hover {
    transform: translateY(-3px);
  }
`;
export default Introduction;
