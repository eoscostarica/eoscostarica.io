import React from "react";
import { useHistory } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import clsx from "clsx";
import Grid from '@material-ui/core/Grid';
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const OurProjects = () => {
  const history = useHistory();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const HeroSection = () => {
    return (
      <Box className={"containerSec"}>
        {!isMobile && 
          <Box className={"sectionHero"}>
          <Box className={"titleBox"}>
              <h1>Enterprise Blockchain</h1>
              <h1>Use Cases</h1>
          </Box>
          <p >
            Over the past years, we have helped organizations in
            both the public and private sectors learn and explore the benefits of EOSIO blockchain
            technology. From improving the way a company registers cross-border transactions to
            ensuring immutable traceability of logistics operations, our team has developed top-notch
            solutions to real-world problems. Get to know our latest projects.
          </p>
        </Box>
        }
        {isMobile && 
          <Box className={"sectionHeroMobile"}>
            <Box className={"logoMobileBox"}>
              <img
                  className={"logoMobile"}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
            </Box>
          <Box className={"titleBox"}>
              <h1>Enterprise Blockchain </h1>
              <h1>Use Cases</h1>
          </Box>
          <p >
            Over the past years, we have helped organizations in
            both the public and private sectors learn and explore the benefits of EOSIO blockchain
            technology.
          </p>
          <br/>
          <p>
            From improving the way a company registers cross-border transactions to
            ensuring immutable traceability of logistics operations, our team has developed top-notch
            solutions to real-world problems. Get to know our latest projects.
          </p>
        </Box>
      }
      </Box>
    )
  } 


  const Projects = () => {
    return (
      <Box className={clsx("containerSec", "reduceDobleMarginTop")}>
        <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
          <Grid container spacing={5}>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >LatamLink</h3>
              </Box>
              <p>
                We are part of this voluntary regional alliance, led by Latin
                American technology companies to offer an EOSIO-based testnet to
                the LACChain initiative, a program to accelerate the development
                of the blockchain ecosystem in the region.
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '50px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >Lifebank</h3>
              </Box>
              <p>
                An open-source blockchain-based app that incentivizes blood
                donations by creating a virtuous circle of value between donors,
                blood banks, and local businesses, leveraged by a token economy.
                Winner of the "Coding for Change" challenge by block.one.
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >SMARTGATE</h3>
              </Box>
              <p>
                A blockchain-based platform that provides solutions for in-out
                gate activity for the container industry and real-time
                transmission of relevant data required for proper interchange in
                port logistics.
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >Enterprise EOSIO Forum</h3>
              </Box>
              <p>
                We are part of the Enterprise EOSIO Forum, a community-driven
                initiative to discuss enterprise blockchain solutions
                deploying EOSIO technology.
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >EOS Foundation</h3>
              </Box>
              <p>
                We are part of the EOS Foundation proof of concept. It is an
                autonomous, decentralized, non-profit organization that will
                enable self-representation and promotion of the EOS community.
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >EOS Rate</h3>
              </Box>
              <p>
                EOS Rate is an open- source app that allows EOS token holders
                to access a rating system and voting portal for block
                producers and proxies in the EOS blockchain.
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >EOSIO Dashboard</h3>
              </Box>
              <p>
                The EOSIO Dashboard is an open-source project that allows
                users to visualize the rewards distribution along the EOS
                network to seek accountability and transparency.
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >Evodex</h3>
              </Box>
              <p>
                Evodex is the front-end user interface for a liquidity pool
                protocol where users vote on the pool liquidity fees and pay
                zero gas. We were in charge of UX and front-end design.
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >Undisclosed enterprise project</h3>
              </Box>
              <p>
                We developed an app for a US-based client in the accounting
                and tax industry for improved traceability of intercompany
                transactions.
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="LatamLink"
                  src={useBaseUrl("img/Group47.svg")}
                />
              </Box>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"h3Box"}>
                <h3 >Notario Digital</h3>
              </Box>
              <p>
                Notario Digital is an open-source project that generates a
                hash of any file to register it immutably on an EOSIO network.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  return (
    <Layout>
      <Box className={"mainContainer"}>
        {!isMobile && 
          <Parallax strength={800}>
            <Background className={"bgParallax"}>
                <Box className={"imgParallax"} />
            </Background>
            <HeroSection />
            <Projects/>
          </Parallax>
        }
        {isMobile && 
          <>
            <HeroSection />
            <Projects/>
          </>
        } 
      </Box>
    </Layout>
  );
};

    /*
    <Layout>
      <Box className={styles.mainContainer}>
        <Box className={clsx("container", styles.noPadding)}>
          <Box
            className={clsx(
              styles.projectsTopBox
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
                  <Typography className={classes.h1}>
                    Enterprise Blockchain Use Cases
                  </Typography>                    
                </Box>
                  <Typography className={classes.body1}>
                    Get to Know Our Latest Projects
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
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>LatamLink</Typography>
                </Box>
                <Typography className={classes.body1}>
                  We are part of this voluntary regional alliance, led by Latin
                  American technology companies to offer an EOSIO-based testnet to
                  the LACChain initiative, a program to accelerate the development
                  of the blockchain ecosystem in the region.
                </Typography>
                <a className={classes.a} href="https://latamlink.io/" target="_blank">
                  Read more
                </a>
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
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Lifebank</Typography>
                </Box>
                <Typography className={classes.body1}>
                  An open-source blockchain-based app that incentivizes blood
                  donations by creating a virtuous circle of value between donors,
                  blood banks, and local businesses, leveraged by a token economy.
                  Winner of the "Coding for Change" challenge by block.one.
                </Typography>
                <a className={classes.a} href="https://lifebank.io/" target="_blank">
                  Read more
                </a>
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
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>SMARTGATE</Typography>
                </Box>
                <Typography className={classes.body1}>
                  A blockchain-based platform that provides solutions for in-out
                  gate activity for the container industry and real-time
                  transmission of relevant data required for proper interchange in
                  port logistics
                </Typography>
                <a className={classes.a} href="https://smartgate.tech/" target="_blank">
                  Read more
                </a>
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
              <Typography className={classes.h2}>Other Projects</Typography>
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
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Enterprise EOSIO Forum</Typography>
                  </Box>
                  <Typography className={classes.body1}>
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
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>EOS Foundation</Typography>
                  </Box>
                  <Typography className={classes.body1}>
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
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>EOS Rate</Typography>
                  </Box>
                  <Typography className={classes.body1}>
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
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>EOSIO Dashboard</Typography>
                  </Box>
                  <Typography className={classes.body1}>
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
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Evodex</Typography>
                  </Box>
                  <Typography className={classes.body1}>
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
                  <Box className={classes.h3Box}>
                    <Typography style={{marginTop: '-6px'}} className={classes.h3}>Undisclosed enterprise project</Typography>
                  </Box>
                  <Typography style={{marginTop: '-19px'}} className={classes.body1}>
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
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Notario Digital</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    Notario Digital is an open- source project that generates a
                    hash of any file to register it immutably on an EOSIO network.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
    */

export default OurProjects;
