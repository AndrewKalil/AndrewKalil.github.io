import styled from "styled-components";
import { Link } from "react-router-dom";

type NavLinkProps = {
  textcolor?: string;
  isActive?: boolean;
};

export const NavLinkContainer = styled(Link)<NavLinkProps>`
  color: ${({ textcolor }) => (textcolor ? textcolor : "white")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;

  /* &:active {
    border-bottom: 3px solid white;
  } */

  &::after {
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: ${({ isActive }) => (isActive ? "white" : "unset")};
    position: absolute;
    content: "";
  }
`;
