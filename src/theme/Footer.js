import React, { useState } from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Typography from "@material-ui/core/Typography"
import ScrollTrigger from 'react-scroll-trigger'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'

import Subscribe from '../pages/components/Subscribe'

const Footer = () => {
  const history = useHistory()
  const isMobile = useMediaQuery({query:'(max-width: 767px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 767px)'})

  const [stateAnimation,setStateAnimation] = useState(false)
  const handleScrollEnter = () => {
    setStateAnimation(true)
  }
  const handleScrollExit = () => {
    setStateAnimation(false)
  }

  return (
    <Box className="footer">
      <ScrollTrigger onEnter={handleScrollEnter} onExit={handleScrollExit}>
        <Box className="footerContent">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box className="footerLogoBox">
                <img
                  src={useBaseUrl("img/logos/logo-white.png")}
                  alt="EOS CR LOGO"
                  className={clsx("footerLogo",stateAnimation? "footerLogoAnimation":"")}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={1}/>
            <Grid item xs={12} md={4}>
              <Box className="specialH3Box">
                <h3 className="h3Footer">About us</h3>
              </Box>
              <Typography className="body1Footer" > 
                <Link 
                  className="linkFooter"
                  href="https://www.linkedin.com/company/eoscostarica/"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Services
                </Link>
              </Typography>
              <Typography className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://twitter.com/EOSCostaRica"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  The company
                </Link>
              </Typography>
              <Typography className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Team
                </Link>
              </Typography>
              <Typography className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://www.facebook.com/costaricaeos"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Projects
                </Link>
              </Typography>
              <Typography  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Block producer
                </Link>
              </Typography>
              <Box className="footerTitle">
                <h3 className="h3Footer">Content for you</h3>
              </Box>
              <Typography className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Learning
                </Link>
              </Typography>
              <Typography  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Blog
                </Link>
              </Typography>
              <Typography  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Press
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <h3 className="h3Footer">Subscribe to our communications </h3>
              <Subscribe/>
              <Typography  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Follow us
                </Link>
              </Typography>
              <Grid className="litlePaddingTop" item xs={12} md={12}>
                <Box className="centerBox">
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                    <GitHubIcon style={{width:'35px', height:'35px', cursor:'pointer', color:'#ffffff'}}/>
                  </a>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                    <TwitterIcon style={{width:'35px', height:'35px', cursor:'pointer', color:'#ffffff'}}/>
                  </a>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://t.me/eoscr" target="_blank">
                    <LinkedInIcon style={{width:'35px', height:'35px', cursor:'pointer', color:'#ffffff'}}/>
                  </a>
                  <a className="marginIconsFooter" href="https://medium.com/@eoscostarica" target="_blank">
                    <img
                      className="socialMediaAnimation"
                      style={{width:'38x', height:'38px', cursor:'pointer', color:'#ffffff'}}
                      src={useBaseUrl("img/icons/icon-medium.png")}
                    />
                  </a>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" target="_blank">
                    <YouTubeIcon style={{ width:'46px', height:'46px', cursor:'pointer', color:'#ffffff'}}/>
                  </a>
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                    <InstagramIcon style={{width:'35px', height:'35px', cursor:'pointer', color:'#ffffff'}}/>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ScrollTrigger>
    </Box>
  )

}

export default Footer;
