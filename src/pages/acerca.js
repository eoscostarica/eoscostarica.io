import React, { useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ItemsCarousel from "react-items-carousel";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";

import styles from "./styles.module.css";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.topBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.titleBox}>
            <h1>
              EOS Costa Rica desarrolla soluciones empresariales basadas en
              blockchain
            </h1>
          </div>
          <span>
            Años de experiencia desarrollando tecnologías innovadoras hablan por
            nosotros. Explore el poder de la tecnología blockchain con ayuda de
            nuestro equipo ágil.
          </span>
          <a className={styles.mainButton} href="#contactUs">
            Contáctenos
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
            <h1>Conozca a EOS Costa Rica</h1>
          </div>
          <div className={styles.enterpriceTitleBox}>
            <div className={clsx(styles.colBox, styles.flexContent)}>
              <div className={styles.flexBox}>
                <div>
                  <h3>Nuestra historia</h3>
                  <span>
                    EOS Costa Rica es parte de una compañía con más de tres
                    décadas desarrollando tecnologías innovadoras. Durante los
                    80, lanzamos el primer BBS (bulletin board service) en el
                    país, un precursors de la internet. Luego, la compañía
                    empezó a educar nuevos usuarios sobre cómo usar el email y
                    navegar en la web. Después, comenzamos a ofrecer
                    infraestructura de internet, hospedaje y servicios de
                    desarrollo.
                  </span>
                  <h3 />
                  <span>
                    En 2013, empezamos a ofrecer infraestructura para redes
                    blockchain públicas y aprendimos de primera mano sobre cómo
                    trabaja una blockchain. Luego, en 2018 cuando se lanzó el
                    protocolo EOSIO, investigamos las ventajas de esta
                    tecnología y aprendimos a implementarla en el mundo real.
                    Nuestra presencia creció durante el nacimiento de la EOS
                    Mainnet y continuará así durante su desarrollo.
                  </span>
                </div>
                <div>
                  <h3>Nuestra visión</h3>
                  <span>
                    Fundamos EOS Costa Rica hace dos años — antes del
                    lanzamiento de EOS. Hemos experimentado con diferentes casos
                    de uso para la tecnología blockchain EOSIO, especialmente
                    para usos empresariales.
                  </span>
                  <h3 />
                  <span>
                    Nuestro equipo ofrece un enfoque Agile y Lean para
                    desarrollar soluciones basadas en blockchain que permitan a
                    departamentos de innovación iterar y crear pruebas de
                    concepto rápidamente y eficientemente con presupuestos y
                    tiempos restringidos. Esta habilidad permite a
                    organizaciones explorar los beneficios de la tecnología y
                    experimentar su potencial en un ambiente controlado.
                  </span>
                </div>
                <div>
                  <h3>¿Qué podemos hacer por usted?</h3>
                  <span>
                    Podemos co-idear y desarrollar la solución ideal que integra
                    tecnología blockchain en sus operaciones siguiendo un
                    enfoque Agile y Lean que le ayudará a explorar los
                    beneficios de blockchain bajo presupuestos y tiempos
                    limitados.
                  </span>
                  <h3 />
                  <span>
                    Ofrecemos infraestructura de primer nivel y lista para
                    usarse. Además, configuramos, hospedamos y damos
                    mantenimiento a nodos y redes blockchain que cumplan con los
                    requisitos y necesidades de la organización.
                  </span>
                  <br />
                  <br />
                  <span>
                    Ofrecemos talleres sobre blockchain para ejecutivos y
                    equipos que buscan actualizarse y aprender más sobre
                    blockchain y casos de uso empresariales. También ofrecemos
                    entrenamiento y recursos educativos para nuevos talentos que
                    deseen empezar una carrera en blockchain.
                  </span>
                </div>
              </div>
              <img
                className={styles.defaultImg}
                alt="eoscr-logo"
                src={useBaseUrl("img/eoscr.svg")}
              />
            </div>
          </div>
          <div className={styles.btnBox}>
            <button className={styles.mainButton}>
              Visite nuestros servicios
            </button>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.linkProjectBox)}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.flexColumn}
        >
          <h3>Orgullosamente, somos aliados de:</h3>
          <div style={{ padding: `0 40px`, width: "100%" }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={isMobile ? 1 : 4}
              gutter={20}
              leftChevron={<div className={styles.arrowLeft} />}
              rightChevron={<div className={styles.arrowRight} />}
              outsideChevron
              chevronWidth={40}
            >
              <picture>
                <source
                  className={styles.defaultImgCarousel}
                  srcSet={useBaseUrl("img/default-image.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.defaultImgCarousel}
                  src={useBaseUrl("img/default-image.webp")}
                />
              </picture>
              <picture>
                <source
                  className={styles.defaultImgCarousel}
                  srcSet={useBaseUrl("img/default-image.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.defaultImgCarousel}
                  src={useBaseUrl("img/default-image.webp")}
                />
              </picture>
              <picture>
                <source
                  className={styles.defaultImgCarousel}
                  srcSet={useBaseUrl("img/default-image.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.defaultImgCarousel}
                  src={useBaseUrl("img/default-image.webp")}
                />
              </picture>
              <picture>
                <source
                  className={styles.defaultImgCarousel}
                  srcSet={useBaseUrl("img/default-image.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.defaultImgCarousel}
                  src={useBaseUrl("img/default-image.webp")}
                />
              </picture>
              <picture>
                <source
                  className={styles.defaultImgCarousel}
                  srcSet={useBaseUrl("img/default-image.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.defaultImgCarousel}
                  src={useBaseUrl("img/default-image.webp")}
                />
              </picture>
            </ItemsCarousel>
          </div>
          <div className={clsx("row", styles.flexContent)}></div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.knowEOSCRBox)}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.flexColumn}
        >
          <h1>Conozca al equipo</h1>
          <span className={styles.titleH1}>
            Nuestro equipo latinoamericano cuenta con una mentalidad de
            resolución de problemas y experiencia relevante en sus áreas de
            conocimiento. Trabajando de manera distribuida, nuestro equipo opera
            en un ambiente Agile que incentiva la participación, rendición de
            cuentas y la innovación. ¡Conózcanos!
          </span>
          <Accordion
            titleStyle={styles.teamTitle}
            title="Management Team"
            useMaxWidth
            content={
              <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                <div className={styles.industryColBox}>
                  <div>
                    <div className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.teamImg}
                          srcSet={useBaseUrl("img/rodrigo.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.teamImg}
                          src={useBaseUrl("img/rodrigo.webp")}
                        />
                      </picture>
                    </div>
                    <h3>Rodrigo Fernández</h3>
                    <span>Fundador, Director y Jefe de Estrategia</span>
                  </div>
                  <button className={styles.mainButton}>Leer más</button>
                </div>
                <div className={styles.industryColBox}>
                  <div>
                    <div className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.teamImg}
                          srcSet={useBaseUrl("img/edgar.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.teamImg}
                          src={useBaseUrl("img/edgar.webp")}
                        />
                      </picture>
                    </div>
                    <h3>Edgar Fernández</h3>
                    <span>Co-fundador & Finanzas y administración</span>
                  </div>
                  <button className={styles.mainButton}>Leer más</button>
                </div>
                <div className={styles.industryColBox}>
                  <div>
                    <div className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.teamImg}
                          srcSet={useBaseUrl("img/xavier.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.teamImg}
                          src={useBaseUrl("img/xavier.webp")}
                        />
                      </picture>
                    </div>
                    <h3>Xavier Fernández</h3>
                    <span>Co-fundador & Tech Lead</span>
                  </div>
                  <button className={styles.mainButton}>Leer más</button>
                </div>
              </div>
            }
          />
          <Accordion
            titleStyle={styles.teamTitle}
            title="Marketing and Sales"
            useMaxWidth
            content={
              <div className={styles.teamBox}>
                <div className={styles.industryColBox}>
                  <div>
                    <div className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.teamImg}
                          srcSet={useBaseUrl("img/luisdiego.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.teamImg}
                          src={useBaseUrl("img/luisdiego.webp")}
                        />
                      </picture>
                    </div>
                    <h3>Luis Diego Rojas</h3>
                    <span>Estrategia de comunicaciones y contenido</span>
                  </div>
                  <button className={styles.mainButton}>Leer más</button>
                </div>
                <div className={styles.industryColBox}>
                  <div>
                    <div className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.teamImg}
                          srcSet={useBaseUrl("img/rodolfo.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.teamImg}
                          src={useBaseUrl("img/rodolfo.webp")}
                        />
                      </picture>
                    </div>
                    <h3>Rodolfo Perez</h3>
                    <span>Director de arte y gerente de marca</span>
                  </div>
                  <button className={styles.mainButton}>Leer más</button>
                </div>
              </div>
            }
          />
          <Accordion
            titleStyle={styles.teamTitle}
            title="Development and Design"
            useMaxWidth
            content={
              <>
                <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/adriel.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/adriel.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Adriel Díaz</h3>
                      <span>Desarrollador Full Stack</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/allan.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/allan.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Allan Salazar</h3>
                      <span>Ingeniero de redes</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/pp-default.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/pp-default.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Andrés Gomez</h3>
                      <span>Desarrollador de ciberseguridad</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/pp-default.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/pp-default.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Angelo Castro</h3>
                      <span>Practicante</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                </div>
                <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/cris.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/cris.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Cristian Castro</h3>
                      <span>Desarrollador C++</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/pp-default.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/pp-default.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Jean Vega</h3>
                      <span>Practicante</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/jorge.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/jorge.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Jorge Murillo</h3>
                      <span>Diseñador UX Sr.</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/pp-default.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/pp-default.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Justin Castillo</h3>
                      <span>Practicante</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                </div>
                <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/kevin.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/kevin.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Kevin Castillo</h3>
                      <span>Desarrollador Full Stack</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/ronald.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/ronald.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Ronald Gallo</h3>
                      <span>Administrador de red</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/teto.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/teto.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Terencio Gómez</h3>
                      <span>Desarrollador Full Stack</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/julio.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/julio.webp")}
                          />
                        </picture>
                      </div>
                      <h3>Victor Julio Madrigal</h3>
                      <span>Desarrollador web</span>
                    </div>
                    <button className={styles.mainButton}>Leer más</button>
                  </div>
                </div>
              </>
            }
          />
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
            <h1 className={styles.titleH1}>Trabaje con nosotros</h1>
            <span>En este momento no hay posiciones disponibles.</span>
          </div>
          <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
            <h1 className={styles.titleH1}>La tecnología</h1>
            <span>
              Nuestro equipo se especializa en el protocolo blockchain EOSIO,
              lanzado por block.one en 2018, como una tecnología blockchain de
              código abierto que implementa un modelo de consenso conocido como
              Delegated Proof-of-Stake (DPoS). En DPoS, las compradores no
              compiten por poder computacional para resolver algoritmos. Las
              siguientes son algunas características principales de EOSIO:
            </span>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Escalabilidad</h3>
              <span>
                EOSIO implementa el mecanismo DPoS para alcanzar mayor
                rendimiento y eficiencia, llegando a ser el protocolo blockchain
                con el mayor número de transacciones por segundo con 4.000 en su
                red pública. En contraste, el promedio en otros sistemas
                blockchain es de 15-20 transacciones por segundo.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Flexibilidad</h3>
              <span>
                EOSIO permite adaptabilidad para redes públicas y privadas, y
                puede ser hecha a la medida de acuerdo a los requisitos del
                equipo. Esta tecnología blockchain ofrece baja latencia, lo que
                quiere decir que un usuario no tendrá que esperar mucho tiempo
                para que una transacción se complete, resultando en una mejor
                experiencia de usuario.
              </span>
            </div>
          </div>

          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Costo eficiente</h3>
              <span>
                EOSIO ofrece un modelo de costos flexible y favorable que
                elimina la necesidad de tarifas por transacciones. Este modelo
                es ideal para desarrolladores que buscan una solución con bajos
                costos operativos pero que aun así ofrezca una experiencia
                gratuita para el usuario.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Eco-amigable</h3>
              <span>
                El mecanismo de consenso DPoS permite una solución blockchain
                sostenible que requiere menos electricidad para correr nodos y
                confirmar transacciones. Por ejemplo, EOSIO es 66.000 veces más
                eficiente en energía que Bitcoin y 17.000 veces más eficiente en
                energía que Ethereum.
              </span>
            </div>
          </div>
          <div className={styles.enterpriceTitleBox}>
            <h2>Rápida adopción</h2>
            <span>
              Los desarrolladores de contratos inteligentes en EOSIO usan C++,
              un lenguaje de programación general con amplia adopción, lo que
              elimina la necesidad de aprender nuevos lenguajes para empezar a
              implementar la tecnología. Además, existen varios recursos de
              aprendizaje disponibles en línea y una comunidad de apoyo
              dinámica.
            </span>
          </div>
          <div className={styles.btnBox}>
            <span>Le ayudamos a explorar la tecnología EOSIO.</span>
            <a className={styles.mainButton} href="#contactUs">
              Contáctenos
            </a>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.industryBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.industryTitleBox}>
            <h1>Nuestros proyectos</h1>
          </div>
          <div className={styles.industryColWrapper}>
            <div className={styles.industryColBox}>
              <div>
                <div className={styles.svgBox}>
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
                </div>
                <h3>LatamLink</h3>
                <span>
                  Somos parte de una alianza regional, liderada por compañías
                  tecnológicas de Latinoamérica para ofrecer un testnet basado
                  en EOSIO a la iniciativa LACChain, un programa para acelerar
                  el desarrollo del ecosistema blockchain de la región.
                </span>
              </div>
              <a
                className={styles.mainButton}
                href="https://latamlink.io/"
                target="_blank"
              >
                Leer más
              </a>
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={styles.svgBox}>
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
                </div>
                <h3>Lifebank</h3>
                <span>
                  Una app de código abierto basada en blockchain para incentivar
                  las donaciones de sangre al crear un círculo virtuoso de valor
                  entre donantes, bancos de sangre y negocios locales, e
                  impulsada por una economía interna de tokens. Proyecto ganador
                  de la competencia “Coding for Change” de block.one.
                </span>
              </div>
              <a
                className={styles.mainButton}
                href="https://lifebank.io/"
                target="_blank"
              >
                Leer más
              </a>
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={styles.svgBox}>
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
                </div>
                <h3>SMARTGATE</h3>
                <span>
                  Una plataforma basada en blockchain que brinda soluciones para
                  entradas y salidas de puertos para la industria de logística
                  de contenedores y transmisión en tiempos real de datos
                  requeridos para el intercambio de carga.
                </span>
              </div>
              <a
                className={styles.mainButton}
                href="https://smartgate.tech/"
                target="_blank"
              >
                Leer más
              </a>
            </div>
          </div>
          <div className={styles.btnBox}>
            <span>
              Puede ver más de nuestros proyectos más recientes{" "}
              <strong>aquí.</strong>
            </span>
          </div>
        </ContentSection>
        <ContactUsForm />
      </main>
    </Layout>
  );
};

export default About;
