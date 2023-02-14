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
    background-color: #ccc;
  }

  .container-video {
    width: 900px;
    height: 500px;
    margin: 50px;
    border-radius: 8px;
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

  background-color: #ccc;
  color: black;

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
    font-size: 22px;
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
  width: 100%;
  height: auto;
  margin-top: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #031d42;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 200px;
  }

  h3 {
    color: #8cc23f;
    font-weight: bold;
  }

  .social {
    margin: 20px;
    a {
      margin: 10px;
    }
    img {
      width: 30px;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;

    p {
      color: #fff;
      width: 300px;
      padding: 5px;
      margin-top: 8px;
    }
  }

  .box-footer {
    text-align: center;
    padding: 10px;
    margin: 5px 50px;
  }

  .container-navigation {
    width: 400px;
    text-align: left;
    a {
      color: #fff;
      font-size: 17px;

      &:hover {
        opacity: 0.7;
      }
      &:active {
        opacity: 0.2;
      }
    }
  }

  .container-contacts {
    width: 400px;
  }

  .container-hrs {
    width: 400px;
    text-align: right;
  }

  .container-final {
    text-align: center;
    color: #fff;
    font-size: 17px;
  }
`;
