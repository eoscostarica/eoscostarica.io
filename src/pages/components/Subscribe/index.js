import React, { useState } from "react"
import Box from '@material-ui/core/Box'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useMediaQuery } from 'react-responsive'

const SuscribeForm =() => {
    const isMobile = useMediaQuery({query:'(max-width: 769px)'})
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [email, setEmail] = useState()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return
        }

        setOpen(false)
        setErrorMessage(false)
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const validateEmail = (mail) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return regex.test(mail)
    }

    const onSubmitEmailResults = async (e) => {
        e.preventDefault()
        
        if(validateEmail(email)){
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
            }
            const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FOOTER_FORM}`, requestOptions)
            setOpen(true)
            setEmail("")
        }
        else setErrorMessage(true)
    }

    return (
        <Box>
            <Box className="specialH3Box">
                <h3 className="h3Footer">Subscribe to our communications </h3>
            </Box>
            <Box style={{paddingLeft: isMobile ? '25px' : 0, paddingRight: isMobile ? '25px' : 0}}>
                <form onSubmit={onSubmitEmailResults}>
                    <input
                        className="inputFooter"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleSetEmail}
                    />
                    <button
                        className="buttonPrimary"
                        style={{
                            padding:'11px',
                            fontSize:'16px',
                            float:'right'
                        }}
                        >
                            Submit
                    </button>
                </form>
            </Box>
            <Box className="litleMarginTop">
            <p style={{color:'white', fontSize:'14px'}}>
                EOS Costa Rica respects your privacy. We need the contact information you provide to us to contact you about our services.
                You may unsubscribe from these communications at any time.
            </p>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert>
                    Thank you for subscribing
                </Alert>
            </Snackbar>
            <Snackbar open={errorMessage} autoHideDuration={4000} onClose={handleClose}>
                <Alert severity="error">
                    Complete the field and verify that it is a correct email
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default SuscribeForm;
