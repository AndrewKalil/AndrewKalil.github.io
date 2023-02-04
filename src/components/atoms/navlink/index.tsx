import React, { memo, useContext } from "react";
import { AppContext } from "../../../core/context/app-provider";
import { NavLinkContainer } from "./style";

type NavLinkProps = {
  text: string;
  id: string;
  route: string;
};

const NavButton = memo(({ text, id, route }: NavLinkProps) => {
  const { scrollTo, view } = useContext(AppContext);

  const handleClick = () => scrollTo(id);

  return (
    <NavLinkContainer isActive={view === id} as="span" onClick={handleClick}>
      {text.toUpperCase()}
    </NavLinkContainer>
  );
});

export default NavButton;
