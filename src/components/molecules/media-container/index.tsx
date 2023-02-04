import React, { useContext } from "react";
import { AppContext } from "../../../core/context/app-provider";
import { Icon, MediaContainer } from "./style";

type MediasProps = {
  hide?: boolean;
};

const Medias = ({ hide }: MediasProps) => {
  const { profile, setIsNavbarOpen } = useContext(AppContext);
  const closeNav = () => {
    setIsNavbarOpen(false);
  };
  return (
    <MediaContainer>
      {profile?.personalInfo.socials.map((social, idx) => {
        return (
          <Icon key={idx} href={social.link} target="_blank" onClick={closeNav}>
            <img
              src={require(`../../../assets/${social.name}.svg`)}
              alt={`icon-${social.name}`}
            />
          </Icon>
        );
      })}
    </MediaContainer>
  );
};

export default Medias;
