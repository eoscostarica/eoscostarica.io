import React, { useState, useEffect } from "react";
import { Parallax, Background } from 'react-parallax';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import WhatWeDoSvg from "./SvgComponents/WhatWeDo";
import useStyles from "./styles.module.js"



const Home = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState('panel_SoftDev');
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  useEffect(() => {
    handleChange('panel_SoftDev')
  }, []);


  const HeroSection = () => {
    return (
      <Box className={classes.container}>
        {!isMobile && 
          <Box className={classes.sectionHero}>
          <Box className={classes.titleBox}>
              <Typography className={classes.h1}>Enterprise Blockchain Solutions</Typography>
              <Typography className={classes.h1}>That Fit Your Needs</Typography>
          </Box>
          <Typography className={classes.body1} >Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs.</Typography>
          <Typography className={classes.body1} >Start transforming your organization by leveraging enterprise blockchain networks.</Typography>
          <Box className={classes.buttonBox}>
            <Button className={classes.buttonPrimary} href={useBaseUrl("/services")} >Learn More</Button>
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
              <Typography className={classes.h1}>Enterprise Blockchain </Typography>
              <Typography className={classes.h1}>Solutions That</Typography>
              <Typography className={classes.h1}>Fit Your Needs</Typography>
          </Box>
          <Typography className={classes.body1} >Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs.</Typography>
          <br/>
          <Typography className={classes.body1} >Start transforming your organization by leveraging enterprise blockchain networks.</Typography>
          <Box className={classes.buttonBoxMobile}>
            <Button className={classes.buttonPrimary} href={useBaseUrl("/services")} >Learn More</Button>
          </Box>
        </Box>
      }
      </Box>
    )
  } 

  const BlockchainCanDo = () => {
    return (
      <Box className={classes.container}>
          <Box className={clsx(classes.section,{[classes.sectionPadding] : isMobile})}>
            <Box className={classes.titleBox}>
                <Typography className={classes.h2}>What Enterprise</Typography>
                <Typography className={classes.h2}>Blockchain Can Do?</Typography>
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Improve transparency and traceability</Typography>
                </Box>
                <Typography  className={classes.body1}>
                  A blockchain registers transactions in chronological order,
                  enabling full traceability of data that can be accessed in
                  near real-time. These registries are immutable, meaning they
                  cannot be altered, thus offering higher transparency in
                  processes.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Boost efficiency and reduce costs</Typography>
                </Box>
                <Typography  className={classes.body1}>
                  Smart contracts in blockchain technology allow improved
                  efficiency for operations. A smart contract is a protocol that
                  executes automatically and autonomously according to its
                  terms, cutting the middleman and reducing paperwork and
                  transaction costs.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Enhance security and trust</Typography>
                </Box>
                <Typography  className={classes.body1}>
                  Blockchain’s encryption capabilities offer new layers of
                  privacy and security for registering data. A blockchain is
                  decentralized, so ledgers are shared by a network of
                  computers, minimizing cyberattacks, enabling better management
                  of authorizations, and increasing trust among parties.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Integrate with other technologies</Typography>
                </Box>
                <Typography  className={classes.body1}>
                  We define blockchain as a fundamental technology that can
                  leverage other techs from the industry 4.0. For instance,
                  machine learning, robotics, and VR can integrate blockchain
                  into their solutions to record large amounts of data.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
  }

  const WhatWeDo = () => {
    return (
      <Box className={classes.containerGray}>
        <Box className={classes.sectionPadding}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box className={classes.titleBox}>
              <Typography  className={classes.h2}>What We Do</Typography>
            </Box>
            <Typography  className={classes.body1}>
              We make the most of enterprise blockchain technology and design
              solutions for the real world. Our team offers services tailored
              to our clients’ needs and expectations.{" "}
              <a href={useBaseUrl("/contact-us")}>Contact us</a> and get the conversation
              started!
            </Typography>
            <Box className={classes.accordionBox}>
              <Accordion square expanded={expanded === 'panel_SoftDev'}  onChange={handleChange('panel_SoftDev')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Software Development</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    Our value proposition is to develop blockchain-based
                    software to solve real-life problems. We have experience
                    working with large global enterprises and SMEs, government
                    entities and NGOs, and open-source projects across many
                    industries. We adapt to our clients’ budgets and needs,
                    without compromising thought leadership or quality. Our team
                    is technology agnostic but specializes in the open-source
                    blockchain technology EOSIO, launched by leading company
                    block.one.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_BlockInfrac'}  onChange={handleChange('panel_BlockInfrac')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Blockchain Infrastructure</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    We offer top-grade infrastructure for blockchain networks
                    and API endpoints from our datacenter in San José, Costa
                    Rica. Costa Rica is a country with high political stability
                    and a long-lasting democracy. Our strategic location in the
                    middle of the American continent offers convenient network
                    interconnectivity. We also configure, host, and maintain
                    blockchain nodes available for private and public networks
                    with 24/7 monitoring and uptime. Read more about this.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion square expanded={expanded === 'panel_Education'}  onChange={handleChange('panel_Education')} className={classes.accordion} >
                <AccordionSummary className={classes.accordionPadding} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                  <Typography  className={classes.h3}>Education and Training</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionPadding}>
                  <Typography className={classes.body1}>
                    In today’s world, new technologies are leading the way to
                    transform many industries. We offer workshops on blockchain
                    and EOSIO to C-suite executives and teams that want to keep
                    up to date and learn more about what is blockchain and
                    enterprise use cases. We also provide training and education
                    resources for new talents that wish to kickstart their
                    career in blockchain.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          {!isMobile && 
            <Grid item  md={6}>
              <Box style={{paddingLeft:'50px'}}>
                <WhatWeDoSvg />
              </Box>  
            </Grid>
          }
        </Grid>
        </Box>
      </Box>
    )
  }

  const EnterpriseBlockchain = () => {
    return (
      <Box className={classes.container}>
        <Box className={classes.sectionPadding}>
          <Box className={classes.titleBox}>
            <Typography className={classes.h2}>Industries to Deploy Enterprise Blockchain</Typography>
          </Box>
          <Typography className={classes.body1}>
            Blockchain can transform and remodel countless industries. The
            possibilities are endless. Do you still don’t know how blockchain
            can impact your operations? Contact us so we can guide you!
          </Typography>
          <Box className={classes.spacingBox}>
            <Grid container spacing={5}>
              <Grid item md={4}>
                <Box className={classes.imgBox}>
                  <img src={useBaseUrl("img/payments.svg")} />
                </Box>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Payments and Transfers</Typography>
                </Box>
                <Typography className={classes.body1}>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing with encryption to reduce data breaches.
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Box className={classes.imgBox}>
                  <img src={useBaseUrl("img/logistics.svg")} />
                </Box>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Logistics and Supply Chain</Typography>
                </Box>
                <Typography className={classes.body1}>
                  In an industry that involves dozens of stakeholders, the
                  capabilities of blockchain and smart contracts for
                  traceability, authorizations management, and automation can
                  make a great ally.
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Box className={classes.imgBox}>
                  <img src={useBaseUrl("img/gaming.svg")} />
                </Box>
                <Box className={classes.h3Box}>
                  <Typography className={classes.h3}>Gaming</Typography>
                </Box>
                <Typography className={classes.body1}>
                  Blockchain enables a better way to transfer, valorize, and
                  collect digital in-game assets. Also, its capabilities to
                  increase security and offer a more efficient way for
                  transactions can level-up online gaming.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Typography className={classes.body1}>
            The features of blockchain make it a fundamental technology,
            meaning it can adapt to other technologies and most industries.
            Blockchain can boost efficiency, security, and trust when
            recording transactions, registering data and managing digital
            assets. Also, it can automate and facilitate processes, reducing
            costs and inefficiencies.{" "}
            <a href={useBaseUrl("/industries")}>Discover more industries</a>{" "}
            that can leverage their operations on blockchain technology.
          </Typography>
        </Box>
      </Box>
    )
  }

  const Inquieres = () => {
    return (
      <Box  className={classes.containerBlack}>
        <Box className={classes.sectionNoPadding}>
          <Grid container spacing={5}>
            {isMobile &&
                <Grid item xs={12} md={6}>
                  <img src={useBaseUrl("img/eosnodes.gif")} />
                </Grid>
            }
            <Grid item xs={12} md={6}>
              <Box className={classes.inquiereBox}>
                <Box style={{width:'100%'}}>
                  <Typography className={clsx(classes.h2, classes.white)}>Do you have inquiries</Typography>
                  <Typography className={clsx(classes.h2, classes.white)}>about blockchain?</Typography>
                  <Box className={classes.buttonBox}>
                    <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")} >Contact us</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {!isMobile &&
              <Grid item md={6}>
                <img src={useBaseUrl("img/eosnodes.gif")} />
              </Grid>
            }
          </Grid>
        </Box>
      </Box>
    )
  }

  const GetToKnow = () => {
    return (
      <Box className={classes.container}>
        <Box className={classes.sectionPadding}>
          <Box className={classes.titleBox}>
            <Typography className={classes.h2}>Get to Know EOS Costa Rica</Typography>
          </Box>
          <Typography className={classes.body1}>
            EOS Costa Rica is a spinoff of a company with over three decades
            of developing technologies. We develop blockchain-based solutions
            deploying the{" "}
            <a href="https://eos.io/" target="_blank">
              EOSIO
            </a>{" "}
            protocol, provide blockchain infrastructures, and offer training
            and workshops.
          </Typography>
          <br/>
          <Typography className={classes.body1}>
          <strong>
            <i>
              <a href={useBaseUrl("/contact-us")}>Let’s get the conversation started!</a>
            </i>
          </strong>
          </Typography>
          <Box className={classes.spacingBox}>
            <Box className={classes.spacingBox}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>The Team</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                      We have assembled a Latin American team with a problem-solving
                      mindset and expertise in their knowledge areas. We operate as
                      a distributed team in an Agile environment and make a
                      concerted effort to hire talent outside of urban areas to
                      support tech careers in rural regions.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.imgBoxRight}>
                    <img
                      className={classes.imgKnow}
                      src={useBaseUrl("img/team.webp")}
                    />
                  </Box>  
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.spacingBox}>
              <Grid container spacing={5}>
                {!isMobile && 
                  <Grid item md={6}>
                    <Box className={classes.imgBoxLeft}>
                      <img
                        className={classes.imgKnow}
                        src={useBaseUrl("img/company.webp")}
                      />
                    </Box>  
                  </Grid>
                }
                <Grid item md={6}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>The company</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    During the 1980s, we developed the first BBS in the country, a
                    precursor to the internet. After decades of offering internet
                    infrastructure, hosting, and development services, we began
                    providing infrastructure for public blockchain networks. We
                    were there during the genesis of the EOS Mainnet and started
                    deploying the{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a>{" "}
                    protocol since its launch, accruing decades of experience with
                    innovative technologies.
                  </Typography>
                </Grid>
                {isMobile && 
                  <Grid item md={6}>
                    <Box className={classes.imgBoxLeft}>
                      <img
                        className={classes.imgKnow}
                        src={useBaseUrl("img/company.webp")}
                      />
                    </Box>  
                  </Grid>
                }
              </Grid>
            </Box>
            <Box className={classes.spacingBox}>
              <Grid container spacing={5} >
                <Grid item md={6}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>The technology</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We focus on deploying{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a>{" "}
                    technology, an open-source protocol launched in 2018 by
                    leading tech company{" "}
                    <a href="https://block.one/" target="_blank">
                      block.one.
                    </a>{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a>{" "}
                    is powered by the native token EOS and offers improved
                    scalability due to its high transaction speed, flexibility in
                    public and private networks, and energy efficiency compared to
                    other blockchains, making it a more eco-friendly option.
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.imgBoxRight}>
                    <img
                      className={classes.imgKnow}
                      src={useBaseUrl("img/technology.webp")}
                    />
                  </Box>  
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box> 
    )
  }

  const WeAreOneGroup = () => {
    return (
      <Box className={clsx(classes.container,{[classes.containerGray] : isMobile, [classes.containerWithBackground] : isMobile})}>
        <Box className={classes.sectionPadding} >
          <Box className={classes.h3Box}>
            <Typography className={classes.h3} style={{textAlign:'center'}}>We Are One Group</Typography>
          </Box>
          <Box className={clsx({[classes.spacingBox] : isMobile})}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Box className={classes.imgBoxLogos}>
                  <img
                    alt="LatamLink"
                    src={useBaseUrl("img/Group47.svg")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={classes.imgBoxLogos}>
                  <img
                    alt="Edenia"
                    src={useBaseUrl("img/Group17.svg")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={classes.imgBoxLogos}>
                  <img
                    alt="Eossurf"
                    src={useBaseUrl("img/Group11.svg")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={classes.imgBoxLogos}>
                  <img
                    alt="Ticoblockchain"
                    src={useBaseUrl("img/Group55.svg")}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const SomeProjects = () => {
    return (
      <Box className={classes.container}>
        <Box className={classes.sectionPadding}>
          <Box className={classes.titleBox}>
              <Typography className={classes.h2}>Some of Our Projects</Typography>
          </Box>
          <Typography className={classes.body1}>
            Get to know some of our latest projects deploying the EOSIO
            blockchain protocol.
            <a href={useBaseUrl("/projects")}>Visit the full list here.</a>
          </Typography>
          <Box className={classes.doubleSpacingBox}>
            <Box className={classes.spacingBox}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={classes.imgBoxLeft}>
                    <img
                      className={classes.imgProjects}
                      src={useBaseUrl("img/latamlink2.webp")}
                    />
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>LatamLink</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    We are part of this voluntary regional alliance, led by Latin
                    American technology companies to offer an EOSIO-based testnet
                    to the{" "}
                    <a href="https://www.lacchain.net/" target="_blank">
                      LACChain
                    </a>{" "}
                    initiative, a program to accelerate the development of the
                    blockchain ecosystem in the region.
                  </Typography>
                  <Typography className={classes.body1}>
                    <a href="https://latamlink.io/" target="_blank">
                      Read more.
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.spacingBox}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={classes.imgBoxLeft}>
                    <img
                      className={classes.imgProjects}
                      src={useBaseUrl("img/lifebank.webp")}
                    />
                  </Box> 
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>Lifebank</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    An open-source blockchain-based app that incentivizes blood
                    donations by creating a virtuous circle of value between
                    donors, blood banks, and local businesses, leveraged by a
                    token economy. Winner of the{" "}
                    <a
                      href="https://eos.io/news/winner-of-coding-for-change- virtual-hackathon-lifebank/"
                      target="_blank"
                    >
                      “Coding for Change”
                    </a>{" "}
                    challenge by{" "}
                    <a href="https://block.one/" target="_blank">
                      block.one.
                    </a>
                  </Typography>
                  <Typography className={classes.body1}>
                    <a href=" https://lifebank.io/" target="_blank">
                      Read more.
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.spacingBox}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={classes.imgBoxLeft}>
                      <img
                        className={classes.imgProjects}
                        src={useBaseUrl("img/smartgate.webp")}
                      />
                  </Box> 
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.h3Box}>
                    <Typography className={classes.h3}>SMARTGATE</Typography>
                  </Box>
                  <Typography className={classes.body1}>
                    A blockchain-based platform that provides solutions for in-out
                    gate activity for the container industry and real-time
                    transmission of relevant data required for proper interchange
                    in port logistics.
                  </Typography>
                  <Typography className={classes.body1} >
                    <a href="https://smartgate.tech/" target="_blank">
                      Read more.
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const ContactUs = () => {
    return (
      <Box className={classes.containerGray}>
        <Box className={classes.sectionPadding}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
                <Box>
                  <Typography className={classes.h2}>Start working with us</Typography>
                  <Typography className={classes.h2}>and implement</Typography>
                  <Typography className={classes.h2}>blockchain technology.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={classes.buttonBox}>
                  <Button className={classes.buttonPrimary} href={useBaseUrl("/contact-us")} >Contact us</Button>
                </Box>
            </Grid>
          </Grid>
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
            <BlockchainCanDo />
          </Parallax>
        }
        {isMobile && 
          <>
            <HeroSection />
            <BlockchainCanDo />
          </>
        } 
        <WhatWeDo />
        <EnterpriseBlockchain />
        <Inquieres />
        {!isMobile && 
        <Parallax strength={800}>
          <GetToKnow />
          <WeAreOneGroup />
          <Background className={classes.bgParallaxSecondary}>
              <Box className={classes.imgParallax} />
          </Background>
          <SomeProjects />
        </Parallax>
        }
        {isMobile && 
          <>
            
            <GetToKnow />
            <WeAreOneGroup />
            <SomeProjects />
          </>
        } 
        <ContactUs />
      </Box>
    </Layout>
  );
};

export default Home;