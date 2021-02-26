import React from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'

import SuscribeForm from '../pages/components/Subscribe'

const Footer = () => {
  const isMobile = useMediaQuery({query:'(max-width: 769px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 769px)'})

  return (
    <Box>
      <Box className="footer">
        <Box className="footerContent">
          <Grid container>
            { isMobile &&
              <Grid item xs={12} md={2}>
                <Box className="footerLogoBox">
                  <img
                    src={useBaseUrl("img/logos/logo-square.svg")}
                    alt="EOS CR LOGO" 
                    className="footerLogo"
                  />
                </Box>
                <p style={{textAlign:'center', marginLeft:'84px', fontSize:'14px', marginTop:'10px', color:'#ffffff'}}>
                  v3.1 / Feb 2021
                </p>
              </Grid>
            }
            { isMobile &&
              <Grid className="mediumPaddingTop" item xs={12} md={4}>
                <SuscribeForm/>
              </Grid>
            }
            <Grid className={isMobile ? "mediumPaddingTop" : ""} item xs={6} md={2}>
              <Box className="specialH3Box">
                <h3 className="h3Footer">About us</h3>
              </Box>
              <p className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/services/")}
                  target="_blank"
                  style={{color:'white'}}
                >
                  Services
                </Link>
              </p>
              <p className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/the-company/")}
                  target="_blank"
                  style={{color:'white'}}
                >
                  The company
                </Link>
              </p>
              <p className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/team/")}
                  target="_blank"
                  style={{color:'white'}}
                >
                  Team
                </Link>
              </p>
              <p className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/projects/")}
                  target="_blank"
                  style={{color:'white'}}
                >
                  Projects
                </Link>
              </p>
              <p  className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/block-producer/")}
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Block producer
                </Link>
              </p>
            </Grid>
            <Grid className={isMobile ? "mediumPaddingTop" : ""} item xs={6} md={2}>
              <Box className="specialH3Box">
                <h3 className="h3Footer">Content for you</h3>
              </Box>
              <p className="body1Footer">
                <Link
                  className="linkFooter"
                  href="https://guide.eoscostarica.io//"
                  target="_blank"
                  style={{color:'white'}}
                >
                  Learning
                </Link>
              </p>
              <p  className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/blog/")}
                  target="_blank"
                  style={{color:'white'}}
                >
                  Blog
                </Link>
              </p>
              <p  className="body1Footer">
                <Link
                  className="linkFooter"
                  href={useBaseUrl("/press/")}
                  target="_blank"
                  style={{color:'white'}}
                >
                  Press
                </Link>
              </p>
            </Grid>
            <Grid className={isMobile ? "litlePaddingTop" : ""} item xs={12} md={1}/>
            { isDesktop &&
              <Grid item xs={12} md={4}>
                <SuscribeForm/>
              </Grid>
            }
            <Grid style={{marginTop:'50px'}} item xs={12} md={1} ></Grid>
            { isDesktop &&
              <Grid item md={2}>
                <Box className="centerBox">
                  <img
                    src={useBaseUrl("img/logos/logo-square.svg")}
                    alt="EOS CR LOGO"
                    className="footerLogo"
                  />
                </Box>
                <p style={{textAlign:'end', fontSize:'14px', marginTop:'10px', color:'#ffffff'}}>
                  v3.1 / Feb 2021
                </p>
              </Grid>
            }
            <Grid item xs={12} md={2}>
              <Grid item xs={12}>
                <Box className={isMobile ? "centerBox" : "leftBox"}>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                    <GitHubIcon 
                      style={{
                        width: isDesktop ? '35px' : '45px',
                        height: isDesktop ? '35px' : '45px',
                        cursor:'pointer',
                        color:'#ffffff'
                      }}/>
                  </a>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                    <TwitterIcon 
                      style={{
                        width: isDesktop ? '35px' : '45px',
                        height: isDesktop ? '35px' : '45px',
                        cursor:'pointer', color:'#ffffff'
                      }}/>
                  </a>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://www.linkedin.com/company/eoscostarica/mycompany/" target="_blank">
                    <LinkedInIcon
                      style={{
                        width: isDesktop ? '35px' : '45px',
                        height: isDesktop ? '35px' : '45px',
                        cursor:'pointer', color:'#ffffff'
                      }}/>
                  </a>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid style={{marginTop: isDesktop ? '-3px' : '', marginLeft: isDesktop ? '-20px' : ''}} item xs={12}>
                <Box className={isMobile ? "centerBox" : "leftBox"}>
                  <a className="marginIconsFooter" href="https://medium.com/@eoscostarica" target="_blank">
                    <img
                      className="socialMediaAnimation"
                      style={{
                        width: isDesktop ? '42px' : '45px',
                        height: isDesktop ? '42px' : '45px',
                        cursor:'pointer'
                      }}
                      src={useBaseUrl("img/icons/icon-medium.svg")}
                    />
                  </a>
                  <a className={clsx("marginIconsFooter", "socialMediaAnimation")} href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" target="_blank">
                    <YouTubeIcon 
                      style={{ 
                        width: isDesktop ? '42px' : '45px',
                        height: isDesktop ? '42px' : '45px',
                        cursor:'pointer',
                        color:'#ffffff'
                      }}/>
                  </a>
                  <a className={clsx("marginIconsFooter", "socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                    <InstagramIcon 
                      style={{
                        width: isDesktop ? '35px' : '45px',
                        height: isDesktop ? '35px' : '45px',
                        cursor:'pointer',
                        color:'#ffffff'
                      }}/>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="footerCopy">
        <Box className="footerCopyContent">
          <p style={{fontSize:'14px'}}>
            All rights reserved EOS COSTA RICA
          </p>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
