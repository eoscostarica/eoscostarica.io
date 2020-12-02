import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const BlockProducer = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.topBox)}
        boxStyle={styles.noMarginTop}
        childrenWrapperStyle={styles.flexColumn}
      >
        <div className={styles.titleBox}>
          <h1>EOS Block Producer</h1>
        </div>
        <span>
          Lea más sore cómo ayudamos a desarrollar el ecosistema blockchain
          EOSIO en el mundo.
        </span>
        <a className={styles.mainButton} href="#contactUs">
          Conéctese con nosotros
        </a>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.enterpriceTitleBox}>
          <h1 className={styles.titleH1}>Nuestra historia</h1>
          <span>
            EOS Costa Rica es un spinoff de una compañía con más de tres décadas
            desarrollando tecnologías en Costa Rica. Durante la década de los
            80, lanzamos el primer BBS (bulletin board service) del país, un
            precursor de la internet. Luego, la compañía pasó a educar a nuevos
            usuarios en el uso del email y navegar en la web. Más adelante,
            comenzamos a ofrecer infraestructura de internet, hospedaje y
            servicios de desarrollo.
          </span>
          <h3 />
          <span>
            En 2013, empezamos a brindar infraestructura para redes blockchain
            públicas y aprendimos de primera mano cómo funciona la tecnología.
            En 2018 cuando fue lanzado EOSIO, investigamos las ventajas de esta
            tecnología y comenzamos a aprender cómo implementarla en el mundo
            real. Estuvimos allí durante el nacimiento de la EOS Mainnet y
            continuaremos durante su crecimiento.
          </span>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.enterpriceTitleBox}>
          <h1>Nuestros valores</h1>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Educación constante</h3>
            <span>
              Creemos que el entrenamiento continuo y el desarrollo de talento
              humano son cruciales para desarrollar un ecosistema robusto.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Lealtad</h3>
            <span>
              Reconocemos los talentos únicos de cada persona y buscamos
              construir lealtad al empoderar a la comunidad EOSIO.
            </span>
          </div>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Resiliencia</h3>
            <span>
              Nuestro equipo evoluciona de la mano de la tecnología. Buscamos
              agilidad y eficiencia, lo que nos permite adaptarnos rápidamente e
              implementar las últimas innovaciones.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Libertad</h3>
            <span>
              Defendemos la soberanía individual dentro de la comunidad EOS,
              replicando la premisa de Costa Rica de libertad y paz como la
              democracia más longeva de Latinoamérica.
            </span>
          </div>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Tolerancia</h3>
            <span>
              Nuestro equipo aboga por los derechos a la educación,
              emprendimiento y oportunidades para todos los miembros de la
              comunidad como forma de desarrollar el ecosistema.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Prudencia</h3>
            <span>
              Nos comprometemos a salvaguardar el futuro de la comunidad y
              tomamos riesgos calculados que nos acercan cada vez más a nuestras
              metas de largo plazo.
            </span>
          </div>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Rendición de cuentas</h3>
            <span>
              Creemos firmemente e incentivamos tomar completa responsabilidad a
              los miembros del equipo y partes interesadas. Valoramos la
              transparencia y rendición de cuentas.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Equidad</h3>
            <span>
              Avalamos y defendemos un modelo de gobernanza guiados por
              principios de méritos para beneficios de nuestra comunidad.
            </span>
          </div>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={styles.industryBox}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.industryTitleBox}>
          <h1>Información de block producer</h1>
        </div>
        <div className={clsx(styles.titleH1, styles.sectionWhite)}>
          <h3 className={styles.titleH1}>Código de conducta</h3>
          <h4>EOS Costa Rica se compromete a:</h4>
          <span>
            Brindar la infraestructura bare-metal con los más altos estándares
            disponible para el ecosistema EOS.
          </span>
          <span>
            Llegar a ser un EOS Block Producer económicamente sostenible y
            altamente competitivo.
          </span>
          <span>
            Asignar recompensas de bloque a iniciativas EOS de educación y
            desarrollo.
          </span>
          <span>
            Patrocinar dApps y desarrollo de proyectos liderados por la
            comunidad.
          </span>
          <span>
            Ser totalmente transparentes y abiertos al asignar recompensas de
            bloques.
          </span>
          <span>
            Participar activamente en la gobernanza de la blockchain con una
            actitud abierta y positiva.
          </span>
          <span>
            Respetar y defender la constitución, elecciones justas, vigilancia
            de la comunidad y mecanismos de arbitraje.
          </span>
        </div>
        <h3 className={styles.titleH1} id="ownership-disclosure">
          Revelación de propiedad
        </h3>
        <span>
          De acuerdo al Acuerdo de Block Producer y los valores que nos han
          representado desde el inicio de la campaña, EOS Costa Rica se
          compromete a revelar los beneficiarios finales de nuestra organización
          e incentiva a otros candidatos BP a acatar dicho Acuerdo. Considerando
          que EOS Costa Rica es una iniciativa liderada por la comunidad
          involucrando a varias partes interesadas, incluyendo pero no limitado
          a: desarrolladores, ingenieros de seguridad, gestores de comunidad,
          administradores de sistema y personal financiero, las llaves de Block
          Producer son propiedad y controladas por Sistemas Edenia
          Internacional, S.A.
        </span>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.industryBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.industryTitleBox}>
          <h1>Proyectos open-source</h1>
        </div>
        <span>
          Descubra más sobre algunos proyectos open-source que estamos
          desarrollando. ¡También puede entrar a nuestro perfil de GitHub para
          más detalles!
        </span>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/lifebank.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/lifebank.webp")}
                  />
                </picture>
              </div>
              <h3>Lifebank</h3>
              <span>
                Una app de código abierto basada en blockchain para incentivar
                las donaciones de sangre al crear un círculo virtuoso de valor
                entre donantes, bancos de sangre y negocios locales, e impulsada
                por una economía interna de tokens. Proyecto ganador de la
                competencia “Coding for Change” de block.one.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/eosrate.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/eosrate.webp")}
                  />
                </picture>
              </div>
              <h3>EOS Rate</h3>
              <span>
                EOS Rate es una app de código abierto que permite a titulares de
                tokens EOS acceder a un sistema de calificaciones y portal de
                votación para productores de bloques y proxies en la blockchain
                EOS.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/dashboard.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/dashboard.webp")}
                  />
                </picture>
              </div>
              <h3>EOSIO Dashboard</h3>
              <span>
                EOSIO Dashboard es un proyecto de código abierto que permite a
                usuarios visualizar la distribución de recompensas en la red EOS
                en la búsqueda de rendición de cuentas y transparencia.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.btnBox}>
          <span>
            Síganos en redes sociales. ¡Constantemente estamos en búsqueda de
            colaboraciones open-source!
          </span>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>¿Por qué Costa Rica?</h1>
          <span>
            Somos los primeros candidatos a Block Producer en Centroamérica y
            uno de los pocos en Latinoamérica. Creemos que las características
            de Costa Rica brindan una ventaja al agregar diversidad a la red de
            EOS, ya sea por la estabilidad política del país, la ausencia de
            ejército o el respeto a los Derechos Humanos. Adicionalmente, su
            infraestructura técnica, marco político estable, estructura
            corporativa flexible y jurisdicción definida representa
            oportunidades para la red EOS, que es reconocida como una red
            resistente a la censura.
          </span>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Libertad y Paz</h3>
            <span>
              Costa Rica es una de las Democracias más estables y longevas de
              América. El país abolió su ejército en 1948 para promover la
              educación y el bienestar, y sobresale en cuanto a equidad e
              innovación.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Derechos Humanos</h3>
            <span>
              Costa Rica se fundó bajo la premisa de respeto a los Derechos
              Humanos. Incluso, la capital San José es sede central del
              Instituto Interamericano de Derechos Humanos.
            </span>
          </div>
        </div>

        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Ecología</h3>
            <span>
              Costa Rica promueve el desarrollo sostenible y alberga a más del
              4% de la biodiversidad del planeta. Además, 26% del territorio
              nacional lo componen áreas protegidas y Parques Nacionales.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Ubicación estratégica</h3>
            <span>
              Costa Rica está convenientemente ubicada en el medio del
              continente americano. El país conecta tres cables submarinos de
              fibra óptica, los cuales brindan la mayoría del ancho de banda del
              país.
            </span>
          </div>
        </div>
        <div className={styles.enterpriceInfoBox}>
          <h3>Equidad</h3>
          <span>
            La población costarricense valora la equidad. Por ejemplo, el país
            se ubica en el primer puesto de Latinoamérica en cuanto a equidad de
            género.
          </span>
        </div>
        <img
          className={styles.defaultImg}
          alt="eoscr-logo"
          src={useBaseUrl("img/eoscr.svg")}
        />
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>
            Vote por nosotros como Block Producers
          </h1>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Experiencia como integradores</h3>
            <span>
              Nos enfocamos en construir relaciones con aliados estratégicos y
              el sector empresarial. Constantemente buscamos nuevas
              oportunidades de negocio y procuramos educar a ejecutivos en
              sectores público y privado sobre el protocolo EOSIO y la
              tecnología blockchain.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Equipo ganador</h3>
            <span>
              Buscamos reclutar a los mejores candidatos. Hemos armado un equipo
              latinoamericano con mentalidad de resolución de problemas y amplia
              experiencia en sus distintas áreas. Nuestro equipo opera en un
              ambiente Agile que incentiva la participación, rendición de
              cuentas y la innovación.
            </span>
          </div>
        </div>

        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Grandes proyectos open- source</h3>
            <span>
              Desarrollamos y apoyamos proyectos open-source como EOS Rate,
              LatamLink, Lifebank, EOSIO Dashboard y otros con el fin de
              impulsar el ecosistema EOSIO. Estos proyectos han sido creados por
              desarrolladores y profesionales talentosos que creen en los
              beneficios de la red.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Desarrollo de comunidad</h3>
            <span>
              Somos parte de los ecosistemas locales y globales para promover la
              adopción de EOSIO. Asistimos a eventos como las EOS Conferences,
              eventos organizados por Block.one, y somos activos en las
              conversaciones de la comunidad digital.
            </span>
          </div>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.colBox}>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/blog.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/blog.webp")}
              />
            </picture>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/press.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/press.webp")}
              />
            </picture>
          </div>
          <div className={styles.colBox}>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/portal.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/portal.webp")}
              />
            </picture>
            <picture>
              <source
                className={styles.flexImgBox}
                srcSet={useBaseUrl("img/github.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.flexImgBox}
                src={useBaseUrl("img/github.webp")}
              />
            </picture>
          </div>
        </div>
        <div className={styles.btnBox}>
          <span>¡Conozca más sobre el equipo!</span>
          <button className={styles.mainButton}>Leer más</button>
        </div>
      </ContentSection>
      <ContactUsForm />
    </main>
  </Layout>
);

export default BlockProducer;
