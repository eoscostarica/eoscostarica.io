import React, { useState, useEffect } from "react";
import { Parallax, Background } from 'react-parallax';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import styles from "./styles.module.css";
import useStyles from "../css/styles.js"

const Industries = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const classes = useStyles()
  const [expanded, setExpanded] = useState('panel_AssetManagementy');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  useEffect(() => {
    handleChange('panel_AssetManagementy')
  }, []);

  const HeroSection = () => {
    return (
      <Box className={classes.container}>
        {!isMobile && 
          <Box className={classes.sectionHero}>
          <Box className={classes.titleBox}>
            <Typography className={classes.h1}>Blockchain Solutions</Typography>
            <Typography className={classes.h1}>by Industry</Typography>
          </Box>
          <Typography className={classes.body1} >
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
        }
        {isMobile && 
          <Box className={classes.sectionHeroMobile}>
            <Box className={classes.logoMobileBox}>
              <img
                  className={classes.logoMobile}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
            </Box>
          <Box className={classes.titleBox}>
            <Typography className={classes.h1}>Blockchain Solutions</Typography>
            <Typography className={classes.h1}>by Industry</Typography>
          </Box>
          <Typography className={classes.body1} >
            Organizations and companies in many industries deploy blockchain
            technology to solve significant problems and improve their
            operations. These are some use cases of enterprise blockchain in
            different sectors, such as financial, supply chain, gaming, and
            healthcare.
          </Typography>
          <Box className={classes.buttonBoxMobile}>
            <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")}>
              Contact us
            </Button>
          </Box>
        </Box>
      }
      </Box>
    )
  }

  const MoreIndustries = () => {
    return (
      <Box className={classes.container}>
        <Box className={clsx(classes.section,{[classes.sectionPadding] : isMobile})}>
          <Box className={clsx( styles.knowEOSCRBox)}>
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
        </Box>
      </Box>
    )
  }

  const BlockchainMoreIndustries = () => {
    return (
      <Box className={classes.container}>
        <Box className={clsx(classes.section,{[classes.sectionPadding] : isMobile})}>
          <Box className={styles.enterpriceTitleBox}>
            <Typography className={classes.h2}>Blockchain in More Industries</Typography>
          </Box>
          <Box className={classes.accordionBox}>
            <Grid 
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Accordion square expanded={expanded === 'panel_AssetManagementy'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_AssetManagementy')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Asset Managementy</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Blockchain technology enables an immutable and secure way to
                    tokenize and manage tangible and intangible assets. Some
                    opportunities include innovative liquidity options and reduced
                    management costs.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Decentralized'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Decentralized')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Decentralized Finance</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Also known as DeFi, decentralized finance leverages blockchain
                    technology to explore new liquidity opportunities for
                    citizens. Our team is part of evodex, an open-source DeFi app.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Identity'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Identity')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Digital Identity</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Blockchain allows an immutable, transparent, and secure system
                    to manage digital identities that can interconnect with IoT,
                    biometrics, and enterprise management systems.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Energy'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Energy')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Energy</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Blockchain offers an efficient and transparent way to improve
                    the operations, distribution, and data management for energy
                    companies. Decentralized networks may help promote sustainable
                    and private energy generation alternatives.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Entertainment'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Entertainment')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Media and Entertainment</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    The blockchain’s capabilities to securely and immutably store
                    registries can help reduce piracy and disputes. Also,
                    blockchain can protect IP and improve traceability of payments
                    and content distribution.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid 
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Accordion square expanded={expanded === 'panel_Government'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Government')} className={classes.accordion} >
              <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                <Typography  className={classes.h3}>Government</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionPadding}>
                <Typography className={classes.body1}>
                  Government institutions can deploy blockchain technology to
                  leverage its transparency and immutability features to
                  increase trust between the public sector and the citizens. It
                  also allows a cost-efficient way to register data and
                  accountability.
                </Typography>
              </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Insurance'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Insurance')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Healthcare and Insurance</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Blockchain technology offers improved efficiency,
                    traceability, and security to store medical and other
                    sensitive data from patients. Smart contracts help reduce
                    costs for insurance claims processing.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Tech'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Tech')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Legal Tech</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Smart contracts are computer codes that can execute
                    automatically and autonomously according to the contract
                    terms. These may transform legal processes by adding
                    transparency, efficiency, and immutable registries.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_RealEstate'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_RealEstate')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Real Estate</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Leverage real estate investments with blockchain technology by
                    creating new business models. Blockchain helps integrate
                    digital assets for liquidity and streamline investor relations
                    and portfolio management.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Sports'} style={{backgroundColor:'#ffffff'}} onChange={handleChange('panel_Sports')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Sports</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Blockchain in sports offers a great way to increase fan
                    engagement, promote active participation in decision-making,
                    and monetize through new streams such as player content and
                    collectibles.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid> 
          </Box>
        </Box>
      </Box>
    )
  }

  const ChoosingEnterprise = () => {
    return (
      <Box className={classes.container}>
        <Box className={clsx(classes.section,{[classes.sectionPadding] : isMobile})}>
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
      </Box>
    )
  }

  const AdditionalResources = () => {
    return (
      <Box className={classes.containerGray}>
        <Box className={classes.sectionPadding}>
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
    )
  }

  return (
    <Layout>
      <Box className={classes.mainContainer}>
        {!isMobile && 
          <Parallax strength={800}>
            <Background className={classes.bgParallax}>
                <Box className={classes.imgParallax} />
            </Background>
            <HeroSection />
            <MoreIndustries />
          </Parallax>
        }
        {isMobile && 
          <>
            <HeroSection />
            <MoreIndustries />
          </>
        }
        
        {!isMobile &&
          <>
            <BlockchainMoreIndustries />
            <ChoosingEnterprise />
            <AdditionalResources />
          </>
        }
        {isMobile && 
          <>
            <BlockchainMoreIndustries />
            <ChoosingEnterprise />
            <AdditionalResources />
          </>
        } 
      </Box>
    </Layout>
  );
};

export default Industries;
