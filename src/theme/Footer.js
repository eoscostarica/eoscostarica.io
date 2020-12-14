import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

import styles from "./styles.module.css";

const Footer = () => (
  <div className={styles.footerContent}>
    <div>
      <img src={useBaseUrl("img/logo-white.png")} alt="EOS CR LOGO" />
    </div>
    <div>
      <div className={styles.contactusLinkWrapper}>
        <a className={styles.contactUsLink} href={useBaseUrl("/contact-us")}>
          CONTACT US
        </a>
      </div>
      <h2>FOLLOW US</h2>
      <div className={styles.socialCol}>
        <div>
          <a
            href="https://twitter.com/EOSCostaRica"
            target="_blank"
            className={clsx(styles.companySocial, styles.companyLocation)}
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/costaricaeos"
            target="_blank"
            className={clsx(styles.companySocial, styles.companyLocation)}
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/eoscostarica/"
            target="_blank"
            className={clsx(styles.companySocial, styles.companyLocation)}
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://medium.com/@eoscostarica"
            target="_blank"
            className={clsx(styles.companySocial, styles.companyLocation)}
          >
            Medium
          </a>
          <a
            href="https://t.me/eoscr"
            target="_blank"
            className={clsx(styles.companySocial, styles.companyLocation)}
          >
            Telegram
          </a>
          <a
            href="https://www.instagram.com/eoscostarica/"
            target="_blank"
            className={clsx(styles.companySocial, styles.companyLocation)}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div>
      <span className={styles.companyLocation}>
        Edificio Trifami, 5th floor San José,{" "}
        <strong>
          <i>Costa Rica</i>
        </strong>
      </span>
    </div>
  </div>
);

export default Footer;
