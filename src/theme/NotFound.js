import React from "react"
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'

function NotFound() {
  const isMobile = useMediaQuery( {query:'(max-width: 1100px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 1100px)'} )

  return (
    <Layout>
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax" />
            </Background>
            <Box className="containerSec">
              <Box className="sectionHero">
                <Box className="titleBox">
                  <h1 className="centerText">Oops! We couldn’t find this page.</h1>
                  <h1 className="centerText">Please, go back to the <a href="/">homepage</a> and try it again.</h1>
                </Box>
                <p className="centerText">If you have any questions regarding EOSIO and blockchain, please <a href="/contact-us">contact us</a> or go to our <a href="/blog">blog</a>!</p>
              </Box>
            </Box>
          </Parallax>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="containerSec">
            <Box className="sectionHeroMobile">
              <Box className="section">
                <Box className="titleBox">
                    <h1>Oops! We couldn’t find this page.</h1>
                    <h2>Please, go back to the <a href="/">homepage</a> and try it again.</h2>
                  </Box>
                  <p>If you have any questions regarding EOSIO and blockchain, please <a href="/contact-us">contact us</a> or go to our <a href="/blog">blog</a>!</p>
                </Box>
              </Box>
            </Box>
        </Box>
      }
    </Layout>
  )
}

export default NotFound;