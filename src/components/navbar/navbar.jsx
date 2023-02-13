import React from "react";

import { GiSeatedMouse } from "react-icons/gi/index";
import { CgProfile } from "react-icons/cg/index";
import { FaFish, FaPhoneAlt } from "react-icons/fa/index";

import { Container, ContainerNav } from "./navbarStyles";

function Nav() {
  return (
    <Container>
      <ContainerNav>
        <img
          src="https://images.tcdn.com.br/img/img_prod/1029189/1625102638_ativo_1.png"
          alt="image-logo"
        />
        <div className="nav">
          <a href="#">
            <CgProfile className="icon" />
            Sobre nós
          </a>
          <a href="#">
            <FaFish className="icon" />
            Peixes
          </a>
          <a href="#">
            <GiSeatedMouse className="icon" />
            Roedores
          </a>
          <a href="#">
            <FaPhoneAlt className="icon" />
            Contatos
          </a>
        </div>
      </ContainerNav>
    </Container>
  );
}

export default Nav;
