import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const OurProjects = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.topBox)}
        boxStyle={styles.noMarginTop}
        childrenWrapperStyle={styles.flexColumn}
      >
        <div className={styles.titleBox}>
          <h1>Enterprise Blockchain Use Cases</h1>
        </div>
        <span>Get to Know Our Latest Projects</span>
        <button className={styles.mainButton}>Contact us</button>
      </ContentSection>
      <ContentSection
        sectionStyle={styles.knowEOSCRBox}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.knowEOSCRProjectImg}
              srcSet={useBaseUrl("img/latamlink2.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.knowEOSCRProjectImg}
              src={useBaseUrl("img/latamlink2.webp")}
            />
          </picture>
          <div>
            <h3>LatamLink</h3>
            <span className={styles.titleH1}>
              We are part of this voluntary regional alliance, led by Latin
              American technology companies to offer an EOSIO-based testnet to
              the LACChain initiative, a program to accelerate the development
              of the blockchain ecosystem in the region.
            </span>
            <button className={styles.mainButton}>Read more</button>
          </div>
        </div>
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.knowEOSCRProjectImg}
              srcSet={useBaseUrl("img/lifebank.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.knowEOSCRProjectImg}
              src={useBaseUrl("img/lifebank.webp")}
            />
          </picture>
          <div>
            <h3>Lifebank</h3>
            <span className={styles.titleH1}>
              An open-source blockchain-based app that incentivizes blood
              donations by creating a virtuous circle of value between donors,
              blood banks, and local businesses, leveraged by a token economy.
              Winner of the "Coding for Change" challenge by block.one.
            </span>
            <button className={styles.mainButton}>Read more</button>
          </div>
        </div>
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.knowEOSCRProjectImg}
              srcSet={useBaseUrl("img/smartgate.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.knowEOSCRProjectImg}
              src={useBaseUrl("img/smartgate.webp")}
            />
          </picture>
          <div>
            <h3>SMARTGATE</h3>
            <span className={styles.titleH1}>
              A blockchain-based platform that provides solutions for in-out
              gate activity for the container industry and real-time
              transmission of relevant data required for proper interchange in
              port logistics
            </span>
            <button className={styles.mainButton}>Read more</button>
          </div>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.industryBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.industryTitleBox}>
          <h1>Other Projects</h1>
        </div>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/forum.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/forum.webp")}
                  />
                </picture>
              </div>
              <h3>Enterprise EOSIO Forum</h3>
              <span>
                We are part of the Enterprise EOSIO Forum, a community-driven
                initiative to discuss enterprise blockchain solutions deploying
                EOSIO technology.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/fundation.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/fundation.webp")}
                  />
                </picture>
              </div>
              <h3>EOS Foundation</h3>
              <span>
                We are part of the EOS Foundation proof of concept. It is an
                autonomous, decentralized, non-profit organization that will
                enable self-representation and promotion of the EOS community.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/eosratecr.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/eosratecr.webp")}
                  />
                </picture>
              </div>
              <h3>EOS Rate</h3>
              <span>
                EOS Rate is an open- source app that allows EOS token holders to
                access a rating system and voting portal for block producers and
                proxies in the EOS blockchain.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/dashboard.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/dashboard.webp")}
                  />
                </picture>
              </div>
              <h3>EOSIO Dashboard</h3>
              <span>
                The EOSIO Dashboard is an open-source project that allows users
                to visualize the rewards distribution along the EOS network to
                seek accountability and transparency.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/evodex.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/evodex.webp")}
                  />
                </picture>
              </div>
              <h3>Evodex</h3>
              <span>
                Evodex is the front-end user interface for a liquidity pool
                protocol where users vote on the pool liquidity fees and pay
                zero gas. We were in charge of UX and front-end design.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/enterpriseproject.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/enterpriseproject.webp")}
                  />
                </picture>
              </div>
              <h3>Undisclosed enterprise project</h3>
              <span>
                We developed an app for a US-based client in the accounting and
                tax industry for improved traceability of intercompany
                transactions.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
                <picture>
                  <source
                    className={styles.defaultImg}
                    srcSet={useBaseUrl("img/notario.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImg}
                    src={useBaseUrl("img/notario.webp")}
                  />
                </picture>
              </div>
              <h3>Notario Digital</h3>
              <span>
                Notario Digital is an open- source project that generates a hash
                of any file to register it immutably on an EOSIO network.
              </span>
            </div>
          </div>
        </div>
      </ContentSection>
      <ContactUsForm />
    </main>
  </Layout>
);

export default OurProjects;
