import React, {
  ReactComponentElement,
  ReactElement,
  Suspense,
  useContext,
  useEffect,
} from "react";
import { ColorPallete } from "../../../constants/styles";
import {
  Icon,
  LinksContainer,
  LogoContainer,
  MediaContainer,
  StyledNavbar,
} from "./style";

// Logo
import { ReactComponent as Logo } from "../../../assets/logo_white.svg";

import NavLink from "../../atoms/navlink";
import { AppContext } from "../../../core/context/app-provider";
import { createRequire } from "module";

type NavLinkType = {
  id: string;
  route: string;
  name: string;
  icon?: JSX.Element;
};

const NavLinks: NavLinkType[] = [
  { id: "hero", name: "home", route: "/home" },
  { id: "projects", name: "projects", route: "/projects" },
  { id: "blogs", name: "blogs", route: "/blogs" },
  { id: "profile", name: "profile", route: "/profile" },
];

const Navbar = () => {
  const { profile } = useContext(AppContext);

  return (
    <StyledNavbar bgColor={ColorPallete.primary_dark}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LinksContainer>
        {NavLinks.map((item) => {
          const { name, id, route } = item;
          return <NavLink key={id} text={name} id={id} route={route} />;
        })}
      </LinksContainer>
      <MediaContainer>
        {profile?.personalInfo.socials.map((social, idx) => {
          return (
            <Icon key={idx} href={social.link} target="_blank">
              <img
                src={require(`../../../assets/${social.name}.svg`)}
                alt={`icon-${social.name}`}
              />
            </Icon>
          );
        })}
      </MediaContainer>
    </StyledNavbar>
  );
};

export default Navbar;
