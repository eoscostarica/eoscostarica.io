import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import WhatWeDoSvg from "./SvgComponents/WhatWeDo";
import styles from "./styles.module.css";

const Home = () => {
  const [accordionState, setAccordionState] = useState();

  useEffect(() => {
    setAccordionState({
      development: false,
      infrastructure: false,
      education: false,
    });
  }, []);

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.topBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.titleBox}>
            <h1>Soluciones empresariales de blockchain a su medida</h1>
          </div>
          <span>
            Implemente la tecnología blockchain EOSIO para mejorar la
            transparencia y eficiencia, y reducir costos en su organización.
            Comience a transformar su organización con el poder de redes
            blockchain empresariales.
          </span>
          <a className={styles.mainButton} href={useBaseUrl("/servicios")}>
            Aprenda más
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.enterpriceTitleBox}>
            <h1>¿Lo que una blockchain empresarial puede hacer por usted?</h1>
            <span>
              Una blockchain funciona como un registro descentralizado y
              compartido por una red de computadoras que registran información
              de forma inmutable y segura, y que no podrá ser alterada o
              hackeada. Además, la tecnología blockchain puede:
            </span>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Mejorar la transparencia y la trazabilidad</h3>
              <span>
                Una blockchain registra transacciones en orden cronológico,
                permitiendo así la trazabilidad completa de transacciones en
                tiempo real. Estos registros son inmutables, por lo que no
                pueden ser alterados, ofreciendo mayor transparencia en los
                procesos.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Aumentar la eficiencia y reducir costos</h3>
              <span>
                Los contratos inteligentes propios de la tecnología blockchain
                permiten mayor eficiencia en operaciones. Un contrato
                inteligente es un protocolo que se ejecuta de manera automática
                y autónoma de acuerdo a los términos, eliminando la necesidad de
                un intermediario y por ende reduciendo costos de transacción.
              </span>
            </div>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Incrementar la seguridad y la confianza</h3>
              <span>
                Las capacidades de encriptación de blockchain ofrecen nuevas
                capas de privacidad y seguridad para registrar datos. Una
                blockchain es descentralizada, por lo que estos registros se
                comparten por una red de computadores, minimizando así los
                ciberataques, permitiendo una mejor gestión de autorizaciones y
                aumentando la confianza entre partes.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Integración con otras tecnologías</h3>
              <span>
                Definimos blockchain como una tecnología fundamental, ya que
                puede impulsar otras tecnologías de la industria 4.0. Por
                ejemplo, machine learning, robótica y realidad virtual pueden
                verse beneficiadas al integrar blockchain para registrar grandes
                cantidades de información.
              </span>
            </div>
          </div>
          <div className={styles.btnBox}>
            <span>
              Lea más sobre cómo blockchain puede mejorar sus operaciones.
            </span>
            <a className={styles.mainButton} href={useBaseUrl("/industrias")}>
              Lea más aquí
            </a>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.whatWeDoBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.whatWeDoBoxLeft}>
            <h1>Lo que hacemos</h1>
            <span>
              Sacamos el mejor provecho a la tecnología blockchain empresarial y
              nos enfocamos en diseñar soluciones para el mundo real. Nuestro
              equipo ofrece servicios a la medida según las necesidades y
              expectativas de nuestros clientes.{" "}
              <a href="#contactUs">¡Contáctenos</a> y empecemos la conversación!
            </span>
            <div className={styles.mobileSvgIcon}>
              <WhatWeDoSvg />
            </div>

            <Accordion
              title="Desarrollo de software"
              content={
                <span>
                  Nuestra propuesta de valor es desarrollar software basado en
                  blockchain para resolver problemas de la vida real. Tenemos
                  experiencia trabajando con empresas de gran tamaño y PYMES,
                  entidades de gobierno, organizaciones sin fines de lucro, y
                  proyectos de código abierto. Nos adaptamos al presupuesto y
                  necesidades del cliente, sin comprometer el liderazgo o
                  calidad en nuestro trabajo. Nuestro equipo es agnóstico a la
                  tecnología pero nos especializamos en EOSIO, lanzado por la
                  compañía líder block.one.
                </span>
              }
            />
            <Accordion
              title="Infraestructura blockchain"
              content={
                <span>
                  Ofrecemos infraestructura de primer nivel para redes
                  blockchain y API endpoints desde nuestro datacenter en San
                  José, Costa Rica. Costa Rica es un país con alta estabilidad
                  política y una democracia de muchos años. Nuestra ubicación
                  estratégica en la mitad del continente americano ofrece
                  interconectividad conveniente entre redes. Además,
                  configuramos, hospedamos y damos mantenimiento a nodos de
                  blockchain disponibles para redes públicas y privadas con
                  monitoreo y uptime 24/7. Lea más sobre esto.
                </span>
              }
            />
            <Accordion
              title="Educación y entrenamiento"
              content={
                <span>
                  Hoy en día, las nuevas tecnologías están transformando
                  industrias. Ofrecemos talleres sobre blockchain para
                  ejecutivos y equipos que buscan actualizarse y aprender más
                  sobre blockchain y casos de uso empresariales. También
                  ofrecemos entrenamiento y recursos educativos para nuevos
                  talentos que deseen empezar una carrera en blockchain.
                </span>
              }
            />
          </div>
          <div className={styles.whatWeDoBoxRight}>
            <WhatWeDoSvg />
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.industryBox}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.industryTitleBox}>
            <h1>Industrias que pueden implementar blockchain</h1>
          </div>
          <span>
            Blockchain tiene la capacidad de transformar y remodelar muchas
            industrias. Las posibilidades no tienen fin. Si aún no sabe cómo
            blockchain puede impactar las operaciones en su organización,
            ¡contáctenos sin ningún compromiso!
          </span>
          <div className={styles.industryColWrapper}>
            <div className={styles.industryColBox}>
              <div>
                <div className={clsx(styles.svgBox, styles.svgBoxHeight)}>
                  <picture>
                    <source
                      className={styles.defaultImgCarousel}
                      srcSet={useBaseUrl("img/payments.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.defaultImgCarousel}
                      src={useBaseUrl("img/payments.webp")}
                    />
                  </picture>
                </div>
                <h3>Pagos y transferencias</h3>
                <span>
                  Blockchain permite una manera eficiente y segura para
                  registrar transacciones. Blockchain puede facilitar los pagos
                  y la auditabilidad en tiempo real con encriptación para
                  reducir la filtración de datos.
                </span>
              </div>
              {/* <button className={styles.mainButton}>Read more</button> */}
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={clsx(styles.svgBox, styles.svgBoxHeight)}>
                  <picture>
                    <source
                      className={styles.defaultImgCarousel}
                      srcSet={useBaseUrl("img/logistics.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.defaultImgCarousel}
                      src={useBaseUrl("img/logistics.webp")}
                    />
                  </picture>
                </div>
                <h3>Logística y cadena de valor</h3>
                <span>
                  En una industria que involucra a docenas de participantes, las
                  capacidades de blockchain y de los contratos inteligentes
                  pueden ser ideales para trazabilidad, gestión de
                  autorizaciones y automatización.
                </span>
              </div>
              {/* <button className={styles.mainButton}>Read more</button> */}
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={clsx(styles.svgBox, styles.svgBoxHeight)}>
                  <picture>
                    <source
                      className={styles.defaultImgCarousel}
                      srcSet={useBaseUrl("img/gaming.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.defaultImgCarousel}
                      src={useBaseUrl("img/gaming.webp")}
                    />
                  </picture>
                </div>
                <h3>Videojuegos</h3>
                <span>
                  Blockchain permite una mejor manera de transferir, valorizar y
                  coleccionar activos digitales de juegos. Además, las
                  capacidades de mejorar la seguridad y ofrecer transacciones
                  más eficientes pueden subir el nivel de los juegos en línea.
                </span>
              </div>
              {/* <button className={styles.mainButton}>Read more</button> */}
            </div>
          </div>
          <span>
            Las características de blockchain la convierten en una tecnología
            fundacional, lo que quiere decir que se puede adaptar a otras
            tecnologías y a la mayoría de las industrias. Blockchain puede
            aumentar la eficiencia, seguridad y confianza al registrar
            transacciones y datos y administrar activos digitales. Además, puede
            automatizar y facilitar procesos, y reducir costos e ineficiencias.
            <a href={useBaseUrl("/industrias")}>Descubra más industrias</a> que
            pueden impulsar sus operaciones con tecnología blockchain.
          </span>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.inquiresBox}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>¿Tiene preguntas sobre blockchain?</h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contáctenos
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.knowEOSCRBox)}
          boxStyle={styles.noMarginTop}
        >
          <h1>Conozca a EOS Costa Rica</h1>
          <span>
            EOS Costa Rica es un spinoff de una compañía con más de tres décadas
            de desarrollar tecnologías. Desarrollamos soluciones basadas en
            blockchain usando el protocolo{" "}
            <a href="https://eos.io/" target="_blank">
              EOSIO
            </a>
            , ofrecemos infraestructura blockchain y brindamos talleres y
            entrenamiento.
          </span>
          <a href="#contactUs">¡Empecemos la conversación!</a>
          <div className={styles.knowRowBox}>
            <div>
              <h3>El equipo</h3>
              <span>
                Hemos armado un equipo latinoamericano con una mentalidad de
                solucionar problemas y experiencia en sus áreas de conocimiento.
                Operamos como un equipo distribuido en un ambiente Agile y nos
                esforzamos por contratar talento fuera de áreas urbanas para
                apoyar carreras técnicas en zonas rurales.
              </span>
            </div>
            <picture>
              <source
                className={styles.knowEOSCRImg}
                srcSet={useBaseUrl("img/team.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRImg}
                src={useBaseUrl("img/team.webp")}
              />
            </picture>
          </div>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <picture>
              <source
                className={styles.knowEOSCRImg}
                srcSet={useBaseUrl("img/company.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRImg}
                src={useBaseUrl("img/company.webp")}
              />
            </picture>
            <div>
              <h3>La compañía</h3>
              <span>
                Durante la década de 1980, desarrollamos el primer BBS del país,
                un precursor de la internet. Luego de décadas de ofrecer
                infraestructura de internet y servicios de hospedaje y
                desarrollo, empezamos a ofrecer infraestructura para redes de
                blockchain públicas. Estuvimos presentes durante el nacimiento
                de la EOS Mainnet y comenzamos a implementar el protocolo{" "}
                <a href="https://eos.io/" target="_blank">
                  EOSIO
                </a>
                desde su lanzamiento, acumulando así décadas de experiencia con
                tecnologías innovadoras.
              </span>
            </div>
          </div>
          <div className={styles.knowRowBox}>
            <div>
              <h3>La tecnología</h3>
              <span>
                Nos enfocamos en implementar la tecnología{" "}
                <a href="https://eos.io/" target="_blank">
                  EOSIO
                </a>
                , un protocolo de código abierto lanzado en 2018 por la compañía
                líder{" "}
                <a href="https://block.one/" target="_blank">
                  block.one.
                </a>
                . EOSIO cuenta con el token nativo EOS y ofrece mayor
                escalabilidad debido a su alta velocidad en transacciones,
                flexibilidad para redes públicas y privadas y eficiencia
                energética en comparación con otras blockchains, convirtiéndola
                en una opción más eco-eficiente.
              </span>
            </div>
            <picture>
              <source
                className={styles.knowEOSCRImg}
                srcSet={useBaseUrl("img/technology.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRImg}
                src={useBaseUrl("img/technology.webp")}
              />
            </picture>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.linkProjectBox)}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.flexContent}
        >
          <img alt="LatamLink" src={useBaseUrl("img/Group47.svg")} />
          <img alt="Edenia" src={useBaseUrl("img/Group17.svg")} />
          <img alt="Eossurf" src={useBaseUrl("img/Group11.svg")} />
          <img alt="Ticoblockchain" src={useBaseUrl("img/Group55.svg")} />
        </ContentSection>
        <ContentSection
          sectionStyle={styles.knowEOSCRBox}
          boxStyle={styles.noMarginTop}
        >
          <h1>Algunos de nuestros proyectos</h1>
          <span>
            Conozca algunos de nuestros proyectos recientes implementando el
            protocolo blockchain EOSIO.
            <a href={useBaseUrl("/proyectos")}>Vea la lista completa aquí.</a>
          </span>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <picture>
              <source
                className={styles.knowEOSCRProjectImg}
                srcSet={useBaseUrl("img/latamlink2.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRProjectImg}
                src={useBaseUrl("img/latamlink2.webp")}
              />
            </picture>
            <div>
              <h3>LatamLink</h3>
              <span>
                Somos parte de una alianza regional, liderada por compañías
                tecnológicas de Latinoamérica para ofrecer un testnet basado enn
                EOSIO la iniciativa{" "}
                <a href="https://www.lacchain.net/" target="_blank">
                  LACChain
                </a>
                , un programa para acelerar el desarrollo del ecosistema
                blockchain de la región.
              </span>
              <a href="https://latamlink.io/" target="_blank">
                Lea más.
              </a>
            </div>
          </div>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <picture>
              <source
                className={styles.knowEOSCRProjectImg}
                srcSet={useBaseUrl("img/lifebank.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRProjectImg}
                src={useBaseUrl("img/lifebank.webp")}
              />
            </picture>
            <div>
              <h3>Lifebank</h3>
              <span>
                Una app de código abierto basada en blockchain para incentivar
                las donaciones de sangre al crear un círculo virtuoso de valor
                entre donantes, bancos de sangre y negocios locales, e impulsada
                por una economía interna de tokens. Proyecto ganador de la
                competencia{" "}
                <a
                  href="https://eos.io/news/winner-of-coding-for-change- virtual-hackathon-lifebank/"
                  target="_blank"
                >
                  “Coding for Change”
                </a>{" "}
                <a href="https://block.one/" target="_blank">
                  block.one.
                </a>
              </span>
              <a href=" https://lifebank.io/" target="_blank">
                Lea más.
              </a>
            </div>
          </div>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <picture>
              <source
                className={styles.knowEOSCRProjectImg}
                srcSet={useBaseUrl("img/smartgate.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRProjectImg}
                src={useBaseUrl("img/smartgate.webp")}
              />
            </picture>
            <div>
              <h3>SMARTGATE</h3>
              <span>
                Una plataforma basada en blockchain que brinda soluciones para
                entradas y salidas de puertos para la industria de logística de
                contenedores y transmisión en tiempo real de datos requeridos
                para el intercambio de carga.
              </span>
              <a href="https://smartgate.tech/" target="_blank">
                Lea más.
              </a>
            </div>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.inquiresBox, styles.secondaryBG)}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>Start working with us and implement blockchain technology.</h1>
          <a href="#contactUs" className={styles.mainButton}>
          Contáctenos
          </a>
        </ContentSection>
        <ContactUsForm />
      </main>
    </Layout>
  );
};

export default Home;
