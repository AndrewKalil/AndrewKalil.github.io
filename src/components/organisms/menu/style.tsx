import styled from "styled-components";
import { ColorPallete } from "../../../constants/styles";
import { MediaContainer } from "../../molecules/media-container/style";

type MenuProps = {
  open: boolean;
};

export const MenuContainer = styled.div<MenuProps>`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: ${ColorPallete.primary_dark};
  display: ${({ open }) => (open ? "unset" : "none")};
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10% 90%;
`;

export const ButtonHolder = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 10px;
`;

export const MenuLinks = styled.ul`
  display: grid;
  grid-auto-rows: 1fr;
`;

export const MenuLink = styled.li`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
`;

export const Socials = styled(MediaContainer)`
  display: flex !important;
  align-items: center;
  justify-content: space-around;
`;
