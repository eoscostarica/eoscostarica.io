import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useBaseUrl from "@docusaurus/useBaseUrl";
import CircularProgress from '@material-ui/core/CircularProgress';
import HubspotForm from 'react-hubspot-form'


const AdditionalResources = () => {
  
  return (
    <Box className={"containerSec"}>
        <Box className={"section"}>
          <Box className={"titleBox"}>
            <h2>Additional Resources</h2>
          </Box>
          <Box className={"spacingBox"}>
            <p>
                Find more interesting reads and resources to continue learning
                about
                <a href={"https://eoscostarica.medium.com/how-to-choose-an-enterprise-blockchainplatform-7c3665994ad6"}
                target="_blank"
                > enterprise blockchain</a> and
                <a href={" https://eos.io/"} target="_blank"> EOSIO</a>.
            </p>
          </Box>
          <Grid container>
            <Grid onClick={() => history.push("/block-producer/")} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/blog.svg")}/>
              <h3 className={"titleBlog"}>Blog</h3>
            </Grid>
            <Grid onClick = {() => location.href='https://guias.eoscostarica.io/'} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/press.svg")}/>
              <h3 style={{marginTop:'30px', marginLeft:'20px'}}>Press</h3>
            </Grid>
          </Grid>
          <br/>
          <Grid className={"topSpacingBoxIcons"} style={{justifyContent:'space-evenly'}} container>
            <Grid onClick = {() => location.href='https://guide.eoscostarica.io/'} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/decs.svg")}/>
              <h3 className={"titleDevs1"}>Devs</h3>
              <h3 className={"titleDevs2"}>Portal</h3>
            </Grid>
            <Grid onClick={() => location.href='https://github.com/eoscostarica'} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/github-ours.svg")}/>
              <h3 className={"titleGit1"}>Our</h3>
              <h3 className={"titleGit2"}>Github</h3>
            </Grid>
          </Grid>
          <br/>
        </Box>
    </Box>
  );
};

export default AdditionalResources;
