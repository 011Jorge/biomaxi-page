import React, { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { GiSeatedMouse } from "react-icons/gi/index";
import { CgProfile } from "react-icons/cg/index";
import {
  FaFish,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaShoppingCart,
  FaYoutube,
} from "react-icons/fa/index";

import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
  CNavLink,
} from "@coreui/react";

import Slide from "../../components/slide/slide";

import SaltFishOne from "../../images/saltwater/saltwater-fish-one.jpg";
import SaltFishTwo from "../../images/saltwater/saltwater-fish-two.jpg";
import SaltFishThree from "../../images/saltwater/saltwater-fish-three.jpg";

import FreshFishOne from "../../images/freshwater/freshwater-fish-one.jpg";
import FreshFishTwo from "../../images/freshwater/freshwater-fish-two.jpg";
import FreshFishThree from "../../images/freshwater/freshwater-fish-three.jpg";

import RodentsOne from "../../images/rodents/rodents-one.jpg";
import RodentsTwo from "../../images/rodents/rodents-two.jpg";
import RodentsThree from "../../images/rodents/rodents-three.jpg";

import IconFood from "../../images/itens/icon-food.png";
import IconPlant from "../../images/itens/icon-plant.png";
import IconDecoration from "../../images/itens/icon-decoration.png";
import IconEquipment from "../../images/itens/icon-equipment.png";

import Logo from "../../images/itens/logo.png";

import {
  ContainerHeader,
  ContainerAccessories,
  ContainerAbout,
  ContainerHome,
  ContainerFooter,
  Section,
  ContainerMarks,
} from "./homeStyles";

function Home() {
  const [visible, setVisible] = useState(false);

  AOS.init({
    duration: 1000,
  });

  return (
    <ContainerHome>
      <CNavbar
        expand="lg"
        placement="fixed-top"
        style={{ backgroundColor: "#031d42" }}
      >
        <CContainer
          fluid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            style={{ width: 150, marginLeft: 100 }}
            alt="logo-img"
          />
          {/* <CNavbarBrand href="#">Navbar</CNavbarBrand> */}
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav style={{ marginLeft: "60%" }} component="nav">
              <CNavLink className="a" href="#About">
                <CgProfile /> Sobre nós
              </CNavLink>
              <CNavLink className="a" href="#Fish">
                <FaFish />
                Peixes
              </CNavLink>
              <CNavLink className="a" href="#Rodents">
                <GiSeatedMouse />
                Roedores
              </CNavLink>
              <CNavLink className="a" href="#Contacts">
                <FaPhoneAlt />
                Contatos
              </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <ContainerHeader id="Start">
        <div>
          <img src={Logo} alt="logo-image" />
          <h1>
            + de 200 Espécies <br /> Disponíveis na Loja
          </h1>
          <h3>Soluções completas para aquários & lagos.</h3>
        </div>
      </ContainerHeader>
      <div className="regua"></div>
      <Slide />
      <ContainerMarks>
        <img
          src="https://sadalcon.alcon.ind.br/common/img/logo.png"
          alt="logo-alcon"
        />
        <img
          src="https://www.interago.com.br/App/Sites/5/mc/Logo%20e%20Favicon/Logo%20Poytara%20com%20Cor.png"
          alt="logo-poytara"
        />
        <img
          src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/54/303273254/logo-2020061016154071000.png"
          alt="logo-nutricon"
        />
        <img
          src="http://www.labcon.com.br/en/common/img/logo.png"
          alt="logo-labcon"
        />
        <img src="https://www.seachem.com/img/logo@2x.png" alt="logo-seachen" />
        <img
          src="http://www.tropicalimport.com.br/wp-content/uploads/2017/01/logo-tropical.png"
          alt="logo-tropical"
        />
      </ContainerMarks>
      <ContainerAbout id="About" className="container-about">
        <div className="text">
          <h1>
            <span className="span1">Sobre </span>
            <span className="span2">Nós</span>
          </h1>
          <p>
            Inaugurada no dia 06 de Agosto de 2021 na cidade de Campo Limpo
            Paulista a Biomaxi Ecossistemas é uma empresa especializada em
            aquarismo em geral e muitas variedades de peixes jumbo. Tudo que
            você precisa para o hobby do aquarismo você encontra aqui. Também
            venha conhecer e interagir na nossa área pet com roedores e coelhos.
          </p>
        </div>
        <div className="container-export">
          <iframe
            className="container-video"
            src="https://www.youtube.com/embed/O5cEAKU7Sno"
            title="YouTube video player"
            frame="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </ContainerAbout>
      <Section id="Fish" className="first-section">
        <div className="container-info ">
          <div className="container-text " data-aos="fade-down">
            <h1>Peixes de Água Salgada</h1>
            <h2>+ de 100 espécies</h2>
            <p>
              Temos tudo para a montagem e manutenção do seu aquário marinho,
              desde peixes como os peixes palhaços, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ab minima ullam nostrum ea tempora
              consequatur, voluptate nobis, quis atque odit explicabo nesciunt
              animi porro amet. Totam, labore sed? Adipisci, atque?
            </p>
          </div>
          <div className="container-image">
            <img
              src={SaltFishOne}
              className="fishOne"
              alt="fish-img"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div>
              <img
                src={SaltFishTwo}
                className="fishTwo"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <img
                src={SaltFishThree}
                className="fishThree"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section className="second-section">
        <div className="container-info ">
          <div className="container-image ">
            <img
              src={FreshFishOne}
              className="fishOne"
              alt="fish-img"
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <div>
              <img
                src={FreshFishTwo}
                className="fishTwo"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <img
                src={FreshFishThree}
                className="fishThree"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
          </div>
          <div className="container-text " data-aos="fade-down">
            <h1>Peixes de Água Doce</h1>
            <h2>+ de 100 espécies</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis pariatur reiciendis, omnis est possimus, temporibus
              voluptatem iusto quis officia dicta veritatis, accusantium fugiat
              nesciunt asperiores alias ab molestias unde. Eum. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Aperiam maxime
              voluptas, laboriosam quasi amet alias minima magni odit veniam
              deserunt unde ut ipsum eligendi vero et, illum aspernatur
              accusamus nihil.
            </p>
          </div>
        </div>
      </Section>
      <Section id="Rodents" className="third-section">
        <div className="container-info">
          <div className="container-text" data-aos="fade-up">
            <h1>Roedores</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis pariatur reiciendis, omnis est possimus, temporibus
              voluptatem iusto quis officia dicta veritatis, accusantium fugiat
              nesciunt asperiores alias ab molestias unde. Eum. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Aperiam maxime
              voluptas, laboriosam quasi amet alias minima magni odit veniam
              deserunt unde ut ipsum eligendi vero et, illum aspernatur
              accusamus nihil.
            </p>
          </div>
          <div className="container-image">
            <img
              src={RodentsOne}
              className="fishOne"
              alt="fish-img"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div>
              <img
                src={RodentsTwo}
                className="fishTwo"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <img
                src={RodentsThree}
                className="fishThree"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </Section>
      <div className="regua"></div>
      <ContainerAccessories>
        <div data-aos="flip-down" data-aos-delay="100">
          <img src={IconFood} alt="icon-food" />
          <h3>Rações</h3>
          <p>
            As melhores marcas estão na Biomaxi, temos variedade de rações, do
            tipo floco e granulada, até rações para carnívoros e peixes de
            fundo. <br /> Temos também <b>alimento vivo</b> para complementar a
            alimentação dos seus animais.
          </p>
        </div>
        <div data-aos="flip-down" data-aos-delay="200">
          <img src={IconPlant} alt="icon-plant" />
          <h3>Plantas Aquáticas</h3>
          <p>
            Se você curte um aquário plantado, você está no lugar certo! aqui na
            Biomaxi temos uma enorme variedade de plantas aquáticas, desde low
            tech até as high tech, para deixar o seu aquário ainda mais natural.
          </p>
        </div>
        <div data-aos="flip-down" data-aos-delay="300">
          <img src={IconDecoration} alt="icon-decoration" />
          <h3>Decorações</h3>
          <p>
            Aqui você encontra todo tipo de decoração para deixar seu aquário
            com a sua cara! <br />
            substratos, rochas, pedras, troncos, plantas artifícias, navios,
            tocas e vasta variedade de objetos decoradores.
          </p>
        </div>
        <div data-aos="flip-down" data-aos-delay="400">
          <img src={IconEquipment} alt="icon-equipment" />
          <h3>Equipamentos</h3>
          <p>
            Temos todos os tipos de equipamento e soluções para aquários
            marinhos e água doce, desde filtros, luminárias, termômetros até
            alimentadores automáticos. Temos testes de ph, nitrito, amônia e
            anticloro e muito mais!
          </p>
        </div>
      </ContainerAccessories>
      <div className="rodape"></div>
      <ContainerFooter id="Contacts">
        <div class="container-footer">
          <div class="row-footer">
            <div class="footer-col">
              <img src={Logo} alt="img-logo" style={{ width: 200 }} />
              <div class="medias-socias">
                <a
                  href="https://www.instagram.com/biomaxi.ecossistema/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/biomaxi.ecossistema"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a href="https://www.youtube.com/@biomaxi5420" target="_blank">
                  <FaYoutube />
                </a>
                <a href="https://www.biomaxi.com.br/" target="_blank">
                  <FaShoppingCart />
                </a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Navegação</h4>
              <ul>
                <li>
                  <a href="#Start">Home</a>
                </li>
                <li>
                  <a href="#About">Sobre nós</a>
                </li>
                <li>
                  <a href="#Fish">Peixes</a>
                </li>
                <li>
                  <a href="#Rodents">Roedores</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Informações</h4>
              <ul>
                <li>
                  <a
                    href="https://wa.me/5511913330330?text=Ol%C3%A1,%20voc%C3%AA%20poderia%20me%20falar%20mais%20sobre%20seus%20servi%C3%A7os?"
                    target="_blank"
                  >
                    01191333-0330
                  </a>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/DqZGJthapAzuJqxR9"
                    target="_blank"
                  >
                    Av. Presidente Washington Luís, 387 - Campo Limpo Paulista,
                    SP
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Horário de Funcionamento</h4>
              <ul>
                <li>
                  <p>Seg á Quin - 09:30 - 18:30</p>
                </li>
                <li>
                  <p>Sexta - Fechado</p>
                </li>
                <li>
                  <p>Sábado - 09:00 - 15:00</p>
                </li>
                <li>
                  <p>Domingo - Fechado</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p style={{ textAlign: "center" }}>
          Todos os direitos reservados a <b>Biomaxi Ecossistemas</b> <br />
          @2023
        </p>
      </ContainerFooter>
    </ContainerHome>
  );
}

export default Home;
