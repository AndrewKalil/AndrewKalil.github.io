import React, { PropsWithChildren, useEffect } from "react";
import Menu from "../../organisms/menu";
import Navbar from "../../organisms/navbar";
import { ContentContainer, MainApp, NavbarContainer } from "./style";

const MainAppTemplate = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <MainApp>
      <Menu />
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainApp>
  );
};

export default MainAppTemplate;
