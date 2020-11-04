import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import WhatWeDoSvg from "./SvgComponents/WhatWeDo";
import Industry1Svg from "./SvgComponents/Industry1";
import Industry2Svg from "./SvgComponents/Industry2";
import Industry3Svg from "./SvgComponents/Industry3";
import styles from "./styles.module.css";

const Accordion = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div>
        <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.titleText}>{title}</span>
          <div className={isOpen ? styles.arrowUp : styles.arrowDown} />
        </div>
        <div className={clsx(styles.content, { [styles.contentOpen]: isOpen })}>
          <div
            className={clsx(styles.contentText, {
              [styles.contentTextOpen]: isOpen,
            })}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
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
    <Layout>
      <main className={styles.mainContainer}>
        <section className={styles.topBox}>
          <div className={styles.titleBox}>
            <h1>Enterprise Blockchain</h1>
            <h1>Solutions That</h1>
            <h1>Fit Your Needs</h1>
          </div>

          <span>
            Deploy EOSIO blockchain technology to improve transparency, boost
            efficiency, and reduce costs. Start transforming your organization
            by leveraging enterprise blockchain networks.
          </span>
          <button className={styles.mainButton}>Call To Action</button>
        </section>

        <section className={styles.enterpriceBox}>
          <div className={styles.enterpriceTitleBox}>
            <h1>What Enterprise</h1>
            <h1>Blockchain Can DoYour Needs</h1>
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
                costs.{" "}
              </span>
            </div>
          </div>

          <div className={styles.colBox}>
            <div className={styles.enterpriceInfoBox}>
              <h3>Enhance security and trust</h3>
              <span>
                A blockchain registers transactions in chronological order,
                enabling full traceability of data that can be accessed in near
                real-time. These registries are immutable, meaning they cannot
                be altered, thus offering higher transparency in processes.
              </span>
            </div>
            <div className={styles.enterpriceInfoBox}>
              <h3>Integrate with other technologies</h3>
              <span>
                A blockchain registers transactions in chronological order,
                enabling full traceability of data that can be accessed in near
                real-time. These registries are immutable, meaning they cannot
                be altered, thus offering higher transparency in processes.
              </span>
            </div>
          </div>
          <div className={styles.btnBox}>
            <button className={styles.mainButton}>Call To Action</button>
          </div>
        </section>

        <section className={styles.whatWeDoBox}>
          <div className={styles.whatWeDoBoxLeft}>
            <h1>What We Do</h1>
            <div className={styles.mobileSvgIcon}>
              <WhatWeDoSvg />
            </div>
            <Accordion
              title="Software Development"
              content={`Our value proposition is to develop blockchain-based software to solve real-life problems. We have experience working with large global enterprises and SMEs, government entities and NGOs, and open-source projects across many industries. We adapt to our clients’ budgets and needs, without compromising thought leadership or quality. Our team is technology agnostic but specializes in the open-source blockchain technology EOSIO, launched by leading company block.one. `}
            />
            <Accordion
              title="Blockchain Infrastructure"
              content={`Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliq`}
            />
            <Accordion
              title="Education and Training"
              content={`Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliq`}
            />
          </div>
          <div className={styles.whatWeDoBoxRight}>
            <WhatWeDoSvg />
          </div>
        </section>
        <section className={styles.industryBox}>
          <div className={styles.industryTitleBox}>
            <h1>Industries to Deploy</h1>
            <h1>Enterprise Blockchain</h1>
          </div>
          <span>
            Blockchain can transform and remodel countless industries. The
            possibilities are endless. Do you still don’t know how blockchain
            can impact your operations? Contact us so we can guide you!
          </span>
          <div className={styles.industryColWrapper}>
            <div className={styles.industryColBox}>
              <div>
                <div className={styles.svgBox}>
                  <Industry1Svg />
                </div>
                <h3>Payments and Transfers</h3>
                <span>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing.
                </span>
              </div>
              <button className={styles.mainButton}>Call To Action</button>
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={styles.svgBox}>
                  <Industry2Svg />
                </div>
                <h3>Logistics and Supply Chain</h3>
                <span>
                  Blockchain enables an efficient and secure way to register
                  transactions that can facilitate payments and offer near
                  real-time auditing.
                </span>
              </div>
              <button className={styles.mainButton}>Call To Action</button>
            </div>
            <div className={styles.industryColBox}>
              <div>
                <div className={styles.svgBox}>
                  <Industry3Svg />
                </div>
                <h3>Healthcare and Insurance</h3>
                <span>
                  Smart contracts can automate insurance claims, and encryption
                  can reduce data breaches, making blockchain an ideal solution
                  for registering sensitive information.
                </span>
              </div>
              <button className={styles.mainButton}>Call To Action</button>
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
        </section>
        <section className={styles.inquiresBox}>
          <h1>Do you have inquiries about blockchain?</h1>
          <button className={styles.mainButton}>Call To Action</button>
        </section>
        <section className={styles.knowEOSCRBox}>
          <h1>Get to Know EOS Costa Rica</h1>
          <span>
            EOS Costa Rica is a spinoff of a company with over three decades of
            developing technologies. We develop blockchain-based solutions
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
            <img src="../../static/img/team.png" alt="EOS CR LOGO" />
          </div>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <img src="../../static/img/company.png" alt="EOS CR LOGO" />
            <div>
              <h3>The company</h3>
              <span>
                We have assembled a Latin American team with a problem-solving
                mindset and expertise in their knowledge areas. We operate as a
                distributed team in an Agile environment and make a concerted
                effort to hire talent outside of urban areas to support tech
                careers in rural regions.
              </span>
            </div>
          </div>
          <div className={styles.knowRowBox}>
            <div>
              <h3>The technology</h3>
              <span>
                We have assembled a Latin American team with a problem-solving
                mindset and expertise in their knowledge areas. We operate as a
                distributed team in an Agile environment and make a concerted
                effort to hire talent outside of urban areas to support tech
                careers in rural regions.
              </span>
            </div>
            <img src="../../static/img/technology.png" alt="EOS CR LOGO" />
          </div>
        </section>
        <section className={styles.linkProjectBox}>
          <img alt="LatamLink" src={useBaseUrl("img/Group47.svg")} />
          <img alt="Edenia" src={useBaseUrl("img/Group17.svg")} />
          <img alt="Eossurf" src={useBaseUrl("img/Group11.svg")} />
          <img alt="Ticoblockchain" src={useBaseUrl("img/Group55.svg")} />
        </section>
        <section className={styles.knowEOSCRBox}>
          <h1>Some of Our Projects</h1>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <img src="../../static/img/latamlink2.png" alt="EOS CR LOGO" />
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
            <img src="../../static/img/lifebank.png" alt="EOS CR LOGO" />

            <div>
              <h3>Lifebank</h3>
              <span>
                We have assembled a Latin American team with a problem-solving
                mindset and expertise in their knowledge areas. We operate as a
                distributed team in an Agile environment and make a concerted
                effort to hire talent outside of urban areas to support tech
                careers in rural regions.
              </span>
            </div>
          </div>
          <div className={clsx(styles.knowRowBox, styles.colReverse)}>
            <img src="../../static/img/smartgate.png" alt="EOS CR LOGO" />

            <div>
              <h3>SMARTGATE</h3>
              <span>
                We have assembled a Latin American team with a problem-solving
                mindset and expertise in their knowledge areas. We operate as a
                distributed team in an Agile environment and make a concerted
                effort to hire talent outside of urban areas to support tech
                careers in rural regions.
              </span>
            </div>
          </div>
        </section>
        <section className={clsx(styles.inquiresBox, styles.secondaryBG)}>
          <h1>Start working with us and implement blockchain technology.</h1>
          <button className={styles.mainButton}>Call To Action</button>
        </section>
        <section className={styles.contactUsBox}>
          <h1>Contact</h1>
          <span>
            Let’s get the conversation started. Ask us how we can help you
            implement blockchain technology into your organization.
          </span>
          <form>
            <div>
              <input
                type="text"
                placeholder="First Name"
                onChange={handleOnChange("name")}
                value={formData.name}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleOnChange("lastname")}
                value={formData.lastname}
              />
            </div>
            <input
              type="text"
              placeholder="Professional Email Address"
              onChange={handleOnChange("email")}
              value={formData.email}
            />
            <input
              type="text"
              placeholder="Company Name"
              onChange={handleOnChange("companyName")}
              value={formData.companyName}
            />
            <textarea
              rows="4"
              placeholder="Additional Comments"
              onChange={handleOnChange("comments")}
              value={formData.comments}
            />
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
