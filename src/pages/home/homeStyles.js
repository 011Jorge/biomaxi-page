import styled from "styled-components";
import background from "../../images/itens/background.jpg";

export const ContainerHome = styled.div`
  color: #000000;

  background-color: #dcdcdc;

  .border {
  }

  .first-section {
    display: flex;
    justify-content: flex-start;
    margin: 50px 0 0 50px;
  }

  .second-section {
    display: flex;
    justify-content: flex-end;
    margin: 20px 50px 0 50px;
  }

  .third-section {
    display: flex;
    justify-content: flex-start;
    margin: 50px 0 0 50px;
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
    font-size: 20px;
    width: 90%;
  }
`;

export const Section = styled.div`
  .container-info {
    width: 85%;

    padding: 40px;

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    border-radius: 10px;
    background-color: transparent;

    .container-text {
      font-size: 19px;
      margin-right: 35px;
      margin-left: 35px;

      padding: 30px;
      background-color: #cccc;
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
      margin-top: 30px;
      border-radius: 12px;
    }

    .fishThree {
      width: 330px;
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
  height: 500px;
  margin-top: 100px;
  background-color: #032650;
`;
