import styled from "styled-components";
import { ColorPallete } from "../../../constants/styles";

type ButtonProps = {
  dark?: boolean;
  fit?: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fit }) => (fit ? "100%" : "120px")};
  height: ${({ fit }) => (fit ? "100%" : "45px")};
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ dark }) =>
    dark ? ColorPallete.secundary_dark : "white"};
  border-color: ${({ dark }) => (dark ? ColorPallete.secundary_dark : "white")};
  color: ${({ dark }) => (dark ? "white" : ColorPallete.secundary_dark)};

  &:hover {
    background-color: ${({ dark }) =>
      dark ? "white" : ColorPallete.secundary_dark};
    color: ${({ dark }) => (dark ? ColorPallete.secundary_dark : "white")};
    border-color: ${({ dark }) =>
      dark ? ColorPallete.secundary_dark : "white"};
  }
`;
