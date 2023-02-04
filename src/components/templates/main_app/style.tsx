import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";

export const MainApp = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  height: 100vh;
  width: 100vw;
  position: relative;

  @media (max-width: 400px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ContentContainer = styled(Scrollbars)`
  width: 100%;
  height: 100%;
`;
