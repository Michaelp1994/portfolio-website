import styled from "styled-components";
import React from "react";
import BaseButton from "../../components/BaseButton";
import { QUERIES } from "../../constants";
import MobileMenu from "../MobileMenu/MobileMenu";
interface Props {}

const NavBar: React.FC<Props> = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <LeftWrapper>
          <Logo href="#">Michael Poulgrain</Logo>
        </LeftWrapper>
        <RightWrapper>
          <TextItem href="#skills">SKILLS</TextItem>
          <TextItem href="#projects">PROJECTS</TextItem>
          <TextItem href="#contact">CONTACT</TextItem>
          <NavItem href="/resume.pdf">
            <FakeButton>RESUME</FakeButton>
          </NavItem>
        </RightWrapper>
        <MobileWrapper>
          <MobileMenu />
        </MobileWrapper>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 0px 48px;
  gap: 8px;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const NavItem = styled.a`
  display: flex;
  padding: 24px 12px;
  color: black;
  text-decoration: none;
`;
const Logo = styled(NavItem)`
  font-size: 1.5rem;
`;
const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }
`;

const MaxWidthWrapper = styled.div`
  max-width: 128rem;
  margin: auto;
  display: flex;
`;

const TextItem = styled(NavItem)`
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--primary-color);
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    transform: translate3d(0, 0, 0);
  }
`;

const FakeButton = styled(BaseButton)``;

export default NavBar;
