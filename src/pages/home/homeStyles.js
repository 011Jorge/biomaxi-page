import styled from "styled-components";
import background from "../../images/itens/background.jpg";

export const ContainerHome = styled.div`
  .border {
    border: 1px solid red;
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

export const Section = styled.div`
  .container-info {
    width: 80%;

    padding: 40px;

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    border-radius: 10px;
    background-color: #dcdcdc;

    .container-text {
      font-size: 19px;
      margin-right: 35px;
      margin-left: 35px;

      padding: 30px;
      background-color: #cccc;
      border-radius: 10px;

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
