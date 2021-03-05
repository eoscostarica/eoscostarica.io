import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from 'react-responsive'
import clsx from "clsx"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'

import AdditionalResources from './components/AdditionalResources'
import AccordionComp from './components/AccordionComp'
import Payments from './Animations/Payments'
import Logistic from './Animations/Logistic'
import Games from './Animations/Games'

const MetaData={
  title:"EOS Costa Rica: Industries",
  description:"",
  img:"img/metaImgBlack.png",
}

const moreIndustriesAccordion = 
[
  {
    title: 'Asset management',
    content:' Blockchain technology enables an immutable and secure way to tokenize and manage tangible and intangible assets. Some opportunities include innovative liquidity options and reduced management costs.',
    target: 'panel_AssetManagementy'
  },
  {
    title: 'Decentralized finance',
    content:'Also known as DeFi, decentralized finance leverages blockchain technology to explore new liquidity opportunities for citizens. Our team is part of evodex, an open-source DeFi app.',
    target: 'panel_Decentralized'
  },
  {
    title: 'Digital identity',
    content:'Blockchain allows an immutable, transparent, and secure system to manage digital identities that can interconnect with IoT, biometrics, and enterprise management systems.',
    target: 'panel_Identity'
  },
  {
    title: 'Energy',
    content:'Blockchain offers an efficient and transparent way to improve the operations, distribution, and data management for energy companies. Decentralized networks may help promote sustainable and private energy generation alternatives.',
    target: 'panel_Energy'
  },
  {
    title: 'Legal tech',
    content:' Smart contracts are computer codes that can execute automatically and autonomously according to the contract terms. These may transform legal processes by adding transparency, efficiency, and immutable registries.',
    target: 'panel_Tech',
  },
]

const moreIndustriesAccordion2 = 
[
  {
    title: 'Government',
    content:'Government institutions can deploy blockchain technology to leverage its transparency and immutability features to increase trust between the public sector and the citizens. It also allows a cost-efficient way to register data and accountability.',
    target: 'panel_Government'
  },
  {
    title: 'Media and entertainment',
    content:'The blockchain’s capabilities to securely and immutably store registries can help reduce piracy and disputes. Also, blockchain can protect IP and improve traceability of payments and content distribution.',
    target: 'panel_Entertainment'
  },
  {
    title: 'Healthcare and insurance',
    content:' Blockchain technology offers improved efficiency, traceability, and security to store medical and other sensitive data from patients. Smart contracts help reduce costs for insurance claims processing.',
    target: 'panel_Insurance'
  },
  {
    title: 'Real estate',
    content:'Leverage real estate investments with blockchain technology by creating new business models. Blockchain helps integrate digital assets for liquidity and streamline investor relations and portfolio management.',
    target: 'panel_RealEstate'
  },
  {
    title: 'Sports',
    content:'Blockchain in sports offers a great way to increase fan engagement, promote active participation in decision-making, and monetize through new streams such as player content and collectibles.',
    target: 'panel_Sports'
  },
]

const Industries = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory();
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  useEffect(() => {
    handleChange('panel_AssetManagementy')
  }, [])

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1 >Blockchain Solutions <br/> by Industry</h1>
            </Box>
            <p >
              Organizations and companies in many industries deploy blockchain
              technology to solve significant problems and improve their
              operations. These are some use cases of enterprise blockchain in
              different sectors, such as financial, supply chain, gaming, and
              healthcare.
            </p>
            <Box className="buttonBox">
              <button className="buttonPrimary" onClick={() => history.push("/contact-us/")}>
                Contact us
              </button>
            </Box>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1 >Blockchain Solutions <br/> by Industry</h1>
            </Box>
            <p >
              Organizations and companies in many industries deploy blockchain
              technology to solve significant problems and improve their
              operations. These are some use cases of enterprise blockchain in
              different sectors, such as financial, supply chain, gaming, and
              healthcare.
            </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" href={useBaseUrl("/contact-us")}>
                Contact us
              </button>
            </Box>
        </Box>
      }
      </Box>
    )
  }

  const PrincipalIndustries = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                  <Box className="animationBox">
                    <Payments isDesktop={isDesktop} />
                  </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="animationBox">
                  <Box>
                    <Box className="h3Box">
                      <h2>Payments and <br/> Transfers</h2>
                    </Box>
                    <p>
                      Blockchain enables an efficient and secure way to register
                      transactions that can facilitate payments and offer near
                      real-time auditing with encryption to reduce data breaches.
                      Blockchain may also promote alternate financial applications,
                      such as new liquidity solutions and microloans management, and
                      improved payment structures. {" "}
                      <a
                        href={"https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-agreat-idea-e384b298a4a8"}
                        target="_blank"
                      >
                        Read More
                      </a>
                    </p>
                  </Box>
                </Box>  
              </Grid>
            </Grid>
          </Box>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className="animationBox">
                  <Logistic isDesktop={isDesktop}/>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="animationBox">
                  <Box>
                    <Box className="h3Box">
                      <h2>Logistics and <br/> Supply Chain </h2>
                    </Box>
                    <p>
                      In an industry that involves dozens of stakeholders, the
                      capabilities of blockchain and smart contracts for traceability,
                      authorizations management, and automation can make a great ally.
                      Blockchain can integrate different technologies, such as IoT and
                      AI, to create comprehensive solutions and streamline processes
                      in the logistics and supply chain industry. {" "}
                      <a
                        href={"https://eoscostarica.io/blog/blockchain-logistics"} 
                        target="_blank"
                      >
                        Read More
                      </a>
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className="animationBox">
                  <Games isDesktop={isDesktop}/>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="animationBox">
                  <Box>
                    <Box className="h3Box">
                      <h2>Gaming and <br/> Esports</h2>
                    </Box>
                    <p>
                      The gaming industry is booming—nearly 40% of the total world's
                      population play video games. Blockchain enables a better way to
                      transfer, valorize, and collect digital in-game assets. Its
                      capabilities to increase security and offer a more efficient way
                      for transactions can level-up online gaming. {" "} 
                      <a
                        href={"https://eoscostarica.io/blog/gaming-blockchain"}
                        target="_blank"
                      >
                        Read More
                      </a>
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>                 
        </Box>
      </Box>
    )
  }

  const BlockchainMoreIndustries = () => {
    return (
      <Box className="containerGray">
        <Box className="sectionPadding">
          <Box className="spacingBox">
            <h2>Blockchain in More Industries</h2>
          </Box>
          <Box className="accordionBox">
            {isDesktop && 
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} >
                  <AccordionComp data={moreIndustriesAccordion} expanded={expanded} handleChange={handleChange} bgColor={'#f8f8f8'} />
                </Grid>
                <Grid item xs={12} md={6} >
                  <AccordionComp data={moreIndustriesAccordion2} expanded={expanded} handleChange={handleChange}  bgColor={'#f8f8f8'}/>
                </Grid>
              </Grid>
            }
            {isMobile && 
              <>
                <AccordionComp data={moreIndustriesAccordion} expanded={expanded} handleChange={handleChange}  bgColor={'#f8f8f8'}/>
                <AccordionComp data={moreIndustriesAccordion2} expanded={expanded} handleChange={handleChange}  bgColor={'#f8f8f8'}/>
              </>
            }
          </Box>
        </Box>
      </Box>
    )
  }

  const ChoosingEnterprise = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="sectionPadding">
          <Box className="titleBox">
            <h2>Choosing an Enterprise Blockchain</h2>
          </Box>
          <Box className="spacingBox">
            <p>
              There are several 
              <a href={"https://eoscostarica.medium.com/how-to-choose-an-enterprise-blockchainplatform-7c3665994ad6"}
                target="_blank"
                > enterprise blockchain platforms
              </a>{" "}
              in the market
              with different characteristics and capabilities. The following is
              a list of some key features you must consider when choosing what
              blockchain platform is the most suitable for your organization:
            </p>
            <br/>
          </Box>
          <Box>
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Quick adoption</h4>
                </Box>
                <p >
                  Can your team use their experience with programming
                  languages, or do they need to learn a new one?
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Cost-efficiency</h4>
                </Box>
                <p>
                  Would the organization see a significant reduction in costs
                  by integrating smart contracts or simplifying the data
                  sharing process?
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Privacy and transparency</h4>
                </Box>
                <p>
                  How are the blockchain’s security and confidentiality
                  protocols different from others’, and how does it handle
                  transparency?
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Speed or throughput</h4>
                </Box>
                <p>
                  How quickly does your solution need to be? Are you a
                  high-frequency trading company, or can you afford longer
                  block confirmation times?
                </p>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box className="boxFlexEnd">
                  <button
                    className="buttonPrimary"
                    onClick={() => history.push("/contact-us/")}>
                      Drop Us a Line
                  </button>
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
                  <Box className="imgParallax" />
              </Background>
              <HeroSection />
              <PrincipalIndustries />
          </Parallax>
          <BlockchainMoreIndustries />
          <ChoosingEnterprise />
          <AdditionalResources />
        </Box>
      }
      {isMobile &&
        <Box className="mainContainer">
            <HeroSection />
            <PrincipalIndustries />
            <BlockchainMoreIndustries />
            <ChoosingEnterprise />
            <AdditionalResources />
        </Box>
      }
    </Layout>
  );
  
};

export default Industries;
