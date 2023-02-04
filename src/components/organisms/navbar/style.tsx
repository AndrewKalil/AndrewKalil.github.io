import styled from "styled-components";

type NavbarProps = {
  bgColor?: string;
};

export const StyledNavbar = styled.nav<NavbarProps>`
  background-color: ${({ bgColor }) => `${bgColor ? bgColor : "inherit"}`};
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 50% 25%;
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
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20%;
`;

export const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2 20%;
`;

export const Icon = styled.a`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;
