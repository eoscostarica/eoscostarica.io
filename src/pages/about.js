import React, { useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ItemsCarousel from "react-items-carousel";

import Accordion from "./components/Accordion";

import styles from "./styles.module.css";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <div className={clsx("container", styles.noPadding)}>
          <section
            className={clsx(
              styles.sectionGray,
              styles.topBox,
              styles.aboutTopBox
            )}
          >
            <div>
              <img
                className={styles.logoMobile}
                src={useBaseUrl("img/eoscr-logo.png")}
                alt="EOS CR LOGO"
              />
              <div className={styles.titleBox}>
                <h1>
                  EOS Costa Rica Develops Blockchain-based Enterprise Solutions
                </h1>
              </div>
              <span>
                Years of experience developing innovative technologies speak for
                us. Unleash the power of blockchain technology with the help of
                our agile team.
              </span>
              <div className={styles.btnTop}>
                <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                  <a href="#contactUs">Learn More</a>
                </button>
              </div>
            </div>
          </section>
          <section className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
            <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
              <h1>Get to Know EOS Costa Rica</h1>
            </div>
            <div className={styles.enterpriceTitleBox}>
              <div className={clsx(styles.colBox, styles.flexContent)}>
                <div className={styles.flexBox}>
                  <div>
                    <h3>Our Story</h3>
                    <span>
                      EOS Costa Rica is part of a company with over three
                      decades of developing innovative technologies. During the
                      80s, we launched the first BBS (bulletin board service) in
                      the country, a precursor to the internet. Later on, the
                      company shifted to educating new users on using the email
                      and browsing the web! Then, we started offering internet
                      infrastructure, hosting, and development services.
                    </span>
                    <h3 />
                    <span>
                      In 2013, we began providing infrastructure for public
                      blockchain networks and learned first-hand how blockchains
                      work. Then, in 2018 when the EOSIO protocol was launched,
                      we investigated the advantages of this technology and
                      started learning how to deploy it in the real world. Our
                      presence grew during the genesis of the EOS Mainnet and
                      will continue to be there throughout its growth.
                    </span>
                  </div>
                  <div>
                    <h3>Our vision</h3>
                    <span>
                      We founded EOS Costa Rica two years ago — before the
                      release of EOS... and quickly realized this was a
                      marathon, not a sprint. We have experimented with
                      different use cases for EOSIO blockchain technology,
                      especially for enterprise use.
                    </span>
                    <h3 />
                    <span>
                      Our team offers an agile and lean approach to develop
                      blockchain-based solutions that allow innovation
                      departments to quickly and efficiently iterate and test
                      proofs-of-concept with a restricted budget and schedule.
                      This ability enables organizations to explore this
                      technology's benefits and experience its potential in a
                      controlled environment.
                    </span>
                  </div>
                  <div>
                    <h3>What can we do for you?</h3>
                    <span>
                      We can co-ideate and develop the ideal solution that
                      integrates blockchain technology into your operations
                      following an agile and lean approach that will help you
                      explore blockchain's features within a restricted budget
                      and schedule.
                    </span>
                    <h3 />
                    <span>
                      We provide top-notch, ready-to-use blockchain
                      infrastructures. Also, we configure, host, and maintain
                      blockchain nodes and networks that can meet your
                      organization's requirements and needs.
                    </span>
                    <br />
                    <br />
                    <span>
                      We offer workshops to C-suite executives and teams. We
                      also provide training for new talents and promote the
                      region's blockchain ecosystem by participating in events,
                      seminars, and conferences.
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
              <button className={styles.mainButton}>Visit our service</button>
            </div>
          </section>

          <section className={clsx(styles.sectionGray, styles.patnershipBox)}>
            <h3>We Are Proudly in Partnership with:</h3>
            <div
              style={{ padding: `0 40px`, width: "100%", marginTop: "2rem" }}
            >
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={isMobile ? 1 : 4}
                gutter={20}
                leftChevron={<div className={styles.arrowLeft} />}
                rightChevron={<div className={styles.arrowRight} />}
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
            </div>
            <div className={clsx("row", styles.flexContent)}></div>
          </section>

          <section className={clsx(styles.sectionWhite, styles.knowEOSCRBox)}>
            <h1>Meet the Team</h1>
            <span className={styles.titleH1}>
              We have assembled a Latin American team with a problem-solving
              mindset and expertise in their areas of knowledge. Our distributed
              team operates in an Agile environment that encourages
              participation, self- accountability, and innovation. Get to know
              us!
            </span>
            <Accordion
              titleStyle={styles.teamTitle}
              title="Management Team"
              useMaxWidth
              content={
                <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
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
                      </div>
                      <h3>Rodrigo Fernández</h3>
                      <span>Founder, Chairman & Chief Strategist</span>
                    </div>
                    <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      <a>Read More</a>
                    </button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
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
                      </div>
                      <h3>Edgar Fernández</h3>
                      <span>Co-founder & Finance and Enterprise</span>
                    </div>
                    <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      <a>Read More</a>
                    </button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
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
                      </div>
                      <h3>Xavier Fernández</h3>
                      <span>Co-founder & Tech Lead</span>
                    </div>
                    <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      <a>Read More</a>
                    </button>
                  </div>
                </div>
              }
            />
            <Accordion
              titleStyle={styles.teamTitle}
              title="Marketing and Sales"
              useMaxWidth
              content={
                <div className={styles.teamBox}>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
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
                      </div>
                      <h3>Luis Diego Rojas</h3>
                      <span>Communications and Content Strategist</span>
                    </div>
                    <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      <a>Read More</a>
                    </button>
                  </div>
                  <div className={styles.industryColBox}>
                    <div>
                      <div className={styles.svgBox}>
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
                      </div>
                      <h3>Rodolfo Perez</h3>
                      <span>Art Director & Brand Manager</span>
                    </div>
                    <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                      <a>Read More</a>
                    </button>
                  </div>
                </div>
              }
            />
            <Accordion
              titleStyle={styles.teamTitle}
              title="Development and Design"
              useMaxWidth
              content={
                <>
                  <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Adriel Díaz</h3>
                        <span>Full Stack Developer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Allan Salazar</h3>
                        <span>Network Engineer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Andrés Gomez</h3>
                        <span>Cybersecurity Developer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Angelo Castro</h3>
                        <span>Intern</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                  </div>
                  <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Cristian Castro</h3>
                        <span>C++ Developer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Jean Vega</h3>
                        <span>Intern</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Jorge Murillo</h3>
                        <span>Sr. UX Designer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Justin Castillo</h3>
                        <span>Intern</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                  </div>
                  <div className={clsx(styles.teamBox, styles.boxSpaceBetween)}>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Kevin Castillo</h3>
                        <span>Full Stack Developer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Ronald Gallo</h3>
                        <span>Network Administrator</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Terencio Gómez</h3>
                        <span>Full Stack Developer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                    <div className={styles.industryColBox}>
                      <div>
                        <div className={styles.svgBox}>
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
                        </div>
                        <h3>Victor Julio Madrigal</h3>
                        <span>Web Developer</span>
                      </div>

                      <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                        <a>Read More</a>
                      </button>
                    </div>
                  </div>
                </>
              }
            />
          </section>
          <section className={clsx(styles.sectionWhite, styles.enterpriceBox)}>
            <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
              <h1 className={styles.titleH1}>Work with Us</h1>
              <span>There are currently no positions to display.</span>
            </div>
            <div className={clsx(styles.enterpriceTitleBox, styles.titleH1)}>
              <h1 className={styles.titleH1}>The Technology</h1>
              <span>
                Our team specializes in the blockchain protocol EOSIO, launched
                by block.one in 2018, as an open-source blockchain technology
                that deploys a consensus model known as Delegated Proof-of-Stake
                (DPoS). In DPoS, computers do not compete over computational
                power to solve algorithms. The following are some key features
                of EOSIO:
              </span>
            </div>
            <div className={styles.colBox}>
              <div className={styles.enterpriceInfoBox}>
                <h3>Scalability</h3>
                <span>
                  EOSIO deploys the DPoS mechanism to achieve higher throughput
                  and efficiency, becoming the blockchain protocol with the
                  largest number of transactions per second at 4,000 on its
                  public blockchain. In contrast, the average in other
                  blockchain systems is 15-20 transactions per second.
                </span>
              </div>
              <div className={styles.enterpriceInfoBox}>
                <h3>Flexibility</h3>
                <span>
                  EOSIO enables adaptability for public and private networks and
                  can be customized according to the business requirements. This
                  blockchain technology offers low latency, meaning that a user
                  won't have to wait for a long time for a transaction to be
                  complete, ensuring a better user experience.
                </span>
              </div>
            </div>

            <div className={styles.colBox}>
              <div className={styles.enterpriceInfoBox}>
                <h3>Cost-effective</h3>
                <span>
                  EOSIO offers a flexible and favorable cost model that
                  eliminates the need for transaction fees. This model is ideal
                  for developers who seek a solution with low operation costs
                  and still offers an experience free to the user.
                </span>
              </div>
              <div className={styles.enterpriceInfoBox}>
                <h3>Eco-friendly</h3>
                <span>
                  The DPoS mechanism enables a sustainable blockchain solution
                  requiring less electricity to run nodes and confirm
                  transactions. For example, EOSIO is 66,000 times more
                  energy-efficient than Bitcoin and 17,000 times more
                  energy-efficient than Ethereum.
                </span>
              </div>
            </div>
            <div className={styles.enterpriceTitleBox}>
              <h2>Faster adoption</h2>
              <span>
                Developers build smart contracts in EOSIO using C++, a general-
                purpose programming language with widespread adoption, thus
                eliminating the need to learn new languages to begin deploying
                the technology. Also, there are many learning resources
                available online and a dynamic support community.
              </span>
            </div>
            <div className={styles.btnBox}>
              <span>We can help you explore EOSIO technology.</span>
              <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                <a href="#contactUs">Contact us</a>
              </button>
            </div>
          </section>
          <section
            className={clsx(
              styles.sectionGray,
              styles.industryBox,
              styles.flexColumn
            )}
          >
            <div className={styles.industryTitleBox}>
              <h1>Our Projects</h1>
            </div>
            <div className={styles.industryColWrapper}>
              <div className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                <div>
                  <div className={styles.svgBox}>
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
                  </div>
                  <h3>LatamLink</h3>
                  <span>
                    We are part of this voluntary regional alliance to offer an
                    EOSIO-based testnet to the LACChain initiative, a program to
                    accelerate the development of the region's blockchain
                    ecosystem.
                  </span>
                </div>
                <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                  <a href="https://latamlink.io/" target="_blank">
                    Read More
                  </a>
                </button>
              </div>
              <div className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                <div>
                  <div className={styles.svgBox}>
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
                  </div>
                  <h3>Lifebank</h3>
                  <span>
                    An open-source blockchain-based app that incentivizes blood
                    donations by creating a virtuous circle of value between
                    donors, blood banks, and local businesses, leveraged by a
                    token economy. Winner of the "Coding for Change" challenge
                    by block.one.
                  </span>
                </div>
                <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                  <a href="https://lifebank.io/" target="_blank">
                    Read More
                  </a>
                </button>
              </div>
              <div className={clsx(styles.industryColBox, styles.noPaddingTop)}>
                <div>
                  <div className={styles.svgBox}>
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
                  </div>
                  <h3>SMARTGATE</h3>
                  <span>
                    A blockchain-based platform that provides solutions for
                    in-out gate activity for the container industry and
                    real-time transmission of relevant data required for proper
                    interchange in port logistics.
                  </span>
                </div>
                <button className={clsx(styles.mainBtn, styles.bubbleUp)}>
                  <a href="https://smartgate.tech/" target="_blank">
                    Read More
                  </a>
                </button>
              </div>
            </div>
            <div className={styles.btnBox}>
              <span>
                Check out more of our latest projects <strong>here.</strong>
              </span>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default About;
