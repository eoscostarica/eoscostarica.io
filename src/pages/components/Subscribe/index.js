import React from "react"
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import HubspotForm from 'react-hubspot-form'

const Subscribe = () => {
    return (
        <HubspotForm
            portalId='9018734'
	        formId='df605eac-d7d1-44b5-af45-dd93d65d84ee'
            className="hs-richtext"
            loading={
            <Box className="centerBox" style={{width:'100%'}}>
                <CircularProgress style={{color:'#5484b3'}}/>
            </Box>
            }
        />
        );
    };

export default Subscribe;
