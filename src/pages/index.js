import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import WhatWeDoSvg from "./SvgComponents/WhatWeDo"
import ContactUsBanner from './components/ContactUsBanner'
import WeAreOneGroup from './components/WeAreOneGroup'

const MetaData={
  title:"Enterprise Blockchain Solutions | EOSIO",
  description:"EOS Costa Rica develops blockchain solutions. We deploy the EOSIO protocol to improve business efficiency, traceability, and transparency.",
  img:"img/metaImgBlack.png",
}

const Home = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expanded, setExpanded] = useState('panel_SoftDev')
  const history = useHistory()
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded? panel: false)
  }
  
  useEffect(() => {
    handleChange('panel_SoftDev')
  }, [])

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>Enterprise Blockchain Solutions <br /> That Fit Your Needs</h1>
          </Box>
          <p>
            Deploy EOSIO <a href="https://eoscostarica.io/blog/what-is-blockchain">blockchain technology</a> to improve transparency, boost efficiency, and reduce costs.
            Start transforming your organization by leveraging enterprise blockchain networks.
          </p>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={() => history.push("/services/")} >Explore our services</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
                <h1>Enterprise Blockchain <br /> Solutions That <br /> Fit Your Needs</h1>
            </Box>
            <p>
              Deploy EOSIO <a href="https://eoscostarica.io/blog/what-is-blockchain">blockchain technology</a> 
              to improve transparency, boost efficiency, and reduce costs. Start transforming your organization
              by leveraging enterprise blockchain networks.
            </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/services/")} >Explore our services</button>
            </Box>
          </Box>
      }
      </Box>
    )
  } 

  const BlockchainCanDo = () => {
    return (
      <Box className="containerSec">
          <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
            <Box className="titleBox">
                {isDesktop &&
                  <h2>What Enterprise Blockchain Can Do</h2>
                }
                {isMobile && 
                  <>
                    <h2>What Enterprise <br /> Blockchain Can Do</h2>
                  </> 
                }  
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h3>Improve Transparency and Traceability</h3>
                </Box>
                <p>
                  A <a href="https://eoscostarica.io/blog/what-is-blockchain">blockchain</a> registers transactions in chronological order,
                  enabling full traceability of data that can be accessed in
                  near real-time. These registries are immutable, meaning they
                  cannot be altered, thus offering higher transparency in
                  processes.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h3 >Boost Efficiency and Reduce Costs</h3>
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
                <Box className="h3Box">
                  <h3>Enhance Security and Trust</h3>
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
                <Box className="h3Box">
                  <h3>Integrate With Other Technologies</h3>
                </Box>
                <p>
                  We define blockchain as a fundamental technology that can
                  leverage other techs from the industry 4.0. For instance,
                  machine learning, robotics, and VR can integrate blockchain
                  into their solutions to record large amounts of data.
                </p>
              </Grid>
            </Grid>
            <Box className="paddingTop">
              {isDesktop &&
                <Grid justify="center" container spacing={5}>
                  <Grid item xs={12} md={7}>
                    <h3>
                      Learn more about how blockchain can improve your operations.
                    </h3>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box className="boxFlexEnd">
                      <button className={clsx("buttonSecondary","specialButton")} onClick={() => history.push("/contact-us/")} >Find Out How</button>
                    </Box>
                  </Grid>
                </Grid>
              }
              {isMobile &&
                <Grid justify='center' container>
                    <Grid item xs={11}>
                      <h4 style={{textAlign:'center'}}>
                        <b>
                        Learn more about how blockchain can improve your operations.
                        </b>
                      </h4>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="centerBox" >
                        <button className={clsx("buttonSecondary","specialButton")} onClick={() => history.push("/contact-us/")} >Find Out How</button>
                      </Box>
                    </Grid>
                  </Grid>
                }
            </Box>
          </Box>
        </Box>
    )
  }

  const WhatWeDo = () => {
    return (
      <Box className="containerGray">
        <Box className="sectionPadding">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h2>What We Do</h2>
              </Box>
              <p>
                We make the most of enterprise blockchain technology and design
                solutions for the real world. Our team offers services tailored
                to our clients’ needs and expectations.{" "}
                <a href={useBaseUrl("/contact-us")}>Contact us</a> and get the conversation
                started!
              </p>
              <Box className="accordionBox" style={{ marginTop:'20px'}}>
                <Accordion 
                  square
                  expanded={expanded === 'panel_SoftDev'} 
                  onChange={handleChange('panel_SoftDev')} 
                  className="accordion"
                  style={{backgroundColor:'#F8F8F8', boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>Software development</h4>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      Our value proposition is to develop blockchain-based
                      software to solve real-life problems. We have experience
                      working with large global enterprises and SMEs, government
                      entities and NGOs, and open-source projects across many
                      industries. We adapt to our clients’ budgets and needs,
                      without compromising thought leadership or quality. Our team
                      is technology agnostic but specializes in the open-source
                      blockchain technology <a href={"https://eos.io/"} target="_blank">EOSIO</a>, launched by leading company
                      <a href={"https://block.one/"} target="_blank"> block.one</a>.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion 
                  square
                  expanded={expanded === 'panel_BlockInfrac'}
                  onChange={handleChange('panel_BlockInfrac')}
                  className="accordion"
                  style={{backgroundColor:'#F8F8F8',boxShadow:'none'}}>
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>Blockchain infrastructure</h4>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      We offer top-grade infrastructure for blockchain networks
                      and API endpoints from our datacenter in San José, Costa
                      Rica. Costa Rica is a country with high political stability
                      and a long-lasting democracy. Our strategic location in the
                      middle of the American continent offers convenient network
                      interconnectivity. We also configure, host, and maintain
                      blockchain nodes available for private and public networks
                      with 24/7 monitoring and uptime. <a href={useBaseUrl("/the-company")} target="_blank"> Read more about this</a>.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel_Education'}  onChange={handleChange('panel_Education')} className="accordion" style={{backgroundColor:'#F8F8F8',boxShadow:'none',borderColor:'s\\#f1f1f1'}}>
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>Education and training</h4>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
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
            </Grid>
            {isDesktop && 
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
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="titleBox">
            {isDesktop &&
              <h2>Industries to Deploy Enterprise Blockchain</h2>
            }
            {isMobile && 
              <>
                <h2>Industries to Deploy <br /> Enterprise Blockchain</h2>
              </> 
            }     
          </Box>
            <Box className="spacingBox">
              <Grid container spacing={5}>
                <Grid item md={4}>
                  <Box className="imgBoxServices">
                    <img
                    src={useBaseUrl("img/icons/logistics.svg")}
                    style={{paddingTop: '25px'}}
                    className ="imageIndrustries"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Payments and Transfers</h3>
                  </Box>
                  <p>
                    Blockchain enables an efficient and secure way to register
                    transactions that can facilitate payments and offer near
                    real-time auditing with encryption to reduce data breaches. 
                    <a 
                      href={"https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-agreat-idea-e384b298a4a8"}
                      target="_blank"
                    > Read more </a>
                  </p>
                </Grid>
                <Grid item md={4}>
                  <Box className="imgBoxServices">
                    <img 
                      src={useBaseUrl("img/icons/payments.svg")}
                      style={{paddingTop: '25px'}}
                      className="imageIndrustriesLogistics"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Logistics and Supply Chain</h3>
                  </Box>
                  <p>
                    In an industry that involves dozens of 
                    stakeholders, blockchain's capabilities 
                    to manage authorizations and automate 
                    and trace operations can make a great ally.{" "}
                    <a href={"https://eoscostarica.io/blog/blockchain-logistics"}> Read more</a>
                  </p>
                </Grid>
                <Grid item md={4}>
                  <Box className="imgBoxServices">
                    <img 
                      src={useBaseUrl("img/icons/gaming.svg")}
                      style={{paddingTop: '15px'}}
                      className = "imageIndrustries"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Gaming and Esports</h3>
                  </Box>
                  <p>
                    Blockchain enables a better way to transfer, valorize, and
                    collect digital in-game assets. Also, its capabilities to
                    increase security and offer a more efficient way for
                    transactions can level-up online gaming. 
                    <a href={"https://eoscostarica.io/blog/gaming-blockchain"}> Read more</a>
                  </p>
                </Grid>
              </Grid>
            </Box>
          <p>
            <a href={useBaseUrl("/industries")}>Discover more industries </a>
            that can leverage their operations on blockchain technology.
          </p>
        </Box>
      </Box>
    )
  }

  const Inquieres = () => {
    return (
      <Box  className="containerBlack">
        <Box className="sectionNoPadding">
          <Grid container spacing={5}>
            {isMobile &&
                <Grid item xs={12} md={6}>
                  <img src={useBaseUrl("img/eosnodes.gif")} />
                </Grid>
            }
            <Grid item xs={12} md={6}>
              <Box className="inquiereBox">
                <Box style={{width:'100%'}}>
                  <h2 className={clsx("white","centerTextOnMobile")}>Do you Have Inquiries <br /> About Blockchain? </h2>
                  <Box className="buttonBox">
                    <button className="buttonPrimary" onClick={() => history.push("/contact-us/")} >Drop us a line</button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {isDesktop &&
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
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="spacingBox">
            <Box className="titleBox">
              <h2>Get to Know EOS Costa Rica</h2>
            </Box>
          </Box>
          <Box className="spacingBox">
            <Box className="spacingBox">
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className="h3Box">
                    <h3>The Team</h3>
                  </Box>
                  <p>
                      We have assembled a Latin American team with a problem-solving
                      mindset and expertise in their knowledge areas. We operate as
                      a distributed team in an Agile environment and make a
                      concerted effort to hire talent outside of urban areas to
                      support tech careers in rural regions.
                      <a href={"https://www.linkedin.com/company/eoscostarica/"} target="_blank"> Follow us on Linkedin.</a>
                  </p>
                </Grid>
                <Grid item md={6}>
                  <Box className="imgBoxRight">
                    <img
                      className="imgKnow"
                      src={useBaseUrl("img/team.png")}
                    />
                  </Box>  
                </Grid>
              </Grid>
            </Box>
            <Box className="spacingBox">
              <Grid container spacing={5}>
                {isDesktop && 
                  <Grid item md={6}>
                    <Box className="imgBoxLeft">
                      <img
                        className="imgKnow"
                        src={useBaseUrl("img/company.png")}
                      />
                    </Box>  
                  </Grid>
                }
                <Grid item md={6}>
                  <Box className="h3Box">
                    <h3>The Company</h3>
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
                    <a href={useBaseUrl("/the-company")} target="_blank"> Get to know us.</a>
                  </p>
                </Grid>
                {isMobile && 
                  <Grid item md={6}>
                    <Box className="imgBoxLeft">
                      <img
                        className="imgKnow"
                        src={useBaseUrl("img/company.png")}
                      />
                    </Box>  
                  </Grid>
                }
              </Grid>
            </Box>
            <Box className="spacingBox">
              <Grid container spacing={5} >
                <Grid item md={6}>
                  <Box className="h3Box">
                    <h3>The Technology</h3>
                  </Box>
                  <p>
                    We focus on deploying{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a> technology, an open-source protocol launched in 2018 by
                    leading tech company{" "}
                    <a href="https://block.one/" target="_blank">
                      block.one.
                    </a>{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a> is powered by the native token EOS and offers improved
                    scalability due to its high transaction speed, flexibility in
                    public and private networks, and energy efficiency compared to
                    other blockchains, making it a more eco-friendly option.
                  </p>
                </Grid>
                <Grid item md={6}>
                  <Box className="imgBoxRight">
                    <img
                      className="imgKnow"
                      src={useBaseUrl("img/technology.png")}
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


  const SomeProjects = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("sectionNoPadding",{["sectionPadding"]: isMobile})}>
          <Box className="titleBox">
              <h2 >Some of Our Projects</h2>
          </Box>
          <Box className="spacingBox"> 
            <p>
              Get to know some of our latest projects deploying the EOSIO blockchain protocol.
              <a href={useBaseUrl("/projects")} target="_blank"> Visit the full list here.</a>
            </p>
          </Box>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box className="projectsGridLeft">
                  <Box className="imgBoxProjects">
                    <img
                      alt="LatamLink"
                      className="sizeImageTheCompany"
                      src={useBaseUrl("img/logos/Group47.svg")}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid  item xs={12} md={6}>
                <Box className="projectsGridRight">
                  <Box className="h3Box">
                    <h3 >LatamLink</h3>
                  </Box>
                  <p>
                    We are part of this voluntary regional alliance, led by Latin
                    American technology companies to offer an EOSIO-based testnet to
                    the <a href="https://www.lacchain.net/" target="_blank"> LACChain</a>{" "} 
                    initiative, a program to accelerate the development
                    of the blockchain ecosystem in the region.{" "}
                    <a href="http://latamlink.io/" target="_blank">
                      Discover more about LatamLink.
                    </a>
                  </p>
                </Box>
              </Grid>
            <Grid style={{backgroundColor:'#f8f8f8'}} item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="Lifebank"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid style={{backgroundColor:'#f8f8f8'}} item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3 >Lifebank</h3>
                </Box>
                <p>
                  An open-source blockchain-based app that incentivizes blood
                  donations by creating a virtuous circle of value between donors,
                  blood banks, and local businesses, leveraged by a token economy.
                  Winner of the “
                  <a
                    href="https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    Coding for Change
                  </a>{"” "} challenge by {" "}
                  <a href="https://block.one/" target="_blank">
                    block.one.
                  </a>{" "}
                  <a href="http://lifebank.io/" target="_blank">
                    Find out more about Lifebank.
                  </a>
                </p>
              </Box>
            </Grid>
            <Grid style={{backgroundColor:'#ffffff'}} item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="SMARTGATE"
                    src={useBaseUrl("img/logos/smartgate.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid style={{backgroundColor:'#ffffff'}} item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3 >SMARTGATE</h3>
                </Box>
                <p>
                  A blockchain-based platform that provides solutions for in-out gate activity for the container 
                  industry and real-time transmission of relevant data required for proper interchange in port logistics. 
                  {" "}
                  <a href="https://smartgate.tech/" target="_blank">
                    Learn more about SMARTGATE.
                  </a>
                </p>
              </Box>
            </Grid>
          </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
    > 
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <BlockchainCanDo />
          </Parallax>
          <WhatWeDo />
          <EnterpriseBlockchain />
          <Inquieres />
          <Parallax strength={800}>
          <GetToKnow />
          <WeAreOneGroup />
          <Background className="bgParallaxSecondary">
              <Box className="imgParallax"/>
          </Background>
          <SomeProjects />
          </Parallax>
          <ContactUsBanner />
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <BlockchainCanDo />
          <WhatWeDo />
          <EnterpriseBlockchain />
          <Inquieres />
          <GetToKnow />
          <WeAreOneGroup />
          <SomeProjects />
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default Home;
