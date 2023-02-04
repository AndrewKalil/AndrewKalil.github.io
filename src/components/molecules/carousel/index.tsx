import React from "react";
import { ColorPallete } from "../../../constants/styles";
import {
  CarouselContainer,
  CarouselReusableContainer,
  DescriptionContainer,
  StyledSwiper,
  StyledSwiperSlide,
} from "./style";
import Card from "../../atoms/card";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Project } from "../../../core/types/project";
import { Blog } from "../../../core/types/blog";

type CarouselProps = {
  description: string;
  dark?: boolean;
  data: Project[] | Blog[];
};

const CustomCarousel = ({ description, dark, data }: CarouselProps) => {
  return (
    <CarouselReusableContainer>
      <CarouselContainer>
        <StyledSwiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 350,
              slidesPerView: 1,
            },
            576: {
              width: 576,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => {
            const { id, title, source, description, image, url } = item;
            return (
              <StyledSwiperSlide key={id}>
                <Card
                  id={id}
                  title={title}
                  source={source}
                  description={description}
                  image={image}
                  dark={dark}
                  url={url}
                />
              </StyledSwiperSlide>
            );
          })}
        </StyledSwiper>
      </CarouselContainer>
      <DescriptionContainer color={dark ? "white" : ColorPallete.primary_dark}>
        <h3>{description}</h3>
      </DescriptionContainer>
    </CarouselReusableContainer>
  );
};

export default CustomCarousel;
