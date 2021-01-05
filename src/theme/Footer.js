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
    <Box className={classes.footer}>
      <Box className={classes.footerContent}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Box className={classes.footerLogoBox}>
              <img src={useBaseUrl("img/logo-white.png")} alt="EOS CR LOGO" className={classes.footerLogo} />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}/>
          <Grid item xs={12} md={4}>
            <Box className={classes.boxTitle}>
              <Typography className={classes.h3Footer}>FOLLOW US</Typography>
            </Box>
            <Box>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography className={classes.body1Footer}> 
                    <Link 
                      className={classes.linkFooter}
                      href="https://twitter.com/EOSCostaRica"
                      target="_blank"
                    > 
                      Twitter
                    </Link>
                  </Typography>
                  <Typography className={classes.body1Footer} > 
                    <Link 
                      className={classes.linkFooter}
                      href="https://www.facebook.com/costaricaeos"
                      target="_blank"
                    > 
                      Facebook
                    </Link>
                  </Typography>
                  <Typography className={classes.body1Footer} > 
                    <Link 
                      className={classes.linkFooter}
                      href="https://www.linkedin.com/company/eoscostarica/"
                      target="_blank"
                    > 
                      LinkedIn
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography className={classes.body1Footer}> 
                    <Link 
                      className={classes.linkFooter}
                      href="https://medium.com/@eoscostarica"
                      target="_blank"
                    > 
                      Medium
                    </Link>
                  </Typography>
                  <Typography className={classes.body1Footer}> 
                    <Link 
                      className={classes.linkFooter}
                      href="https://t.me/eoscr"
                      target="_blank"
                    > 
                      Telegram
                    </Link>
                  </Typography>
                  <Typography className={classes.body1Footer}> 
                    <Link 
                      className={classes.linkFooter}
                      href="https://www.instagram.com/eoscostarica/"
                      target="_blank"
                    > 
                      Instagram
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classes.body1Footer}>Edificio Trifami, 5th floor</Typography>
            <Typography className={classes.body1Footer}>San José, <strong><i>Costa Rica</i></strong></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

}

export default Footer;
