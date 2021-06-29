import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import useBaseUrl from "@docusaurus/useBaseUrl"

const WeAreOneGroup = () => {
  return (
    <Box className="containerSec">
        <Box className="sectionNoPadding">
            <Box className="h3Box">
                <h3 style={{textAlign:'center'}}>We Are One Group</h3>
            </Box>
            <Box className="spacingBox">
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Box className="imgBoxLogos">
                            <a target="_blank" href="https://eosio.lacchain.net/en/">
                                <img
                                    className="oneGroupLogo"
                                    alt="LACChain EOSIO"
                                    src={useBaseUrl("img/logos/lacchain-eosio.png")}
                                />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className="imgBoxLogos">
                            <a target="_blank" href="https://www.edenia.com/">
                                <img
                                    className="oneGroupLogo"
                                    alt="Edenia"
                                    src={useBaseUrl("img/logos/Group17.svg")}
                                />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className="imgBoxLogos">
                            <a target="_blank" href="https://eosurf.com/">
                                <img
                                    className="oneGroupLogo"
                                    alt="Eossurf"
                                    src={useBaseUrl("img/logos/Group11.svg")}
                                />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box className="imgBoxLogos">
                            <a target="_blank" href="https://ticoblockchain.cr/">
                                <img
                                    className="oneGroupLogo"
                                    alt="Ticoblockchain"
                                    src={useBaseUrl("img/logos/Group55.svg")}
                                />
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
  );
};

export default WeAreOneGroup;
