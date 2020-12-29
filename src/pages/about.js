import React, { useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ItemsCarousel from "react-items-carousel";
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Accordion from "./components/Accordion";

import styles from "./styles.module.css";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Layout>
      <Box className={styles.mainContainer}>
        <Box className={clsx("container", styles.noPadding)}>
          <Box
            className={clsx(
              styles.sectionGray,
              styles.topBox,
              styles.aboutTopBox
            )}
          >
            <Box>
              <img
                className={styles.logoMobile}
                src={useBaseUrl("img/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
              <Box className={styles.titleBox}>
                <Typography variant="h2">
                  EOS Costa Rica Develops Blockchain-based Enterprise Solutions
                </Typography>
              </Box>
              <Typography variant="body1">
                Years of experience developing innovative technologies speak for
                us. Unleash the power of blockchain technology with the help of
                our agile team.
              </Typography>
              <Box className={styles.btnTop}>
                <Button 
                  className={clsx(styles.mainBtn, styles.bubbleUp)}
                  href={useBaseUrl("/contact-us")}>
                    Learn More
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
            <Box className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
              <Typography variant="h1">Get to Know EOS Costa Rica</Typography>
            </Box>
            <Box className={styles.enterpriceTitleBox}>
              <Box className={clsx(styles.colBox, styles.flexContent)}>
                <Box className={styles.flexBox}>
                  <Box>
                    <Typography variant="h1">Our Story</Typography>
                    <Typography variant="body1">
                      EOS Costa Rica is part of a company with over three
                      decades of developing innovative technologies. During the
                      80s, we launched the first BBS (bulletin board service) in
                      the country, a precursor to the internet. Later on, the
                      company shifted to educating new users on using the email
                      and browsing the web! Then, we started offering internet
                      infrastructure, hosting, and development services.
                    </Typography>
                    <Typography variant="h3" />
                    <Typography variant="body1">
                      In 2013, we began providing infrastructure for public
                      blockchain networks and learned first-hand how blockchains
                      work. Then, in 2018 when the EOSIO protocol was launched,
                      we investigated the advantages of this technology and
                      started learning how to deploy it in the real world. Our
                      presence grew during the genesis of the EOS Mainnet and
                      will continue to be there throughout its growth.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3">Our vision</Typography>
                    <Typography variant="body1">
                      We founded EOS Costa Rica two years ago — before the
                      release of EOS... and quickly realized this was a
                      marathon, not a sprint. We have experimented with
                      different use cases for EOSIO blockchain technology,
                      especially for enterprise use.
                    </Typography>
                    <Typography variant="h3" />
                    <Typography variant="body1">
                      Our team offers an agile and lean approach to develop
                      blockchain-based solutions that allow innovation
                      departments to quickly and efficiently iterate and test
                      proofs-of-concept with a restricted budget and schedule.
                      This ability enables organizations to explore this
                      technology's benefits and experience its potential in a
                      controlled environment.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3">What can we do for you?</Typography>
                    <Typography variant="body1">
                      We can co-ideate and develop the ideal solution that
                      integrates blockchain technology into your operations
                      following an agile and lean approach that will help you
                      explore blockchain's features within a restricted budget
                      and schedule.
                    </Typography>
                    <Typography variant="h3" />
                    <Typography variant="body1">
                      We provide top-notch, ready-to-use blockchain
                      infrastructures. Also, we configure, host, and maintain
                      blockchain nodes and networks that can meet your
                      organization's requirements and needs.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="body1">
                      We offer workshops to C-suite executives and teams. We
                      also provide training for new talents and promote the
                      region's blockchain ecosystem by participating in events,
                      seminars, and conferences.
                    </Typography>
                  </Box>
                </Box>
                <img
                  className={styles.defaultImg}
                  alt="eoscr-logo"
                  src={useBaseUrl("img/eoscr.svg")}
                />
              </Box>
            </Box>
            <Box className={styles.btnBox}>
              <Button className={styles.mainButton}>Visit our service</Button>
            </Box>
          </Box>

          <Box className={clsx(styles.sectionGray, styles.patnershipBox)}>
            <Typography variant="h3">We Are Proudly in Partnership with:</Typography>
            <Box
              style={{ padding: `0 40px`, width: "100%", marginTop: "2rem" }}
            >
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={isMobile ? 1 : 4}
                gutter={20}
                leftChevron={<Box className={styles.arrowLeft} />}
                rightChevron={<Box className={styles.arrowRight} />}
                outsideChevron
                chevronWidth={40}
              >
                <picture>
                  <source
                    className={styles.defaultImgCarousel}
                    srcSet={useBaseUrl("img/default-image.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImgCarousel}
                    src={useBaseUrl("img/default-image.webp")}
                  />
                </picture>
                <picture>
                  <source
                    className={styles.defaultImgCarousel}
                    srcSet={useBaseUrl("img/default-image.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImgCarousel}
                    src={useBaseUrl("img/default-image.webp")}
                  />
                </picture>
                <picture>
                  <source
                    className={styles.defaultImgCarousel}
                    srcSet={useBaseUrl("img/default-image.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImgCarousel}
                    src={useBaseUrl("img/default-image.webp")}
                  />
                </picture>
                <picture>
                  <source
                    className={styles.defaultImgCarousel}
                    srcSet={useBaseUrl("img/default-image.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImgCarousel}
                    src={useBaseUrl("img/default-image.webp")}
                  />
                </picture>
                <picture>
                  <source
                    className={styles.defaultImgCarousel}
                    srcSet={useBaseUrl("img/default-image.jp2")}
                    type="image/jp2"
                  />
                  <img
                    className={styles.defaultImgCarousel}
                    src={useBaseUrl("img/default-image.webp")}
                  />
                </picture>
              </ItemsCarousel>
            </Box>
            <Box className={clsx("row", styles.flexContent)}></Box>
          </Box>

          <Box className={clsx(styles.sectionWhite, styles.knowEOSCRBox)}>
            <Typography variant="h1">Meet the Team</Typography>
            <Typography variant="body1" className={styles.titleH1}>
              We have assembled a Latin American team with a problem-solving
              mindset and expertise in their areas of knowledge. Our distributed
              team operates in an Agile environment that encourages
              participation, self- accountability, and innovation. Get to know
              us!
            </Typography>
            <Accordion
              titleStyle={styles.teamTitle}
              title="Management Team"
              useMaxWidth
              content={
                <Box className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                  <Box className={styles.industryColBox}>
                    <Box>
                      <Box className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/rodrigo.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/rodrigo.webp")}
                          />
                        </picture>
                      </Box>
                      <Typography variant="h3">Rodrigo Fernández</Typography>
                      <Typography variant="body1">Founder, Chairman & Chief Strategist</Typography>
                    </Box>
                    <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      Read More
                    </Button>
                  </Box>
                  <Box className={styles.industryColBox}>
                    <Box>
                      <Box className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/edgar.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/edgar.webp")}
                          />
                        </picture>
                      </Box>
                      <Typography variant="h3">Edgar Fernández</Typography>
                      <Typography variant="body1">Co-founder & Finance and Enterprise</Typography>
                    </Box>
                    <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      Read More
                    </Button>
                  </Box>
                  <Box className={styles.industryColBox}>
                    <Box>
                      <Box className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/xavier.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/xavier.webp")}
                          />
                        </picture>
                      </Box>
                      <Typography variant="h3">Xavier Fernández</Typography>
                      <Typography>Co-founder & Tech Lead</Typography>
                    </Box>
                    <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      Read More
                    </Button>
                  </Box>
                </Box>
              }
            />
            <Accordion
              titleStyle={styles.teamTitle}
              title="Marketing and Sales"
              useMaxWidth
              content={
                <Box className={styles.teamBox}>
                  <Box className={styles.industryColBox}>
                    <Box>
                      <Box className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/luisdiego.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/luisdiego.webp")}
                          />
                        </picture>
                      </Box>
                      <Typography variant="h3">Luis Diego Rojas</Typography>
                      <Typography>Communications and Content Strategist</Typography>
                    </Box>
                    <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      Read More
                    </Button>
                  </Box>
                  <Box className={styles.industryColBox}>
                    <Box>
                      <Box className={styles.svgBox}>
                        <picture>
                          <source
                            className={styles.teamImg}
                            srcSet={useBaseUrl("img/rodolfo.jp2")}
                            type="image/jp2"
                          />
                          <img
                            className={styles.teamImg}
                            src={useBaseUrl("img/rodolfo.webp")}
                          />
                        </picture>
                      </Box>
                      <Typography variant="h3">Rodolfo Perez</Typography>
                      <Typography>Art Director & Brand Manager</Typography>
                    </Box>
                    <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      Read More
                    </Button>
                  </Box>
                </Box>
              }
            />
            <Accordion
              titleStyle={styles.teamTitle}
              title="Development and Design"
              useMaxWidth
              content={
                <>
                  <Box className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/adriel.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/adriel.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Adriel Díaz</Typography>
                        <Typography>Full Stack Developer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/allan.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/allan.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Allan Salazar</Typography>
                        <Typography>Network Engineer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/pp-default.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/pp-default.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Andrés Gomez</Typography>
                        <Typography>Cybersecurity Developer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/pp-default.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/pp-default.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Angelo Castro</Typography>
                        <Typography>Intern</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                  </Box>
                  <Box className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/cris.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/cris.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Cristian Castro</Typography>
                        <Typography>C++ Developer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/pp-default.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/pp-default.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Jean Vega</Typography>
                        <Typography>Intern</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/jorge.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/jorge.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Jorge Murillo</Typography>
                        <Typography>Sr. UX Designer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/pp-default.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/pp-default.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Justin Castillo</Typography>
                        <Typography>Intern</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                  </Box>
                  <Box className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/kevin.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/kevin.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Kevin Castillo</Typography>
                        <Typography>Full Stack Developer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/ronald.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/ronald.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Ronald Gallo</Typography>
                        <Typography>Network Administrator</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/teto.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/teto.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Terencio Gómez</Typography>
                        <Typography>Full Stack Developer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                    <Box className={styles.industryColBox}>
                      <Box>
                        <Box className={styles.svgBox}>
                          <picture>
                            <source
                              className={styles.teamImg}
                              srcSet={useBaseUrl("img/julio.jp2")}
                              type="image/jp2"
                            />
                            <img
                              className={styles.teamImg}
                              src={useBaseUrl("img/julio.webp")}
                            />
                          </picture>
                        </Box>
                        <Typography variant="h3">Victor Julio Madrigal</Typography>
                        <Typography>Web Developer</Typography>
                      </Box>

                      <Button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </>
              }
            />
          </Box>
          <Box className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
            <Box className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
              <Typography variant="h1" className={styles.titleH1}>Work with Us</Typography>
              <Typography>There are currently no positions to display.</Typography>
            </Box>
            <Box className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
              <Typography variant="h1" className={styles.titleH1}>The Technology</Typography>
              <Typography variant="body1">
                Our team specializes in the blockchain protocol EOSIO, launched
                by block.one in 2018, as an open-source blockchain technology
                that deploys a consensus model known as Delegated Proof-of-Stake
                (DPoS). In DPoS, computers do not compete over computational
                power to solve algorithms. The following are some key features
                of EOSIO:
              </Typography>
            </Box>
            <Box className={styles.colBox}>
              <Box className={styles.enterpriceInfoBox}>
                <Typography variant="h3">Scalability</Typography>
                <Typography variant="body1">
                  EOSIO deploys the DPoS mechanism to achieve higher throughput
                  and efficiency, becoming the blockchain protocol with the
                  largest number of transactions per second at 4,000 on its
                  public blockchain. In contrast, the average in other
                  blockchain systems is 15-20 transactions per second.
                </Typography>
              </Box>
              <Box className={styles.enterpriceInfoBox}>
                <Typography variant="h3">Flexibility</Typography>
                <Typography variant="body1">
                  EOSIO enables adaptability for public and private networks and
                  can be customized according to the business requirements. This
                  blockchain technology offers low latency, meaning that a user
                  won't have to wait for a long time for a transaction to be
                  complete, ensuring a better user experience.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.colBox}>
              <Box className={styles.enterpriceInfoBox}>
                <Typography variant="h3">Cost-effective</Typography>
                <Typography variant="body1">
                  EOSIO offers a flexible and favorable cost model that
                  eliminates the need for transaction fees. This model is ideal
                  for developers who seek a solution with low operation costs
                  and still offers an experience free to the user.
                </Typography>
              </Box>
              <Box className={styles.enterpriceInfoBox}>
                <Typography variant="h3">Eco-friendly</Typography>
                <Typography variant="body1">
                  The DPoS mechanism enables a sustainable blockchain solution
                  requiring less electricity to run nodes and confirm
                  transactions. For example, EOSIO is 66,000 times more
                  energy-efficient than Bitcoin and 17,000 times more
                  energy-efficient than Ethereum.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.enterpriceTitleBox}>
              <Typography variant="h3">Faster adoption</Typography>
              <Typography variant="body1">
                Developers build smart contracts in EOSIO using C++, a general-
                purpose programming language with widespread adoption, thus
                eliminating the need to learn new languages to begin deploying
                the technology. Also, there are many learning resources
                available online and a dynamic support community.
              </Typography>
            </Box>
            <Box className={styles.btnBox}>
              <Typography variant="body1">We can help you explore EOSIO technology.</Typography>
              <Button 
                className={clsx(styles.mainBtn, styles.bubbleUp)}
                href={useBaseUrl("/contact-us")}>
                  Contact us
              </Button>
            </Box>
          </Box>
          <Box
            className={clsx(
              styles.sectionGray,
              styles.industryBox,
              styles.flexColumn
            )}
          >
            <Box className={styles.industryTitleBox}>
              <Typography variant="h1">Our Projects</Typography>
            </Box>
            <Box className={styles.industryColWrapper}>
              <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                <Box>
                  <Box className={styles.svgBox}>
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
                  </Box>
                  <Typography variant="h3">LatamLink</Typography>
                  <Typography variant="body1">
                    We are part of this voluntary regional alliance to offer an
                    EOSIO-based testnet to the LACChain initiative, a program to
                    accelerate the development of the region's blockchain
                    ecosystem.
                  </Typography>
                </Box>
                <Button 
                  className={clsx(styles.mainBtn, styles.bubbleUp)}
                  href="https://latamlink.io/" target="_blank">
                    Read More
                </Button>
              </Box>
              <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                <Box>
                  <Box className={styles.svgBox}>
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
                  </Box>
                  <Typography variant="h3">Lifebank</Typography>
                  <Typography variant="body1">
                    An open-source blockchain-based app that incentivizes blood
                    donations by creating a virtuous circle of value between
                    donors, blood banks, and local businesses, leveraged by a
                    token economy. Winner of the "Coding for Change" challenge
                    by block.one.
                  </Typography>
                </Box>
                <Button 
                  className={clsx(styles.mainBtn, styles.bubbleUp)}
                  href="https://lifebank.io/" target="_blank">
                    Read More
                </Button>
              </Box>
              <Box className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                <Box>
                  <Box className={styles.svgBox}>
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
                  </Box>
                  <Typography variant="h3">SMARTGATE</Typography>
                  <Typography variant="body1">
                    A blockchain-based platform that provides solutions for
                    in-out gate activity for the container industry and
                    real-time transmission of relevant data required for proper
                    interchange in port logistics.
                  </Typography>
                </Box>
                <Button 
                  className={clsx(styles.mainBtn, styles.bubbleUp)}
                  href="https://smartgate.tech/" target="_blank">
                    Read More
                </Button>
              </Box>
            </Box>
            <Box className={styles.btnBox}>
              <Typography variant="body1">
                Check out more of our latest projects <strong>here.</strong>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
