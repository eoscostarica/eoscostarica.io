import React from "react";
import { useHistory } from 'react-router-dom';
import clsx from "clsx";
import Layout from "@theme/Layout";
import { useMediaQuery } from 'react-responsive'
import { Parallax, Background } from 'react-parallax';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const BlockProducer = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isDesktop = useMediaQuery({ query:'(min-width: 767px)'})

  const HeroSection = () => {
    return (
      <Box className={"containerSec"}>
        {isDesktop && 
          <Box className={"sectionHero"}>
          <Box className={"titleBox"}>
            <h1>EOS Block Producer</h1>
          </Box>
          <p >
            We are one of the first companies in Latin America to deploy the EOSIO
            protocol. Innovation is in our DNA. We seek new opportunities to leverage this technology for 
            enterprise use to solve real-world problems. Learn more about how we help to develop the
            EOSIO blockchain ecosystem worldwide.
          </p>
          <Box className={"buttonBox"}>
            <button className={"buttonPrimary"} onClick={() => location.href='https://t.me/eoscr'} >Connect with us</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className={"sectionHeroMobile"}>
            <Box className={"logoMobileBox"}>
              <img
                  className={"logoMobile"}
                  src={useBaseUrl("img/eoscr-logo.png")}
                  alt="EOS CR LOGO"
                />
            </Box>
          <Box className={"titleBox"}>
            <h1>EOS Block Producer</h1>
          </Box>
          <p>
            We are one of the first companies in Latin America to deploy the EOSIO
            protocol.
          </p>
          <br/>
          <p>
            Innovation is in our DNA. We seek new opportunities to leverage this technology for 
            enterprise use to solve real-world problems. Learn more about how we help to develop the
            EOSIO blockchain ecosystem worldwide.  
          </p>
          <Box className={"buttonBoxMobile"}> 
            <button className={"buttonPrimary"} onClick={() => history.push(" https://t.me/eoscr")} >Learn More</button>
          </Box>
        </Box>
      }
      </Box>
    )
  }

  const OurStory = () => {
    return (
      <Box className={clsx("reduceMarginTop","containerSec")}>
        <Box className={"sectionPadding"}>
          <Box className={"spacingBox"}>
            <Grid container spacing={5}>
              <Grid item md={12}>
                <Box className={"titleBox"}>
                  <h2>Our Story</h2>
                </Box>
                <p className={"body1"}>
                  EOS Costa Rica is a company spinoff with over three decades of
                  developing technologies in Costa Rica. During the 80s, we launched
                  the first BBS (bulletin board service) in the country, a precursor
                  to the internet. Later on, the company shifted to educating new
                  users on using email and browsing the web. Then, we started
                  offering internet infrastructure, hosting, and development
                  services.
                </p>
                <br />
                <p className={"body1"}>
                  In 2013, we began providing infrastructure for public blockchain
                  networks and learned first-hand how blockchains work. Then, in
                  2018 when EOSIO was launched, we investigated the advantages of
                  this technology and started learning how to deploy it in the real
                  world. We were there during the genesis of the EOS Mainnet and
                  will continue to be there throughout its growth.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> 
    )
  }

  const OurValues = () => {
    return (
      <Box className={clsx("reduceDobleMarginTop","containerSec")}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
            <h2>Our Values</h2>
          </Box>
          <Grid style={{justifyContent:'center'}} container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon-education.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Ongoing education</h3>
              </Box>
              <p className={"centerText"}>
                We believe that continuous training and building human talent is
                crucial to developing a robust ecosystem.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'30px'}}
                  src={useBaseUrl("img/icon-loyalty.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Loyalty</h3>
              </Box>
              <p className={"centerText"}>
                We recognize and acknowledge everyone’s unique talents and seek
                to build loyalty by empowering the EOSIO community.
              </p>
              <br/>
            </Grid>
          </Grid>
          <Grid style={{justifyContent:'center'}} container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon_resilience.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Resilience</h3>
              </Box>
              <p className={"centerText"}>
                Our team evolves alongside technology. We strive to be as nimble
                and efficient as possible, which lets us quickly adapt and
                implement the newest innovations.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon-loyalty.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Liberty</h3>
              </Box>
              <p className={"centerText"}>
                We defend individual sovereignty among the EOS community,
                replicating Costa Rica’s premise of freedom and peace as the
                lengthiest democracy in Latin America.
              </p>
              <br/>
            </Grid>
          </Grid>
          <Grid style={{justifyContent:'center'}} container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon_tolerance.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Tolerance</h3>
              </Box>
              <p className={"centerText"}>
                Our team advocates for the rights of education,
                entrepreneurship, and opportunities for all the members in our
                community as a way to develop the ecosystem.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon_prudence.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Prudence</h3>
              </Box>
              <p className={"centerText"}>
                We commit to safeguard our community’s future and take
                calculated risks that will bring us further to our long term
                goals.
              </p>
              <br/>
            </Grid>
          </Grid>
          <Grid style={{justifyContent:'center'}} container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon_accountability.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Accountability</h3>
              </Box>
              <p className={"centerText"}>
                We firmly believe and encourage taking full accountability from
                our team members and stakeholders. We value transparency and
                responsibility.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={"centerBox"}>
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icon-equality.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h3>Equality</h3>
              </Box>
              <p className={"centerText"}>
                We endorse and defend a governance model guided by merit
                principles for our community’s benefit.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const BlockProducer = () => {
    return (
      <Box className={clsx("reduceMarginTop","containerSec")}>
        <Box className={"sectionPadding"}>
          <Box className={"spacingBox"}>
            <Grid container spacing={5}>
              <Box className={"titleBox"}>
                <h2>Block Producer Information</h2>
              </Box>
              <Grid item md={12}>
                <Box className={"h3Box"}>
                  <h3>Code of conduct</h3>
                </Box>
                <p>EOS Costa Rica pledges to:</p>
                <br/>
                <p className={"body1"}>
                  • Provide the highest standard bare-metal infrastructure available
                  to the EOS ecosystem.
                </p>
                <p className={"body1"}>
                  • Become an economically sustainable and highly competitive EOS
                  Block Producer.
                </p>
                <p className={"body1"}>
                  • Allocate block rewards to EOS educational and development
                  initiatives.
                </p>
                <p className={"body1"}>
                  • Sponsor dApps and projects for community-led
                  developments.
                </p>
                <p className={"body1"}>
                  • Be totally transparent and open when allocating block rewards.
                </p>
                <p className={"body1"}>
                  • Actively participate in the blockchain governance with an open and
                  positive attitude.
                </p>
                <p className={"body1"}>
                  • Respect and defend the constitution, fair elections, community
                  vigilance, and arbitration mechanisms.
                </p>
              </Grid>
              <Grid item md={12}>
                <Box className={"h3Box"}>
                  <h3>Ownership disclosure</h3>
                </Box>
                <p className={"body1"}>
                  According to the Block Producer Agreement and values that have
                  represented us since the beginning of our campaign, EOS Costa Rica
                  hereby commits to disclose all beneficial owners of our organization
                  and encourages other BP candidates to abide by the Agreement.
                  Whereas EOS Costa Rica is a community-led initiative involving
                  various stakeholders, including but not limited to: developers,
                  security engineers, community managers, system administrators, and
                  financial staff, the Block Producer Keys are ultimately owned and
                  controlled by Sistemas Edenia Internacional, S.A.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> 
    )
  }

  const OpenSourceProjects = () => {
    return ( 
      <Box className={clsx("reduceMarginTop","containerSec")}> 
        <Box className={clsx("section",{["sectionPadding"] : isMobile})}>
          <br/>
          <br/>
          <Box className={"titleBox"}>
            <h2>
              Open-source Projects
            </h2>
          </Box>
          <p className={"body1"}>
            Find out more about some open-source we are developing. Feel free to
            look over our <a href="https://github.com/eoscostarica" target="_blank">Github</a> profile for more details!
          </p>
          <Box className={"topSpacingBox"}>
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className={"centerBox"}>
                  <img
                    className = {"sizeImageTheCompany"}
                    src={useBaseUrl("img/lifebank.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  An open-source blockchain-based app that incentivizes blood
                  donations by creating a virtuous circle of value between
                  donors, blood banks, and local businesses, leveraged by a
                  token economy. Winner of the{" "}
                  <a
                    href="https://eos.io/news/winner-of-coding-for-change- virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    “Coding for Change”
                  </a>{" "}
                  challenge by{" "}
                  <a href="https://block.one/" target="_blank">
                    block.one.
                  </a>{" "}
                  <a href=" https://lifebank.io/" target="_blank">
                    Read more.
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={"centerBox"}>
                  <img
                    className = {"sizeImageTheCompany"}
                    src={useBaseUrl("img/eosrate.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  EOS Rate is an open- source app that allows EOS token holders
                  to access a rating system and voting portal for block
                  producers and proxies in the EOS blockchain.<a href="https://eosrate.io/" target="_blank"> Read more.</a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={"centerBox"}>
                  <img
                    className = {"sizeImageTheCompany"}
                    src={useBaseUrl("img/eosio.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  The EOSIO Dashboard is an open-source project that allows
                  users to visualize the rewards distribution along the EOS
                  network to seek accountability and transparency.<a href="https://mainnet.eosio.cr/" target="_blank"> Read more</a>
                </p>
              </Grid>
              <Grid item xs={12} md={12} style={{height:'10px'}} className={"topSpacingBox"}>
                <p className={"centerText"}>
                  Follow us on our profiles. We’re continually looking for
                  open-source collaborations!
                </p>
                <p className={"centerText"}>
                  <a style={{fontWeight: 'bold'}} href="https://twitter.com/EOSCostaRica" target="_blank">
                    Twitter
                  </a>{" · "}
                  <a style={{fontWeight: 'bold'}} href="https://t.me/eoscr" target="_blank">
                    Telegram
                  </a>{" · "}
                  <a style={{fontWeight: 'bold'}} href="https://medium.com/@eoscostarica" target="_blank">
                    Medium
                  </a>{" · "}
                  <a style={{fontWeight: 'bold'}} href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" target="_blank">
                    YouTube
                  </a>{" · "}
                  <a style={{fontWeight: 'bold'}} href="https://www.instagram.com/eoscostarica/" target="_blank">
                    Instagram
                  </a>
                </p>
              </Grid>
            </Grid>         
          </Box>
        </Box>
      </Box>
    )
  }

  const WhyCostaRica = () => {
    return (
      <Box className={clsx("containerGray","reduceMediumMarginTop","reduceMarginBottom")}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
            <h2>
              Why Costa Rica?
            </h2>
          </Box>
            <p>
              We are the first EOS block producer candidate in Central America
              and one of the few in Latin America. We believe that Costa Rica’s
              features can be an excellent asset for aggregating diversity to
              the EOS network, be it for its political stability, absence of an
              army, or respect to Human Rights. Additionally, its technical
              infrastructure, stable political framework, flexible corporate
              structure, and defined jurisdiction makes it an opportunistic
              network available for the censorship-resistant EOS.
            </p>
          <Box className={"doubleSpacingBox"}>
            <Grid style={{justifyContent:'center'}} container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Liberty and Peace</h3>
                </Box>
                <p >
                  Costa Rica is one of the most stable and longest-lasting
                  Democracies in America. It abolished its army in 1948 to promote
                  education and wellbeing and stands out on equality and
                  innovation.
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Human Rights</h3>
                </Box>
                <p>
                  Costa Rica is founded on respect to Human Rights, and even the
                  Inter-American Institute of Human Rights based its headquarters
                  in San José.
                </p>
              </Grid>
            </Grid>
            <Grid style={{justifyContent:'center'}} container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Ecology</h3>
                </Box>
                <p>
                  Costa Rica promotes sustainable development and houses more than
                  4% of the world’s biodiversity, where more than 26% of its
                  territory comprises of protected areas and National Parks.
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className={"h3Box"}>
                  <h3>Strategic location</h3>
                </Box>
                <p>
                  Costa Rica is conveniently located in the middle of the
                  Americas. The country connects three submarine fiber optic
                  cables, providing real-time fail- over and redundancy to our
                  infrastructure.
                </p>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className={clsx("h3Box","reduceMediumMarginTop")}>
                  <h3>Equality</h3>
                </Box>
                <p>
                  Costa Ricans value equality for all. For instance, the country
                  ranks as the first in Latin America for gender equality.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const VoteForUS = () => {
    return (
      <Box className={clsx("reduceMarginTop","containerSec")}>
        <Box className={"sectionPadding"}>
          <Box className={"spacingBox"}>
            <Box className={"titleBox"}>
              <h2>Vote for Us as Block Producers</h2>
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>Experience as integrators</h3>
                </Box>
                <p>
                  We focus on building strong relationships with strategic
                  partners and the enterprise sector. We constantly seek new
                  business opportunities and strive to educate executives in both
                  the public and private sectors about the EOSIO protocol and
                  blockchain technology.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>An agile team</h3>
                </Box>
                <p>
                  We strive to recruit the best candidates. We have assembled a
                  Latin American team with a problem-solving mindset and expertise
                  in their areas of knowledge. Our team operates in an Agile
                  environment that encourages participation, self- accountability,
                  and innovation.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>Great open-source projects</h3>
                </Box>
                <p>
                  We develop and support open- source projects such as EOS Rate,
                  LatamLink, Lifebank, EOSIO Dashboard, and many more that strive
                  to push the EOSIO ecosystem forward. These projects are built by
                  talented developers and professionals that believe in the
                  benefits of the network.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={"h3Box"}>
                  <h3>Strong community building</h3>
                </Box>
                <p>
                  We are part of local and global ecosystems to promote EOSIO
                  adoption. We attend events such as the EOS Conferences, events
                  by Block.one, and take an active part in the community’s digital
                  conversations.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const AdditionalResources = () => {
    return (
      <Box className={clsx("containerSec","reduceDobleMarginTop")}>
        <Box className={"sectionPadding"}>
          <Box className={"titleBox"}>
            <h2>Additional Resources</h2>
          </Box>
          <p>
            Find more interesting reads and resources to continue learning
            about
            <a href={"https://eoscostarica.medium.com/how-to-choose-an-enterprise-blockchainplatform-7c3665994ad6"}
              target="_blank"
              > enterprise blockchain</a> and
              <a href={" https://eos.io/"} target="_blank"> EOSIO</a>.
          </p>
          <br/>
          <Grid className={"topSpacingBoxIcons"} style={{justifyContent:'space-evenly'}} container>
            <Grid onClick={() => history.push("/block-producer/")} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/blog.svg")}/>
              <h3 className={"titleBlog"}>Blog</h3>
            </Grid>
            <Grid onClick = {() => location.href='https://guias.eoscostarica.io/'} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/press.svg")}/>
              <h3 style={{marginTop:'30px', marginLeft:'20px'}}>Press</h3>
            </Grid>
          </Grid>
          <br/>
          <Grid className={"topSpacingBoxIcons"} style={{justifyContent:'space-evenly'}} container>
            <Grid onClick = {() => location.href='https://guide.eoscostarica.io/'} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/decs.svg")}/>
              <h3 className={"titleDevs1"}>Devs</h3>
              <h3 className={"titleDevs2"}>Portal</h3>
            </Grid>
            <Grid onClick={() => location.href='https://github.com/eoscostarica'} className={"gridButton"} item xs={12} md={4}>
              <img srcSet={useBaseUrl("img/github-ours.svg")}/>
              <h3 className={"titleGit1"}>Our</h3>
              <h3 className={"titleGit2"}>Github</h3>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const ContactUs = () => {
    return (
      <Box className={"containerGray"}>
        <Box className={"sectionPadding"}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
                <Box>
                  <h2>Start working with us</h2>
                  <h2>and implement</h2>
                  <h2>blockchain technology.</h2>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={"buttonBox"}>
                <button className={"buttonPrimary"} onClick={() => history.push("/contact-us/")} >Contact us</button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  return (
    <>
      {isDesktop && 
        <Layout>
          <Box className={"mainContainer"}>
            <Parallax strength={800}>
              <Background className={"bgParallax"}>
                  <Box className={"imgParallax"} />
              </Background>
              <HeroSection />
              <OurStory />
              <OurValues/>
            </Parallax>
            <BlockProducer/>
            <OpenSourceProjects/>
            <WhyCostaRica/>
            <VoteForUS/>
            <AdditionalResources/>
            <ContactUs />
          </Box>
        </Layout>
      }
      {isMobile && 
        <Layout>
          <Box className={"mainContainer"}>
            <HeroSection />
            <OurStory />
            <OurValues/>
            <BlockProducer/>
            <OpenSourceProjects/>
            <WhyCostaRica/>
            <VoteForUS/>
            <AdditionalResources/>
            <ContactUs />
          </Box>
        </Layout>
      }
    </>
  );
};

export default BlockProducer;

