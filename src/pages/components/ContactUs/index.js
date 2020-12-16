import React, { useState } from "react";
import clsx from "clsx";

import styles from "../../styles.module.css";

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
    <section className={clsx(styles.sectionWhite, styles.contactUsBox)}>
      <div className="container">
        <div className={clsx("row", styles.flexColumn)}>
          <h1>Contact</h1>
          <span>
            Let’s get the conversation started. Ask us how we can help you
            implement blockchain technology into your organization.
          </span>
          <form>
            <div className={styles.completeName}>
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
            </div>
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
          <span className={styles.contactUsMessage}>
            We will only keep your information to reply to your message and not
            be using it for any other purposes.
          </span>
          <button className={styles.secondaryButton} onClick={handleSendMail}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
