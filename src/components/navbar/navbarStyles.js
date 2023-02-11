import styled from "styled-components";

export const Container = styled.div`
  .border {
    border: 1px solid red;
  }

  width: 100vw;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;

  background-color: #00225b;
`;

export const ContainerNav = styled.div`
  width: 90vw;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

    font-size: 19px;

    position: relative;
    text-decoration: none;

    color: #fff;

    .icon {
      margin-bottom: 5px;
    }
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
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
