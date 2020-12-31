import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../theme/index';

import styles from "./styles.module.css";
import useStyles from "../css/styles.js"

const OurProjects = () => {
  const classes = useStyles()
  return (
    <Layout>
      <ThemeProvider theme={Theme}>
        <Box className={styles.mainContainer}>
          <Box className={clsx("container", styles.noPadding)}>
            <Box
              className={clsx(
                styles.topBox,
                styles.projectsTopBox
              )}
            >
              <Box>
                <img
                  className={styles.logoMobile}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
                <Box className={styles.titleBox}>
                  <Typography variant="h1">Enterprise Blockchain Use Cases</Typography>
                </Box>
                <Typography variant="body1">Get to Know Our Latest Projects</Typography>
                <Box>
                  <Button
                    className={classes.buttonPrimary}
                    href={useBaseUrl("/contact-us")}>
                      Contact us
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className={clsx(styles.sectionWhite, styles.knowEOSCRBox)}>
              <Box className={clsx(styles.knowRowBox, styles.colReverse)}>
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
                <Box>
                  <Typography variant="h3">LatamLink</Typography>
                  <Typography variant="body1">
                    We are part of this voluntary regional alliance, led by Latin
                    American technology companies to offer an EOSIO-based testnet to
                    the LACChain initiative, a program to accelerate the development
                    of the blockchain ecosystem in the region.
                  </Typography>
                  <Button 
                    className={classes.buttonPrimary}
                    href="https://latamlink.io/" target="_blank">
                      Read More
                  </Button>
                </Box>
              </Box>
              <Box className={clsx(styles.knowRowBox, styles.colReverse)}>
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
                <Box>
                  <Typography variant="h3">Lifebank</Typography>
                  <Typography variant="body1">
                    An open-source blockchain-based app that incentivizes blood
                    donations by creating a virtuous circle of value between donors,
                    blood banks, and local businesses, leveraged by a token economy.
                    Winner of the "Coding for Change" challenge by block.one.
                  </Typography>
                  <Button 
                    className={classes.buttonPrimary}
                    href="https://lifebank.io/" target="_blank">
                      Read More
                  </Button>
                </Box>
              </Box>
              <Box className={clsx(styles.knowRowBox, styles.colReverse)}>
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
                <Box>
                  <Typography variant="h3">SMARTGATE</Typography>
                  <Typography variant="body1">
                    A blockchain-based platform that provides solutions for in-out
                    gate activity for the container industry and real-time
                    transmission of relevant data required for proper interchange in
                    port logistics
                  </Typography>
                  <Button 
                    className={classes.buttonPrimary}
                    href="https://smartgate.tech/" target="_blank">
                      Read More
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className={clsx(
                styles.sectionGray,
                styles.industryBox,
                styles.flexColumn
              )}
            >
              <Box className={styles.industryTitleBox}>
                <Typography variant="h2">Other Projects</Typography>
              </Box>
              <Box className={styles.industryColWrapper}>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">Enterprise EOSIO Forum</Typography>
                    <Typography variant="body1">
                      We are part of the Enterprise EOSIO Forum, a community-driven
                      initiative to discuss enterprise blockchain solutions
                      deploying EOSIO technology.
                    </Typography>
                  </Box>
                </Box>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">EOS Foundation</Typography>
                    <Typography variant="body1">
                      We are part of the EOS Foundation proof of concept. It is an
                      autonomous, decentralized, non-profit organization that will
                      enable self-representation and promotion of the EOS community.
                    </Typography>
                  </Box>
                </Box>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">EOS Rate</Typography>
                    <Typography variant="body1">
                      EOS Rate is an open- source app that allows EOS token holders
                      to access a rating system and voting portal for block
                      producers and proxies in the EOS blockchain.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.industryColWrapper}>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">EOSIO Dashboard</Typography>
                    <Typography variant="body1">
                      The EOSIO Dashboard is an open-source project that allows
                      users to visualize the rewards distribution along the EOS
                      network to seek accountability and transparency.
                    </Typography>
                  </Box>
                </Box>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">Evodex</Typography>
                    <Typography variant="body1">
                      Evodex is the front-end user interface for a liquidity pool
                      protocol where users vote on the pool liquidity fees and pay
                      zero gas. We were in charge of UX and front-end design.
                    </Typography>
                  </Box>
                </Box>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">Undisclosed enterprise project</Typography>
                    <Typography variant="body1">
                      We developed an app for a US-based client in the accounting
                      and tax industry for improved traceability of intercompany
                      transactions.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.industryColWrapper}>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">Notario Digital</Typography>
                    <Typography variant="body1">
                      Notario Digital is an open- source project that generates a
                      hash of any file to register it immutably on an EOSIO network.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default OurProjects;
