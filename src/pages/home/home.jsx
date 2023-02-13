import React from "react";

import Nav from "../../components/navbar/navbar";
import Carousel from "../../components/carousel/carousel";

import SaltFishOne from "../../images/saltwater/saltwater-fish-one.jpg";
import SaltFishTwo from "../../images/saltwater/saltwater-fish-two.jpg";
import SaltFishThree from "../../images/saltwater/saltwater-fish-three.jpg";

import FreshFishOne from "../../images/freshwater/freshwater-fish-one.jpg";
import FreshFishTwo from "../../images/freshwater/freshwater-fish-two.jpg";
import FreshFishThree from "../../images/freshwater/freshwater-fish-three.jpg";

import PlantOne from "../../images/aquatic-plants/plants-one.jpg";
import PlantTwo from "../../images/aquatic-plants/plants-two.jpg";
import PlantThree from "../../images/aquatic-plants/plants-three.jpg";

import { About, ContainerHome, Footer, Section } from "./homeStyles";

function Home() {
  return (
    <ContainerHome>
      <Nav />
      <About>
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
      </About>
      <Carousel />
      <Section className="first-section">
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
      <Section className="third-section">
        <div className="container-info">
          <div className="container-image">
            <img src={PlantOne} className="fishOne" alt="fish-img" />
            <div>
              <img src={PlantTwo} className="fishTwo" alt="fish-img" />
              <img src={PlantThree} className="fishThree" alt="fish-img" />
            </div>
          </div>
          <div className="container-text ">
            <h1>Plantas Áquaticas</h1>
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
      <div className="container-export">
        <iframe
          className="container-video border"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.091665490236!2d-46.79375618441971!3d-23.203329784861918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedf0b09f5bb17%3A0xc9a29e4617f390f0!2sBiomaxi%20Ecossistemas!5e0!3m2!1spt-BR!2sbr!4v1676251409003!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <iframe
          className="container-video border"
          src="https://www.youtube.com/embed/O5cEAKU7Sno"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Footer></Footer>
    </ContainerHome>
  );
}

export default Home;
