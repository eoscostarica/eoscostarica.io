import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import styles from "./styles.module.css";

const ContactUs = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <div className={clsx("container", styles.noPadding)}>
        <ContactUsForm />
        <iframe
          src="https://eoscostarica.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: "1px solid #EEE", background: "white" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </main>
  </Layout>
);

export default ContactUs;
