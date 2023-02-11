import React from "react";

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
          <a href="#">Sobre nós</a>
          <a href="#">Peixes</a>
          <a href="#">Roedores</a>
          <a href="#">Contatos</a>
        </div>
      </ContainerNav>
    </Container>
  );
}

export default Nav;
