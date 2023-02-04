import React, { PropsWithChildren } from "react";
import { ScrollViewChild, ScrollViewContainer } from "./style";

type ScrollViewProps = {
  id: string;
  bgColor?: string;
};

const ScrollView = ({
  children,
  id,
  bgColor,
}: PropsWithChildren<ScrollViewProps>) => {
  return (
    <ScrollViewContainer
      id={id}
      height={window.innerHeight - 0.1 * window.innerHeight}
      bgColor={bgColor}
    >
      <ScrollViewChild>{children}</ScrollViewChild>
    </ScrollViewContainer>
  );
};

export default ScrollView;
