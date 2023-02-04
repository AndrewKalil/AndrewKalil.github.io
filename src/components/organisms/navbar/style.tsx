import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

type NavbarProps = {
  bgColor?: string;
};

export const StyledNavbar = styled.nav<NavbarProps>`
  background-color: ${({ bgColor }) => `${bgColor ? bgColor : "inherit"}`};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 25% 50% 25%;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  svg {
    height: 120px;
    position: absolute;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20%;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const MenuButton = styled(FiMenu)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: white;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
