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

  const handleOnChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
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
                className={styles.textField}
                placeholder="First Name"
                onChange={handleOnChange("name")}
                value={formData.name}
              />
              <input
                type="text"
                className={styles.textField}
                placeholder="Last Name"
                onChange={handleOnChange("lastname")}
                value={formData.lastname}
              />
            </div>
            <input
              type="text"
              className={styles.textField}
              placeholder="Professional Email Address"
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
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
