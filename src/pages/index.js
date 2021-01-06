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
import useStyles from "../css/styles.js"

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
      <Box className={"container"}>
        {!isMobile && 
          <Box className={"sectionHero"}>
          <Box className={"titleBox"}>
              <h1>Enterprise Blockchain Solutions</h1>
              <h1>That Fit Your Needs</h1>
          </Box>
          <p >Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs.</p>
          <p>Start transforming your organization by leveraging enterprise blockchain networks.</p>
          <Box className={"buttonBox"}>
            <button className={"buttonPrimary"} href={useBaseUrl("/services")}  >Learn More</button>
          </Box>
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
              <h1>Solutions That</h1>
              <h1>Fit Your Needs</h1>
          </Box>
          <p>Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs.</p>
          <br/>
          <p>Start transforming your organization by leveraging enterprise blockchain networks.</p>
          <Box className={"buttonBoxMobile"}>
            <button className={"buttonPrimary"} href={useBaseUrl("/services")} >Learn More</button>
          </Box>
        </Box>
      }
      </Box>
    )
  } 

  const BlockchainCanDo = () => {
    return (
      <Box className={"container"}>
          <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
            <Box className={"titleBox"}>
                <h2>What Enterprise</h2>
                <h2>Blockchain Can Do?</h2>
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>Improve transparency and traceability</h3>
                </Box>
                <p>
                  A blockchain registers transactions in chronological order,
                  enabling full traceability of data that can be accessed in
                  near real-time. These registries are immutable, meaning they
                  cannot be altered, thus offering higher transparency in
                  processes.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3 >Boost efficiency and reduce costs</h3>
                </Box>
                <p>
                  Smart contracts in blockchain technology allow improved
                  efficiency for operations. A smart contract is a protocol that
                  executes automatically and autonomously according to its
                  terms, cutting the middleman and reducing paperwork and
                  transaction costs.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>Enhance security and trust</h3>
                </Box>
                <p>
                  Blockchain’s encryption capabilities offer new layers of
                  privacy and security for registering data. A blockchain is
                  decentralized, so ledgers are shared by a network of
                  computers, minimizing cyberattacks, enabling better management
                  of authorizations, and increasing trust among parties.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>Integrate with other technologies</h3>
                </Box>
                <p>
                  We define blockchain as a fundamental technology that can
                  leverage other techs from the industry 4.0. For instance,
                  machine learning, robotics, and VR can integrate blockchain
                  into their solutions to record large amounts of data.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
  }

  const WhatWeDo = () => {
    return (
      <Box className={"containerGray"}>
        <Box className={"sectionPadding"}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box className={"titleBox"}>
              <h2>What We Do</h2>
            </Box>
            <p>
              We make the most of enterprise blockchain technology and design
              solutions for the real world. Our team offers services tailored
              to our clients’ needs and expectations.{" "}
              <a href={useBaseUrl("/contact-us")}>Contact us</a> and get the conversation
              started!
            </p>
            <Box className={"accordionBox"}>
              <Box style={{marginBottom:'5px'}}>
                <Accordion square expanded={expanded === 'panel_SoftDev'}  onChange={handleChange('panel_SoftDev')} className={"accordion"} style={{backgroundColor:'#f1f1f1',boxShadow:'none'}} >
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h3>Software Development</h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0}}>
                    <p>
                      Our value proposition is to develop blockchain-based
                      software to solve real-life problems. We have experience
                      working with large global enterprises and SMEs, government
                      entities and NGOs, and open-source projects across many
                      industries. We adapt to our clients’ budgets and needs,
                      without compromising thought leadership or quality. Our team
                      is technology agnostic but specializes in the open-source
                      blockchain technology EOSIO, launched by leading company
                      block.one.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box style={{marginBottom:'5px'}}>
                <Accordion square expanded={expanded === 'panel_BlockInfrac'}  onChange={handleChange('panel_BlockInfrac')} className={"accordion"} style={{backgroundColor:'#f1f1f1',boxShadow:'none'}}>
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h3>Blockchain Infrastructure</h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0}}>
                    <p>
                      We offer top-grade infrastructure for blockchain networks
                      and API endpoints from our datacenter in San José, Costa
                      Rica. Costa Rica is a country with high political stability
                      and a long-lasting democracy. Our strategic location in the
                      middle of the American continent offers convenient network
                      interconnectivity. We also configure, host, and maintain
                      blockchain nodes available for private and public networks
                      with 24/7 monitoring and uptime. Read more about this.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Box style={{marginBottom:'5px'}}>
                <Accordion square expanded={expanded === 'panel_Education'}  onChange={handleChange('panel_Education')} className={"accordion"} style={{backgroundColor:'#f1f1f1',boxShadow:'none',borderColor:'s\\#f1f1f1'}}>
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h3>Education and Training</h3>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0}}>
                    <p>
                      In today’s world, new technologies are leading the way to
                      transform many industries. We offer workshops on blockchain
                      and EOSIO to C-suite executives and teams that want to keep
                      up to date and learn more about what is blockchain and
                      enterprise use cases. We also provide training and education
                      resources for new talents that wish to kickstart their
                      career in blockchain.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
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
      <Box className={"container"}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
            <h2>Industries to Deploy Enterprise Blockchain</h2>
          </Box>
          <p>
            Blockchain can transform and remodel countless industries. The
            possibilities are endless. Do you still don’t know how blockchain
            can impact your operations? Contact us so we can guide you!
          </p>
          <Box className={"spacingBox"}>
            <Grid container spacing={5}>
              <Grid item md={4}>
                <Box className={"imgBox"}>
                  <img src={useBaseUrl("img/payments.svg")} />
                </Box>
                <Box className={"h3Box"}>
                  <h3>Payments and Transfers</h3>
                </Box>
                <p>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing with encryption to reduce data breaches.
                </p>
              </Grid>
              <Grid item md={4}>
                <Box className={"imgBox"}>
                  <img src={useBaseUrl("img/logistics.svg")} />
                </Box>
                <Box className={"h3Box"}>
                  <h3>Logistics and Supply Chain</h3>
                </Box>
                <p>
                  In an industry that involves dozens of stakeholders, the
                  capabilities of blockchain and smart contracts for
                  traceability, authorizations management, and automation can
                  make a great ally.
                </p>
              </Grid>
              <Grid item md={4}>
                <Box className={"imgBox"}>
                  <img src={useBaseUrl("img/gaming.svg")} />
                </Box>
                <Box className={"h3Box"}>
                  <h3>Gaming</h3>
                </Box>
                <p>
                  Blockchain enables a better way to transfer, valorize, and
                  collect digital in-game assets. Also, its capabilities to
                  increase security and offer a more efficient way for
                  transactions can level-up online gaming.
                </p>
              </Grid>
            </Grid>
          </Box>
          <p>
            The features of blockchain make it a fundamental technology,
            meaning it can adapt to other technologies and most industries.
            Blockchain can boost efficiency, security, and trust when
            recording transactions, registering data and managing digital
            assets. Also, it can automate and facilitate processes, reducing
            costs and inefficiencies.{" "}
            <a href={useBaseUrl("/industries")}>Discover more industries</a>{" "}
            that can leverage their operations on blockchain technology.
          </p>
        </Box>
      </Box>
    )
  }

  const Inquieres = () => {
    return (
      <Box  className={"containerBlack"}>
        <Box className={"sectionNoPadding"}>
          <Grid container spacing={5}>
            {isMobile &&
                <Grid item xs={12} md={6}>
                  <img src={useBaseUrl("img/eosnodes.gif")} />
                </Grid>
            }
            <Grid item xs={12} md={6}>
              <Box className={"inquiereBox"}>
                <Box style={{width:'100%'}}>
                  <h2 className={"white"}>Do you have inquiries</h2>
                  <h2 className={"white"}>about blockchain?</h2>
                  <Box className={"buttonBox"}>
                    <button className={"buttonPrimary"} href={useBaseUrl("/contact-us")} >Contact us</button>
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
      <Box className={"container"}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
            <h2>Get to Know EOS Costa Rica</h2>
          </Box>
          <p>
            EOS Costa Rica is a spinoff of a company with over three decades
            of developing technologies. We develop blockchain-based solutions
            deploying the{" "}
            <a href="https://eos.io/" target="_blank">
              EOSIO
            </a>{" "}
            protocol, provide blockchain infrastructures, and offer training
            and workshops.
          </p>
          <br/>
          <p>
          <strong>
            <i>
              <a href={useBaseUrl("/contact-us")}>Let’s get the conversation started!</a>
            </i>
          </strong>
          </p>
          <Box className={"spacingBox"}>
            <Box className={"spacingBox"}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={"h3Box"}>
                    <h3>The Team</h3>
                  </Box>
                  <p className={"body1"}>
                      We have assembled a Latin American team with a problem-solving
                      mindset and expertise in their knowledge areas. We operate as
                      a distributed team in an Agile environment and make a
                      concerted effort to hire talent outside of urban areas to
                      support tech careers in rural regions.
                  </p>
                </Grid>
                <Grid item md={6}>
                  <Box className={"imgBoxRight"}>
                    <img
                      className={"imgKnow"}
                      src={useBaseUrl("img/team.webp")}
                    />
                  </Box>  
                </Grid>
              </Grid>
            </Box>
            <Box className={"spacingBox"}>
              <Grid container spacing={5}>
                {!isMobile && 
                  <Grid item md={6}>
                    <Box className={"imgBoxLeft"}>
                      <img
                        className={"imgKnow"}
                        src={useBaseUrl("img/company.webp")}
                      />
                    </Box>  
                  </Grid>
                }
                <Grid item md={6}>
                  <Box className={"h3Box"}>
                    <h3>The company</h3>
                  </Box>
                  <p>
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
                  </p>
                </Grid>
                {isMobile && 
                  <Grid item md={6}>
                    <Box className={"imgBoxLeft"}>
                      <img
                        className={"imgKnow"}
                        src={useBaseUrl("img/company.webp")}
                      />
                    </Box>  
                  </Grid>
                }
              </Grid>
            </Box>
            <Box className={"spacingBox"}>
              <Grid container spacing={5} >
                <Grid item md={6}>
                  <Box className={"h3Box"}>
                    <h3>The technology</h3>
                  </Box>
                  <p>
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
                  </p>
                </Grid>
                <Grid item md={6}>
                  <Box className={"imgBoxRight"}>
                    <img
                      className={"imgKnow"}
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
      <Box className={clsx("container",{["containerGray"] : isMobile, ["containerWithBackground"] : isMobile})}>
        <Box className={"sectionPadding"} >
          <Box className={"h3Box"}>
            <h3 style={{textAlign:'center'}}>We Are One Group</h3>
          </Box>
          <Box className={"spacingBox"}>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Box className={"imgBoxLogos"}>
                  <img
                    alt="LatamLink"
                    src={useBaseUrl("img/Group47.svg")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={"imgBoxLogos"}>
                  <img
                    alt="Edenia"
                    src={useBaseUrl("img/Group17.svg")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={"imgBoxLogos"}>
                  <img
                    alt="Eossurf"
                    src={useBaseUrl("img/Group11.svg")}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className={"imgBoxLogos"}>
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
      <Box className={"container"}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
              <h2 >Some of Our Projects</h2>
          </Box>
          <p>
            Get to know some of our latest projects deploying the EOSIO
            blockchain protocol.
            <a href={useBaseUrl("/projects")}>Visit the full list here.</a>
          </p>
          <Box className={"doubleSpacingBox"}>
            <Box className={"spacingBox"}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={"imgBoxLeft"}>
                    <img
                      className={"imgProjects"}
                      src={useBaseUrl("img/latamlink2.webp")}
                    />
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className={"h3Box"}>
                    <h3>LatamLink</h3>
                  </Box>
                  <p>
                    We are part of this voluntary regional alliance, led by Latin
                    American technology companies to offer an EOSIO-based testnet
                    to the{" "}
                    <a href="https://www.lacchain.net/" target="_blank">
                      LACChain
                    </a>{" "}
                    initiative, a program to accelerate the development of the
                    blockchain ecosystem in the region.
                  </p>
                  <p>
                    <a href="https://latamlink.io/" target="_blank">
                      Read more.
                    </a>
                  </p>
                </Grid>
              </Grid>
            </Box>
            <Box className={"spacingBox"}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={"imgBoxLeft"}>
                    <img
                      className={"imgProjects"}
                      src={useBaseUrl("img/lifebank.webp")}
                    />
                  </Box> 
                </Grid>
                <Grid item md={6}>
                  <Box className={"h3Box"}>
                    <h3>Lifebank</h3>
                  </Box>
                  <p>
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
                  </p>
                  <p>
                    <a href=" https://lifebank.io/" target="_blank">
                      Read more.
                    </a>
                  </p>
                </Grid>
              </Grid>
            </Box>
            <Box className={"spacingBox"}>
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className={"imgBoxLeft"}>
                      <img
                        className={"imgProjects"}
                        src={useBaseUrl("img/smartgate.webp")}
                      />
                  </Box> 
                </Grid>
                <Grid item md={6}>
                  <Box className={"h3Box"}>
                    <h3>SMARTGATE</h3>
                  </Box>
                  <p>
                    A blockchain-based platform that provides solutions for in-out
                    gate activity for the container industry and real-time
                    transmission of relevant data required for proper interchange
                    in port logistics.
                  </p>
                  <p>
                    <a href="https://smartgate.tech/" target="_blank">
                      Read more.
                    </a>
                  </p>
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
                  <button className={"buttonPrimary"} href={useBaseUrl("/contact-us")} >Contact us</button>
                </Box>
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
          <Background className={"bgParallaxSecondary"}>
              <Box className={"imgParallax"} />
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