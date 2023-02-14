import styled from "styled-components";
import background from "../../images/itens/background.jpg";

export const ContainerHome = styled.div`
  color: #000000;

  background-color: #dcdcdc;

  .first-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 0 50px;
    background-color: #ccc;
    border-radius: 12px 0 0 12px;
  }

  .second-section {
    display: flex;
    justify-content: center;
    margin: 50px 50px 0 0;
    background-color: #ccc;
    border-radius: 0 12px 12px 0;
  }

  .third-section {
    display: flex;
    justify-content: center;
    margin: 50px 0 0 50px;
    background-color: #ccc;
    border-radius: 12px 0 0 12px;
  }

  .container-export {
    display: flex;
    flex-direction: column;
  }

  .container-video {
    width: 900px;
    height: 500px;
    margin: 50px;
    border-radius: 8px;
  }
`;

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 0;

  display: flex;
  align-items: center;
  justify-content: center;
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

  img {
    width: 200px;
  }

  .nav {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
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

export const About = styled.div`
  width: 100%;
  height: 110vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-image: url(${background});
  background-repeat: no-repeat;

  div {
    margin-top: 20em;
    margin-left: 100px;
  }

  h1 {
    font-weight: bold;
    margin-top: 10px;
    font-size: 80px;
    color: #fff;
  }

  h3 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: lighter;
    color: #fff;
  }
`;

export const Marks = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  img {
    margin: 30px;
    width: 150px;
  }
`;

export const Article = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;

  background-color: #031d42;

  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 50px 50px 50px 100px;

  h1 {
    margin-top: 10px;
    font-size: 60px;
    font-weight: bold;

    .span1 {
      color: #8bc242;
    }

    .span2 {
      color: #237bb8;
    }
  }

  p {
    font-weight: 500;
    font-size: 20px;
    width: 90%;
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

    .container-text {
      font-size: 19px;
      margin-right: 35px;
      margin-left: 35px;

      padding: 40px;
      background-color: #dcdcdc;
      border-radius: 10px;

      h1 {
        font-weight: bold;
      }

      p {
        margin-top: 10px;
      }
    }

    .container-image {
      display: flex;
      flex-direction: row;
      margin-left: 50px;
      margin-right: 50px;

      div {
        display: flex;
        flex-direction: column;
      }
    }

    .fishOne {
      width: 400px;
      margin-right: 15px;
      border-radius: 12px;
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
  }
`;

export const Insta = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #031d42;

  p {
    width: 25%;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
`;

export const Accessories = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    width: 390px;
    height: 400px;

    margin: 30px;
    border-radius: 10px;
    text-align: center;

    background-color: #ccc;

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
    }
  }
`;

export const Footer = styled.div`
  background-color: #031d42;
  padding: 50px 0;
  .container-footer {
    max-width: 1400px;
    padding: 0 4%;
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
    color: white;
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
