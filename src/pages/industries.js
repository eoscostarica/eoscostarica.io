import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const Industries = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.topBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.titleBox}>
          <h1>Blockchain Solutions</h1>
          <h1>by Industry</h1>
        </div>
        <span>
          Organizations and companies in many industries deploy blockchain
          technology to solve significant problems and improve their operations.
          These are some use cases of enterprise blockchain in different
          sectors, such as financial, supply chain, gaming, and healthcare.
        </span>
        <button className={styles.mainButton}>Contact us</button>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.knowEOSCRBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.industriesImg}
              srcSet={useBaseUrl("img/default-image.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.industriesImg}
              src={useBaseUrl("img/default-image.webp")}
            />
          </picture>
          <div>
            <span className={styles.titleH1}>
              Blockchain enables an efficient and secure way to register
              transactions that can facilitate payments and offer near real-time
              auditing with encryption to reduce data breaches. Blockchain may
              also promote alternate financial applications, such as new
              liquidity solutions and microloans management, and improved
              payment structures.
            </span>
            <button className={styles.mainButton}>Read more</button>
          </div>
        </div>
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.industriesImg}
              srcSet={useBaseUrl("img/default-image.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.industriesImg}
              src={useBaseUrl("img/default-image.webp")}
            />
          </picture>
          <div>
            <span className={styles.titleH1}>
              In an industry that involves dozens of stakeholders, the
              capabilities of blockchain and smart contracts for traceability,
              authorizations management, and automation can make a great ally.
              Blockchain can integrate different technologies, such as IoT and
              AI, to create comprehensive solutions and streamline processes in
              the logistics and supply chain industry.
            </span>
            <button className={styles.mainButton}>Read more</button>
          </div>
        </div>
        <div className={clsx(styles.knowRowBox, styles.colReverse)}>
          <picture>
            <source
              className={styles.industriesImg}
              srcSet={useBaseUrl("img/default-image.jp2")}
              type="image/jp2"
            />
            <img
              className={styles.industriesImg}
              src={useBaseUrl("img/default-image.webp")}
            />
          </picture>
          <div>
            <span className={styles.titleH1}>
              The gaming industry is booming—nearly 40% of the total world's
              population play video games. Blockchain enables a better way to
              transfer, valorize, and collect digital in-game assets. Its
              capabilities to increase security and offer a more efficient way
              for transactions can level-up online gaming.
            </span>
            <button className={styles.mainButton}>Read more</button>
          </div>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.enterpriceTitleBox}>
          <h1>Blockchain in More Industries</h1>
        </div>
        <div className={clsx(styles.colBox)}>
          <Accordion
            title="Asset Managementy"
            content="Blockchain technology enables an immutable and secure way to tokenize and manage tangible and intangible assets. Some opportunities include innovative liquidity options and reduced management costs."
          />

          <Accordion
            title="Decentralized Finance"
            content="Also known as DeFi, decentralized finance leverages blockchain technology to explore new liquidity opportunities for citizens. Our team is part of evodex, an open-source DeFi app."
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Digital Identity"
            content="Blockchain allows an immutable, transparent, and secure system to manage digital identities that can interconnect with IoT, biometrics, and enterprise management systems."
          />

          <Accordion
            title="Energy"
            content="Blockchain offers an efficient and transparent way to improve the operations, distribution, and data management for energy companies. Decentralized networks may help promote sustainable and private energy generation alternatives."
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Media and Entertainment"
            content="The blockchain’s capabilities to securely and immutably store registries can help reduce piracy and disputes. Also, blockchain can protect IP and improve traceability of payments and content distribution."
          />

          <Accordion
            title="Government"
            content="Government institutions can deploy blockchain technology to leverage its transparency and immutability features to increase trust between the public sector and the citizens. It also allows a cost-efficient way to register data and accountability."
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Healthcare and Insurance"
            content="Blockchain technology offers improved efficiency, traceability, and security to store medical and other sensitive data from patients. Smart contracts help reduce costs for insurance claims processing."
          />

          <Accordion
            title="Legal Tech"
            content="Smart contracts are computer codes that can execute automatically and autonomously according to the contract terms. These may transform legal processes by adding transparency, efficiency, and immutable registries."
          />
        </div>
        <div className={styles.colBox}>
          <Accordion
            title="Real Estate"
            content="Leverage real estate investments with blockchain technology by creating new business models. Blockchain helps integrate digital assets for liquidity and streamline investor relations and portfolio management."
          />

          <Accordion
            title="Sports"
            content="Blockchain in sports offers a great way to increase fan engagement, promote active participation in decision-making, and monetize through new streams such as player content and collectibles."
          />
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>Choosing an Enterprise Blockchain</h1>
          <span>
            There are several enterprise blockchain platforms in the market with
            different characteristics and capabilities. The following is a list
            of some key features you must consider when choosing what blockchain
            platform is the most suitable for your organization:
          </span>
        </div>
        <div className={styles.enterpriceTitleBox}>
          <div className={clsx(styles.colBox, styles.flexContent)}>
            <div className={styles.flexBox}>
              <div>
                <h3>Privacy and transparency</h3>
                <span>
                  How are the blockchain’s security and confidentiality
                  protocols different from others’, and how does it handle
                  transparency?
                </span>
              </div>
              <div>
                <h3>Cost-efficiency</h3>
                <span>
                  Would the organization see a significant reduction in costs by
                  integrating smart contracts or simplifying the data sharing
                  process?
                </span>
              </div>
              <div>
                <h3>Quick adoption</h3>
                <span>
                  Can your team use their experience with programming languages,
                  or do they need to learn a new one?
                </span>
              </div>
              <div>
                <h3>Speed or throughput</h3>
                <span>
                  How quickly does your solution need to be? Are you a
                  high-frequency trading company, or can you afford longer block
                  confirmation times?
                </span>
              </div>
            </div>
            <img
              className={styles.defaultImg}
              alt="eoscr-logo"
              src={useBaseUrl("img/eoscr.svg")}
            />
          </div>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.mainButton}>Contact us</button>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>Additional Resources</h1>
          <span>
            Find more interesting reads and resources to continue learning about
            enterprise blockchain and EOSIO.
          </span>
          <div className={styles.colBox}>
            <picture>
              <source
                className={styles.defaultImg}
                srcSet={useBaseUrl("img/default-image.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.defaultImg}
                src={useBaseUrl("img/default-image.webp")}
              />
            </picture>
            <picture>
              <source
                className={styles.defaultImg}
                srcSet={useBaseUrl("img/default-image.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.defaultImg}
                src={useBaseUrl("img/default-image.webp")}
              />
            </picture>
          </div>
          <div className={styles.colBox}>
            <picture>
              <source
                className={styles.defaultImg}
                srcSet={useBaseUrl("img/default-image.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.defaultImg}
                src={useBaseUrl("img/default-image.webp")}
              />
            </picture>
            <picture>
              <source
                className={styles.defaultImg}
                srcSet={useBaseUrl("img/default-image.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.defaultImg}
                src={useBaseUrl("img/default-image.webp")}
              />
            </picture>
          </div>
        </div>
      </ContentSection>
      <ContactUsForm />
    </main>
  </Layout>
);

export default Industries;
