import React, {useState } from "react"
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
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const Footer = () => {
  const isMobile = useMediaQuery({query:'(max-width: 767px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 767px)'})
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const SuscribeForm =() => {
    const [email, setEmail] = useState()
    const handleSetEmail = (e) => {
      setEmail(e.target.value)
    }

    const onSubmitEmailResults = async (e) => {
      e.preventDefault()

      if(email){
        const jsonData = {
          "fields": [
            {
              "name": "email",
              "value": email
            } 
          ],
          "context": {
            "pageUri": "https://eoscostarica.io/",
            "pageName": "EOS Costa Rica"
          },
          "legalConsentOptions": {
            "consent": {
              "consentToProcess": true,
              "text": "I agree to allow Example Company to store and process my personal data.",
              "communications": [
                {
                  "value": true,
                  "subscriptionTypeId": 999,
                  "text": "I agree to receive marketing communications from Example Company."
                }
              ]
            }
          }
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        };
        const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/9018734/df605eac-d7d1-44b5-af45-dd93d65d84ee', requestOptions)
        setOpen(true)
      }
    }

    return (
      <Grid className={isMobile? "mediumPaddingTop": ""} item xs={12} md={4}>
        <Box className="specialH3Box">
          <h3 className="h3Footer">Subscribe to our communications </h3>
        </Box>
        <Box style={{paddingLeft: isMobile ? '25px' : 0, paddingRight: isMobile ? '25px' : 0}}>
          <form onSubmit={onSubmitEmailResults}>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleSetEmail}
            />
            <button className="buttonPrimary" style={{padding:'11px', fontSize:'16px', float:'right'}}>Submit</button>
          </form>
        </Box>
        <Box className="litleMarginTop">
          <p style={{color:'white', fontSize:'14px'}}>
            EOS Costa Rica respects your privacy. We need the contact information you provide to us to contact you about our services.
            You may unsubscrie from these communications at any time.
          </p>
        </Box>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert>
            Thank you for subscribing
          </Alert>
        </Snackbar>
      </Grid>
    )
  }

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
              <SuscribeForm/>
            }
            <Grid className={isMobile? "mediumPaddingTop": ""} item xs={6} md={2}>
              <Box className="specialH3Box">
                <h3 className="h3Footer">About us</h3>
              </Box>
              <p className="body1Footer" > 
                <Link 
                  className="linkFooter"
                  href="https://www.linkedin.com/company/eoscostarica/"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Services
                </Link>
              </p>
              <p className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://twitter.com/EOSCostaRica"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  The company
                </Link>
              </p>
              <p className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Team
                </Link>
              </p>
              <p className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://www.facebook.com/costaricaeos"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Projects
                </Link>
              </p>
              <p  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Block producer
                </Link>
              </p>
            </Grid>
            <Grid className={isMobile? "mediumPaddingTop": ""} item xs={6} md={2}>
              <Box className="specialH3Box">
                <h3 className="h3Footer">Content for you</h3>
              </Box>
              <p className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Learning
                </Link>
              </p>
              <p  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Blog
                </Link>
              </p>
              <p  className="body1Footer"> 
                <Link 
                  className="linkFooter"
                  href="https://t.me/eoscr"
                  target="_blank"
                  style={{color:'white'}}
                > 
                  Press
                </Link>
              </p>
            </Grid>
            <Grid className={isMobile? "litlePaddingTop": ""} item xs={12} md={1} ></Grid>
            { isDesktop &&
              <SuscribeForm/>
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
                  <a className={clsx("marginIconsFooter","socialMediaAnimation")} href="https://t.me/eoscr" target="_blank">
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

export default Footer;
