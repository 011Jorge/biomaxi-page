import React from "react";

import Carousel from "react-elastic-carousel";
import { Container } from "./carouselStyles.js";

function Elastic() {
  return (
    <Container>
      <h1>E MUITO MAIS...</h1>
      <Carousel itemsToScroll={2} itemsToShow={2}>
        <div>
          <img
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt=""
            style={{ borderRadius: 15 }}
          />
        </div>
        <div>
          <img
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt=""
          />
        </div>
      </Carousel>
      <Carousel itemsToScroll={2} itemsToShow={2}>
        <div>
          <img
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fvcp9-1.fna.fbcdn.net/v/t39.30808-6/299793462_367537955567880_1732192600352143069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHEkdMu_CsednAaObiVOXeCSzNaNXNvULJLM1o1c29QspIfKjMlxdn_1_CBNlvWqMyUHvU8vZ8XuLfGE7PigJrO&_nc_ohc=M_10Tm4JWV4AX-3bOUM&_nc_ht=scontent.fvcp9-1.fna&oh=00_AfCx73tX8PXizCZLi09kcOO0-PZHFZP2XglT-ILC-p7T8w&oe=63EE4042"
            alt=""
          />
        </div>
      </Carousel>
    </Container>
  );
}

export default Elastic;
