import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const OurProjects = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.topBox)}
        boxStyle={styles.noMarginTop}
        childrenWrapperStyle={styles.flexColumn}
      >
        <div className={styles.titleBox}>
          <h1>Casos de uso de blockchain empresarial</h1>
        </div>
        <span>Conozca nuestros proyectos más recientes.</span>
        <a className={styles.mainButton} href="#contactUs">
          Contáctenos
        </a>
      </ContentSection>
      <ContentSection
        sectionStyle={styles.knowEOSCRBox}
        boxStyle={styles.noMarginTop}
      >
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
            <span className={styles.titleH1}>
              Somos parte de una alianza regional, liderada por compañías
              tecnológicas de Latinoamérica para ofrecer un testnet basado en
              EOSIO a la iniciativa LACChain, un programa para acelerar el
              desarrollo del ecosistema blockchain de la región.
            </span>
            <a
              className={styles.mainButton}
              href="https://latamlink.io/"
              target="_blank"
            >
              Leer más
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
            <span className={styles.titleH1}>
              Una app de código abierto basada en blockchain para incentivar las
              donaciones de sangre al crear un círculo virtuoso de valor entre
              donantes, bancos de sangre y negocios locales, e impulsada por una
              economía interna de tokens. Proyecto ganador de la competencia
              “Coding for Change” de block.one.
            </span>
            <a
              className={styles.mainButton}
              href="https://lifebank.io/"
              target="_blank"
            >
              Leer más
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
            <span className={styles.titleH1}>
              Una plataforma basada en blockchain que brinda soluciones para
              entradas y salidas de puertos para la industria de logística de
              contenedores y transmisión en tiempo real de datos requeridos para
              el intercambio de carga.
            </span>
            <a
              className={styles.mainButton}
              href="https://smartgate.tech/"
              target="_blank"
            >
              Leer más
            </a>
          </div>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.industryBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.industryTitleBox}>
          <h1>Otros proyectos</h1>
        </div>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/forum.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/forum.webp")}
                  />
                </picture>
              </div>
              <h3>Enterprise EOSIO Forum</h3>
              <span>
                Somos parte del Enterprise EOSIO Forum, una iniciativa de la
                comunidad para discutir sobre soluciones empresariales en
                blockchain implementando la tecnología EOSIO.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/fundation.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/fundation.webp")}
                  />
                </picture>
              </div>
              <h3>EOS Foundation</h3>
              <span>
                Somos parte de la prueba de concepto de EOS Foundation, una
                organización sin fines de lucro, autónoma y descentralizada, que
                permitiría la auto- representación y promoción de la comunidad
                de EOS.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/eosratecr.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/eosratecr.webp")}
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
        </div>
        <div className={styles.industryColWrapper}>
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
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/evodex.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/evodex.webp")}
                  />
                </picture>
              </div>
              <h3>Evodex</h3>
              <span>
                Evodex es la interfaz front- end para un protocolo de pool de
                liquidez en el que los usuarios votan por las tarifas de
                liquidez y no pagan por gas. Nuestro equipo estuvo a cargo del
                UX y el diseño front-end.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/enterpriseproject.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/enterpriseproject.webp")}
                  />
                </picture>
              </div>
              <h3>Proyecto empresarial privado</h3>
              <span>
                Desarrollamos una app para un cliente estadounidense en la
                industria de contabilidad y finanzas para mejorar la
                trazabilidad de transacciones intercompañía.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/notario.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/notario.webp")}
                  />
                </picture>
              </div>
              <h3>Notario Digital</h3>
              <span>
                Notario Digital es un proyecto de código abierto que genera un
                hash de cualquier documento para registrarlo de forma inmutable
                en una red EOSIO.
              </span>
            </div>
          </div>
        </div>
      </ContentSection>
      <ContactUsForm />
    </main>
  </Layout>
);

export default OurProjects;
