import React from "react";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import { Container } from "./slideStyles";

function Carousel() {
  return (
    <Container>
      <CCarousel
        className="carousel"
        // transition="crossfade"
        controls
        indicators
      >
        <CCarouselItem className="carousel-item">
          <CImage
            className="carousel-image d-block w-100"
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem className="carousel-item">
          <CImage
            className="carousel-image d-block w-100"
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem className="carousel-item">
          <CImage
            className="carousel-image d-block w-100"
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </Container>
  );
}

export default Carousel;
