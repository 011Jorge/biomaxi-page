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

import IconFood from "../../images/itens/icon-food.png";
import IconPlant from "../../images/itens/icon-plant.png";
import IconDecoration from "../../images/itens/icon-decoration.png";
import IconEquipment from "../../images/itens/icon-equipment.png";

import {
  About,
  Accessories,
  Article,
  ContainerHome,
  Footer,
  Section,
} from "./homeStyles";

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
      <div>
        <Carousel />
      </div>
      <Article className="article">
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
            autoplay
            loop
            className="container-video border"
            src="https://www.youtube.com/embed/O5cEAKU7Sno/?&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </Article>
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
      <Accessories>
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
      </Accessories>

      <Footer></Footer>
    </ContainerHome>
  );
}

export default Home;
