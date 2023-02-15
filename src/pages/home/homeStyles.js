import styled from "styled-components";
import background from "../../images/itens/background.jpg";
import backAbout from "../../images/itens/backAbout.jpg";

import Regua from "../../images/itens/banners/regua.png";
import Rodape from "../../images/itens/banners/rodape.png";

export const ContainerHome = styled.div`
  color: #000000;

  background-color: #050d23;

  .first-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 0 50px;
    border-radius: 20px 0 0 20px;

    @media (max-width: 430px) {
      margin: 0;
      text-align: left;
    }
  }

  .second-section {
    display: flex;
    justify-content: center;
    margin: 50px 50px 0 0;
    border-radius: 0 12px 12px 0;

    @media (max-width: 430px) {
      margin: 0;
      text-align: left;
    }

    .container-info {
      //Responsiveness
      @media (max-width: 1300px) {
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

    @media (max-width: 430px) {
      margin: 0;
      text-align: left;
    }

    .container-text {
      background-color: #3a6332 !important;
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
    @media (max-width: 430px) {
      padding-top: 20px;
      margin: 0 auto;
    }

    //Responsiveness
    @media (max-width: 1300px) {
      width: 100%;
      height: 400px;
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

    @media (max-width: 430px) {
      margin-top: 800px;
    }
  }
`;

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  //Responsiveness Ipad
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  //Iphone12
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ContainerNav = styled.div`
  width: 100%;
  height: auto;

  margin-left: 100px;
  margin-right: 100px;
  padding-top: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  //Iphone12
  @media (max-width: 400px) {
    margin-top: 50px;
    margin-left: 100px;
  }

  //Responsiveness Ipad
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-top: 250px;
  }

  //Iphone
  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }

  //IPhone12
  @media (max-width: 400px) {
    display: flex;
    flex-wrap: wrap;
  }

  img {
    width: 150px;

    //Iphone
    @media (max-width: 430px) {
      width: 100px;
    }
  }

  .nav {
    margin-top: 40px;
    display: flex;
    flex-direction: row;

    //Iphone12
    @media (max-width: 400px) {
      margin-left: 5px !important;
    }

    //IphoneMax
    @media (max-width: 430px) {
      margin-left: 45px;
    }
  }

  .nav a {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px 45px;

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

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #89c43a;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
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
  @media (max-width: 430px) {
    height: 100vh;
  }

  div {
    margin-top: 20em;
    margin-left: 100px;

    //Iphone
    @media (max-width: 430px) {
      margin-left: 10%;
      text-align: center;
    }

    //Responsiveness
    @media (max-width: 1300px) {
      width: 80%;
    }

    img {
      //Iphone
      @media (max-width: 430px) {
        width: 200px;
      }
    }
  }

  h1 {
    font-weight: bold;
    margin-top: 10px;
    font-size: 80px;
    color: #fff;

    //Iphone
    @media (max-width: 430px) {
      font-size: 30px;
    }
  }

  h3 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: lighter;
    color: #fff;

    //Iphone
    @media (max-width: 430px) {
      font-size: 20px;
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
  @media (max-width: 900px) {
    display: none;
  }

  img {
    margin: 30px;
    width: 150px;
  }
`;

export const ContainerAbout = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;

  background-image: url(${backAbout});
  background-size: cover;

  color: #fff;

  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;

  padding: 50px 50px 50px 100px;

  //Responsiveness
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }

  .text {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    //Responsiveness
    @media (max-width: 1300px) {
    }

    //Iphone
    @media (max-width: 430px) {
      background: none;
    }
  }

  h1 {
    padding-top: 25px;
    margin-top: 10px;
    font-size: 60px;
    font-weight: bold;

    //Iphone
    @media (max-width: 430px) {
      font-size: 22px;
    }

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

    //Iphone
    @media (max-width: 430px) {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 17px;
      width: 100%;
    }
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
    @media (max-width: 1300px) {
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

      //Iphone12
      @media (max-width: 400px) {
        width: 350px !important;
      }

      //Iphone
      @media (max-width: 430px) {
        width: 400px;
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

      @media (max-width: 430px) {
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
  @media (max-width: 430px) {
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
    @media (max-width: 430px) {
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
