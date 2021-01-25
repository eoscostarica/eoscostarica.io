import React from "react";
import { useHistory } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import clsx from "clsx";
import Grid from '@material-ui/core/Grid';
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import { useMediaQuery } from 'react-responsive'

const OurProjects = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isDesktop = useMediaQuery({ query:'(min-width: 767px)'})

  const HeroSection = () => {
    return (
      <Box className={"containerSec"}>
        {isDesktop && 
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
              <p>
                <a href="http://latamlink.io/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="Lifebank"
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
              <p>
                <a href="http://lifebank.io/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="SMARTGATE"
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
              <p>
                <a href="https://smartgate.tech/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="Enterprise EOSIO Forum"
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
              <p>
                <a href="https://www.linkedin.com/company/enterprise-eosio-forum/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="EOS Foundation"
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
              <p>
                <a href="http://eos-foundation.eosio.cr/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="EOS Rate"
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
              <p>
                <a href="https://eosrate.io/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="EOSIO Dashboard"
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
              <p>
                <a href="https://mainnet.eosio.cr/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="Evodex"
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
              <p>
                <a href="https://evodex.io/" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{marginBottom: '50px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="Undisclosed enterprise project"
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
              <p>
                <a target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
            <Grid style={{backgroundColor: 'rgba(241, 241, 241, 0.5)', paddingBottom: '70px'}} item xs={12} md={6}>
              <Box className={"imgBoxProjects"}>
                <img
                  alt="Notario Digital"
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
              <p>
                <a href="https://notarize.eosio.cr/dashboard/notary" target="_blank">
                  Read more
                </a>
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const ContactUs = () => {
    return (
      <Box className={"containerGray"}>
        <Box className={"sectionPadding"}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
                <Box>
                  <h2>Start working with us</h2>
                  <h2>and implement</h2>
                  <h2>blockchain technology.</h2>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={"buttonBox"}>
                <button className={"buttonPrimary"} onClick={() => history.push("/contact-us/")} >Contact us</button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  return (
    <>
      {isDesktop && 
        <Layout>
          <Box className={"mainContainer"}>
            <Parallax strength={800}>
              <Background className={"bgParallax"}>
                  <Box className={"imgParallax"} />
              </Background>
              <HeroSection/>
              <Projects/>
            </Parallax>
            <ContactUs/>
          </Box>
        </Layout>
      }
      {isMobile && 
        <Layout>
          <Box className={"mainContainer"}>
            <HeroSection/>
            <Projects/>
            <ContactUs/>
          </Box>
        </Layout>
      }
    </>
  );
};

export default OurProjects;
