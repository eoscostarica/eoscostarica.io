import React from "react"
import clsx from "clsx"
import Box from '@material-ui/core/Box'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import useBaseUrl from "@docusaurus/useBaseUrl"

const AdditionalResources = () => {
  const history = useHistory()
  return (
    <Box className="containerSec">
      <Box className="section">
        <Box className="titleBox">
          <h2>Additional Resources</h2>
        </Box>
        <Box className="spacingBox">
          <p>
            Find more interesting reads and resources to continue learning
            about
            <a href="https://eoscostarica.medium.com/how-to-choose-an-enterprise-blockchainplatform-7c3665994ad6"
            target="_blank"
            > enterprise blockchain</a> and
            <a href="https://eos.io/" target="_blank"> EOSIO</a>.
          </p>
        </Box>
        <br/>
          <Grid container spacing={5} justify="center" >
            <Grid onClick={() => history.push("/blog/")} className="gridButton" item xs={12} md={5}>
              <Box className={clsx("centerBox","spacingBox")} >
                <img className="resourcesIcon" srcSet={useBaseUrl("img/icons/blog.svg")}/>
                <h3 style={{marginLeft:'25px'}}>Blog</h3>
              </Box>
            </Grid>
            <Grid onClick = {() => history.push("/press/")} className="gridButton" item xs={12} md={5}>
              <Box className={clsx("centerBox","spacingBox")}>
                <img className="resourcesIcon" srcSet={useBaseUrl("img/icons/press.svg")}/>
                <h3 style={{marginLeft:'25px'}}>Press</h3>
              </Box>
            </Grid>
            <Grid onClick = {() => window.open('https://guide.eoscostarica.io/')} className="gridButton" item xs={12} md={5}>
              <Box className={clsx("centerBox","spacingBox")}>
                <img className="resourcesIcon" srcSet={useBaseUrl("img/icons/decs.svg")}/>
                <Box style={{marginLeft:'25px'}}>
                  <h3 style={{marginBottom:'5px'}}>Devs</h3>
                  <h3 style={{marginBottom:'5px'}}>Portal</h3>
                </Box>
              </Box>
            </Grid>
            <Grid onClick={() => window.open('https://github.com/eoscostarica')} className="gridButton" item xs={12} md={5}>
            <Box className={clsx("centerBox","spacingBox")}>
                <img className="resourcesIcon" srcSet={useBaseUrl("img/icons/github-ours.svg")}/>
                <Box style={{marginLeft:'25px'}}>
                  <h3 style={{marginBottom:'5px'}}>Our</h3>
                  <h3 style={{marginBottom:'5px'}}>Github</h3>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Box>
    </Box>
  );
};

export default AdditionalResources;
