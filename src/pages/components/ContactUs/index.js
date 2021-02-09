import React from "react"
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import HubspotForm from 'react-hubspot-form'

const ContactUs = () => {
  return (
    <HubspotForm
      portalId='9018734'
      formId='68e53955-746e-4e74-9812-68153170bf97'
      loading={
        <Box className="centerBox" style={{width:'100%'}}>
          <CircularProgress style={{color:'#5484b3'}}/>
        </Box>
      }
    />
  );
};

export default ContactUs;
