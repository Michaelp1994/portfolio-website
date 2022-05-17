import styled from "styled-components";
import React from "react";
import MenuIcon from "../assets/menuIcon.svg";
import CloseIcon from "../assets/closeIcon.svg";
import { DialogOverlay, DialogContent } from "@reach/dialog";
// import "@reach/dialog/styles.css";
import resumePdf from "../assets/resume.pdf";
interface Props {}

const MobileMenu: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const open = () => setShowMenu(true);
  const close = () => setShowMenu(false);

  return (
    <Wrapper>
      <MobileMenuButton onClick={open}>
        <MenuIcon />
      </MobileMenuButton>
      <BackgroundOverlay isOpen={showMenu} onDismiss={close}>
        <MenuModal>
          <CloseButton onClick={close}>
            <CloseIcon />
          </CloseButton>
          <MenuItem>
            <MenuLink href="#skills" onClick={close}>
              SKILLS
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#projects" onClick={close}>
              PROJECTS
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#contact" onClick={close}>
              CONTACT
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href={resumePdf} onClick={close}>
              RESUME
            </MenuLink>
          </MenuItem>
        </MenuModal>
      </BackgroundOverlay>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const MobileMenuButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const BackgroundOverlay = styled(DialogOverlay)`
  background: hsl(0, 0%, 100%);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
`;

const MenuModal = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 100%;
  height: 100%;
  padding: 6rem 2rem;
  outline: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 3rem;
  padding: 16px;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: currentColor;
  overflow: hidden;
  position: relative;
`;

export default MobileMenu;
