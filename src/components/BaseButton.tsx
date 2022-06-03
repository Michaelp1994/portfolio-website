import styled from "styled-components";

const BaseButton = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: var(--primary-color);
  color: white;
  letter-spacing: 0.05rem;
  cursor: pointer;
  transition: transform 500ms;
  &:hover {
    background-color: var(--primary-color-darken);
    transform: scale(1.1);
  }
`;

export default BaseButton;
