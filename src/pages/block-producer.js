import React from "react"
import { useHistory } from 'react-router-dom'
import clsx from "clsx"
import Layout from "@theme/Layout"
import { useMediaQuery } from 'react-responsive'
import { Parallax, Background } from 'react-parallax'
import useBaseUrl from "@docusaurus/useBaseUrl"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'

import AdditionalResources from './components/AdditionalResources'
import ContactUsBanner from './components/ContactUsBanner'

const MetaData={
  title:"EOS Costa Rica: Block Producer",
  description:"Get to know EOS Costa Rica – a technically proven EOS block producer candidate that develops dapps and smart contracts.",
  img:"img/metaImgBlack.png",
}

const BlockProducer = () => {
  const history = useHistory()
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>EOS Block Producer</h1>
          </Box>
          <p >
            We are one of the first companies in Latin America to deploy the EOSIO
            protocol. Innovation is in our DNA. We seek new opportunities to leverage this technology for 
            enterprise use to solve real-world problems. Learn more about how we help to develop the
            EOSIO blockchain ecosystem worldwide.
          </p>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={() => window.open('https://t.me/eoscr')} >Connect with us</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>EOS Block Producer</h1>
            </Box>
            <p>
              We are one of the first companies in Latin America to deploy the EOSIO
              protocol.
            <br/>
            <br/>
              Innovation is in our DNA. We seek new opportunities to leverage this technology for 
              enterprise use to solve real-world problems. Learn more about how we help to develop the
              EOSIO blockchain ecosystem worldwide.  
            </p>
            <Box className="buttonBoxMobile"> 
              <button className="buttonPrimary" onClick={() => history.push(" https://t.me/eoscr")} >Connect with us</button>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const OurStory = () => {
    return (
      <Box className="containerSec">
        <Box  className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="spacingBox">
            <Grid container spacing={5}>
              <Grid item md={12}>
                <Box className="titleBox">
                  <h2>Our Story</h2>
                </Box>
                <p className="body1">
                  EOS Costa Rica is a company spinoff with over three decades of
                  developing technologies in Costa Rica. During the 80s, we launched
                  the first BBS (bulletin board service) in the country, a precursor
                  to the internet. Later on, the company shifted to educating new
                  users on using email and browsing the web. Then, we started
                  offering internet infrastructure, hosting, and development
                  services.
                </p>
                <br />
                <p className="body1">
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
      <Box className="containerSec">
        <Box className="section">
          <Box className="titleBox">
            <h2>Our Values</h2>
          </Box>
          <br/>
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-education.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Ongoing education</h4>
              </Box>
              <p>
                We believe that continuous training and building human talent is
                crucial to developing a robust ecosystem.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-loyalty.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Loyalty</h4>
              </Box>
              <p>
                We recognize and acknowledge everyone’s unique talents and seek
                to build loyalty by empowering the EOSIO community.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-equality.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Equality</h4>
              </Box>
              <p>
                We endorse and defend a governance model guided by merit
                principles for our community’s benefit.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_resilience.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Resilience</h4>
              </Box>
              <p>
                Our team evolves alongside technology. We strive to be as nimble
                and efficient as possible, which lets us quickly adapt and
                implement the newest innovations.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-liberty.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Liberty</h4>
              </Box>
              <p>
                We defend individual sovereignty among the EOS community,
                replicating Costa Rica’s premise of freedom and peace as the
                lengthiest democracy in Latin America.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_tolerance.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Tolerance</h4>
              </Box>
              <p>
                Our team advocates for the rights of education,
                entrepreneurship, and opportunities for all the members in our
                community as a way to develop the ecosystem.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_accountability.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Accountability</h4>
              </Box>
              <p>
                We firmly believe and encourage taking full accountability from
                our team members and stakeholders. We value transparency and
                responsibility.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_prudence.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Prudence</h4>
              </Box>
              <p>
                We commit to safeguard our community’s future and take
                calculated risks that will bring us further to our long term
                goals.
              </p>
              <br/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const BlockProducer = () => {
    return (
      <Box className="containerSec">
        <Box className={isDesktop? "section": "sectionNoPadding"}>
          <Box className="spacingBox">
           <Box className="titleBox">
                <h2>Block Producer Information</h2>
            </Box>
            <Box className="spacingBox">
              <Box className="h3Box">
                <h3>Code of Conduct</h3>
              </Box>
              <p>EOS Costa Rica pledges to:</p>
              <br/>
              <p className="body1">
                • Provide the highest standard bare-metal infrastructure available
                to the EOS ecosystem.
              </p>
              <p className="body1">
                • Become an economically sustainable and highly competitive EOS
                Block Producer.
              </p>
              <p className="body1">
                • Allocate block rewards to EOS educational and development
                initiatives.
              </p>
              <p className="body1">
                • Sponsor dApps and projects for community-led
                developments.
              </p>
              <p className="body1">
                • Be totally transparent and open when allocating block rewards.
              </p>
              <p className="body1">
                • Actively participate in the blockchain governance with an open and
                positive attitude.
              </p>
              <p className="body1">
                • Respect and defend the constitution, fair elections, community
                vigilance, and arbitration mechanisms.
              </p>
            </Box>
            <Box>
              <Box className="h3Box">
                <h3>Ownership Disclosure</h3>
              </Box>
              <p className="body1">
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
            </Box>

          </Box>
        </Box>
      </Box> 
    )
  }

  const OpenSourceProjects = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="section">
          <Box className="titleBox">
            <h2>
              Open-source Projects
            </h2>
          </Box>
          <p className="body1">
            Find out more about some open-source we are developing. Feel free to
            look over our <a href="https://github.com/eoscostarica" target="_blank">Github</a> profile for more details!
          </p>
          <Box className="topSpacingBox">
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/lifebank.svg")}
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
                    href="https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    “Coding for Change”
                  </a>{" "}
                  challenge by{" "}
                  <a href="https://block.one/" target="_blank">
                    block.one.
                  </a>{" "}
                  <a href=" https://lifebank.io/" target="_blank">
                  Find out more about Lifebank.
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/eosrate.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  EOS Rate is an open- source app that allows EOS token holders
                  to access a rating system and voting portal for block
                  producers and proxies in the EOS blockchain.<a href="https://eosrate.io/" target="_blank"> Explore EOS Rate.</a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/eosio.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  The EOSIO Dashboard is an open-source project that allows
                  users to visualize the rewards distribution along the EOS
                  network to seek accountability and transparency.{" "}
                  <a href="https://mainnet.eosio.cr/" target="_blank"> Read more about EOSIO Dashboard.</a>
                </p>
              </Grid>
            </Grid>
            <Grid className="paddingTop" container>
              <Grid item xs={12} md={6}>
                <Box className={isMobile? "spacingBox": ""}>
                  <h3 className={isMobile? "centerText": ""}>Follow us on our profiles. We’re continually looking for open-source collaborations!</h3>
                </Box>
              </Grid>
              <Grid className="litlePaddingTop" item xs={12} md={3}>
                <Box className={isMobile? "centerBox": "boxFlexEnd"}>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                    <GitHubIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                    <TwitterIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.linkedin.com/company/eoscostarica/mycompany/" target="_blank">
                    <LinkedInIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                  </a>
                </Box>
              </Grid>
              <Grid className="litlePaddingTop" style={{marginTop:'-7px'}} item xs={12} md={3}>
                <Box className="centerBox">
                  <a className="noMarginsTop" href="https://medium.com/@eoscostarica" target="_blank">
                    <img
                      className="socialMediaAnimation"
                      style={{width:'48px', height:'48px', cursor:'pointer', color:'#5484b3'}}
                      src={useBaseUrl("img/icons/icon-medium.png")}
                    />
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" target="_blank">
                    <YouTubeIcon style={{ width:'56px', height:'56px', cursor:'pointer', color:'#5484b3'}}/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                    <InstagramIcon style={{width:'45px', height:'45px', cursor:'pointer', color:'#5484b3'}}/>
                  </a>
                </Box>
              </Grid>
            </Grid> 
          </Box>
        </Box>
      </Box>
    )
  }

  const WhyCostaRica = () => {
    return ( 
      <Box className="containerGray"> 
        <Box className="sectionPadding">
          <Box className="titleBox">
            <h2>
              Why Costa Rica?
            </h2>
          </Box>
          <Box className="spacingBox">
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
          </Box>
          <Box>
            <br/>
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Liberty and peace</h4>
                </Box>
                <p >
                  Costa Rica is one of the most stable and longest-lasting
                  Democracies in America. It abolished its army in 1948 to promote
                  education and wellbeing and stands out on equality and
                  innovation.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Ecology</h4>
                </Box>
                <p>
                  Costa Rica promotes sustainable development and houses more than
                  4% of the world’s biodiversity, where more than 26% of its
                  territory comprises of protected areas and National Parks.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Human rights</h4>
                </Box>
                <p>
                  Costa Rica is founded on respect to Human Rights, and even the
                  Inter-American Institute of Human Rights based its headquarters
                  in San José.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Equality</h4>
                </Box>
                <p>
                  Costa Ricans value equality for all. For instance, the country
                  ranks as the first in Latin America for gender equality.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Strategic location</h4>
                </Box>
                <p>
                  Costa Rica is conveniently located in the middle of the
                  Americas. The country connects three submarine fiber optic
                  cables, providing real-time fail- over and redundancy to our
                  infrastructure.
                </p>
              </Grid>
              <Grid md={5}/>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const VoteForUS = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="spacingBox">
            <Box className="titleBox">
              <h2>Vote for Us as Block Producers</h2>
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="specialH3Box">
                  <h4>Experience as integrators</h4>
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
                <Box className="specialH3Box">
                  <h4>An agile team</h4>
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
                <Box className="specialH3Box">
                  <h4>Great open-source projects</h4>
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
                <Box className="specialH3Box">
                  <h4>Strong community building</h4>
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

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
    > 
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax" />
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
          <ContactUsBanner />
        </Box>
      }
      {isMobile &&
        <Box className="mainContainer">
          <HeroSection />
          <OurStory />
          <OurValues/>
          <BlockProducer/>
          <OpenSourceProjects/>
          <WhyCostaRica/>
          <VoteForUS/>
          <AdditionalResources/>
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default BlockProducer;

