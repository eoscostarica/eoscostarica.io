import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { useMediaQuery } from 'react-responsive'
import { Parallax, Background } from 'react-parallax'

import ContactUsForm from "./components/ContactUs"

const MetaData={
  title:"EOS Costa Rica: Contact Us",
  description:"Ask us how to integrate EOSIO blockchain technology into your organization.",
  img:"img/metaImgBlack.png",
}

const ContactUs = () => {
  const isMobile = useMediaQuery({query:'(max-width: 767px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 767px)'})

  return(
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
    > 
      {isDesktop && 
        <Parallax strength={800}>
          <Background className="bgParallax">
              <Box className="imgParallax"/>
          </Background>
          <Box className="containerSec">
            <Box className={clsx("sectionContact",{["sectionPadding"]: isMobile})}>
              <Box className="h3Box">
                <h1>Contact</h1>
              </Box>
              
              <Box className="contactFormBox">
                <Paper style={{padding:'25px'}} variant="outlined">
                <Box className="spacingBox">
                <p>Let’s get the conversation started. Ask us how we can help you implement blockchain technology into your organization.</p>
              </Box>
                <ContactUsForm />
                </Paper>
              </Box>
            </Box>
          </Box>
        </Parallax>
      }
      {isMobile && 
        <Box className="containerSec">
          <Box className={clsx("sectionContact",{["sectionPadding"]: isMobile})}>
            <Box className="h3Box">
              <h1>Contact</h1>
            </Box>
            <Box className="contactFormBox">
              <Paper style={{padding:'25px'}} variant="outlined">
                <Box className="spacingBox">
                  <p style={{padding:0}}>Let’s get the conversation started. Ask us how we can help you implement blockchain technology into your organization.</p>
                </Box>
                <ContactUsForm />
              </Paper>
            </Box>
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default ContactUs;
