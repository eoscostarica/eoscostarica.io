import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const ServicePage = () => {
  return (
    <Layout>
      <main className={styles.mainContainer}>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.topBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.titleBox}>
            <h1>Soluciones blockchain</h1>
            <h1>a la medida</h1>
          </div>
          <span>
            Potencie su organización con tecnología blockchain. Nuestro equipo
            le ayudará a explorar el poder de esta innovadora tecnología.
            Contamos con años de experiencia integrando soluciones blockchain
            empresariales y desarrollando infraestructura para fines
            empresariales.
          </span>
          <a className={styles.mainButton} href={useBaseUrl("/about")}>
            Aprenda más
          </a>
        </ContentSection>

        <ContentSection
          sectionStyle={clsx(
            styles.sectionGray,
            styles.linkProjectBox,
            styles.mainBG
          )}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.flexContent}
        >
          <picture>
            <source
              className={styles.defaultImgCarousel}
              srcSet={useBaseUrl("img/developmentServices.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.defaultImgCarousel}
              src={useBaseUrl("img/developmentServices.webp")}
            />
          </picture>
          <picture>
            <source
              className={styles.defaultImgCarousel}
              srcSet={useBaseUrl("img/blockchainInfrastructure.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.defaultImgCarousel}
              src={useBaseUrl("img/blockchainInfrastructure.webp")}
            />
          </picture>
          <picture>
            <source
              className={styles.defaultImgCarousel}
              srcSet={useBaseUrl("img/educationTraining.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.defaultImgCarousel}
              src={useBaseUrl("img/educationTraining.webp")}
            />
          </picture>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.knowEOSCRBox)}
          boxStyle={styles.noMarginTop}
        >
          <h1>Servicios de desarrollo de blockchain</h1>
          <span>
            Explore las posibilidades que ofrece la tecnología blockchain.
            Impulse sus operaciones con mayor transparencia, seguridad y
            trazabilidad. Contamos con experiencia trabajando con empresas
            globales de gran tamaño y PYMES, entidades de gobierno,
            organizaciones sin fines de lucro, y proyectos de código abierto.
            Nuestro equipo es agnóstico a la tecnología por lo que le guiaremos
            en encontrar la solución ideal. Nos especializamos en el protocolo
            blockchain de código abierto{" "}
            <a href="https://eos.io/" target="_blank">
              EOSIO
            </a>
            , por su adaptabilidad a cualquier industria en sectores público y
            privado. Visite nuestra{" "}
            <a href={useBaseUrl("/industries")}>página de industrias</a>
            para conocer más.
          </span>
          <h2>Blockchain empresarial</h2>
          <span>
            EOS Costa Rica usa tecnología blockchain para diseñar soluciones
            empresariales que se integran a otros sistemas. Blockchain permite
            la implementación de contratos inteligentes – códigos de computadora
            que se pueden ejecutar de forma automática y autónoma. Los contratos
            inteligentes permiten mayor eficiencia y reducción de costos
            asociados a transacciones. Lea más sobre blockchain empresarial:
          </span>
          <div className={styles.colBox}>
            <Accordion
              title="Mayor eficiencia"
              content={
                <span>
                  Los contratos inteligentes pueden ayudarle a procesar
                  transacciones rápidamente, con mayor eficiencia en comparación
                  a otras plataformas en la nube, y a un menor costo al reducir
                  tarifas administrativas y eliminando intermediarios.
                </span>
              }
            />
            <Accordion
              title="Mayor seguridad"
              content={
                <span>
                  Las capacidades de encriptación e inmutabilidad de blockchain
                  pueden reducir la manipulación de datos, errores causados por
                  humanos y fraudes cibernéticos. Blockchain usa funciones hash
                  – creadas por funciones matemáticas que transforman una
                  entrada de información en líneas de código – lo que hace a las
                  blockchains difíciles de hackear.
                </span>
              }
            />
          </div>
          <div className={styles.colBox}>
            <Accordion
              title="Más transparencia"
              content={
                <span>
                  Blockchain permite un registro de datos transparente y en
                  tiempo real que puede incrementar la confianza y trazabilidad
                  en los procesos, por ejemplo, logística o reclamos de seguros.
                </span>
              }
            />
            <Accordion
              title="Auditabilidad mejorada"
              content={
                <span>
                  Una blockchain permisionada permite que una organización
                  controle los accesos y autorizaciones en la red, aumentando la
                  rendición de cuentas en el equipo y facilitando la
                  auditabilidad.
                </span>
              }
            />
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.inquiresBox}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>
            ¿Aun tiene preguntas sobre cómo integrar blockchain en sus
            operaciones?
          </h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contáctenos
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
            <h2 className={styles.titleH1}>Un enfoque en soluciones</h2>
            <span>
              El equipo multidisciplinario de EOS Costa Rica implementa
              metodologías ágiles para mejores resultados. Buscamos eficiencia y
              colaboración y ponemos como prioridad las necesidades del cliente
              para desarrollar soluciones que agregan valor a los usuarios.
              Además, nos adaptamos al presupuesto del cliente sin comprometer
              el liderazgo y calidad en nuestro trabajo. Aprenda más sobre
              nuestro estilo de trabajo:
            </span>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Enfoque centrado en el usuario</h3>
              <span>
                Nos enfocamos en el usuario. Entendemos la importancia de
                investigar al usuario para identificar posibles puntos de dolor
                y necesidades. Una buena investigación nos ayuda a entender
                quién es el usuario para encontrar soluciones específicas a
                problemas.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Adaptabilidad e innovación</h3>
              <span>
                Continuamente exploramos las tendencias más novedosas en
                tecnología blockchain para dar el mejor servicio a nuestros
                clientes. Además, ofrecemos una plataforma abierta e ilimitada
                que facilita la innovación para desarrolladores.
              </span>
            </div>
          </div>

          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Metodologías ágiles</h3>
              <span>
                Implementamos un enfoque Agile (ágil) que estimula la
                colaboración entre funciones, la flexibilidad y adaptabilidad
                para fomentar la mejora en todo momento.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Tech stack dinámico</h3>
              <span>
                Implementamos el tech stack más óptimo disponible para
                aprovechar el protocolo blockchain que usamos, el cual llamamos
                “EOS Dream Stack.” Este nos permite explorar más allá los
                distintos beneficios que ofrece la tecnología.
              </span>
            </div>
          </div>
          <div className={styles.enterpriceTitleBox}>
            <h2>Nuestro proceso de principio a fin</h2>
            <span>
              Cuando trabajamos en un proyecto, nuestro equipo implementa una
              combinación de metodologías de Design Thinking, Lean UX y Agile.
              Aplicar Design Thinking nos ayuda a entender las necesidades y
              puntos de dolor de los usuarios, definir un problema específico y
              experimentar para encontrar soluciones potenciales. Lean UX nos
              permite aprender más rápidamente, iterar repetidamente hasta que
              el producto alcance su propósito o pivotear completamente cuando
              el enfoque cambia. Además, las metodologías Agile nos permiten
              trabajar con flexibilidad en sprints para desarrollar soluciones
              centradas en los usuarios.
            </span>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.inquiresBox}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>
            ¿Quiere aprender más sobre nuestro proceso de desarrollo de
            blockchain?
          </h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contáctenos
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(
            styles.sectionGray,
            styles.enterpriceBox,
            styles.flexColumn
          )}
          boxStyle={styles.noMarginTop}
        >
          <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
            <h1>Infraestructura blockchain</h1>
            <h2>Infraestructura blockchain de primer nivel</h2>
            <span>
              Las blockchains operan como redes descentralizadas entre pares en
              las que un grupo de computadoras o “nodos” se interconectan entre
              sí. Estos nodos mantienen una copia de los registros y actúan como
              validadores de nuevas transacciones. Estas características
              requieren el desarrollo de infraestructuras de redes robustas que
              cumplan con los requisitos de la blockchain.
            </span>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Desarrollo de nodos de blockchain</h3>
              <span>
                Configuramos, hospedamos y damos mantenimiento a nodos de
                blockchain y redes para usos público y privado con monitoreo y
                uptime 24/7. Esto permite a cualquier organización implementar
                redes de acuerdo a sus requisitos y necesidades.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Infraestructura lista para usar</h3>
              <span>
                Desarrollamos una infraestructura robusta y de primer nivel,
                lista para hospedar redes blockchain para nuestros clientes y
                proyectos de código abierto desde nuestro datacenter.
              </span>
            </div>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>API endpoints</h3>
              <span>
                La red de nuestro datacenter permite la instalación de API
                endpoints entre blockchains y otros tech stacks. Un API endpoint
                es un punto de contacto de comunicación e interacción entre un
                API (Prorama de Interfaz de Aplicaciones) y un servidor.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Experiencia implementando redes</h3>
              <span>
                Nos aliamos con entidades locales e instituciones multilaterales
                de desarrollo para participar en el desarrollo de redes
                blockchain y plataformas de blockchain como servicio.
              </span>
            </div>
          </div>

          <div className={styles.enterpriceTitleBox}>
            <h3>Ubicación estratégica</h3>
            <span>
              Nuestro datacenter, ubicado en San José, Costa Rica, está
              estratégicamente ubicado en el medio del continente americano,
              permitiendo así interconectividad conveniente entre redes. Costa
              Rica ofrece alta estabilidad política, una democracia de muchos
              años, altos índices de educación y una estructura corporativa
              flexible – todo esto apropiado para redes descentralizadas. Estas
              son algunas de las ventajas que este país puede añadir a su
              infraestructura:
            </span>
            <div className={clsx(styles.colBox, styles.flexContent)}>
              <picture className={styles.flexBox}>
                <source
                  className={styles.mapLocation}
                  srcSet={useBaseUrl("img/cr.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.mapLocation}
                  src={useBaseUrl("img/cr.webp")}
                />
              </picture>

              <div className={styles.accordionBox}>
                <Accordion
                  title="Interconectividad de redes"
                  content={
                    <span>
                      Costa Rica cuenta con costas en los océanos Pacífico y
                      Atlántico y conecta tres cables de fibra óptica submarinos
                      – ARCOS-1, MAYA-1 y Pan American Crossing (PAC) – los
                      cuales brindan la mayoría del ancho de banda del país.
                      Esta interconexión provee conmutación en tiempo real y
                      redundancia a nuestra infraestructura. Costa Rica es parte
                      de las seis naciones centroamericanas interconectadas por
                      una red de fibra óptica (REDCA). Adicionalmente, al tener
                      conexiones directas a portadores upstream, permite a la
                      red del país prevenir fallas de un solo punto.
                    </span>
                  }
                />
                <Accordion
                  title="Estructura política estable"
                  content={
                    <span>
                      Costa Rica valora los Derechos Humanos, la Paz y la
                      Democracia. El país es uno de los más estables y con mayor
                      historia democrática en América. Costa Rica abolió su
                      ejército en 1948 para promover la educación y el
                      bienestar, y sobresale en cuanto a equidad e innovación.
                      Además, la capital, San José, es base del Instituto
                      Interamericano de Derechos Humanos.
                    </span>
                  }
                />
                <Accordion
                  title="Conciencia ambiental"
                  content={
                    <span>
                      A pesar de ser un país pequeño, Costa Rica alberga a más
                      del 4% de la biodiversidad del planeta. Los líderes del
                      país han promovido la ecología y el desarrollo sostenible.
                      Liderando con el ejemplo, más del 26% de su territorio lo
                      componen áreas protegidas y Parques Nacionales.
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.inquiresBox}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>
            Comience a implementar el poder de las infraestructuras de
            blockchain.
          </h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contáctenos
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.enterpriceTitleBox}>
            <h1>Educación y entrenamiento</h1>
            <div className={styles.colBox}>
              <div className={styles.flexBox}>
                <Accordion
                  title="Talleres ejecutivos"
                  content={
                    <span>
                      Sabemos que tecnologías tan innovadoras como blockchain
                      pueden tener una curva de aprendizaje pronunciada. Por
                      eso, ofrecemos talleres sobre blockchain y tecnología
                      EOSIO para ejecutivos, directivos y equipos que quieran
                      mantenerse actualizados y aprender más sobre blockchain y
                      casos de uso empresariales. Estos talleres incluyen
                      contenido multimodal como videos, charlas y casos de uso.
                      Descargue la información de los cursos aquí.
                    </span>
                  }
                />
                <Accordion
                  title="Entrenamiento para desarrolladores"
                  content={
                    <span>
                      También brindamos recursos de entrenamiento y educativos
                      para nuevos talentos que quieran iniciar su carrera en
                      blockchain y el protocolo EOSIO. Recopilamos materiales de
                      aprendizaje y guías para desarrolladores en un portal web.
                      Puede acceder aquí. Además, puede consultarnos sobre
                      nuestros cursos de entrenamiento para compañías y equipos.
                    </span>
                  }
                />
                <Accordion
                  title="Desarrollo de comunidad"
                  content={
                    <span>
                      Ayudamos a promover los ecosistemas de blockchain y EOSIO
                      al organizar y asistir a actividades de la comunidad.
                      También, nos gusta hablar sobre blockchain y participar en
                      eventos relacionados a tecnología e innovación. Todos los
                      años organizamos un evento de team-building llamado EOSurf
                      en el que llevamos las operaciones a la playa por algunos
                      días para cambiar las computadores y código por sesiones
                      de yoga y surf.
                    </span>
                  }
                />
              </div>
              <picture className={clsx(styles.flexBox, styles.teamBox)}>
                <source
                  className={styles.educationImg}
                  srcSet={useBaseUrl("img/education.jp2")}
                  type="image/jp2"
                />
                <img
                  className={styles.educationImg}
                  src={useBaseUrl("img/education.webp")}
                />
              </picture>
            </div>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(
            styles.sectionGray,
            styles.enterpriceBox,
            styles.flexColumn
          )}
          boxStyle={styles.noMarginTop}
        >
          <div
            className={clsx(
              styles.enterpriceTitleBox,
              styles.deplyblockchainBox
            )}
          >
            <h1 className={styles.titleH1}>
              ¿Cómo puede su industria implementar blockchain?
            </h1>
            <span>
              La tecnología blockchain tiene las capacidades de transformar
              muchas industrias, incluyendo:
            </span>
            <div className={styles.contentDefaultImg}>
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
            <span>
              Aprenda más sobre cómo otras industrias se están transformando con
              blockchain. <a href={useBaseUrl("/industries")}>Lea aquí.</a>
            </span>
          </div>
        </ContentSection>
        <ContactUsForm />
      </main>
    </Layout>
  );
};

export default ServicePage;
