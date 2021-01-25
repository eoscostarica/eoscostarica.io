import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { useMediaQuery } from 'react-responsive'
import { Parallax, Background } from 'react-parallax';

import ContactUsForm from "./components/ContactUs";

const ContactUs = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isDesktop = useMediaQuery({ query:'(min-width: 767px)'})

  return(
    <>
      {isDesktop && 
        <Layout>
          <Parallax strength={800}>
            <Background className={"bgParallax"}>
                <Box className={"imgParallax"} />
            </Background>
            <Box className={"containerSec"}>
              <Box className={clsx("sectionContact",{["sectionPadding"] : isMobile})}>
                <Box className={"h3Box"}>
                  <h1>Contact</h1>
                </Box>
               
                <Box className={"contactFormBox"}>
                  <Paper style={{padding:'25px'}} variant="outlined">
                  <Box className={"spacingBox"}>
                  <p>Let’s get the conversation started. Ask us how we can help you implement blockchain technology into your organization.</p>
                </Box>
                  <ContactUsForm />
                  </Paper>
                </Box>
              </Box>
            </Box>
          </Parallax>
        </Layout>
      }
      {isMobile && 
        <Layout>
          <Box className={"containerSec"}>
            <Box className={clsx("sectionContact",{["sectionPadding"] : isMobile})}>
              <Box className={"h3Box"}>
                <h1>Contact</h1>
              </Box>
              <Box className={"contactFormBox"}>
                <Paper style={{padding:'25px'}} variant="outlined">
                  <Box className={"spacingBox"}>
                    <p style={{padding:0}}>Let’s get the conversation started. Ask us how we can help you implement blockchain technology into your organization.</p>
                  </Box>
                  <ContactUsForm />
                </Paper>
              </Box>
            </Box>
          </Box>
        </Layout>
      }
    </>
  )
}

export default ContactUs;
