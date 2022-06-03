import styled from "styled-components";
import React from "react";
import LinkedInLogo from "../../assets/images/linkedIn.svg";
import GithubLogo from "../../assets/images/github.svg";
import EmailLogo from "../../assets/images/email_solid.svg";
interface Props {}

const LINKEDIN_URL = "https://www.linkedin.com/in/michael-poulgrain/";
const GITHUB_URL = "https://github.com/Michaelp1994/";
const EMAIL = "mailto:michael.poulgrain@gmail.com";

const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <LeftWrapper>
          Designed and Developed by Michael Poulgrain.
          <br />
          Built with&nbsp;
          <ExternalLink target="_blank" href="https://www.gatsbyjs.com/">
            GatsbyJs.
          </ExternalLink>
          &nbsp;Hosted on&nbsp;
          <ExternalLink target="_blank" href="https://www.netlify.com/">
            Netlify.
          </ExternalLink>
        </LeftWrapper>
        <Spacer />
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
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  border: 1px solid #e5e7eb;
  padding: 24px 24px;
`;

const MaxWidthWrapper = styled.div`
  max-width: 64rem;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1;
`;
const ExternalLink = styled.a`
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
  text-underline-offset: 1px;
  color: currentColor;
`;
const LeftWrapper = styled.div``;

const SocialWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const Logo = styled.svg`
  width: 32px;
  height: 32px;
  path {
    fill: black;
  }
  &:hover {
    path {
      fill: var(--primary-color);
    }
  }
`;

const LogoWrapper = styled.a`
  display: block;
  transition: transform 100ms;
  &:hover {
    transform: scale(1.25);
  }
`;
export default Footer;
