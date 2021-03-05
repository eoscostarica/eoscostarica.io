import React from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'

import ContactUsBanner from './components/ContactUsBanner'
import WeAreOneGroup from './components/WeAreOneGroup'

const MetaData={
  title:"EOS Costa Rica: Company Page",
  description:"EOS Costa Rica is part of a company with more than three decades of experience developing innovative solutions.",
  img:"img/metaImgBlack.png",
}

const TheCompany = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory();

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>We Develop Enterprise <br/> Blockchain Solutions</h1>
          </Box>
          <p >Years of experience developing innovative technologies speak for us. Unleash the power of blockchain technology with the help of our agile team.</p>
          <br/>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={() => history.push("/contact-us/")} >Contact Us</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>We Develop Enterprise <br/> Blockchain Solutions</h1>
            </Box>
            <p>Years of experience developing innovative technologies speak for us. Unleash the power of blockchain technology with the help of our agile team.</p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/services/")} >Contact Us</button>
            </Box>
        </Box>
      }
      </Box>
    )
  }

  const EOSCR = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="spacingBox">
            <Grid container spacing={5}>
              <Grid item md={6}>
                <Box className="titleBox">
                  <h2>Get to Know EOS Costa Rica</h2>
                </Box>
                <p>
                  EOS Costa Rica is part of a company with over 
                  three decades of developing innovative technologies. 
                  During the 80s, we launched the first BBS 
                  (bulletin board service) in the country, 
                  a precursor to the internet. Later on, 
                  the company shifted to educating new users 
                  on using the email and browsing the web! 
                  Then, we started offering internet infrastructure, 
                  hosting, and development services.
                </p>
                <br/>
                <p>
                  In 2013, we began providing infrastructure for public 
                  blockchain networks and learned first-hand 
                  how blockchains work. Then, in 2018 when 
                  the EOSIO protocol was launched, we investigated 
                  the advantages of this technology and started 
                  learning how to deploy it in the real world. 
                  Our presence grew during the genesis of the 
                  EOS Mainnet and will continue to be there 
                  throughout its growth.
                </p>
              </Grid>
              <Grid item md={6}>
                <Box className="imgBoxRight">
                  <img
                    className="imgKnowCompany"
                    src={useBaseUrl("img/ourstory.jpg")}
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
                      className="imgKnowCompany"
                      src={useBaseUrl("img/ourvision.jpg")}
                    />
                  </Box>  
                </Grid>
              }
              <Grid item md={6}>
                <Box className="titleBox">
                  <h2>Our Vision</h2>
                </Box>
                <p>
                  We founded EOS Costa Rica two years ago — before the 
                  release of EOS… and quickly realized this was a marathon, 
                  not a sprint. We have experimented with different use 
                  cases for EOSIO blockchain technology, especially 
                  for enterprise use.
                </p>
                <br/>
                <p>
                  Our team offers an agile and 
                  lean approach to develop blockchain-based solutions 
                  that allow innovation departments to quickly and 
                  efficiently iterate and test proofs-of-concept with
                  a restricted budget and schedule. This ability enables
                  organizations to explore this technology’s benefits and 
                  experience its potential in a controlled environment.
                </p>
              </Grid>
              {isMobile && 
                <Grid item md={6}>
                  <Box className="imgBoxLeft">
                    <img
                      className="imgKnowCompany"
                      src={useBaseUrl("img/company.png")}
                    />
                  </Box>  
                </Grid>
              }
            </Grid>
          </Box>
          <Box className="spacingBox">
            <Grid container spacing={5} >
              <Grid item xs={12} md={12}>
                <Box className="titleBox">
                  <h2>What Can We Do for You?</h2>
                </Box>
                <p>
                  We can co-ideate and develop the ideal solution 
                  that integrates blockchain technology into your 
                  operations following an agile and lean approach 
                  that will help you explore blockchain’s features 
                  within a restricted budget and schedule.
                  <br/>
                  <br/>
                  We provide top-notch, ready-to-use blockchain 
                  infrastructures. Also, we configure, host, 
                  and maintain blockchain nodes and networks that 
                  can meet your organization’s requirements and needs.
                  <br/>
                  <br/>
                  We offer workshops to C-suite executives and teams. 
                  We also provide training for new talents and promote 
                  the region’s blockchain ecosystem by participating 
                  in events, seminars, and conferences.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> 
    )
  }

  const MeetTeam = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box>
            <Box className="titleBox">
              <h2>Meet the Team</h2>
            </Box>
            <Box className="spacingBox">
              <p>
                  We have assembled a Latin American team with 
                  a problem-solving mindset and expertise in 
                  their areas of knowledge. Our distributed 
                  team operates in an Agile environment that 
                  encourages participation, self- accountability, 
                  and innovation. Get to know us!
              </p>
            </Box>
            {isDesktop &&
              <Box className="spacingBox">
                <Carousel animation="slide" timeout={500} indicators={false}>
                  <img
                    alt="Crew image"
                    style={{height:'227px'}}
                    src={useBaseUrl("img/team/crew1.jpg")}
                  />
                  <img
                      alt="Crew image 2"
                      style={{height:'227px'}}
                      src={useBaseUrl("img/team/crew2.jpg")}
                  />
                </Carousel>
              </Box>
            }
            <Box className="boxFlexEnd">
              <button className="buttonPrimary" onClick={() => window.open("/team/")} >Meet our team</button>
            </Box>
          </Box>
        </Box>
      </Box> 
    )
  }

  const TheTechnology = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="sectionNoPadding">
            <Box className="titleBox">
              <h2>The Technology</h2>
            </Box>
            <Box className="spacingBox">
              <p>
                Our team specializes in the blockchain protocol
                <a href=" https://eos.io/" target='_blank'> EOSIO</a>, launched by 
                <a href=" https://block.one/" target='_blank' > block.one</a> in 2018, 
                as an open-source blockchain technology that deploys
                a consensus model known as Delegated Proof-of-Stake
                (DPoS). In DPoS, computers do not compete over 
                computational power to solve algorithms. 
                The following are some key features of EOSIO:
              </p>
            </Box>
            <Box className="doubleSpacingBox">
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Scalability</h4>
                </Box>
                <p >
                  EOSIO deploys the DPoS mechanism to achieve higher throughput
                  and efficiency, becoming the blockchain protocol with the
                  largest number of transactions per second at 4,000 on its
                  public blockchain. In contrast, the average in other
                  blockchain systems is 15-20 transactions per second.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Flexibility</h4>
                </Box>
                <p>
                  EOSIO enables adaptability for public and private networks
                  and can be customized according to the business requirements.
                  This blockchain technology offers low latency, meaning that
                  a user won't have to wait for a long time for a transaction
                  to be complete, ensuring a better user experience.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Faster adoption</h4>
                </Box>
                <p>
                  Developers build smart contracts in EOSIO using C++,
                  a general-purpose programming language with widespread
                  adoption, thus eliminating the need to learn new languages
                  to begin deploying the technology. Also, there are many
                  learning resources available online and a dynamic support community.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Cost-effective</h4>
                </Box>
                <p>
                  EOSIO offers a flexible and favorable cost model that
                  eliminates the need for transaction fees. This model is
                  ideal for developers who seek a solution with low operation
                  costs and still offers an experience free to the user.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Eco-friendly</h4>
                </Box>
                <p>
                  The DPoS mechanism enables a sustainable blockchain
                  solution requiring less electricity to run nodes and
                  confirm transactions. For example, EOSIO is 66,000 times
                  more energy-efficient than Bitcoin and 17,000 times more
                  energy-efficient than Ethereum.
                </p>
              </Grid>
              <Grid md={5}>
                <Box className="centerBox">
                  <img
                    style={{width: isDesktop ? '40%' : '35%', paddingTop:'30px'}}
                    alt={'Carbon Neutral Block Producer Badge'}
                    src={useBaseUrl('img/badge.png')}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
            {isDesktop &&
              <Box className="doubleSpacingBox">
                <Grid  justify="center" container spacing={5}>
                  <Grid item xs={12} md={7}>
                    <Box className="boxFlexEnd">
                      <h3>We can help you explore EOSIO technology.</h3>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                      <Box className="boxFlexEnd">
                        <button 
                          className="buttonPrimary" 
                          onClick={() => history.push("/contact-us/")}
                        >
                          Drop Us a Line
                        </button>
                      </Box>
                  </Grid>
                </Grid>
              </Box>
            } 
        </Box>
      </Box>
    )
  }

  const SomeOurProjects = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="section">
          <Box className="buttonBox">
            <h2>Some of Our Projects</h2>
            <br />
          </Box>
          <Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxTheCompany">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/Group47.svg")}
                  />
                </Box>
                <p>
                  We are part of this voluntary regional alliance, led by Latin
                  American technology companies to offer an EOSIO-based testnet
                  to the{" "}
                  <a href="https://www.lacchain.net/" target="_blank">
                    LACChain
                  </a>{" "}
                  initiative, a program to accelerate the development of the
                  blockchain ecosystem in the region.<a href="https://latamlink.io/" target="_blank"> Discover more about LatamLink.</a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxTheCompany">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
                </Box>
                <p>
                  An open-source blockchain-based app that incentivizes blood
                  donations by creating a virtuous circle of value between
                  donors, blood banks, and local businesses, leveraged by a
                  token economy. Winner of the{" "}
                  <a
                    href="https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    “Coding for Change”
                  </a>{" "}
                  challenge by{" "}
                  <a href="https://block.one/" target="_blank">
                    block.one.
                  </a>{" "}
                  <a href=" https://lifebank.io/" target="_blank">
                    Find out more about Lifebank.
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxTheCompany">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/smartgate.svg")}
                  />
                </Box>
                <p>
                  A blockchain-based platform that provides solutions for in-out
                  gate activity for the container industry and real-time
                  transmission of relevant data required for proper interchange
                  in port logistics.<a href="https://smartgate.tech/" target="_blank"> Learn more about SMARTGATE.</a>
                </p>
              </Grid>
              <Grid item xs={12} md={12} >
                <br/>
                <p>
                  Check out more of our latest projects <a 
                  href="https://eoscostarica.io/projects" target="_blank">
                    here
                  </a>.
                </p>
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
            <EOSCR />
          </Parallax>
          <WeAreOneGroup />
          <MeetTeam />
          <TheTechnology/>
          <SomeOurProjects/>
          <ContactUsBanner />
        </Box>
      }
      {isMobile &&
        <Box className="mainContainer">
          <HeroSection />
          <EOSCR />
          <WeAreOneGroup />
          <MeetTeam />
          <TheTechnology/>
          <SomeOurProjects/>
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );    
};

export default TheCompany;
