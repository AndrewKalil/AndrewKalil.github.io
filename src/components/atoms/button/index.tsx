import React, { PropsWithChildren } from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  dark: boolean;
  action?: () => void;
};

const Button = ({ children, dark, action }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton onClick={action} dark={dark}>
      {children}
    </StyledButton>
  );
};

export default Button;
