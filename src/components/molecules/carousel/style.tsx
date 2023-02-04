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
  padding: 30px 50px 0 50px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledSwiper = styled(Swiper)`
  height: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)``;

// type ClickProps = {
//   right?: boolean;
// };

// export const PassClick = styled.span<ClickProps>`
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
//   background-color: gray;
//   right: ${({ right }) => (right ? "75px" : "unset")};
//   left: ${({ right }) => (!right ? "75px" : "unset")};
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 1;
//   -moz-user-select: none; /* firefox */
//   -webkit-user-select: none; /* Safari */
//   -ms-user-select: none; /* IE*/
//   user-select: none;

//   &:hover {
//     background-color: ${ColorPallete.primary_dark};
//   }
// `;

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
    font-size: 25px;
  }
`;
