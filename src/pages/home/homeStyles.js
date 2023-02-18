import styled from "styled-components";
import background from "../../images/itens/background.jpg";
import backAbout from "../../images/itens/backAbout.jpg";

import Regua from "../../images/itens/banners/regua.png";
import Rodape from "../../images/itens/banners/rodape.png";

export const ContainerHome = styled.div`
  color: #000000;

  background-color: #050d23;

  .a {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px !important;

    font-size: 20px;

    position: relative;
    text-decoration: none;

    color: #fff;

    //Iphone12
    @media (max-width: 400px) {
      font-size: 18px;
    }

    &:active {
      opacity: 0.5;
    }

    .icon {
      margin-bottom: 5px;
    }
  }

  .a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #89c43a;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .first-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 0 50px;
    border-radius: 20px 0 0 20px;

    @media (max-width: 800px) {
      margin: 0;
      text-align: left;
    }
  }

  .second-section {
    display: flex;
    justify-content: center;
    margin: 50px 50px 0 0;
    border-radius: 0 12px 12px 0;

    @media (max-width: 800px) {
      margin: 0;
      text-align: left;
    }

    .container-text {
      border-radius: 35px !important;
      background: #031d42 !important;
      box-shadow: -34px 34px 59px #021735, 34px -34px 59px #04234f !important;
    }

    .container-info {
      //Responsiveness
      @media (max-width: 1550px) {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }

  .third-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 50px 50px;
    border-radius: 20px 0 0 20px;

    @media (max-width: 800px) {
      margin: 0;
      text-align: left;
    }

    .container-text {
      background-color: #3a6332 !important;
      border-radius: 35px !important;
      box-shadow: 17px 17px 34px #26421f, -17px -17px 34px #38642f !important;
    }
  }

  .four-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 50px 50px;
    border-radius: 20px 0 0 20px;

    @media (max-width: 800px) {
      margin: 0;
      text-align: left;
    }

    .container-text {
      background-color: #3a6332 !important;
      border-radius: 35px !important;
      box-shadow: 17px 17px 34px #26421f, -17px -17px 34px #38642f !important;
    }
  }

  .five-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 50px 50px;
    border-radius: 20px 0 0 20px;

    @media (max-width: 800px) {
      margin: 0;
      text-align: left;
    }

    .container-text {
      background-color: #3a6332 !important;
      border-radius: 35px !important;
      box-shadow: 17px 17px 34px #26421f, -17px -17px 34px #38642f !important;
    }
  }

  .container-export {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .container-video {
    width: 900px;
    height: 540px;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 20px;

    //Iphone
    @media (max-width: 800px) {
    }

    @media (max-width: 1300px) {
      padding-top: 20px;
      margin: 0 auto;
      width: 300px !important;
      height: 400px !important;
    }

    //Responsiveness
    @media (max-width: 1550px) {
      width: 650px;
      height: 300px;
    }
  }

  .regua {
    width: 100%;
    height: 60px;
    background-image: url(${Regua});
    //Responsivennes Ipad
    @media (max-width: 900px) {
      margin-bottom: 100px;
    }
  }
  .rodape {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    background-image: url(${Rodape});

    //Responsivennes Ipad
    @media (max-width: 900px) {
      margin-top: 200px;
    }

    @media (max-width: 800px) {
      margin-top: 800px;
    }
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 110vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-image: url(${background});
  background-repeat: no-repeat;

  //Iphone
  @media (max-width: 800px) {
    height: 100vh;
  }

  div {
    margin-top: 300px;
    margin-left: 100px;

    @media (max-width: 1550px) {
      margin-top: 200px;
    }

    //Iphone
    @media (max-width: 800px) {
      margin: 0 auto;
      text-align: center;
      padding-top: 60%;
    }

    img {
      width: 400px;

      animation: ani-img 1.2s ease-in-out;

      @keyframes ani-img {
        from {
          transform: translateY(500px);
          opacity: 0.1;
        }
        to {
          transform: translateX(0px);
        }
      }

      //Iphone
      @media (max-width: 800px) {
        width: 200px;
      }

      @media (max-width: 1550px) {
        width: 200px;
      }
    }
  }

  h1 {
    font-weight: bold;
    margin-top: 10px;
    font-size: 80px;
    color: #fff;

    animation: ani-h1 1.2s ease-in-out;

    @keyframes ani-h1 {
      from {
        transform: translateY(700px);
        opacity: 0.1;
      }
      to {
        transform: translateX(0px);
      }
    }

    //Iphone
    @media (max-width: 800px) {
      margin-top: 20px;
      font-size: 28px !important;
    }

    @media (max-width: 1550px) {
      font-size: 60px;
    }
  }

  h3 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: lighter;
    color: #fff;

    animation: ani-h3 1.2s ease-in-out;

    @keyframes ani-h3 {
      from {
        transform: translateY(800px);
        opacity: 0.3;
      }
      to {
        transform: translateX(0px);
      }
    }

    //Iphone
    @media (max-width: 600px) {
      margin: 0 auto;
      font-size: 17px !important;
      width: 200px;
    }
  }
`;

export const ContainerMarks = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  //Responsiveness Ipad
  @media (max-width: 1210px) {
    display: none;
  }

  img {
    margin: 30px;
    width: 150px;
  }
`;

export const ContainerAbout = styled.div`
  height: auto;
  margin-top: 50px;

  background-image: url(${backAbout});
  background-size: cover;

  color: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;

  padding: 50px 50px 50px 100px;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    padding: 100px 0 100px 0;
  }

  /* @media (max-width: 800px) {
    margin: 0 !important;
  }

  //Responsiveness
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  } */

  .text {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (max-width: 1300px) {
      width: 350px !important;
    }

    /* //Iphone
    @media (max-width: 430px) {
      background: none;
    }

    //Iphone12
    @media (max-width: 450px) {
      margin: 0 auto !important;
      width: 310px !important;
    } */
  }

  h1 {
    padding-top: 25px;
    margin-top: 10px;
    font-size: 60px;
    font-weight: bold;

    @media (max-width: 1300px) {
      font-size: 32px;
    }

    /* //Iphone
    @media (max-width: 430px) {
      font-size: 22px;
    }

    //Responsiveness
    @media (max-width: 1550px) {
      font-size: 28px;
    } */

    .span1 {
      color: #8bc242;
    }

    .span2 {
      color: #237bb8;
    }
  }

  p {
    margin: 0 auto;
    font-weight: 500;
    font-size: 20px;
    width: 70%;
    padding-bottom: 30px;

    @media (max-width: 1300px) {
      font-size: 15px;
    }

    /* 
    //Iphone
    @media (max-width: 430px) {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 17px;
      width: 100%;
    }

    //Responsiveness
    @media (max-width: 1550px) {
      font-size: 20px;
    } */
  }
`;

export const Section = styled.div`
  .container-info {
    width: 90%;

    padding: 40px;

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    border-radius: 10px;

    //Responsiveness
    @media (max-width: 1550px) {
      display: flex;
      flex-direction: column;
    }

    .container-text {
      font-size: 19px;
      margin-right: 35px;
      margin-left: 35px;
      margin-top: 35px;
      margin-bottom: 35px;

      color: white;
      padding: 40px;
      background-color: #031d42;
      border-radius: 10px;

      border-radius: 35px;
      background: #031d42;
      box-shadow: 34px 34px 59px #021735, -34px -34px 59px #04234f;

      //Iphone12
      @media (max-width: 400px) {
        width: 350px !important;
      }

      //Iphone
      @media (max-width: 430px) {
        width: 400px;
      }

      //Smartphone
      @media (max-width: 800px) {
        width: 350px !important;
      }

      h1 {
        font-weight: bold;
      }
      @media (max-width: 430px) {
        font-size: 19px;
      }

      h2 {
        font-weight: bold;

        //Iphone
        @media (max-width: 430px) {
          font-size: 19px;
        }
      }

      p {
        margin-top: 15px;
      }
    }

    .container-image {
      display: flex;
      flex-direction: row;
      margin-left: 50px;
      margin-right: 50px;

      //Smartphone
      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
      }

      div {
        display: flex;
        flex-direction: column;
      }
    }

    .fishOne {
      width: 400px;
      margin-right: 15px;
      border-radius: 12px;

      //Smartphone
      @media (max-width: 800px) {
        display: none;
      }

      @media (max-width: 430px) {
        display: none;
      }
    }

    .fishTwo {
      width: 400px;
      border-radius: 12px;
    }

    .fishThree {
      width: 400px;
      margin-top: 20px;
      border-radius: 12px;
    }

    //Responsivennes Ipad
    @media (max-width: 900px) {
      img {
        width: 350px !important;
      }
    }
  }
`;

export const ContainerAccessories = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //Responsiveness IPad
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  //Responsiveness Iphone
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  div {
    width: 390px;
    height: 400px;

    margin: 30px;
    border-radius: 10px;
    text-align: center;

    background-color: #ccc;
    grid-template-columns: repeat(2, 1fr);

    //Responsiveness IPad
    @media (max-width: 900px) {
      width: 350px;
      height: 300px;
    }

    //Iphone
    @media (max-width: 800px) {
      width: 290px;
      height: 320px;
      margin: 0 auto;
    }
  }

  h3 {
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    margin: 0 auto;
    width: 80%;
  }

  img {
    width: 80px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 50px;

    //Responsiveness IPad
    @media (max-width: 900px) {
      width: 60px;
      margin-top: 5px;
    }
  }
`;

export const ContainerFooter = styled.div`
  background-color: #031d42;
  padding: 50px 0;

  hr {
    color: #fff;
  }

  p {
    color: #fff;
  }

  .container-footer {
    max-width: 1400px;
    padding: 40px;
    margin: auto;
  }
  .row-footer {
    display: flex;
    flex-wrap: wrap;
  }

  .footer-col {
    width: 25%;
    padding: 0 15px;
  }
  .footer-col h4 {
    font-size: 22px;
    color: #8cc142;
    margin-bottom: 20px;
    font-weight: bold;
    position: relative;
    text-transform: uppercase;
  }
  .footer-col ul {
    list-style: none;
  }
  .footer-col ul li {
    margin: 10px 0;
  }
  .footer-col ul li a {
    width: 50%;
    font-size: 16px;
    text-transform: capitalize;
    color: white;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover {
    color: #cecdcd;
    padding-left: 10px;
  }
  .footer-col .medias-socias {
    margin-top: 30px;
  }
  .footer-col .medias-socias a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin: 0 10px 10px 0;
    text-decoration: none;
    border-radius: 50%;
    color: white;
    border: 1px solid white;
    transition: all 0.5s ease;
  }
  .footer-col .medias-socias a i {
    font-size: 20px;
  }

  .footer-col .medias-socias a:hover {
    color: #415aca;
    background-color: white;
  }
  .footer-col .form-sub input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 1px solid white;
    color: white;
    background-color: #415aca;
  }
  .footer-col .form-sub input::placeholder {
    color: white;
  }
  .footer-col .form-sub button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    font-size: 17px;
    outline: none;
    border: none;
    cursor: pointer;
    color: #415aca;
    border-radius: 3px;
    font-weight: bold;
    background-color: white;
  }
  /* Responsivo */
  @media (max-width: 800px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 600px) {
    .footer-col {
      width: 100%;
    }
  }
`;
