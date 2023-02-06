import React from "react"
import { Parallax, Background } from 'react-parallax'
import clsx from "clsx"
import Grid from '@material-ui/core/Grid'
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'
import { useMediaQuery } from 'react-responsive'

import ContactUsBanner from './components/ContactUsBanner'

const MetaData={
  title:"EOS Costa Rica: Our Projects",
  description:"EOS Costa Rica has developed solutions for many industries and open-source projects for the blockchain community. ",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://es.eoscostarica.io/proyectos/"
}

const ProjectsList1 = [
  {
    img:"img/logos/eosrate.svg",
    name:"EOS Rate",
    details:"EOS Rate is an open- source app that allows EOS token holders to access a rating system and voting portal for block producers and proxies in the EOS blockchain. ",
    link:"https://eosrate.io/",
    linkText:"Explore EOS Rate."
  },
  {
    img:"img/logos/eosio.svg",
    name:"Antelope Tools",
    details:"The Antelope Tools is an open-source project that allows users to visualize the rewards distribution along the EOS network to seek accountability and transparency. ",
    link:"https://mainnet.eosio.online/",
    color:"#f8f8f8",
    linkText:"See the EOS Mainnet Dashboard."
  }
]

const ProjectsList2 = [
  {
    img:"img/logos/myvoteeos.png",
    name:"#MyVoteEOS",
    details:"MyvoteEOS Proxy is an EOS BP voting proxy that aims to properly represent the uncompromised will of EOS holders on and off chain. ",
    link:"https://myvoteeos.com/",
    color:"#f8f8f8",
    linkText:"Check out #MyVoteEOS Website."
  },
  {
    img:"img/logos/ggoods.svg",
    name:"gGoods",
    details:"gGoods is an open-source NFT standard that lets organizations create tokens to seek funding. The patron can then use their NFTs as assets in games and apps. ",
    link:"https://ggoods.io/",
    color:"#ffffff",
    linkText:"Read more about gGoods."
  },
  {
    img:"img/logos/inmutrust.svg",
    name:"InmuTrust - Supply Chain Management",
    details:"InmuTrust is a supply chain traceability proof-of-concept developed in collaboration with LACChain. It uses EOSIO + Antelope blockchain technologies and NFTs to improve transparency and trust in the distribution and logistics of products. Initially focused on the supply chain of vaccines, it can also used to trace the supply chain of any product. ",
    link:"https://github.com/eoscostarica/supply-chain-poc",
    color:"#f8f8f8",
    linkText:"Supply Chain POC"
  },
  {
    img:"img/logos/evodex.svg",
    name:"Evodex",
    details:"Evodex is the front-end user interface for a liquidity pool protocol where users vote on the pool liquidity fees and pay zero gas. We were in charge of UX and front-end design. ",
    link:"https://evodex.io/",
    color:"#ffffff",
    linkText: "Try Evodex now."
  },
  {
    img:"img/imagenotavailable.png",
    name:"Undisclosed Enterprise Project",
    details:" We developed an app for a US-based client in the accounting and tax industry for improved traceability of intercompany transactions. ",
    link:"https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-a-great-idea-e384b298a4a8",
    color:"#f8f8f8",
    linkText:"Read more here."
  },
  {
    img:"img/imagenotavailable.png",
    name:"Notario Digital",
    details:"Notario Digital is an open-source project that generates a hash of any file to register it immutably on a blockchain network. ",
    link:"https://notarize.edenia.cloud/dashboard/notary",
    color:"#ffffff",
    linkText:"Take a look at it."
  }
]

const OurProjects = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>Enterprise Blockchain <br/> Use Cases</h1>
            </Box>
            <p >
              Over the past years, we have helped organizations in
              both the public and private sectors learn and explore the benefits of EOSIO + Antelope blockchain
              technology. From improving the way a company registers cross-border transactions to
              ensuring immutable traceability of logistics operations, our team has developed top-notch
              solutions to real-world problems. Get to know our latest projects.
            </p>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>Enterprise Blockchain <br/> Use Cases</h1>
            </Box>
            <p >
              Over the past years, we have helped organizations in
              both the public and private sectors learn and explore the benefits of EOSIO + Antelope blockchain
              technology.
            <br/>
            <br/>
              From improving the way a company registers cross-border transactions to
              ensuring immutable traceability of logistics operations, our team has developed top-notch
              solutions to real-world problems. Get to know our latest projects.
            </p>
          </Box>
        }
      </Box>
    )
  }


  const Projects= ({img, name, details, link, color, linkText}) => {
    return(
      <Grid container>
        <Grid style={{backgroundColor:color}} item xs={12} md={6}>
          <Box className="projectsGridLeft">
            <Box className="imgBoxProjects">
              <img
                style={{maxWidth: '50%'}}
                alt={name}
                src={useBaseUrl(img)}
              />
            </Box>
          </Box>
        </Grid>
        <Grid style={{backgroundColor:color}} item xs={12} md={6}>
          <Box className="projectsGridRight">
            <Box className="h3Box">
              <h3>{name}</h3>
            </Box>
            <p>
              {details}<a href={link} target="_blank">{linkText}</a>
            </p>
          </Box>
        </Grid>
      </Grid>
    )
}

  const Body = () => {
    return (
      <Box className={clsx("containerSec", "reduceMarginTop")}>
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Grid container>
              {ProjectsList1.map((project) => (
                <Projects
                  key={project.name}
                  img={useBaseUrl(project.img)}
                  name={project.name}
                  details={project.details}
                  link={project.link}
                  color={project?.color}
                  linkText={project.linkText}
                />
              ))}
              <Grid item xs={12} md={6}>
                <Box className="projectsGridLeft">
                  <Box className="imgBoxProjects">
                    <img
                      alt="LACChain EOSIO"
                      style={{width:'450px'}}
                      src={useBaseUrl("img/logos/lacchain-eosio.svg")}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="projectsGridRight">
                  <Box className="h3Box">
                    <h3 >LACChain EOSIO</h3>
                  </Box>
                  <p>
                    We are part of LACChain EOSIO, an open-source
                    initiative that offers an EOSIO + Antelope blockchain
                    network that integrates into LACChain.{" "}
                    <a href="https://eosio.lacchain.net/en/" target="_blank">
                      Discover more about LACChain EOSIO.
                    </a>
                  </p>
                </Box>
              </Grid>
              <Grid style={{backgroundColor:'#f8f8f8'}} item xs={12} md={6}>
                <Box className="projectsGridLeft">
                  <Box className="imgBoxProjects">
                    <img
                      alt="Smart EIR"
                      src={useBaseUrl("img/logos/smarteir.svg")}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid style={{backgroundColor:'#f8f8f8'}} item xs={12} md={6}>
                <Box className="projectsGridRight">
                  <Box className="h3Box">
                    <h3 >Smart EIR</h3>
                  </Box>
                  <p>
                    A blockchain-based platform that provides solutions
                    for in-out gate activity for the container industry
                    and real-time transmission of relevant data required
                    for proper interchange in port logistics.{" "}
                    <a href="https://smartgate.tech/" target="_blank">
                      Learn more about Smart EIR.
                    </a>
                  </p>
                </Box>
              </Grid>
            <Grid item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="Lifebank"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
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
                  </a>{"” "} challenge.
                  <a href="http://lifebank.io/" target="_blank">
                    Find out more about Lifebank.
                  </a>
                </p>
              </Box>
            </Grid>
          </Grid>
          {ProjectsList2.map((project) => (
            <Projects
              key={project.name}
              img={useBaseUrl(project.img)}
              name={project.name}
              details={project.details}
              link={project.link}
              color={project.color}
              linkText={project.linkText}
            />
          ))}
        </Box>
      </Box>
    )
  }

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}
    > 
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection/>
            <Body/>
          </Parallax>
          <ContactUsBanner/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection/>
          <Body/>
          <ContactUsBanner/>
        </Box>
      }
    </Layout>
  );
};

export default OurProjects;
