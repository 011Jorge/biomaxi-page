import React from "react";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import Banner01 from "../../images/itens/banners/banner1.png";
import Banner02 from "../../images/itens/banners/banner2.png";

import { Container } from "./slideStyles.js";

function Carousel() {
  return (
    <Container>
      <CCarousel
        className="carousel"
        transition="crossfade"
        controls
        indicators
      >
        <CCarouselItem className="carousel-item">
          <CImage
            className="carousel-image d-block w-100"
            src={Banner01}
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem className="carousel-item">
          <CImage
            className="carousel-image d-block w-100"
            src={Banner02}
            alt="slide 2"
          />
        </CCarouselItem>
      </CCarousel>
    </Container>
  );
}

export default Carousel;
