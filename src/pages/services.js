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
            <h1>Custom-made</h1>
            <h1>Blockchain Solutions</h1>
          </div>
          <span>
            Leverage blockchain technology. Our team will help you embrace the
            power of this innovative technology. We have years of experience
            integrating enterprise blockchain solutions and developing
            infrastructure for business environments.
          </span>
          <a className={styles.mainButton} href={useBaseUrl("/about")}>
            Learn more
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
          <h1>Blockchain Development Services</h1>
          <span>
            Explore the possibilities that blockchain technology offers. Boost
            your operations with increased transparency, security, and
            traceability. We have experience working with large global
            enterprises and SMEs, government entities and NGOs, and open-source
            projects. Our team is technology agnostic and will guide you to find
            the ideal solution. We specialize in the open-source blockchain
            protocol{" "}
            <a href="https://eos.io/" target="_blank">
              EOSIO
            </a>
            , for its adaptability to any industry in both the private and
            public sectors. Visit our{" "}
            <a href={useBaseUrl("/industries")}>industries page</a> to learn
            more
          </span>
          <h2>Enterprise Blockchain</h2>
          <span>
            EOS Costa Rica deploys blockchain technology to design enterprise
            solutions that can integrate with other systems. Blockchain enables
            the deployment of smart contracts – computer codes that can execute
            automatically and autonomously. Smart contracts allow improved
            efficiency and can reduce transaction-related costs. Learn more
            about enterprise blockchain:
          </span>
          <div className={styles.colBox}>
            <Accordion
              title="Boosted efficiency"
              content={
                <span>
                  Smart contracts can help you process transactions quickly,
                  with added efficiency compared to cloud platforms, and less
                  costly by reducing administrative fees by cutting the
                  middleman.
                </span>
              }
            />
            <Accordion
              title="Improved security"
              content={
                <span>
                  The immutability and encryption capabilities of blockchain can
                  reduce data manipulation, human error, and cyber frauds.
                  Blockchains use hash functions – created by a mathematical
                  function that transforms input data into code lines – that
                  make blockchains difficult to hack.
                </span>
              }
            />
          </div>
          <div className={styles.colBox}>
            <Accordion
              title="Added transparency"
              content={
                <span>
                  Blockchain enables a transparent and near real-time registry
                  of data that can improve the trust and traceability of
                  processes, such as in supply chain or insurance claims
                  processing.
                </span>
              }
            />
            <Accordion
              title="Enhanced auditability"
              content={
                <span>
                  A permissioned blockchain allows an organization to control
                  accesses and authorizations across the network, increasing
                  accountability among the team, and facilitating auditability
                  by external parties.
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
            Do you still have questions on how to integrate blockchain into your
            operations?
          </h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contact us
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
            <h2 className={styles.titleH1}>A Solution-based Approach</h2>
            <span>
              EOS Costa Rica leverages a cross-functional team that follows an
              Agile methodology. We seek efficiency and collaboration and
              prioritize the customer’s needs to develop solutions that add
              value to their end- users. Also, we adapt to our clients’ budgets,
              without compromising thought leadership or quality. Learn more
              about our work style:
            </span>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>User-centered approach</h3>
              <span>
                We focus on the user. We understand the importance of user
                research to identify their pain points and needs. Good research
                helps us know who the user is to find the best solution to
                specific problems.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Adaptability and innovation</h3>
              <span>
                We continually explore the newest trends in blockchain
                technology to better serve our clients. Also, we offer an open,
                unlimited platform that enables developers to innovate.
              </span>
            </div>
          </div>

          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Agile methodology</h3>
              <span>
                We deploy an Agile approach that stimulates cross-functional
                collaboration, flexibility, and adaptability to encourage
                constant improvement.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Dynamic tech stack</h3>
              <span>
                We deploy the optimum tech stack available to leverage the
                blockchain protocol we use, which we call the “EOS Dream Stack.”
                It allows us to explore further the many assets this technology
                offers.
              </span>
            </div>
          </div>
          <div className={styles.enterpriceTitleBox}>
            <h2>Our Process from Start to Finish</h2>
            <span>
              When working on a project, our team follows a combination of
              Design Thinking, Lean UX, and Agile methodologies. Applying Design
              Thinking helps us understand the users’ needs and pain points,
              define a specific problem, and experiment to find potential
              solutions. Lean UX allows us to learn faster, repeatedly iterate
              until the product fits its purpose, or pivot entirely when the
              focus shifts. Moreover, Agile methodology allows us to work
              flexibly on sprints towards developing user-centered solutions.
            </span>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.inquiresBox}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>
            Do you want to learn more about our blockchain development process?
          </h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contact us
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
            <h1>Blockchain Infrastructure</h1>
            <h2>Top-notch Blockchain Infrastructure</h2>
            <span>
              Blockchains operate as decentralized peer-to-peer networks where a
              number of computers or “nodes” are interconnected to one another.
              These nodes keep a copy of the registers and act as validators of
              new transactions. These features make it critical to building
              robust infrastructure networks that comply with the blockchain's
              requirements.
            </span>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Blockchain nodes development</h3>
              <span>
                We configure, host, and maintain blockchain nodes and networks
                for private and public use with 24/7 monitoring and uptime. This
                allows any organization to deploy a network according to their
                requirements and needs.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Ready-to-use infrastructure</h3>
              <span>
                Also, we developed a robust, top-grade infrastructure ready to
                host blockchain networks for our clients and open-source
                projects from our datacenter.
              </span>
            </div>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>API endpoints</h3>
              <span>
                Our datacenter network also enables the installation of API
                endpoints between blockchains and other tech stacks. An API
                endpoint is a touchpoint of communication and interaction
                between an API (Application Program Interface) and a server.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Experience deploying networks</h3>
              <span>
                We have partnered with local public and multilateral development
                institutions to participate in developing blockchain networks
                and blockchain-as-a-service platforms.
              </span>
            </div>
          </div>

          <div className={styles.enterpriceTitleBox}>
            <h3>A Strategic Location</h3>
            <span>
              Our datacenter, located in San José, Costa Rica, is strategically
              located in the middle of the American continent, allowing
              convenient network interconnectivity. Costa Rica offers high
              political stability, a long-lasting democracy, high education
              ranks, and flexible corporate structure – all appropriate for
              decentralized networks. These are some of the advantages that this
              country may add to your infrastructure:
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
                  title="Network interconnectivity"
                  content={
                    <span>
                      Costa Rica has shores in both the Pacific and Atlantic
                      oceans and connects three submarine fiber optic cables –
                      ARCOS-1, MAYA-1, and Pan American Crossing (PAC) – that
                      provide the majority of the bandwidth in the country. This
                      interconnection provides real-time fail-over and
                      redundancy to our infrastructure. Costa Rica is part of
                      the six Central American nations interconnected via a
                      terrestrial fiber-optic network (REDCA). Additionally,
                      having direct connections to all upstream carriers allows
                      the country’s network to prevent single-point failures.
                    </span>
                  }
                />
                <Accordion
                  title="Stable political framework"
                  content={
                    <span>
                      Costa Rica is a country that values Human Rights, Peace,
                      and Democracy. The country is one of the most stable and
                      longest-lasting Democracies in America. Costa Rica
                      abolished its army in 1948 to promote education and
                      wellbeing and stands out on equality and innovation.
                      Moreover, the Inter-American Institute of Human Rights
                      based its headquarters in San José.
                    </span>
                  }
                />
                <Accordion
                  title="Environmental awareness"
                  content={
                    <span>
                      Despite being a small country, Costa Rica houses more than
                      4% of the world’s biodiversity. The country’s leaders have
                      been promoting ecology and sustainable development.
                      Leading by example, more than 26% of its territory
                      comprises of protected areas and National Parks.
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
          <h1>Start leveraging the power of blockchain infrastructures.</h1>
          <a href="#contactUs" className={styles.mainButton}>
            Contact us
          </a>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.enterpriceTitleBox}>
            <h1>Education and Training</h1>
            <div className={styles.colBox}>
              <div className={styles.flexBox}>
                <Accordion
                  title="Executive Workshops"
                  content={
                    <span>
                      We know that innovative technologies, such as blockchain,
                      may have a steep learning curve. So, we offer workshops on
                      blockchain and EOSIO technology to C-suite executives and
                      teams that want to keep up to date and learn more about
                      blockchain and enterprise use cases. These workshops
                      include multimodal content such as videos, lectures, and
                      use cases. Download the course information here.
                    </span>
                  }
                />
                <Accordion
                  title="Training for Developers"
                  content={
                    <span>
                      We also provide training and education resources for new
                      talents that wish to kickstart their career in blockchain
                      and in the EOSIO protocol. We have assembled a web portal
                      that includes learning materials and guides for
                      developers. Check them out here. Also, ask us about our
                      training courses for companies and teams.
                    </span>
                  }
                />
                <Accordion
                  title="Community Building"
                  content={
                    <span>
                      We help promote the blockchain and EOSIO ecosystems by
                      hosting and attending community activities. We also speak
                      about blockchain and participate in events related to
                      technology and innovation. Every year, we host a
                      team-building event called EOSurf that takes our
                      operations to the beach for several days to switch
                      computers and code for surf and yoga lessons.
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
              How Can Your Industry Deploy Blockchain?
            </h1>
            <span>
              Blockchain technology has the capabilities to transform many
              industries, including:
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
              Learn more about other industries that blockchain is transforming.{" "}
              <a href={useBaseUrl("/industries")}>Read more.</a>
            </span>
          </div>
        </ContentSection>
        <ContactUsForm />
      </main>
    </Layout>
  );
};

export default ServicePage;
