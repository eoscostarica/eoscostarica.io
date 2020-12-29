import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';

import styles from "./styles.module.css";

const ThankYou = () => (
  <Layout>
    <Box className={styles.mainContainer}>
      <Box className={clsx("container", styles.noPadding)}>
        <Box className={clsx(styles.sectionWhite, styles.contactUsBox)}>
          <Box className="container">
            <Box className={clsx("row", styles.flexColumn)}>
              <Typography variant="h2">Thank you for contacting us</Typography>
              <Typography variant="body1">
                We will contact you shortly. Your contact information will only
                be used to reply to your message.
              </Typography>
              <br></br>
              <Typography variant="body1">
                In the meantime, follow us on social media for more updates:
              </Typography>
              <Box className={styles.socialMediaBox}>
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
              </Box>
              <Typography variant="body1">
                If you wish to receive updates directly into your inbox, please
                subscribe to our newsletter:
              </Typography>
              <br></br>
              <iframe
                src="https://eoscostarica.substack.com/embed"
                width="100%"
                height="320"
                style={{ border: "1px solid #EEE", background: "white" }}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default ThankYou;
