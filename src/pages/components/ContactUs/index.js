import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from "clsx";

import styles from "../../styles.module.css";
import useStyles from "../../../css/styles.js"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    companyName: "",
    comments: "",
  });
  const [formDataError, setFormDataError] = useState({
    name: false,
    lastname: false,
    email: false,
  });
  const classes = useStyles()

  const handleOnChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
  };

  const handleSendMail = () => {
    if (
      !formData.name.length ||
      !formData.lastname.length ||
      !formData.email.length
    ) {
      setFormDataError({
        name: !formData.name.length,
        lastname: !formData.lastname.length,
        email: !formData.email.length,
      });

      return;
    }

    window.location = `mailto:contact@eosio.cr?subject=${formData.name} ${formData.lastname}&body=${formData.comments} ${formData.email} ${formData.companyName}`;
    
    setFormDataError({
      name: false,
      lastname: false,
      email: false,
    });
    
    window.location.href = "/thank-you";
  };

  return (
    <Box className={clsx(styles.sectionWhite, styles.contactUsBox)}>
      <Box className="container">
        <Box className={clsx("row", styles.flexColumn)}>
          <Typography className={classes.h1}> Contact </Typography>
          <br/>
          <Typography className={classes.body1}>
            Let’s get the conversation started. Ask us how we can help you
            implement blockchain technology into your organization.
          </Typography>
          <form>
            <Box className={styles.completeName}>
              <input
                type="text"
                className={clsx(styles.textField, {
                  [styles.textFieldError]: formDataError.name,
                })}
                placeholder="First Name *"
                onChange={handleOnChange("name")}
                value={formData.name}
              />
              <input
                type="text"
                className={clsx(styles.textField, {
                  [styles.textFieldError]: formDataError.lastname,
                })}
                placeholder="Last Name *"
                onChange={handleOnChange("lastname")}
                value={formData.lastname}
              />
            </Box>
            <input
              type="text"
              className={clsx(styles.textField, {
                [styles.textFieldError]: formDataError.email,
              })}
              placeholder="Professional Email Address *"
              onChange={handleOnChange("email")}
              value={formData.email}
            />
            <input
              type="text"
              className={styles.textField}
              placeholder="Company Name"
              onChange={handleOnChange("companyName")}
              value={formData.companyName}
            />
            <textarea
              className={styles.textareaField}
              rows="4"
              placeholder="Additional Comments"
              onChange={handleOnChange("comments")}
              value={formData.comments}
            />
          </form>
          <br/>
          <Typography className={styles.contactUsMessage}>
            We will only keep your information to reply to your message and not
            be using it for any other purposes.
          </Typography>
          <br/>
          <Button className={classes.buttonPrimary} onClick={handleSendMail}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
