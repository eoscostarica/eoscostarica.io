import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../theme/index';

import styles from "./styles.module.css";
import useStyles from "../css/styles.js"

const BlockProducer = () => {
  const classes = useStyles()
  return(
    <Layout>
      <ThemeProvider theme={Theme}>
        <Box className={styles.mainContainer}>
          <Box className={clsx("container", styles.noPadding)}>
            <Box
              className={clsx(styles.sectionGray, styles.topBox, styles.bpTopBox)}
            >
              <Box>
                <img
                  className={styles.logoMobile}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
                <Box className={styles.titleBox}>
                  <Typography variant="h1">EOS Block Producer</Typography>
                </Box>
                <Typography variant="body1">
                  Learn more about how we help to develop the EOSIO blockchain
                  ecosystem worldwide.
                </Typography>
                <Box className={styles.btnTop}>
                  <Button 
                    className={classes.buttonPrimary}
                    href={useBaseUrl("/contact-us")}>
                      Contact us
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
              <Box className={styles.enterpriceTitleBox}>
                <Typography variant="h2">Our Story</Typography>
                <Typography variant="body1">
                  EOS Costa Rica is a company spinoff with over three decades of
                  developing technologies in Costa Rica. During the 80s, we launched
                  the first BBS (bulletin board service) in the country, a precursor
                  to the internet. Later on, the company shifted to educating new
                  users on using email and browsing the web. Then, we started
                  offering internet infrastructure, hosting, and development
                  services.
                </Typography>
                <Typography variant="h3"/>
                <Typography variant="body1">
                  In 2013, we began providing infrastructure for public blockchain
                  networks and learned first-hand how blockchains work. Then, in
                  2018 when EOSIO was launched, we investigated the advantages of
                  this technology and started learning how to deploy it in the real
                  world. We were there during the genesis of the EOS Mainnet and
                  will continue to be there throughout its growth.
                </Typography>
              </Box>
            </Box>
            <Box
              className={clsx(
                styles.sectionGray,
                styles.enterpriceBox,
                styles.flexColumn
              )}
            >
              <Box className={styles.enterpriceTitleBox}>
                <Typography variant="h2">Our Values</Typography>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Ongoing education</Typography>
                  <Typography variant="body1">
                    We believe that continuous training and building human talent is
                    crucial to developing a robust ecosystem.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Loyalty</Typography>
                  <Typography variant="body1">
                    We recognize and acknowledge everyone’s unique talents and seek
                    to build loyalty by empowering the EOSIO community.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Resilience</Typography>
                  <Typography variant="body1">
                    Our team evolves alongside technology. We strive to be as nimble
                    and efficient as possible, which lets us quickly adapt and
                    implement the newest innovations.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Liberty</Typography>
                  <Typography variant="body1">
                    We defend individual sovereignty among the EOS community,
                    replicating Costa Rica’s premise of freedom and peace as the
                    lengthiest democracy in Latin America.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Tolerance</Typography>
                  <Typography variant="body1">
                    Our team advocates for the rights of education,
                    entrepreneurship, and opportunities for all the members in our
                    community as a way to develop the ecosystem.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Prudence</Typography>
                  <Typography variant="body1">
                    We commit to safeguard our community’s future and take
                    calculated risks that will bring us further to our long term
                    goals.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Accountability</Typography>
                  <Typography variant="body1">
                    We firmly believe and encourage taking full accountability from
                    our team members and stakeholders. We value transparency and
                    responsibility.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Equality</Typography>
                  <Typography variant="body1">
                    We endorse and defend a governance model guided by merit
                    principles for our community’s benefit.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={clsx(styles.sectionWhite, styles.industryBox)}>
              <Box className={styles.industryTitleBox}>
                <Typography variant="h2">Block Producer Information</Typography>
              </Box>
              <Box>
                <Typography variant="h3">Code of conduct</Typography>
                <Typography variant="h3">EOS Costa Rica pledges to:</Typography>
                <Typography variant="body1">
                  Provide the highest standard bare-metal infrastructure available
                  to the EOS ecosystem.
                </Typography>
                <Typography variant="body1">
                  Become an economically sustainable and highly competitive EOS
                  Block Producer.
                </Typography>
                <Typography variant="body1">
                  Allocate block rewards to EOS educational and development
                  initiatives. Sponsor dApps and projects for community-led
                  developments.
                </Typography>
                <Typography variant="body1">
                  Be totally transparent and open when allocating block rewards.
                  Actively participate in the blockchain governance with an open and
                  positive attitude.
                </Typography>
                <Typography variant="body1">
                  Respect and defend the constitution, fair elections, community
                  vigilance, and arbitration mechanisms.
                </Typography>
              </Box>
              <Typography variant="h3" id="ownership-disclosure">
                Ownership disclosure
              </Typography>
              <Typography variant="body1">
                According to the Block Producer Agreement and values that have
                represented us since the beginning of our campaign, EOS Costa Rica
                hereby commits to disclose all beneficial owners of our organization
                and encourages other BP candidates to abide by the Agreement.
                Whereas EOS Costa Rica is a community-led initiative involving
                various stakeholders, including but not limited to: developers,
                security engineers, community managers, system administrators, and
                financial staff, the Block Producer Keys are ultimately owned and
                controlled by Sistemas Edenia Internacional, S.A.
              </Typography>
            </Box>
            <Box
              className={clsx(
                styles.sectionGray,
                styles.industryBox,
                styles.flexColumn
              )}
            >
              <Box className={styles.industryTitleBox}>
                <Typography variant="h2">Open-source Projects</Typography>
              </Box>
              <Typography variant="body1">
                Find out more about some open-source we are developing. Feel free to
                look over our Github profile for more details!
              </Typography>
              <Box className={styles.industryColWrapper}>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.defaultImg}
                          srcSet={useBaseUrl("img/lifebank.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.defaultImg}
                          src={useBaseUrl("img/lifebank.webp")}
                        />
                      </picture>
                    </Box>
                    <Typography variant="h3">Lifebank</Typography>
                    <Typography variant="body1">
                      An open-source blockchain-based app that incentivizes blood
                      donations by creating a virtuous circle of value between
                      donors, blood banks, and local businesses, leveraged by a
                      token economy. Winner of the "Coding for Change" challenge by
                      block.one.
                    </Typography>
                  </Box>
                </Box>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
                      <picture>
                        <source
                          className={styles.defaultImg}
                          srcSet={useBaseUrl("img/eosrate.jp2")}
                          type="image/jp2"
                        />
                        <img
                          className={styles.defaultImg}
                          src={useBaseUrl("img/eosrate.webp")}
                        />
                      </picture>
                    </Box>
                    <Typography variant="h3">EOS Rate</Typography>
                    <Typography variant="body1">
                      EOS Rate is an open- source app that allows EOS token holders
                      to access a rating system and voting portal for block
                      producers and proxies in the EOS blockchain.
                    </Typography>
                  </Box>
                </Box>
                <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                  <Box>
                    <Box className={styles.svgBox}>
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
                    </Box>
                    <Typography variant="h3">EOSIO Dashboard</Typography>
                    <Typography variant="body1">
                      The EOSIO Dashboard is an open-source project that allows
                      users to visualize the rewards distribution along the EOS
                      network to seek accountability and transparency.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.btnBox}>
                <Typography variant="body1">
                  Follow us on our profiles. We’re continually looking for
                  open-source collaborations!
                </Typography>
              </Box>
            </Box>
            <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
              <Box className={clsx(styles.enterpriceTitleBox)}>
                <Typography variant="h2">Why Costa Rica?</Typography>
                <Typography variant="body1">
                  We are the first EOS block producer candidate in Central America
                  and one of the few in Latin America. We believe that Costa Rica’s
                  features can be an excellent asset for aggregating diversity to
                  the EOS network, be it for its political stability, absence of an
                  army, or respect to Human Rights. Additionally, its technical
                  infrastructure, stable political framework, flexible corporate
                  structure, and defined jurisdiction makes it an opportunistic
                  network available for the censorship-resistant EOS.
                </Typography>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Liberty and Peace</Typography>
                  <Typography variant="body1">
                    Costa Rica is one of the most stable and longest-lasting
                    Democracies in America. It abolished its army in 1948 to promote
                    education and wellbeing and stands out on equality and
                    innovation.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Human Rights</Typography>
                  <Typography variant="body1">
                    Costa Rica is founded on respect to Human Rights, and even the
                    Inter-American Institute of Human Rights based its headquarters
                    in San José.
                  </Typography>
                </Box>
              </Box>

              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Ecology</Typography>
                  <Typography variant="body1">
                    Costa Rica promotes sustainable development and houses more than
                    4% of the world’s biodiversity, where more than 26% of its
                    territory comprises of protected areas and National Parks.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Strategic location</Typography>
                  <Typography variant="body1">
                    Costa Rica is conveniently located in the middle of the
                    Americas. The country connects three submarine fiber optic
                    cables, providing real-time fail- over and redundancy to our
                    infrastructure.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.enterpriceInfoBox}>
                <Typography variant="h3">Equality</Typography>
                <Typography variant="body1">
                  Costa Ricans value equality for all. For instance, the country
                  ranks as the first in Latin America for gender equality.
                </Typography>
              </Box>
              <img
                className={styles.defaultImg}
                alt="eoscr-logo"
                src={useBaseUrl("img/eoscr.svg")}
              />
            </Box>
            <Box
              className={clsx(
                styles.sectionGray,
                styles.enterpriceBox,
                styles.flexColumn
              )}
            >
              <Box className={clsx(styles.enterpriceTitleBox)}>
                <Typography variant="h2">Vote for Us as Block Producers</Typography>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Experience as integrators</Typography>
                  <Typography variant="body1">
                    We focus on building strong relationships with strategic
                    partners and the enterprise sector. We constantly seek new
                    business opportunities and strive to educate executives in both
                    the public and private sectors about the EOSIO protocol and
                    blockchain technology.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Reason 2</Typography>
                  <Typography variant="body1">
                    We strive to recruit the best candidates. We have assembled a
                    Latin American team with a problem-solving mindset and expertise
                    in their areas of knowledge. Our team operates in an Agile
                    environment that encourages participation, self- accountability,
                    and innovation.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.colBox}>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Great open-source projects</Typography>
                  <Typography variant="body1">
                    We develop and support open- source projects such as EOS Rate,
                    LatamLink, Lifebank, EOSIO Dashboard, and many more that strive
                    to push the EOSIO ecosystem forward. These projects are built by
                    talented developers and professionals that believe in the
                    benefits of the network.
                  </Typography>
                </Box>
                <Box className={styles.enterpriceInfoBox}>
                  <Typography variant="h3">Strong community building</Typography>
                  <Typography variant="body1">
                    We are part of local and global ecosystems to promote EOSIO
                    adoption. We attend events such as the EOS Conferences, events
                    by Block.one, and take an active part in the community’s digital
                    conversations.
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.boxWrapper}>
                <Box className={styles.colBox}>
                  <picture>
                    <source
                      className={styles.flexImgBox}
                      srcSet={useBaseUrl("img/blog.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.flexImgBox}
                      src={useBaseUrl("img/blog.webp")}
                    />
                  </picture>
                  <picture>
                    <source
                      className={styles.flexImgBox}
                      srcSet={useBaseUrl("img/press.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.flexImgBox}
                      src={useBaseUrl("img/press.webp")}
                    />
                  </picture>
                </Box>
                <Box className={styles.colBox}>
                  <picture>
                    <source
                      className={styles.flexImgBox}
                      srcSet={useBaseUrl("img/portal.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.flexImgBox}
                      src={useBaseUrl("img/portal.webp")}
                    />
                  </picture>
                  <picture>
                    <source
                      className={styles.flexImgBox}
                      srcSet={useBaseUrl("img/github.jp2")}
                      type="image/jp2"
                    />
                    <img
                      className={styles.flexImgBox}
                      src={useBaseUrl("img/github.webp")}
                    />
                  </picture>
                </Box>
              </Box>
              <Box className={styles.btnBox}>
                <Typography variant="body1">Get to know more about our team!</Typography>
                <Button className={classes.buttonPrimary}>
                  Read More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default BlockProducer;
