import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import ContactUsForm from "./components/ContactUs";
import Accordion from "./components/Accordion";
import ContentSection from "./components/ContentSection";
import styles from "./styles.module.css";

const BlockProducer = () => (
  <Layout>
    <main className={styles.mainContainer}>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.topBox)}
        boxStyle={styles.noMarginTop}
        childrenWrapperStyle={styles.flexColumn}
      >
        <div className={styles.titleBox}>
          <h1>EOS Block Producer</h1>
        </div>
        <span>
          Learn more about how we help to develop the EOSIO blockchain ecosystem
          worldwide.
        </span>
        <button className={styles.mainButton}>Connect with us</button>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.enterpriceTitleBox}>
          <h1>Our Story</h1>
          <span>
            EOS Costa Rica is a company spinoff with over three decades of
            developing technologies in Costa Rica. During the 80s, we launched
            the first BBS (bulletin board service) in the country, a precursor
            to the internet. Later on, the company shifted to educating new
            users on using email and browsing the web. Then, we started offering
            internet infrastructure, hosting, and development services.
          </span>
          <br />
          <span>
            In 2013, we began providing infrastructure for public blockchain
            networks and learned first-hand how blockchains work. Then, in 2018
            when EOSIO was launched, we investigated the advantages of this
            technology and started learning how to deploy it in the real world.
            We were there during the genesis of the EOS Mainnet and will
            continue to be there throughout its growth.
          </span>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.enterpriceTitleBox}>
          <h1>Our Values</h1>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Ongoing education</h3>
            <span>
              We believe that continuous training and building human talent is
              crucial to developing a robust ecosystem.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Loyalty</h3>
            <span>
              We recognize and acknowledge everyone’s unique talents and seek to
              build loyalty by empowering the EOSIO community.
            </span>
          </div>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Resilience</h3>
            <span>
              Our team evolves alongside technology. We strive to be as nimble
              and efficient as possible, which lets us quickly adapt and
              implement the newest innovations.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Liberty</h3>
            <span>
              We defend individual sovereignty among the EOS community,
              replicating Costa Rica’s premise of freedom and peace as the
              lengthiest democracy in Latin America.
            </span>
          </div>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Tolerance</h3>
            <span>
              Our team advocates for the rights of education, entrepreneurship,
              and opportunities for all the members in our community as a way to
              develop the ecosystem.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Prudence</h3>
            <span>
              We commit to safeguard our community’s future and take calculated
              risks that will bring us further to our long term goals.
            </span>
          </div>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Accountability</h3>
            <span>
              We firmly believe and encourage taking full accountability from
              our team members and stakeholders. We value transparency and
              responsibility.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Equality</h3>
            <span>
              We endorse and defend a governance model guided by merit
              principles for our community’s benefit.
            </span>
          </div>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={styles.industryBox}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.industryTitleBox}>
          <h1>Block Producer Information</h1>
        </div>
        <div className={styles.sectionWhite}>
          <h3 className={styles.titleH1}>Code of conduct</h3>
          <h4>EOS Costa Rica pledges to:</h4>

          <span>
            Provide the highest standard bare-metal infrastructure available to
            the EOS ecosystem.
          </span>
          <span>
            Become an economically sustainable and highly competitive EOS Block
            Producer.
          </span>
          <span>
            Allocate block rewards to EOS educational and development
            initiatives. Sponsor dApps and projects for community-led
            developments.
          </span>
          <span>
            Be totally transparent and open when allocating block rewards.
            Actively participate in the blockchain governance with an open and
            positive attitude.
          </span>
          <span>
            Respect and defend the constitution, fair elections, community
            vigilance, and arbitration mechanisms.
          </span>
        </div>
        <h3 className={styles.titleH1}>Ownership disclosure</h3>
        <span>
          According to the Block Producer Agreement and values that have
          represented us since the beginning of our campaign, EOS Costa Rica
          hereby commits to disclose all beneficial owners of our organization
          and encourages other BP candidates to abide by the Agreement. Whereas
          EOS Costa Rica is a community-led initiative involving various
          stakeholders, including but not limited to: developers, security
          engineers, community managers, system administrators, and financial
          staff, the Block Producer Keys are ultimately owned and controlled by
          Sistemas Edenia Internacional, S.A.
        </span>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.industryBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={styles.industryTitleBox}>
          <h1>Open-source Projects</h1>
        </div>
        <span>
          Find out more about some open-source we are developing. Feel free to
          look over our Github profile for more details!
        </span>
        <div className={styles.industryColWrapper}>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
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
              <h3>Lifebank</h3>
              <span>
                An open-source blockchain-based app that incentivizes blood
                donations by creating a virtuous circle of value between donors,
                blood banks, and local businesses, leveraged by a token economy.
                Winner of the "Coding for Change" challenge by block.one.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
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
              <h3>EOS Rate</h3>
              <span>
                EOS Rate is an open- source app that allows EOS token holders to
                access a rating system and voting portal for block producers and
                proxies in the EOS blockchain.
              </span>
            </div>
          </div>
          <div className={styles.industryColBox}>
            <div>
              <div className={styles.svgBox}>
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
              <h3>EOSIO Dashboard</h3>
              <span>
                The EOSIO Dashboard is an open-source project that allows users
                to visualize the rewards distribution along the EOS network to
                seek accountability and transparency.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.btnBox}>
          <span>
            Follow us on our profiles. We’re continually looking for open-source
            collaborations!
          </span>
        </div>
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionWhite, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>Why Costa Rica?</h1>
          <span>
            We are the first EOS block producer candidate in Central America and
            one of the few in Latin America. We believe that Costa Rica’s
            features can be an excellent asset for aggregating diversity to the
            EOS network, be it for its political stability, absence of an army,
            or respect to Human Rights. Additionally, its technical
            infrastructure, stable political framework, flexible corporate
            structure, and defined jurisdiction makes it an opportunistic
            network available for the censorship-resistant EOS.
          </span>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Liberty and Peace</h3>
            <span>
              Costa Rica is one of the most stable and longest-lasting
              Democracies in America. It abolished its army in 1948 to promote
              education and wellbeing and stands out on equality and innovation.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Human Rights</h3>
            <span>
              Costa Rica is founded on respect to Human Rights, and even the
              Inter-American Institute of Human Rights based its headquarters in
              San José.
            </span>
          </div>
        </div>

        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Ecology</h3>
            <span>
              Costa Rica promotes sustainable development and houses more than
              4% of the world’s biodiversity, where more than 26% of its
              territory comprises of protected areas and National Parks.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Strategic location</h3>
            <span>
              Costa Rica is conveniently located in the middle of the Americas.
              The country connects three submarine fiber optic cables, providing
              real-time fail- over and redundancy to our infrastructure.
            </span>
          </div>
        </div>
        <div className={styles.enterpriceInfoBox}>
          <h3>Equality</h3>
          <span>
            Costa Ricans value equality for all. For instance, the country ranks
            as the first in Latin America for gender equality.
          </span>
        </div>
        <div className={styles.enterpriceTitleBox}>
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
      </ContentSection>
      <ContentSection
        sectionStyle={clsx(styles.sectionGray, styles.enterpriceBox)}
        boxStyle={styles.noMarginTop}
      >
        <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
          <h1 className={styles.titleH1}>Vote for Us as Block Producers</h1>
        </div>
        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Experience as integrators</h3>
            <span>
              We focus on building strong relationships with strategic partners
              and the enterprise sector. We constantly seek new business
              opportunities and strive to educate executives in both the public
              and private sectors about the EOSIO protocol and blockchain
              technology.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Reason 2</h3>
            <span>
              We strive to recruit the best candidates. We have assembled a
              Latin American team with a problem-solving mindset and expertise
              in their areas of knowledge. Our team operates in an Agile
              environment that encourages participation, self- accountability,
              and innovation.
            </span>
          </div>
        </div>

        <div className={styles.colBox}>
          <div className={styles.enterpriceInfoBox}>
            <h3>Great open-source projects</h3>
            <span>
              We develop and support open- source projects such as EOS Rate,
              LatamLink, Lifebank, EOSIO Dashboard, and many more that strive to
              push the EOSIO ecosystem forward. These projects are built by
              talented developers and professionals that believe in the benefits
              of the network.
            </span>
          </div>
          <div className={styles.enterpriceInfoBox}>
            <h3>Strong community building</h3>
            <span>
              We are part of local and global ecosystems to promote EOSIO
              adoption. We attend events such as the EOS Conferences, events by
              Block.one, and take an active part in the community’s digital
              conversations.
            </span>
          </div>
        </div>
        <div className={styles.enterpriceTitleBox}>
          <picture>
            <source
              srcSet={useBaseUrl("img/default-image.jp2")}
              type="image/jp2"
            />
            <img src={useBaseUrl("img/default-image.webp")} />
          </picture>
        </div>
        <div className={styles.btnBox}>
          <span>Get to know more about our team!</span>
          <button className={styles.mainButton}>Read more</button>
        </div>
      </ContentSection>
      <ContactUsForm />
    </main>
  </Layout>
);

export default BlockProducer;
