import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const Industries = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.topBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.titleBox}>
          <h1>Soluciones de blockchain</h1>
          <h1>por industria</h1>
        </div>
        <span>
          Organizaciones y empresas en varias industrias implementan la
          tecnología blockchain para resolver problemas y mejorar sus
          operaciones. Estos son algunos casos de uso de blockchain empresarial
          en distintos sectores como el financiero, cadena de suministros,
          videojuegos y salud.
        </span>
        <a className={styles.mainButton} href="#contactUs">
          Contáctenos
        </a>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.knowEOSCRBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.industriesImg}
              srcSet={useBaseUrl("img/payments.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.industriesImg}
              src={useBaseUrl("img/payments.webp")}
            />
          </picture>
          <div>
            <span className={styles.titleH1}>
              Blockchain permite una manera eficiente y segura para registrar
              transacciones que puede facilitar los pagos y ofrecer auditoría en
              tiempo real con encriptación para reducir la filtración de datos.
              Blockchain también puede promover aplicaciones financieras
              alternativas, tales como nuevas soluciones de liquidez y gestión
              de micro-préstamos, así como estructuras mejoradas para pagos.
            </span>
            <button className={styles.mainButton}>Lea más</button>
          </div>
        </div>
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.industriesImg}
              srcSet={useBaseUrl("img/logistics.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.industriesImg}
              src={useBaseUrl("img/logistics.webp")}
            />
          </picture>
          <div>
            <span className={styles.titleH1}>
              En una industria que involucra a docenas de participantes, las
              capacidades de blockchain y de los contratos inteligentes pueden
              ser ideales para trazabilidad, gestión de autorizaciones y
              automatización. Blockchain puede integrar distintas tecnologías
              como internet de las cosas e inteligencia artificial para crear
              soluciones completas y optimizar procesos de logística y cadenas
              de valor.
            </span>
            <button className={styles.mainButton}>Lea más</button>
          </div>
        </div>
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.industriesImg}
              srcSet={useBaseUrl("img/gaming.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.industriesImg}
              src={useBaseUrl("img/gaming.webp")}
            />
          </picture>
          <div>
            <span className={styles.titleH1}>
              La industria de los videojuegos está en auge – cerca de un 40% de
              la población global juega videojuegos. Blockchain permite una
              mejor manera de transferir, valorizar y coleccionar activos
              digitales dentro de juegos. Además, sus capacidades de mejorar la
              seguridad y ofrecer transacciones más eficientes pueden subir el
              nivel de los juegos en línea.
            </span>
            <button className={styles.mainButton}>Lea más</button>
          </div>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.enterpriceTitleBox}>
          <h1>Blockchain en otras industrias</h1>
        </div>
        <div className={clsx(styles.colBox)}>
          <Accordion
            title="Administración de activos"
            content={
              <span>
                La tecnología blockchain permite una manera inmutable y segura
                para “tokenizar” y administrar activos tangibles e intangibles.
                Algunas oportunidades incluyen opciones innovadoras de liquidez
                y reducción en costos administrativos.
              </span>
            }
          />

          <Accordion
            title="Finanzas descentralizadas"
            content={
              <span>
                También conocida como “DeFi,” las finanzas descentralizadas
                utilizan la tecnología blockchain para explorar nuevas
                oportunidades de liquidez para la ciudadanía. Nuestro equipo es
                parte de una app DeFi llamada Evodex.
              </span>
            }
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Identidad digital"
            content={
              <span>
                Blockchain permite sistemas inmutables, transparentes y seguros
                para gestionar identidades digitales que pueden interconectarse
                con internet de las cosas, biométrica y sistemas de
                administración empresariales.
              </span>
            }
          />

          <Accordion
            title="Energía"
            content={
              <span>
                Blockchain ofrece una forma eficiente y transparente de mejorar
                las operaciones, distribución y gestión de datos de compañías
                energéticas. Las redes descentralizadas pueden ayudar a promover
                alternativas para la generación de energía sostenible y privada.
              </span>
            }
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Medios y entretenimiento"
            content={
              <span>
                Las capacidades de blockchain de crear registros seguros e
                inmutables pueden ayudar a reducir la piratería y disputas por
                propiedad intelectual. Además, blockchain puede mejorar la
                trazabilidad de pagos y distribución de contenido mediático.
              </span>
            }
          />

          <Accordion
            title="Gobierno"
            content={
              <span>
                Las instituciones de gobierno pueden implementar tecnología
                blockchain para impulsar características transparencia e
                inmutabilidad, con el fin de aumentar la confianza entre el
                sector público y la ciudadanía. Además, permite una manera
                costo-eficiente para registrar datos y mejorar la rendición de
                cuentas.
              </span>
            }
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Salud y seguros"
            content={
              <span>
                La tecnología blockchain ofrece mayor eficiencia, trazabilidad y
                seguridad para registrar información sensible de pacientes y
                datos médicos. Los contratos inteligentes pueden ayudar a
                reducir costos y tiempos en reclamos de seguros.
              </span>
            }
          />

          <Accordion
            title="Tecnología legal"
            content={
              <span>
                Los contratos inteligentes son códigos de computadora que se
                pueden ejecutar de forma automática y autónoma de acuerdo a los
                términos del contrato. Estos pueden transformar procesos legales
                al mejorar la transparencia, eficiencia e inmutabilidad en
                registros.
              </span>
            }
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Bienes raíces"
            content={
              <span>
                Optimice las inversiones en bienes raíces con tecnología
                blockchain al crear nuevos modelos de negocio. Blockchain
                permite integrar activos digitales para aumentar la liquidez y
                mejorar las relaciones con inversionistas y la administración de
                portafolios.
              </span>
            }
          />

          <Accordion
            title="Deportes"
            content={
              <span>
                Blockchain en deportes ofrece una forma de mejorar el
                involucramiento de fans, promover participación activa en la
                toma de decisiones y monetizar con nuevos modelos de negocio
                como contenido de jugadores y coleccionables.
              </span>
            }
          />
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>
            Eligiendo una blockchain empresarial
          </h1>
          <span>
            Existen muchas plataformas de blockchain empresarial en el mercado
            con distintas características y capacidades. La siguiente es una
            lista de algunas características clave que deberá considerar al
            elegir qué plataforma de blockchain es la más adecuada para su
            organización:
          </span>
        </div>
        <div className={styles.enterpriceTitleBox}>
          <div className={clsx(styles.colBox, styles.flexContent)}>
            <div className={styles.flexBox}>
              <div>
                <h3>Privacidad y transparencia</h3>
                <span>
                  ¿Cómo son diferentes los protocolos de seguridad y
                  confidencialidad entre plataformas y cómo maneja el tema de
                  transparencia?
                </span>
              </div>
              <div>
                <h3>Costo eficiencia</h3>
                <span>
                  ¿La organización tendrá una reducción significante de costos
                  al integrar contratos inteligentes o simplificando el proceso
                  de compartir información?
                </span>
              </div>
              <div>
                <h3>Adopción rápida</h3>
                <span>
                  ¿Su equipo podrá usar la experiencia con lenguajes de
                  programación o tendrán que aprender uno nuevo?
                </span>
              </div>
              <div>
                <h3>Rapidez o rendimiento</h3>
                <span>
                  ¿Qué tan rápida debe ser la solución? ¿Su compañía requiere
                  transacciones muy frecuentes o puede disponer de tiempos de
                  confirmación más largos?
                </span>
              </div>
            </div>
            <picture>
              <source
                className={styles.industriesImg}
                srcSet={useBaseUrl("img/enterprise.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.industriesImg}
                src={useBaseUrl("img/enterprise.webp")}
              />
            </picture>
          </div>
        </div>
        <div className={styles.btnBox}>
          <a className={styles.mainButton} href="#contactUs">
            Contáctenos
          </a>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div
          className={clsx(
            styles.enterpriceTitleBox,
            styles.titleH1,
            styles.deplyblockchainBox
          )}
        >
          <h1 className={styles.titleH1}>Recursos adicionales</h1>
          <span>
            Encuentre materiales para lectura y otros recursos para continuar
            aprendiendo sobre blockchain empresarial y EOSIO.
          </span>
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
      </ContentSection>
      <ContactUsForm />
    </main>
  </Layout>
);

export default Industries;
