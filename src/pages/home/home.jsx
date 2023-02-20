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

import Slide from "../../components/slide/slide";

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
