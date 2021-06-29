import React, { useState, useEffect, useRef } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Layout from "@theme/Layout"
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import useBaseUrl from "@docusaurus/useBaseUrl"

import LacchainForm from './components/LacchainForm'

const MetaData={
  title:"EOS Costa Rica: Create a LACChain EOSIO account",
  description:"LACChain EOSIO is a blockchain network for Latin America and the Caribbean powered by EOSIO technology. Contact EOS Costa Rica to create an account.",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://es.eoscostarica.io/lacchain"
}

const LacchainLanding = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory()
  const refLacchainForm = useRef(null)

  const handleScrollLacchainForm= () => refLacchainForm.current.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})
  
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
            <h1>EOS Costa Rica: Partner of <br /> LACChain EOSIO</h1>
          </Box>
          <p>
            LACChain EOSIO is a blockchain network that deploys a public
            permissioned version of EOSIO technology and integrates it into the IDB-
            backed program LACChain.
          </p>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={handleScrollLacchainForm} >Create Account</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
                <h1>EOS Costa Rica: Partner of LACChain EOSIO</h1>
            </Box>
            <p>
                LACChain EOSIO is a blockchain network that deploys a public
                permissioned version of EOSIO technology and integrates it into the IDB-
                backed program LACChain.
            </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={handleScrollLacchainForm} >Create Account</button>
            </Box>
          </Box>
      }
      </Box>
    )
  }

  const JoinLacchainEosio = () => {
    return (
      <Box className="containerSec">
          <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
            <Box className="titleBox">
                {isDesktop &&
                  <h2>Why Join LACChain EOSIO?</h2>
                }
                {isMobile && 
                  <>
                    <h2>Why Join LACChain EOSIO?</h2>
                  </> 
                }  
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h3>Test and build your apps</h3>
                </Box>
                <p>
                    LACChain EOSIO enables you to build and test blockchain
                    apps and infrastructure. It provides a faucet and local
                    environment for developers.
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h3 >Learning resources</h3>
                </Box>
                <p>
                    It offers documentation, tutorials, and resources for you
                    to learn about blockchain technology. You will belong to
                    a regional community of developers and organizations.
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h3>Free EOSIO developer tools</h3>
                </Box>
                <p>
                    LACChain EOSIO provides a monitor to visualize network
                    data, a block explorer with data about accounts, and
                    the dfuse API integrator.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
  }

  const SocialMediaBanner = () => {
      return(
        <Box className="containerBlack"> 
            <Box className="sectionPadding">
                <Grid container justify='center'>
                    <Grid item xs={12} md={4}>
                      <Box className={isMobile? "spacingBox": ""}>
                        <h3 className={clsx("white","centerTextOnMobile")}>Follow LACChain EOSIO</h3>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Box className={isMobile? "centerBox": "boxFlexEnd"}>
                        <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                            <TwitterIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                        </a>
                        <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                          <TelegramIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                        </a>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box className="centerBox">
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.linkedin.com/company/eoscostarica/mycompany/" target="_blank">
                                <LinkedInIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                            </a>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                                <GitHubIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
      )
  }

  const GeneralInfo = () => {
    return (
        <Box className="containerSec">
            <Box className='sectionPadding'>
                <Box className="spacingBox">
                    <Box className="spacingBox">
                        <Grid container spacing={5}>
                            {isDesktop &&
                                <Grid item md={6}>
                                    <Box className="imgBoxRight">
                                        <img
                                        className="imgKnow"
                                        src={useBaseUrl("img/landingLacchain1.jpg")}
                                        />
                                    </Box>
                                </Grid>
                            }
                            <Grid item md={6}>
                                <Box className="h3Box">
                                    <h3>LACChain EOSIO at a Glance</h3>
                                </Box>
                                <p>
                                    LACChain EOSIO offers a blockchain public
                                    permissioned version of EOSIO technology-based
                                    network that integrates into LACChain. It
                                    enables developers and organizations to test
                                    their decentralized applications and infrastructure
                                    within a testing environment.
                                </p>
                                <Box className={isMobile ? 'centerBox' : ''} style={{marginTop:'30px', marginBottom:'30px'}}>
                                  <button className="buttonSecondary" onClick={() => window.open('https://eosio.lacchain.net/en')}>Learn More</button>
                                </Box>
                            </Grid>
                            {isMobile && 
                              <Grid item md={6}>
                                  <Box className="imgBoxLeft">
                                      <img
                                          className="imgKnow"
                                          src={useBaseUrl("img/landingLacchain1.jpg")}
                                      />
                                  </Box>
                              </Grid>
                            }
                        </Grid>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Grid container spacing={5}>
                            <Grid style={{paddingTop:'80px'}} item md={6}>
                                <Box className="h3Box">
                                    <h3>The Members of LACChain EOSIO</h3>
                                </Box>
                                <p>
                                    LACChain EOSIO is developed by EOS Costa Rica and EOS Argentina,
                                    with the support of LACChain, a program of the IDB Lab
                                    (part of the Inter-American Development Bank). Some additional
                                    supporters include EOS Venezuela, Block.one, dfuse, and EOS Detroit.
                                </p>
                            </Grid>
                            <Grid item md={6}>
                                <Box className="imgBoxLeft">
                                    <img
                                        className="imgKnow"
                                        src={useBaseUrl("img/landingLacchain2.jpg")}
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
            <HeroSection />
            <JoinLacchainEosio />
            <SocialMediaBanner />
          </Parallax>
          <GeneralInfo />
          <Box ref={refLacchainForm}>
            <LacchainForm />
          </Box>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <JoinLacchainEosio />
          <SocialMediaBanner />
          <GeneralInfo />
          <Box ref={refLacchainForm}>
            <LacchainForm />
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default LacchainLanding
