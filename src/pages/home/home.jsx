import React from "react";

import { GiSeatedMouse } from "react-icons/gi/index";
import { CgProfile } from "react-icons/cg/index";
import { AiOutlineLink } from "react-icons/ai/index";
import {
  FaFish,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaShoppingCart,
} from "react-icons/fa/index";

import Slide from "../../components/slide/slide";
import Carousel from "../../components/carousel/carousel";

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
import IconInstagram from "../../images/itens/icon-instagram.png";
import IconFacebook from "../../images/itens/icon-facebook.png";
import IconSite from "../../images/itens/icon-cart.png";

import {
  ContainerHeader,
  ContainerAccessories,
  ContainerAbout,
  ContainerHome,
  ContainerFooter,
  Section,
  ContainerMarks,
  Insta,
  ContainerNav,
  ContainerNavbar,
} from "./homeStyles";

function Home() {
  return (
    <ContainerHome>
      <ContainerNavbar>
        <ContainerNav>
          <img
            src="https://images.tcdn.com.br/img/img_prod/1029189/1625102638_ativo_1.png"
            alt="image-logo"
          />
          <div className="nav">
            <a href="#About">
              <CgProfile className="icon" />
              Sobre nós
            </a>
            <a href="#Fish">
              <FaFish className="icon" />
              Peixes
            </a>
            <a href="#Rodents">
              <GiSeatedMouse className="icon" />
              Roedores
            </a>
            <a href="#Contacts">
              <FaPhoneAlt className="icon" />
              Contatos
            </a>
          </div>
        </ContainerNav>
      </ContainerNavbar>
      <ContainerHeader id="Start">
        <div>
          <img
            src="https://images.tcdn.com.br/img/img_prod/1029189/1625102638_ativo_1.png"
            alt="logo-image"
          />
          <h1>
            + de 200 Espécies <br /> Disponíveis na Loja
          </h1>
          <h3>Soluções completas para aquários & lagos.</h3>
        </div>
      </ContainerHeader>
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
        <div>
          <h1>
            <span className="span1">Sobre </span>
            <span className="span2">Nós</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            quaerat recusandae veritatis, ut, explicabo quidem obcaecati
            similique aliquam sit hic ea quae, dicta harum at animi nobis maxime
            ratione. Ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Repellendus accusantium sint, non sed quasi nemo veniam
            sapiente ea, aperiam quas velit, repellat eius perferendis ipsa iste
            debitis? Rem, repellendus illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Totam quis perspiciatis commodi esse
            sequi at soluta hic sed, odio, dolorem consectetur vel reiciendis
            in, harum atque molestias fuga laboriosam quasi! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veniam corrupti nihil porro
            ea esse? Saepe asperiores eum tempore iure voluptate. Dicta nisi
            adipisci quidem dolorum, cum possimus delectus accusamus incidunt.
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
          <div className="container-text ">
            <h1>Peixes de Água Salgada</h1>
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
          <div className="container-image ">
            <img src={SaltFishOne} className="fishOne" alt="fish-img" />
            <div>
              <img src={SaltFishTwo} className="fishTwo" alt="fish-img" />
              <img src={SaltFishThree} className="fishThree" alt="fish-img" />
            </div>
          </div>
        </div>
      </Section>
      <Section className="second-section">
        <div className="container-info ">
          <div className="container-image ">
            <img src={FreshFishOne} className="fishOne" alt="fish-img" />
            <div>
              <img src={FreshFishTwo} className="fishTwo" alt="fish-img" />
              <img src={FreshFishThree} className="fishThree" alt="fish-img" />
            </div>
          </div>
          <div className="container-text ">
            <h1>Peixes de Água Doce</h1>
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
          <div className="container-text">
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
            <img src={RodentsOne} className="fishOne" alt="fish-img" />
            <div>
              <img src={RodentsTwo} className="fishTwo" alt="fish-img" />
              <img src={RodentsThree} className="fishThree" alt="fish-img" />
            </div>
          </div>
        </div>
      </Section>
      <Carousel />
      <ContainerAccessories>
        <div>
          <img src={IconFood} alt="icon-food" />
          <h3>Rações</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quia! Atque repudiandae recusandae quidem cum laboriosam iure
            obcaecati ipsa officiis nam, nesciunt dolorem molestias error libero
            autem totam illum ratione.
          </p>
        </div>
        <div>
          <img src={IconPlant} alt="icon-plant" />
          <h3>Plantas Aquáticas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quia! Atque repudiandae recusandae quidem cum laboriosam iure
            obcaecati ipsa officiis nam, nesciunt dolorem molestias error libero
            autem totam illum ratione.
          </p>
        </div>
        <div>
          <img src={IconDecoration} alt="icon-decoration" />
          <h3>Decorações</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quia! Atque repudiandae recusandae quidem cum laboriosam iure
            obcaecati ipsa officiis nam, nesciunt dolorem molestias error libero
            autem totam illum ratione.
          </p>
        </div>
        <div>
          <img src={IconEquipment} alt="icon-equipment" />
          <h3>Equipamentos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quia! Atque repudiandae recusandae quidem cum laboriosam iure
            obcaecati ipsa officiis nam, nesciunt dolorem molestias error libero
            autem totam illum ratione.
          </p>
        </div>
      </ContainerAccessories>
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
      <ContainerFooter id="Contacts">
        <div class="container-footer">
          <div class="row-footer">
            <div class="footer-col">
              <img
                src="https://images.tcdn.com.br/img/img_prod/1029189/1625102638_ativo_1.png"
                alt="img-logo"
                style={{ width: 200 }}
              />
              <div class="medias-socias">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <AiOutlineLink />
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
                  <p>01191333-0330</p>
                </li>
                <li>
                  <p>Av. Presidente Washington Luís, 387</p>
                </li>
                <li>
                  <p>Campo Limpo Paulista</p>
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
