import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div>
        <img src="../../static/img/logo-white.png" alt="EOS CR LOGO" />
      </div>
      <div>
        <h2>FOLLOW US</h2>
        <div className={styles.socialCol}>
          <div>
            <span className={clsx(styles.companySocial, styles.companyLocation)}>Twitter</span>
            <span className={clsx(styles.companySocial, styles.companyLocation)}>Facebook</span>
            <span className={clsx(styles.companySocial, styles.companyLocation)}>LinkedIn</span>
          </div>
          <div>
            <span className={clsx(styles.companySocial, styles.companyLocation)}>Medium</span>
            <span className={clsx(styles.companySocial, styles.companyLocation)}>Telegram</span>
            <span className={clsx(styles.companySocial, styles.companyLocation)}>Instagram</span>
          </div>
        </div>
      </div>
      <div>
        <span className={styles.companyLocation}>
          Edificio Trifami, 5th floor San José, <strong><i>Costa Rica</i></strong>
        </span>
      </div>
    </div>
  );
};

export default Footer;
