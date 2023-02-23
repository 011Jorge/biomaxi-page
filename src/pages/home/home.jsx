import React, { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { GiSeatedMouse, GiEgyptianBird } from "react-icons/gi/index";
import { CgProfile } from "react-icons/cg/index";
import {
  FaFish,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaLink,
  FaYoutube,
  FaFrog,
} from "react-icons/fa/index";

import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
  CNavLink,
} from "@coreui/react";

import Slide from "../../components/slide/slide.jsx";

import SaltFishOne from "../../images/saltwater/saltwater-fish-one.jpg";
import SaltFishTwo from "../../images/saltwater/saltwater-fish-two.jpg";
import SaltFishThree from "../../images/saltwater/saltwater-fish-three.jpg";

import FreshFishOne from "../../images/freshwater/freshwater-fish-one.jpg";
import FreshFishTwo from "../../images/freshwater/freshwater-fish-two.jpg";
import FreshFishThree from "../../images/freshwater/freshwater-fish-three.jpg";

import RodentsOne from "../../images/rodents/rodents01.png";
import RodentsTwo from "../../images/rodents/rodents02.jpg";
import RodentsThree from "../../images/rodents/rodents03.jpg";

import Birds01 from "../../images/birds/birds01.jpg";
import Birds02 from "../../images/birds/birds02.jpg";
import Birds03 from "../../images/birds/birds03.jpg";

import Amphibian01 from "../../images/amphibian/amphibian01.jpg";
import Amphibian02 from "../../images/amphibian/amphibian02.jpg";
import Amphibian03 from "../../images/amphibian/amphibian03.jpg";

import Hopar from "../../images/itens/marks/hopar.png";
import Maxxi from "../../images/itens/marks/maxxi.jpg";

import IconFood from "../../images/itens/icon-food.png";
import IconPlant from "../../images/itens/icon-plant.png";
import IconDecoration from "../../images/itens/icon-decoration.png";
import IconEquipment from "../../images/itens/icon-equipment.png";
import IconWhats from "../../images/itens/icon-whats.png";

import Logo from "../../images/itens/logo.png";

import {
  ContainerHeader,
  ContainerAccessories,
  ContainerAbout,
  ContainerHome,
  ContainerFooter,
  Section,
  ContainerMarks,
} from "./homeStyles.js";

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
        <CContainer fluid>
          <img src={Logo} style={{ width: 150 }} alt="logo-img" />
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="navbar-nav-toglle" component="nav">
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
              <CNavLink className="a" href="#Anfibios">
                <FaFrog />
                Anfíbios
              </CNavLink>
              <CNavLink className="a" href="#Anfibios">
                <GiEgyptianBird />
                Aves
              </CNavLink>
              <CNavLink className="a" href="#Contacts">
                <FaPhoneAlt />
                Contatos
              </CNavLink>
              <CNavLink
                className="a"
                href="https://wa.me/5511913330330?text=Ol%C3%A1,%20voc%C3%AA%20poderia%20me%20falar%20mais%20sobre%20seus%20servi%C3%A7os?"
                target="_blank"
              >
                <img
                  src={IconWhats}
                  style={{ width: 40 }}
                  alt="icon-whatsapp"
                />
              </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <ContainerHeader id="Start">
        <div>
          <img src={Logo} alt="logo-image" />
          <h1>
            + de 500 Espécies <br /> Disponíveis na Loja
          </h1>
          <h3>Soluções completas para aquários & lagos.</h3>
        </div>
      </ContainerHeader>
      <div className="regua"></div>
      <Slide />
      <ContainerMarks>
        <img
          src="https://superiorpets.net/wp-content/uploads/2015/11/SunSunlogo.png"
          alt="logo-alcon"
        />
        <img src={Hopar} alt="logo-hopar" />
        <img src={Maxxi} alt="logo-hopar" />
        <img
          src="data:image/png;base64,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"
          alt="logo-hopar"
        />
        <img
          src="https://www.interago.com.br/App/Sites/5/mc/Logo%20e%20Favicon/Logo%20Poytara%20com%20Cor.png"
          alt="logo-poytara"
        />
        <img
          src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/54/303273254/logo-2020061016154071000.png"
          alt="logo-nutricon"
        />
        <img src="https://www.seachem.com/img/logo@2x.png" alt="logo-seachen" />
        <img
          src="https://sadalcon.alcon.ind.br/common/img/logo.png"
          alt="logo-alcon"
        />
      </ContainerMarks>
      <ContainerAbout id="About" className="container-about">
        <div className="text">
          <h1>
            <span className="span1">Sobre </span>
            <span className="span2">Nós</span>
          </h1>
          <p>
            Inaugurada em 06 de Agosto de 2021 na cidade de Campo Limpo Paulista
            a Biomaxi Ecossistemas nasceu do nosso amor pelos animais e o bem
            que eles nos trazem! Somos uma empresa especializada em trazer
            soluções completas em aquarismo. Desde alevinos até peixes jumbos,
            de água doce e marinha você encontra aqui! Temos também uma área com
            roedores que vão te encantar e aves que ganham o nosso coração.
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
            <h1>Peixes Marinhos & Corais</h1>
            <h2>+ de 200 espécies</h2>
            <p>
              Aqui você encontra em um só lugar tudo o que você precisa para
              montagem e manutenção de seu aquário marinho, pequeno ou grande
              porte, temos ótimas opções de acordo com sua necessidade. Ótimas
              marcas importadas e nacionais. E se você procura por aquele peixe
              ou coral em especial também fazemos pedido sob encomenda.
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
            <h2>+ de 300 espécies</h2>
            <p>
              Seja para preencher aquele cantinho especial ou aquele projeto
              personalizado aqui você encontra soluções perfeitas. Sua fauna
              nunca vai cair na mesmice, aqui você encontra uma variedade de
              espécies e em diversos tamanhos. Produtos para tratamento e
              alimentos, tanto vivo como rações super premium, já sabe aqui na
              Biomaxi você acha.
            </p>
          </div>
        </div>
      </Section>
      <Section id="Anfibios" className="third-section">
        <div className="container-info">
          <div
            className="container-text"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>Anfíbios & Répteis</h1>
            <p>
              Se você está a procura de pet aquático nada convencional aqui você
              encontra: <br /> • rã xenopus <br /> • axolote <br /> • tartaruga
              tigre d' água <br /> • mudskipper
            </p>
          </div>
          <div className="container-image">
            <img
              src={Amphibian01}
              className="fishOne"
              alt="fish-img"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div>
              <img
                src={Amphibian02}
                className="fishTwo"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <img
                src={Amphibian03}
                className="fishThree"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section id="Rodents" className="four-section">
        <div className="container-info">
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
          <div
            className="container-text"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>Roedores</h1>
            <p>
              Saia do óbvio! Aqui temos:
              <br /> • Chinchila <br /> • Hamster
            </p>
          </div>
        </div>
      </Section>
      <Section id="Aves" className="five-section">
        <div className="container-info">
          <div className="container-text" data-aos="fade-up">
            <h1>Aves</h1>
            <p>
              • Ring Neck <br /> • Calopsita <br /> • Agapórnis
            </p>
          </div>

          <div className="container-image">
            <img
              src={Birds01}
              className="fishOne"
              alt="fish-img"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div>
              <img
                src={Birds02}
                className="fishTwo"
                alt="fish-img"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <img
                src={Birds03}
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
            Ampla variedade de tipos, tamanhos e marcas de rações. Lançamentos e
            o que há de melhor no mercado, Temos também alimento vivo e em
            conserva para enriquecer a alimentação dos seus animais.
          </p>
        </div>
        <div data-aos="flip-down" data-aos-delay="200">
          <img src={IconPlant} alt="icon-plant" />
          <h3>Plantas Aquáticas</h3>
          <p>
            Enorme variedade de plantas aquáticas, desde low tech até as high
            tech, para deixar o seu aquário ainda mais natural e equilibrado.
          </p>
        </div>
        <div data-aos="flip-down" data-aos-delay="300">
          <img src={IconDecoration} alt="icon-decoration" />
          <h3>Decorações</h3>
          <p>
            Desde um enfeite delicado até uma decoração de presença você
            encontra aqui. Substratos, rochas, pedras, troncos, plantas
            artificiais, enfeites de resina para todos os gostos.
          </p>
        </div>
        <div data-aos="flip-down" data-aos-delay="400">
          <img src={IconEquipment} alt="icon-equipment" />
          <h3>Equipamentos</h3>
          <p>
            Equipamentos e soluções modernas para aquários marinhos, água doce e
            lagos das melhores marcas. Também temos peças de reposição e
            manutenção.
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
                <a href="https://biomaxilink.netlify.app" target="_blank">
                  <FaLink />
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
1;
