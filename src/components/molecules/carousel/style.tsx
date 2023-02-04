import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselReusableContainer = styled.div`
  display: grid;
  grid-template-rows: 75% 25%;
  height: 100%;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 30px 10px 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    padding: 30px 50px 0 50px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 356px;

  @media screen and (min-width: 576px) {
    width: 576px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 992px) {
    width: 992px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)``;

type DescriptionProps = {
  color: string;
};

export const DescriptionContainer = styled.div<DescriptionProps>`
  width: 100%;
  height: 100%;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    text-align: center;
    text-justify: center;
  }

  @media screen and (min-width: 576px) {
    h3 {
      font-size: 25px;
    }
  }
`;
