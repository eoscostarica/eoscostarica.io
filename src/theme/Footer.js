import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import useStyles from "../css/styles.js"


const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={"footer"}>
      <Box className={"footerContent"}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Box className={"footerLogoBox"}>
              <img src={useBaseUrl("img/logo-white.png")} alt="EOS CR LOGO" className={"footerLogo"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}/>
          <Grid item xs={12} md={4}>
            <Box className={"boxTitle"}>
              <h3 className={"h3Footer"}>FOLLOW US</h3>
            </Box>
            <Box>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography className={"body1Footer"}> 
                    <Link 
                      className={"linkFooter"}
                      href="https://twitter.com/EOSCostaRica"
                      target="_blank"
                      style={{color:'white'}}
                    > 
                      Twitter
                    </Link>
                  </Typography>
                  <Typography className={"body1Footer"} > 
                    <Link 
                      className={"linkFooter"}
                      href="https://www.facebook.com/costaricaeos"
                      target="_blank"
                      style={{color:'white'}}
                    > 
                      Facebook
                    </Link>
                  </Typography>
                  <Typography className={"body1Footer"} > 
                    <Link 
                      className={"linkFooter"}
                      href="https://www.linkedin.com/company/eoscostarica/"
                      target="_blank"
                      style={{color:'white'}}
                    > 
                      LinkedIn
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography  className={"body1Footer"}> 
                    <Link 
                      className={"linkFooter"}
                      href="https://medium.com/@eoscostarica"
                      target="_blank"
                      style={{color:'white'}}
                    > 
                      Medium
                    </Link>
                  </Typography>
                  <Typography  className={"body1Footer"}> 
                    <Link 
                      className={"linkFooter"}
                      href="https://t.me/eoscr"
                      target="_blank"
                      style={{color:'white'}}
                    > 
                      Telegram
                    </Link>
                  </Typography>
                  <Typography  className={"body1Footer"}> 
                    <Link 
                      className={"linkFooter"}
                      href="https://www.instagram.com/eoscostarica/"
                      target="_blank"
                      style={{color:'white'}}
                    > 
                      Instagram
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography  className={"body1Footer"}>Edificio Trifami, 5th floor</Typography>
            <Typography  className={"body1Footer"}>San José, <strong><i>Costa Rica</i></strong></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

}

export default Footer;
