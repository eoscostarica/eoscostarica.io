import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import WhatWeDoSvg from "./SvgComponents/WhatWeDo";
import Industry1Svg from "./SvgComponents/Industry1";
import Industry2Svg from "./SvgComponents/Industry2";
import Industry3Svg from "./SvgComponents/Industry3";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <Layout>
      <main className={styles.mainContainer}>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.topBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.titleBox}>
            <h1>Enterprise Blockchain Solutions</h1>
            <h1>That Fit Your Needs</h1>
          </div>
          <span>
            Deploy EOSIO blockchain technology to improve transparency, boost
            efficiency, and reduce costs. Start transforming your organization
            by leveraging enterprise blockchain networks.
          </span>
          <button className={styles.mainButton}>Learn more</button>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.enterpriceTitleBox}>
            <h1>What Enterprise</h1>
            <h1>Blockchain Can Do?</h1>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Improve transparency and traceability</h3>
              <span>
                A blockchain registers transactions in chronological order,
                enabling full traceability of data that can be accessed in near
                real-time. These registries are immutable, meaning they cannot
                be altered, thus offering higher transparency in processes.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Boost efficiency and reduce costs</h3>
              <span>
                Smart contracts in blockchain technology allow improved
                efficiency for operations. A smart contract is a protocol that
                executes automatically and autonomously according to its terms,
                cutting the middleman and reducing paperwork and transaction
                costs.
              </span>
            </div>
          </div>
          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Enhance security and trust</h3>
              <span>
                Blockchain’s encryption capabilities offer new layers of
                privacy and security for registering data. A blockchain is
                decentralized, so ledgers are shared by a network of computers, 
                minimizing cyberattacks, enabling better management of authorizations,
              and increasing trust among parties.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Integrate with other technologies</h3>
              <span>
                We define blockchain as a fundamental technology that can
                leverage other techs from the industry 4.0. For instance,
                machine learning, robotics, and VR can integrate blockchain 
                into their solutions to record large amounts of data. 
              </span>
            </div>
          </div>
          <div className={styles.btnBox}>
            <span>
              Learn more about how blockchain can improve your operations.
            </span>
            <button className={styles.mainButton}>Read more here</button>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.whatWeDoBox)}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.whatWeDoBoxLeft}>
            <h1>What We Do</h1>
            <span>
              We make the most of enterprise blockchain technology and design
              solutions for the real world. Our team offers services tailored to
              our clients’ needs and expectations. Contact us and get the
              conversation started!
            </span>
            <div className={styles.mobileSvgIcon}>
              <WhatWeDoSvg />
            </div>

            <Accordion
              title="Software Development"
              content={`Our value proposition is to develop blockchain-based software to solve real-life problems. We have experience working with large global enterprises and SMEs, government entities and NGOs, and open-source projects across many industries. We adapt to our clients’ budgets and needs, without compromising thought leadership or quality. Our team is technology agnostic but specializes in the open-source blockchain technology EOSIO, launched by leading company block.one. `}
            />
            <Accordion
              title="Blockchain Infrastructure"
              content={`We offer top-grade infrastructure for blockchain networks and API endpoints from our datacenter in San José, Costa Rica. Costa Rica is a country with high political stability and a long-lasting democracy. Our strategic location in the middle of the American continent offers convenient network interconnectivity. We also configure, host, and maintain blockchain nodes available for private and public networks with 24/7 monitoring and uptime. Read more about this. `}
            />
            <Accordion
              title="Education and Training"
              content={`In today’s world, new technologies are leading the way to transform many industries. We offer workshops on blockchain and EOSIO to C-suite executives and teams that want to keep up to date and learn more about what is blockchain and enterprise use cases. We also provide training and education resources for new talents that wish to kickstart their career in blockchain.`}
            />
          </div>
          <div className={styles.whatWeDoBoxRight}>
            <WhatWeDoSvg />
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.industryBox}
          boxStyle={styles.noMarginTop}
        >
          <div className={styles.industryTitleBox}>
            <h1>Industries to Deploy Enterprise Blockchain</h1>
          </div>
          <span>
            Blockchain can transform and remodel countless industries. The
            possibilities are endless. Do you still don’t know how blockchain
            can impact your operations? Contact us so we can guide you!
          </span>
          <div className={styles.industryColWrapper}>
            <div className={styles.industryColBox}>
              <div>
                <div className={clsx(styles.svgBox, styles.svgBoxHeight)}>
                  <Industry1Svg />
                </div>
                <h3>Payments and Transfers</h3>
                <span>
                  Blockchain enables an efficient and secure way
                  to register transactions that can facilitate
                  payments and offer near real-time auditing
                  with encryption to reduce data breaches.
                </span>
              </div>
              <button className={styles.mainButton}>Read more</button>
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={clsx(styles.svgBox, styles.svgBoxHeight)}>
                  <Industry2Svg />
                </div>
                <h3>Logistics and Supply Chain</h3>
                <span>
                   In an industry that involves dozens of
                   stakeholders, the capabilities of blockchain 
                   and smart contracts for traceability,
                   authorizations management, and automation can make a 
                   great ally. 
                </span>
              </div>
              <button className={styles.mainButton}>Read more</button>
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={clsx(styles.svgBox, styles.svgBoxHeight)}>
                  <Industry3Svg />
                </div>
                <h3>Gaming</h3>
                <span>
                   Blockchain enables a better way to transfer, valorize, 
                   and collect digital in-game assets. Also, its capabilities 
                   to increase security and offer a more efficient way for 
                   transactions can level-up online gaming.
                </span>
              </div>
              <button className={styles.mainButton}>Read more</button>
            </div>
          </div>
          <span>
            The features of blockchain make it a fundamental technology, meaning
            it can adapt to other technologies and most industries. Blockchain
            can boost efficiency, security, and trust when recording
            transactions, registering data and managing digital assets. Also, it
            can automate and facilitate processes, reducing costs and
            inefficiencies. Discover more industries that can leverage their
            operations on blockchain technology.
          </span>
        </ContentSection>
        <ContentSection
          sectionStyle={styles.inquiresBox}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>Do you have inquiries about blockchain?</h1>
          <button className={styles.mainButton}>Contact us</button>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionWhite, styles.knowEOSCRBox)}
          boxStyle={styles.noMarginTop}
        >
          <h1>Get to Know EOS Costa Rica</h1>
          <span>
            EOS Costa Rica is a spinoff of a company with over three decades
            of developing technologies. We develop blockchain-based solutions
            deploying the EOSIO protocol, provide blockchain infrastructures,
            and offer training and workshops. Let’s get the conversation
            started!
          </span>
          <div className={styles.knowRowBox}>
            <div>
              <h3>The Team</h3>
              <span>
                We have assembled a Latin American team with a problem-solving
                mindset and expertise in their knowledge areas. We operate as a
                distributed team in an Agile environment and make a concerted
                effort to hire talent outside of urban areas to support tech
                careers in rural regions.
              </span>
            </div>
            <picture>
              <source
                className={styles.knowEOSCRImg}
                srcSet={useBaseUrl("img/team.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRImg}
                src={useBaseUrl("img/team.webp")}
              />
            </picture>
          </div>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <picture>
              <source
                className={styles.knowEOSCRImg}
                srcSet={useBaseUrl("img/company.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRImg}
                src={useBaseUrl("img/company.webp")}
              />
            </picture>
            <div>
              <h3>The company</h3>
              <span>
                During the 1980s, we developed the first BBS in the country, a
                precursor to the internet. After decades of offering internet
                infrastructure, hosting, and development services, we began
                providing infrastructure for public blockchain networks. We were
                there during the genesis of the EOS Mainnet and started
                deploying the EOSIO protocol since its launch, accruing
                decades of experience with innovative technologies. 
              </span>
            </div>
          </div>
          <div className={styles.knowRowBox}>
            <div>
              <h3>The technology</h3>
              <span>
                We focus on deploying EOSIO technology, an open-source
                protocol launched in 2018 by leading tech company
                block.one. EOSIO is powered by the native token EOS and offers
                improved scalability due to its high transaction speed, flexibility
                in public and private networks, and energy efficiency compared
                to other blockchains, making it a more eco-friendly option.
              </span>
            </div>
            <picture>
              <source
                className={styles.knowEOSCRImg}
                srcSet={useBaseUrl("img/technology.jp2")}
                type="image/jp2"
              />
              <img
                className={styles.knowEOSCRImg}
                src={useBaseUrl("img/technology.webp")}
              />
            </picture>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.sectionGray, styles.linkProjectBox)}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.flexContent}
        >
          <img alt="LatamLink" src={useBaseUrl("img/Group47.svg")} />
          <img alt="Edenia" src={useBaseUrl("img/Group17.svg")} />
          <img alt="Eossurf" src={useBaseUrl("img/Group11.svg")} />
          <img alt="Ticoblockchain" src={useBaseUrl("img/Group55.svg")} />
        </ContentSection>
        <ContentSection
          sectionStyle={styles.knowEOSCRBox}
          boxStyle={styles.noMarginTop}
        >
          <h1>Some of Our Projects</h1>
             <span>
            Get to know some of our latest projects deploying the EOSIO
            blockchain protocol. Visit the full list here.
          </span>
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
              <span>
                We are part of this voluntary regional alliance, led by Latin
                American technology companies to offer an EOSIO-based testnet to
                the LACChain initiative, a program to accelerate the development
                of the blockchain ecosystem in the region. Read more.
              </span>
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
              <span>
                An open-source blockchain-based app that incentivizes blood donations by
                creating a virtuous circle of value between donors, blood banks, and local
                businesses, leveraged by a token economy. Winner of the “Coding for 
                Change” challenge by block.one. Read more. 
              </span>
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
              <span>
                A blockchain-based platform that provides solutions for in-out gate activity
                for the container industry and real-time transmission of relevant data required for
                proper interchange in port logistics. Read more.
              </span>
            </div>
          </div>
        </ContentSection>
        <ContentSection
          sectionStyle={clsx(styles.inquiresBox, styles.secondaryBG)}
          boxStyle={styles.noMarginTop}
          childrenWrapperStyle={styles.messageBox}
        >
          <h1>Start working with us and implement blockchain technology.</h1>
          <button className={styles.mainButton}>Contact us</button>
        </ContentSection>
        <ContactUsForm />
      </main>
    </Layout>
  );
};

export default Home;
