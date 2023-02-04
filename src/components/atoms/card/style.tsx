import styled from "styled-components";
import { ColorPallete } from "../../../constants/styles";

type CardBackgroundProps = {
  image: string;
};

export const CardBackground = styled.div<CardBackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 85%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:hover {
    ${CardBackground} {
      transform: scale(1.2);
      transition-duration: 0.75s;
      transition-timing-function: ease-in-out;
    }
  }

  @media (max-width: 400px) {
    &:hover {
      ${CardBackground} {
        transform: unset;
        transition-duration: unset;
        transition-timing-function: unset;
      }
    }
  }
`;

type CardTitleProps = {
  dark?: boolean;
};

export const CardTitle = styled.h3<CardTitleProps>`
  /* flex-grow: 1; */
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: ${({ dark }) => (dark ? "white" : ColorPallete.primary_dark)};
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 25%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
`;
