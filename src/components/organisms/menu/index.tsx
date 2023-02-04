import React, { useContext } from "react";
import { NAVLINKS } from "../../../constants/navlinks";
import { AppContext } from "../../../core/context/app-provider";
import { Icon } from "../../molecules/media-container/style";
import { MenuButton } from "../navbar/style";
import {
  ButtonHolder,
  MenuContainer,
  MenuContent,
  MenuLink,
  MenuLinks,
  Socials,
} from "./style";

const Menu = () => {
  const { isNavbarOpen, setIsNavbarOpen, scrollTo, profile } =
    useContext(AppContext);
  return (
    <MenuContainer open={isNavbarOpen}>
      <MenuContent>
        <ButtonHolder>
          <MenuButton onClick={() => setIsNavbarOpen(false)} />
        </ButtonHolder>
        <MenuLinks>
          <>
            {NAVLINKS.map((link) => {
              const goToView = () => {
                scrollTo(link.id);
                setIsNavbarOpen(false);
              };
              return (
                <MenuLink onClick={goToView} key={link.id}>
                  {link.name}
                </MenuLink>
              );
            })}
            <MenuLink>
              <Socials>
                {profile?.personalInfo.socials.map((social, idx) => {
                  return (
                    <Icon
                      key={idx}
                      href={social.link}
                      target="_blank"
                      onClick={() => setIsNavbarOpen(false)}
                    >
                      <img
                        src={require(`../../../assets/${social.name}.svg`)}
                        alt={`icon-${social.name}`}
                      />
                    </Icon>
                  );
                })}
              </Socials>
            </MenuLink>
          </>
        </MenuLinks>
      </MenuContent>
    </MenuContainer>
  );
};

export default Menu;
