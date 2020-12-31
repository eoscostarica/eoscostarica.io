import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer:{
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'black',
    overflowX:'hidden'
  },
  content:{
    width:"1100px",
    display: 'flex',
    paddingTop:'140px',
    paddingBottom:'140px',
  },
  logoBox:{
    display: 'flex',
    justifyContent: 'center',
  },
  logo:{
    [theme.breakpoints.down('sm')]: {
      width:'80%'
    }
  },
  boxTitle:{
    marginBottom: '2rem'
  },
  h3:{
    color:'white',
    fontWeight: 'bold',
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '9px',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
    }
  },
  body1:{
    color:'white',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontSize: '19px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
    textAlign:'justify',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
      marginBottom:'5px'
    }
  },
  Link: {
    color:'white',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontSize: '19px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
    textAlign:'justify',
    '&:hover' :{
      color:'#5484B3',
      textDecoration: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign:'center', 
    }
  }
}));

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.footer}>
      <Box className={classes.content}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Box className={classes.logoBox}>
              <img src={useBaseUrl("img/logo-white.png")} alt="EOS CR LOGO" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}/>
          <Grid item xs={12} md={4}>
            <Box className={classes.boxTitle}>
              <Typography className={classes.h3}>FOLLOW US</Typography>
            </Box>
            <Box>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography className={classes.body1}> 
                    <Link 
                      className={classes.Link}
                      href="https://twitter.com/EOSCostaRica"
                      target="_blank"
                    > 
                      Twitter
                    </Link>
                  </Typography>
                  <Typography className={classes.body1} > 
                    <Link 
                      className={classes.Link}
                      href="https://www.facebook.com/costaricaeos"
                      target="_blank"
                    > 
                      Facebook
                    </Link>
                  </Typography>
                  <Typography className={classes.body1} > 
                    <Link 
                      className={classes.Link}
                      href="https://www.linkedin.com/company/eoscostarica/"
                      target="_blank"
                    > 
                      LinkedIn
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography className={classes.body1}> 
                    <Link 
                      className={classes.Link}
                      href="https://medium.com/@eoscostarica"
                      target="_blank"
                    > 
                      Medium
                    </Link>
                  </Typography>
                  <Typography className={classes.body1}> 
                    <Link 
                      className={classes.Link}
                      href="https://t.me/eoscr"
                      target="_blank"
                    > 
                      Telegram
                    </Link>
                  </Typography>
                  <Typography className={classes.body1}> 
                    <Link 
                      className={classes.Link}
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
            <Typography className={classes.body1}>Edificio Trifami, 5th floor</Typography>
            <Typography className={classes.body1}>San José, <strong><i>Costa Rica</i></strong></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

}

export default Footer;
