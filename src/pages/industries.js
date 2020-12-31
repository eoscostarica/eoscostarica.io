import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Accordion from "./components/Accordion";
import styles from "./styles.module.css";
import useStyles from "./styles.module.js";

const Industries = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Box className={styles.mainContainer}>
        <Box className={clsx("container", styles.noPadding)}>
          <Box
            className={clsx(
              styles.insdustryTopBox
            )}
          >
            <Box>
              <img
                className={styles.logoMobile}
                src={useBaseUrl("img/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
              <Box className={classes.sectionHero}>
                <Box className={classes.titleBox}>
                  <Typography className={classes.h1}>Blockchain Solutions</Typography>
                  <Typography className={classes.h1}>by Industry</Typography>
                </Box>
                  <Typography className={classes.body1}>
                    Organizations and companies in many industries deploy blockchain
                    technology to solve significant problems and improve their
                    operations. These are some use cases of enterprise blockchain in
                    different sectors, such as financial, supply chain, gaming, and
                    healthcare.
                  </Typography>
                <Box className={classes.buttonBox}>
                  <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")}>
                    Contact us
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={clsx(styles.sectionWhite, styles.knowEOSCRBox)}>
            <Box className={clsx(styles.knowRowBox, styles.colReverse)}>
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
              <Box className={styles.industriesBlockSection}>
                <Typography className={classes.body1}>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing with encryption to reduce data breaches.
                  Blockchain may also promote alternate financial applications,
                  such as new liquidity solutions and microloans management, and
                  improved payment structures.
                </Typography>
                <a className={classes.a} target="_blank">
                  Read More
                </a>
              </Box>
            </Box>
            <Box className={clsx(styles.knowRowBox, styles.colReverse)}>
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
              <Box className={styles.industriesBlockSection}>
                <Typography className={classes.body1}>
                  In an industry that involves dozens of stakeholders, the
                  capabilities of blockchain and smart contracts for traceability,
                  authorizations management, and automation can make a great ally.
                  Blockchain can integrate different technologies, such as IoT and
                  AI, to create comprehensive solutions and streamline processes
                  in the logistics and supply chain industry.
                </Typography>
                <a className={classes.a} target="_blank">
                  Read More
                </a>
              </Box>
            </Box>
            <Box className={clsx(styles.knowRowBox, styles.colReverse)}>
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
              <Box className={styles.industriesBlockSection}>
                <Typography className={classes.body1}>
                  The gaming industry is booming—nearly 40% of the total world's
                  population play video games. Blockchain enables a better way to
                  transfer, valorize, and collect digital in-game assets. Its
                  capabilities to increase security and offer a more efficient way
                  for transactions can level-up online gaming.
                </Typography>
                <a className={classes.a} target="_blank">
                  Read More
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            className={clsx(styles.industriesBlockchainBox)}
          >
            <Box className={styles.enterpriceTitleBox}>
              <Typography className={classes.h2}>Blockchain in More Industries</Typography>
            </Box>
            <Box className={clsx(styles.colBox)}>
              <Accordion
                title="Asset Managementy"
                content={
                  <Typography className={classes.body1}>
                    Blockchain technology enables an immutable and secure way to
                    tokenize and manage tangible and intangible assets. Some
                    opportunities include innovative liquidity options and reduced
                    management costs.
                  </Typography>
                }
              />
              <Accordion
                title="Decentralized Finance"
                content={
                  <Typography className={classes.body1}>
                    Also known as DeFi, decentralized finance leverages blockchain
                    technology to explore new liquidity opportunities for
                    citizens. Our team is part of evodex, an open-source DeFi app.
                  </Typography>
                }
              />
            </Box>
            <Box className={styles.colBox}>
              <Accordion
                title="Digital Identity"
                content={
                  <Typography className={classes.body1}>
                    Blockchain allows an immutable, transparent, and secure system
                    to manage digital identities that can interconnect with IoT,
                    biometrics, and enterprise management systems.
                  </Typography>
                }
              />
              <Accordion
                title="Energy"
                content={
                  <Typography className={classes.body1}>
                    Blockchain offers an efficient and transparent way to improve
                    the operations, distribution, and data management for energy
                    companies. Decentralized networks may help promote sustainable
                    and private energy generation alternatives.
                  </Typography>
                }
              />
            </Box>
            <Box className={styles.colBox}>
              <Accordion
                title="Media and Entertainment"
                content={
                  <Typography className={classes.body1}>
                    The blockchain’s capabilities to securely and immutably store
                    registries can help reduce piracy and disputes. Also,
                    blockchain can protect IP and improve traceability of payments
                    and content distribution.
                  </Typography>
                }
              />
              <Accordion
                title="Government"
                content={
                  <Typography className={classes.body1}>
                    Government institutions can deploy blockchain technology to
                    leverage its transparency and immutability features to
                    increase trust between the public sector and the citizens. It
                    also allows a cost-efficient way to register data and
                    accountability.
                  </Typography>
                }
              />
            </Box>
            <Box className={styles.colBox}>
              <Accordion
                title="Healthcare and Insurance"
                content={
                  <Typography className={classes.body1}>
                    Blockchain technology offers improved efficiency,
                    traceability, and security to store medical and other
                    sensitive data from patients. Smart contracts help reduce
                    costs for insurance claims processing.
                  </Typography>
                }
              />
              <Accordion
                title="Legal Tech"
                content={
                  <Typography className={classes.body1}>
                    Smart contracts are computer codes that can execute
                    automatically and autonomously according to the contract
                    terms. These may transform legal processes by adding
                    transparency, efficiency, and immutable registries.
                  </Typography>
                }
              />
            </Box>
            <Box className={styles.colBox}>
              <Accordion
                title="Real Estate"
                content={
                  <Typography className={classes.body1}>
                    Leverage real estate investments with blockchain technology by
                    creating new business models. Blockchain helps integrate
                    digital assets for liquidity and streamline investor relations
                    and portfolio management.
                  </Typography>
                }
              />

              <Accordion
                title="Sports"
                content={
                  <Typography className={classes.body1}>
                    Blockchain in sports offers a great way to increase fan
                    engagement, promote active participation in decision-making,
                    and monetize through new streams such as player content and
                    collectibles.
                  </Typography>
                }
              />
            </Box>
          </Box>
          <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
            <Box className={clsx(styles.enterpriceTitleBox)}>
              <Box className={classes.titleBox}>
                <Typography className={classes.h2}>
                  Choosing an Enterprise Blockchain
                </Typography>
              </Box>
              <Typography className={classes.body1}>
                There are several enterprise blockchain platforms in the market
                with different characteristics and capabilities. The following is
                a list of some key features you must consider when choosing what
                blockchain platform is the most suitable for your organization:
              </Typography>
            </Box>
            <Box className={styles.enterpriceTitleBox}>
              <Box className={clsx(styles.colBox, styles.flexContent)}>
                <Box className={styles.flexBox}>
                  <Box>
                    <Box className={classes.h3Box}>
                      <Typography className={classes.h3}>Privacy and transparency</Typography>
                    </Box>
                    <Typography className={classes.body1}>
                      How are the blockchain’s security and confidentiality
                      protocols different from others’, and how does it handle
                      transparency?
                    </Typography>
                  </Box>
                  <Box>
                    <br></br>
                    <Box className={classes.h3Box}>
                      <Typography className={classes.h3}>Cost-efficiency</Typography>
                    </Box>
                    <Typography className={classes.body1}>
                      Would the organization see a significant reduction in costs
                      by integrating smart contracts or simplifying the data
                      sharing process?
                    </Typography>
                  </Box>
                  <Box>
                    <br></br>
                    <Box className={classes.h3Box}>
                      <Typography className={classes.h3}>Quick adoption</Typography>
                    </Box>
                    <Typography className={classes.body1}>
                      Can your team use their experience with programming
                      languages, or do they need to learn a new one?
                    </Typography>
                  </Box>
                  <Box>
                  <br></br>
                    <Box className={classes.h3Box}>
                      <Typography className={classes.h3}>Speed or throughput</Typography>
                    </Box>
                    <Typography className={classes.body1}>
                      How quickly does your solution need to be? Are you a
                      high-frequency trading company, or can you afford longer
                      block confirmation times?
                    </Typography>
                  </Box>
                </Box>
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
              </Box>
            </Box>
            <Box className={styles.btnBox}>
              <Button 
                className={classes.buttonPrimary}
                href={useBaseUrl("/contact-us")}>
                  Contact us
              </Button>
            </Box>
          </Box>
          <Box className={clsx(styles.sectionGray, styles.enterpriceBox)}>
            <Box
              className={clsx(
                styles.enterpriceTitleBox,
                styles.deplyblockchainBox
              )}
            >
              <Box className={classes.titleBox}>
                <Typography className={classes.h2}>Additional Resources</Typography>
              </Box>
              <Typography className={classes.body1}>
                Find more interesting reads and resources to continue learning
                about enterprise blockchain and EOSIO.
              </Typography>
              <br></br>
              <Box className={styles.colBox}>
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
              </Box>
              <Box className={styles.colBox}>
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Industries;
