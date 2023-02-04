import styled from "styled-components";

type HeroProps = {
  image: string;
};

export const HeroContainer = styled.div<HeroProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
`;

export const GlassFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-left: 30%;
  padding-right: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  text-justify: center;
  font-size: 26px;
`;
