import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'

const ContactUsBanner = () => {
    const history = useHistory()

    return (
        <Box className="containerGray">
            <Box className="sectionPadding">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={8}> 
                        <Box>
                            <h2 className="centerTextOnMobile">Start working with us <br/> and implement <br/> blockchain technology. </h2>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className="buttonBox">
                            <button className="buttonPrimary" onClick={() => history.push("/contact-us/")} >Contact us</button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ContactUsBanner;
