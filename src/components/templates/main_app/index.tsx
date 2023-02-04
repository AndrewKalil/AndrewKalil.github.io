import React, { PropsWithChildren } from "react";
import Navbar from "../../organisms/navbar";
import { ContentContainer, MainApp, NavbarContainer } from "./style";

const MainAppTemplate = ({ children }: PropsWithChildren) => {
  return (
    <MainApp>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainApp>
  );
};

export default MainAppTemplate;
