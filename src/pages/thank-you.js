import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

const ThankYou = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <div className={clsx("container", styles.noPadding)}>
        <section className={clsx(styles.sectionWhite, styles.contactUsBox)}>
          <div className="container">
            <div className={clsx("row", styles.flexColumn)}>
              <h1>Thank you for contacting us</h1>
              <span>
                We will contact you shortly. Your contact information will only
                be used to reply to your message.
              </span>
              <br></br>
              <span>
                In the meantime, follow us on social media for more updates:
              </span>
              <div className={styles.socialMediaBox}>
                {/* <ul>
                  <li> */}
                    <a
                      href="https://twitter.com/EOSCostaRica"
                      target="_blank"
                      className={clsx(
                        styles.companySocial,
                        styles.companyLocation
                      )}
                    >
                      Twitter
                    </a>
                  {/* </li>
                  <li> */}
                    <a
                      href="https://www.facebook.com/costaricaeos"
                      target="_blank"
                      className={clsx(
                        styles.companySocial,
                        styles.companyLocation
                      )}
                    >
                      Facebook
                    </a>
                  {/* </li>
                  <li> */}
                    <a
                      href="https://www.linkedin.com/company/eoscostarica/"
                      target="_blank"
                      className={clsx(
                        styles.companySocial,
                        styles.companyLocation
                      )}
                    >
                      LinkedIn
                    </a>
                  {/* </li>
                  <li> */}
                    <a
                      href="https://medium.com/@eoscostarica"
                      target="_blank"
                      className={clsx(
                        styles.companySocial,
                        styles.companyLocation
                      )}
                    >
                      Medium
                    </a>
                  {/* </li>
                  <li> */}
                    <a
                      href="https://t.me/eoscr"
                      target="_blank"
                      className={clsx(
                        styles.companySocial,
                        styles.companyLocation
                      )}
                    >
                      Telegram
                    </a>
                  {/* </li>
                </ul> */}
              </div>
              <span>
                If you wish to receive updates directly into your inbox, please
                subscribe to our newsletter:
              </span>
              <br></br>
              <iframe
                src="https://eoscostarica.substack.com/embed"
                width="100%"
                height="320"
                style={{ border: "1px solid #EEE", background: "white" }}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
  </Layout>
);

export default ThankYou;
