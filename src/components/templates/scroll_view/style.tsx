import styled from "styled-components";

type ScrollViewProps = {
  height: number;
  bgColor?: string;
};

export const ScrollViewContainer = styled.div<ScrollViewProps>`
  /* width: 100%; */
  /* padding: 30px 60px; */
  display: flex;
  height: ${({ height }) => `${height}px`};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "inherit")};
`;

export const ScrollViewChild = styled.div`
  width: 100%;
  height: 100%;
`;
