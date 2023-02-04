import React, { useContext, useState } from "react";
import { ColorPallete } from "../../../constants/styles";
import {
  LinksContainer,
  LogoContainer,
  MenuButton,
  StyledNavbar,
} from "./style";

// Logo
import { ReactComponent as Logo } from "../../../assets/logo_white.svg";

import NavLink from "../../atoms/navlink";
import { AppContext } from "../../../core/context/app-provider";
import Medias from "../../molecules/media-container";
import { NAVLINKS } from "../../../constants/navlinks";

const Navbar = () => {
  const { setIsNavbarOpen, isNavbarOpen } = useContext(AppContext);

  return (
    <StyledNavbar bgColor={ColorPallete.primary_dark}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LinksContainer>
        {NAVLINKS.map((item) => {
          const { name, id, route } = item;
          return <NavLink key={id} text={name} id={id} route={route} />;
        })}
      </LinksContainer>
      <Medias />
      <MenuButton onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
    </StyledNavbar>
  );
};

export default Navbar;
