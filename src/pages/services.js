import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Accordion from "./components/Accordion";
import styles from "./styles.module.css";
import useStyles from "../css/styles.js"

const ServicePage = () => {
  const classes = useStyles()
  return (
    <Layout>
        <Box className={styles.mainContainer}>
          <Box className={clsx("container", styles.noPadding)}>
            <Box>
              <img
                className={styles.logoMobile}
                src={useBaseUrl("img/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
            <Box className={classes.sectionHero}>
              <Box className={classes.titleBox}>
                <Typography className={classes.h1}>Custom-made</Typography>
                <Typography className={classes.h1}>Blockchain Solutions</Typography>
              </Box>
                <Typography className={classes.body1}>
                  Leverage blockchain technology. Our team will help you embrace
                  the power of this innovative technology. We have years of
                  experience integrating enterprise blockchain solutions and
                  developing infrastructure for business environments.
                </Typography>
              <Box className={classes.buttonBox}>
                <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")}>
                  Contact us
                </Button>
              </Box>
            </Box>
          </Box>
            <Box
              className={clsx(
                styles.sectionGray,
                styles.serviceSecondSection,
                styles.mainBG
              )}
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
            </Box>
            <Box className={clsx(styles.knowEOSCRBox)}>
              <Box className={classes.titleBox}>
                <Typography className={classes.h2}>Blockchain Development Services</Typography>
              </Box>
              <Typography className={classes.body1}>
                Explore the possibilities that blockchain technology offers. Boost
                your operations with increased transparency, security, and
                traceability. We have experience working with large global
                enterprises and SMEs, government entities and NGOs, and
                open-source projects. Our team is technology agnostic and will
                guide you to find the ideal solution. We specialize in the
                open-source blockchain protocol{" "}
                <a className={classes.a} href="https://eos.io/" target="_blank">
                  EOSIO
                </a>
                , for its adaptability to any industry in both the private and
                public sectors. Visit our{" "}
                <a className={classes.a} href={useBaseUrl("/industries")}>industries page</a> to learn
                more
              </Typography>
              <br></br>
              <br></br>
              <br></br>
              <Box className={classes.h3Box}>
                <Typography className={classes.h3}>Enterprise Blockchain</Typography>
              </Box>
              <Typography className={classes.body1}>
                EOS Costa Rica deploys blockchain technology to design enterprise
                solutions that can integrate with other systems. Blockchain
                enables the deployment of smart contracts – computer codes that
                can execute automatically and autonomously. Smart contracts allow
                improved efficiency and can reduce transaction-related costs.
                Learn more about enterprise blockchain:
              </Typography>
              <Box className={styles.colBox}>
                <Accordion
                  title="Boosted efficiency"
                  content={
                    <Typography className={classes.body1}>
                      Smart contracts can help you process transactions quickly,
                      with added efficiency compared to cloud platforms, and less
                      costly by reducing administrative fees by cutting the
                      middleman.
                    </Typography>
                  }
                />
                <Accordion
                  title="Improved security"
                  content={
                    <Typography className={classes.body1}>
                      The immutability and encryption capabilities of blockchain
                      can reduce data manipulation, human error, and cyber frauds.
                      Blockchains use hash functions – created by a mathematical
                      function that transforms input data into code lines – that
                      make blockchains difficult to hack.
                    </Typography>
                  }
                />
              </Box>
              <Box className={styles.colBox}>
                <Accordion
                  title="Added transparency"
                  content={
                    <Typography className={classes.body1}>
                      Blockchain enables a transparent and near real-time registry
                      of data that can improve the trust and traceability of
                      processes, such as in supply chain or insurance claims
                      processing.
                    </Typography>
                  }
                />
                <Accordion
                  title="Enhanced auditability"
                  content={
                    <Typography className={classes.body1}>
                      A permissioned blockchain allows an organization to control
                      accesses and authorizations across the network, increasing
                      accountability among the team, and facilitating auditability
                      by external parties.
                    </Typography>
                  }
                />
              </Box>
            </Box>
            <Box className={styles.inquiresBox}>
              <Typography className={clsx(classes.h2, classes.white)}>
                Do you still have questions on how to integrate blockchain into
                your operations?
              </Typography>
              <Box className={classes.buttonBox}>
                <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")} >Contact us</Button>
              </Box>
            </Box>
            <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
              <Box className={clsx(styles.enterpriceTitleBox)}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>A Solution-based Approach</Typography>
                </Box>
                <Typography className={classes.body1}>
                  EOS Costa Rica leverages a cross-functional team that follows an
                  Agile methodology. We seek efficiency and collaboration and
                  prioritize the customer’s needs to develop solutions that add
                  value to their end- users. Also, we adapt to our clients’
                  budgets, without compromising thought leadership or quality.
                  Learn more about our work style:
                </Typography>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>User-centered approach</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We focus on the user. We understand the importance of user
                    research to identify their pain points and needs. Good
                    research helps us know who the user is to find the best
                    solution to specific problems.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Adaptability and innovation</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We continually explore the newest trends in blockchain
                    technology to better serve our clients. Also, we offer an
                    open, unlimited platform that enables developers to innovate.
                  </Typography>
                </Box>
              </Box>

              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <br></br>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Agile methodology</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We deploy an Agile approach that stimulates cross-functional
                    collaboration, flexibility, and adaptability to encourage
                    constant improvement.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                <br></br>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Dynamic tech stack</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We deploy the optimum tech stack available to leverage the
                    blockchain protocol we use, which we call the “EOS Dream
                    Stack.” It allows us to explore further the many assets this
                    technology offers.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.enterpriceTitleBox}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Our Process from Start to Finish</Typography>
                </Box>
                <Typography className={classes.body1}>
                  When working on a project, our team follows a combination of
                  Design Thinking, Lean UX, and Agile methodologies. Applying
                  Design Thinking helps us understand the users’ needs and pain
                  points, define a specific problem, and experiment to find
                  potential solutions. Lean UX allows us to learn faster,
                  repeatedly iterate until the product fits its purpose, or pivot
                  entirely when the focus shifts. Moreover, Agile methodology
                  allows us to work flexibly on sprints towards developing
                  user-centered solutions.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.inquiresBox}>
              <Typography className={clsx(classes.h2, classes.white)}>
                Do you want to learn more about our blockchain development
                process?
              </Typography>
              <Box className={classes.buttonBox}>
                <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")} >Contact us</Button>
              </Box>
            </Box>
            <Box
              className={clsx(
                styles.sectionGray,
                styles.enterpriceBox,
                styles.flexColumn
              )}
            >
              <Box className={clsx(styles.enterpriceTitleBox)}>
                <Box className={classes.titleBox}>
                  <Typography className={classes.h2}>Blockchain Infrastructure</Typography>
                </Box>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Top-notch Blockchain Infrastructure</Typography>
                </Box>
                <Typography className={classes.body1}>
                  Blockchains operate as decentralized peer-to-peer networks where
                  a number of computers or “nodes” are interconnected to one
                  another. These nodes keep a copy of the registers and act as
                  validators of new transactions. These features make it critical
                  to building robust infrastructure networks that comply with the
                  blockchain's requirements.
                </Typography>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Blockchain nodes development</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We configure, host, and maintain blockchain nodes and networks
                    for private and public use with 24/7 monitoring and uptime.
                    This allows any organization to deploy a network according to
                    their requirements and needs.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Ready-to-use infrastructure</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    Also, we developed a robust, top-grade infrastructure ready to
                    host blockchain networks for our clients and open-source
                    projects from our datacenter.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <br></br>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>API endpoints</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    Our datacenter network also enables the installation of API
                    endpoints between blockchains and other tech stacks. An API
                    endpoint is a touchpoint of communication and interaction
                    between an API (Application Program Interface) and a server.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                <br></br>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Experience deploying networks</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We have partnered with local public and multilateral
                    development institutions to participate in developing
                    blockchain networks and blockchain-as-a-service platforms.
                  </Typography>
                </Box>
              </Box>

              <Box className={styles.enterpriceTitleBox}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>A Strategic Location</Typography>
                </Box>
                <Typography className={classes.body1}>
                  Our datacenter, located in San José, Costa Rica, is
                  strategically located in the middle of the American continent,
                  allowing convenient network interconnectivity. Costa Rica offers
                  high political stability, a long-lasting democracy, high
                  education ranks, and flexible corporate structure – all
                  appropriate for decentralized networks. These are some of the
                  advantages that this country may add to your infrastructure:
                </Typography>
                <Box className={clsx(styles.colBox, styles.flexContent)}>
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

                  <Box className={styles.accordionBox}>
                    <Accordion
                      title="Network interconnectivity"
                      content={
                        <Typography className={classes.body1}>
                          Costa Rica has shores in both the Pacific and Atlantic
                          oceans and connects three submarine fiber optic cables –
                          ARCOS-1, MAYA-1, and Pan American Crossing (PAC) – that
                          provide the majority of the bandwidth in the country.
                          This interconnection provides real-time fail-over and
                          redundancy to our infrastructure. Costa Rica is part of
                          the six Central American nations interconnected via a
                          terrestrial fiber-optic network (REDCA). Additionally,
                          having direct connections to all upstream carriers
                          allows the country’s network to prevent single-point
                          failures.
                        </Typography>
                      }
                    />
                    <Accordion
                      title="Stable political framework"
                      content={
                        <Typography className={classes.body1}>
                          Costa Rica is a country that values Human Rights, Peace,
                          and Democracy. The country is one of the most stable and
                          longest-lasting Democracies in America. Costa Rica
                          abolished its army in 1948 to promote education and
                          wellbeing and stands out on equality and innovation.
                          Moreover, the Inter-American Institute of Human Rights
                          based its headquarters in San José.
                        </Typography>
                      }
                    />
                    <Accordion
                      title="Environmental awareness"
                      content={
                        <Typography className={classes.body1}>
                          Despite being a small country, Costa Rica houses more
                          than 4% of the world’s biodiversity. The country’s
                          leaders have been promoting ecology and sustainable
                          development. Leading by example, more than 26% of its
                          territory comprises of protected areas and National
                          Parks.
                        </Typography>
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.inquiresBox}>
              <Typography className={clsx(classes.h2, classes.white)}>Start leveraging the power of blockchain infrastructures.</Typography>
              <Box className={classes.buttonBox}>
                <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")} >Contact us</Button>
              </Box>
            </Box>
            <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
              <Box className={styles.enterpriceTitleBox}>
                <Typography className={classes.h2}>Education and Training</Typography>
                <Box className={styles.colBox}>
                  <Box className={styles.flexBox}>
                    <Accordion
                      title="Executive Workshops"
                      content={
                        <Typography className={classes.body1}>
                          We know that innovative technologies, such as
                          blockchain, may have a steep learning curve. So, we
                          offer workshops on blockchain and EOSIO technology to
                          C-suite executives and teams that want to keep up to
                          date and learn more about blockchain and enterprise use
                          cases. These workshops include multimodal content such
                          as videos, lectures, and use cases. Download the course
                          information here.
                        </Typography>
                      }
                    />
                    <Accordion
                      title="Training for Developers"
                      content={
                        <Typography className={classes.body1}>
                          We also provide training and education resources for new
                          talents that wish to kickstart their career in
                          blockchain and in the EOSIO protocol. We have assembled
                          a web portal that includes learning materials and guides
                          for developers. Check them out here. Also, ask us about
                          our training courses for companies and teams.
                        </Typography>
                      }
                    />
                    <Accordion
                      title="Community Building"
                      content={
                        <Typography className={classes.body1}>
                          We help promote the blockchain and EOSIO ecosystems by
                          hosting and attending community activities. We also
                          speak about blockchain and participate in events related
                          to technology and innovation. Every year, we host a
                          team-building event called EOSurf that takes our
                          operations to the beach for several days to switch
                          computers and code for surf and yoga lessons.
                        </Typography>
                      }
                    />
                  </Box>
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
                </Box>
              </Box>
            </Box>
            <Box
              className={clsx(
                styles.enterpriceBox,
                styles.flexColumn
              )}
            >
              <Box
                className={clsx(
                  styles.enterpriceTitleBox,
                  styles.deplyblockchainBox
                )}
              >
                <Box className={classes.titleBox}>
                  <Typography className={classes.h2}>
                    How Can Your Industry Deploy Blockchain?
                  </Typography>
                </Box>
                <Typography className={classes.body1}>
                  Blockchain technology has the capabilities to transform many
                  industries, including:
                </Typography>
                <Box className={styles.contentDefaultImg}>
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
                </Box>
                <Typography className={classes.body1}>
                  Learn more about other industries that blockchain is
                  transforming. <a className={classes.a} href={useBaseUrl("/industries")}>Read more.</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
    </Layout>
  );
};

export default ServicePage;
