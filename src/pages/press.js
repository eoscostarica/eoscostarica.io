import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import clsx from "clsx"
import Grid from '@material-ui/core/Grid'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import { useMediaQuery } from 'react-responsive'
import { Button, Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import ContactUsBanner from './components/ContactUsBanner'

const MetaData={
  title:"",
  description:"",
  img:"img/metaImgBlack.png"
}

const firtsNewsRelease = [
  {
    img:"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
    title:"Block.one Joins IDB-Backed Alliance to Deploy Blockchain Solutions for Pressing Public Sector Needs in Latin America",
    date:"Feb 25, 2021",
    link:"https://www.businesswire.com/news/home/20210225005312/en/Block.one-Joins-IDB-Backed-Alliance-to-Deploy-Blockchain-Solutions-for-Pressing-Public-Sector-Needs-in-Latin-America",
    media:"businesswire"
  },
  {
      img:"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
      title:"EOS Costa Rica and EOS Argentina Team Up To Launch Evodex Zero Gas Fees and Fast Transaction Times",
      date:"Sep 17, 2020",
      link:"https://www.businesswire.com/news/home/20200917005274/en/EOS-Costa-Rica-and-EOS-Argentina-Team-Up-To-Launch-Evodex-Zero-Gas-Fees-and-Fast-Transaction-Times",
      media:"businesswire"
  },
  {
      img:"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
      title:"EOS Costa Rica Leverages Blockchain to Tackle a Global Blood Supply Shortage Amid the COVID-19 Pandemic",
      date:"Jul 30, 2020",
      link:"https://finance.yahoo.com/news/eos-costa-rica-leverages-blockchain-130000041.html",
      media:"businesswire"
  }
]

const otherNewsRelease = [

]

const EOSCRNews = [
  {
    img:"https://static.coindesk.com/wp-content/uploads/2021/02/roberto-huczek-qS8BH24w7mk-unsplash-710x458.jpg?format=webp",
    title:"EOS Builder Block.one Joins Enterprise Blockchain Alliance in Latin America",
    date:"Feb 25, 2021",
    link:"https://www.coindesk.com/eos-builder-block-one-joins-enterprise-blockchain-alliance-in-latin-america",
    media:"CoinDesk"
  },
  {
    img:"https://cdn.forbescentroamerica.com/2020/12/bitcoin-2007769_1280-800x450.jpg",
    title:"Las criptomonedas brillan en Centroamérica",
    date:"Feb 25, 2021",
    link:"https://forbescentroamerica.com/2021/02/25/blockchain-crece-en-el-istmo/",
    media:"Forbes Centroamerica"
  },
  {
    img:"https://static.coindesk.com/wp-content/uploads/2019/08/Brendan-Blumer-Option-1-e1569425778122-710x458.jpg?format=webp",
    title:"Block.one Debuts Big-Business Version of EOSIO Blockchain",
    date:"Oct 15, 2020",
    link:"https://www.coindesk.com/block-one-eosio-blockchain-enterprise-eos",
    media:"CoinDesk"
  }
]

const EOSCROtherNews = [
  {
    img:"https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8yYjMzMjkxMjZhYWVlZjcyNDQ3ZTU3NjkyYmQ1MGUxMi5qcGc=.jpg",
    title:"Blood on the Blockchain: Tokenizing Can Make Donations More Effective",
    date:"Aug 02, 2020",
    link:"https://cointelegraph.com/news/blood-on-the-blockchain-tokenizing-can-make-donations-more-effective",
    media:"Cointelegraph"
  },
  {
    img:"https://healthtechpulse.com/wp-content/uploads/2020/07/blood-donation-2048x1325.jpg",
    title:"EOS Costa Rica Utilising BlockChain to Address Global Blood Supply Shortage",
    date:"Jul 30, 2020",
    link:"https://healthtechpulse.com/2020/07/30/eos-costa-rica-utilising-blockchain-to-address-global-blood-supply-shortage",
    media:"Health Tech Pulse"
  },
  {
    img:"https://static.coindesk.com/wp-content/uploads/2020/07/debora-tingley-4XWi39Bys8k-unsplash-710x458.jpg?format=webp",
    title:"Ethereum and EOSIO Square Up Over Enterprise Blockchain Business in Latin America",
    date:"Jul 10, 2020",
    link:"https://www.coindesk.com/ethereum-and-eosio-square-up-over-enterprise-blockchain-business-in-latin-america",
    media:"CoinDesk"
  },
  {
    img:"https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8yZTk3ZmM0YmEwZWI0MDc2OWEyYzg5NzJjNmM2MGMyYi5qcGc=.jpg",
    title:"The Rise of Virtual Hackathons: Tackling Blockchain Challenges Online",
    date:"Jul 02, 2020",
    link:"https://cointelegraph.com/news/the-rise-of-virtual-hackathons-tackling-blockchain-challenges-online",
    media:"Cointelegraph"
  },
  {
    img:"https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83OTYwZjlkM2Y0YzkxOWFkMmRiZWYzODNhZDQwZjdlMy5qcGc=.jpg",
    title:"Safe and Sound: Blockchain-Backed Digital Identity in the Post-Coronavirus Era",
    date:"Jun 24, 2020",
    link:"https://cointelegraph.com/news/safe-and-sound-blockchain-backed-digital-identity-in-the-post-coronavirus-era",
    media:"Cointelegraph"
  },
  {
    img:"https://eos.io/wp-content/uploads/2021/01/lifebank_team_image-1-1024x598.jpg",
    title:"Block.one Announces Winner of “Coding for Change” Virtual Hackathon",
    date:"Jun 12, 2020",
    link:"https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/",
    media:"Block.one"
  },
  {
    img:"https://images.ctfassets.net/kji6ppc7ac81/01ol104setlTfkXqt0Lday/78f1a3ea46bd0f616bfb91b39292c196/b1-coding-for-change-winners-announcedb1-coding-for-change-winners-announced.jpg",
    title:"Block.One's #CodingForChange winners announced",
    date:"Jun 12, 2020",
    link:"https://www.eosgo.io/news/b1-coding-for-change-winners-announced",
    media:"EOS Go"
  }
]

const Press = () => {
  const history = useHistory()
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expandedRelease, setExpandedRelease] = useState(false)
  const [expandedEOSCR, setExpandedEOSCR] = useState(false)

  const handleExpandReleaseClick = () => {
    setExpandedRelease(!expandedRelease)
  }

  const handleExpandEOSCRClick = () => {
    setExpandedEOSCR(!expandedEOSCR)
  }

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>What the Media <br/> Says About Us</h1>
            </Box>
            <p >
              Our work promotes the benefits of blockchain technology and its use cases
              in the news. The following are some articles that mention our job.
            </p>
            <Box className="buttonBox">
              <button className="buttonPrimary" onClick={() => history.push("/services/")} >Contact Us</button>
            </Box>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
            <h1>What the Media <br/> Says About Us</h1>
            </Box>
            <p >
              Our work promotes the benefits of blockchain technology and its use cases
              in the news. The following are some articles that mention our job.
            </p>
            <Box className="buttonBox">
              <button className="buttonPrimary" onClick={() => history.push("/services/")} >Contact Us</button>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const News= ({img, title, media, date, link}) => {
    return(
      <Grid onClick = {() => window.open(link)} style={{marginLeft: isMobile ? '25px' : ' ', marginRight:isMobile ? '25px' : ' '}} item xs={12} md={4}>
        <Card style={{transition: 'all .4s ease-in-out'}} className="card" variant="outlined">
          <CardMedia
            className="media"
            image={img}
          />
          <CardContent>
            <p style={{marginBottom:'15px', marginTop:'10px'}}>{media}</p>
            <h4 style={{marginBottom:'15px'}} className="nowrapText">{title}</h4>
            <p>{date}</p>
          </CardContent>
        </Card>
      </Grid>
    )
}

  const NewsList = ({title, princialList, secondList, exp, action}) => {
    return (
      <Box className={"containerSec"}>
        {
          !princialList? princialList=[]: ''
        }
        {
          !secondList? secondList=[]: ''
        }
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="titleBox">
            <h2>{title}</h2>
          </Box>
          <Grid container spacing={5}>
            {princialList.map((news, index) => (
              <News
                key={index}
                img={news.img}
                title={news.title}
                date={news.date}
                link={news.link}
                media={news.media}
              />
            ))}
          </Grid>
          <Box style={{display: (secondList.length === 0) ? 'none' : ''}} className={clsx("centerBox","litlePaddingTop")}>
            <Button
              className={clsx(!exp? "expand": "","button-glow")}
              onClick={action}
              aria-expanded={exp}
              aria-label="show more"
              style={{
                backgroundColor: 'transparent',
                transition: 'all .4s ease-in-out',
                textTransform: 'none', 
                display: exp? 'none': ''
              }}
              >
                <Box style={{display: 'inline-block', paddingTop:'30px'}}>
                  <p style={{marginBottom:'-15px', fontWeight:'bold'}}>View More</p>
                  <ExpandMoreIcon style={{width:'50px', height:'50px', display: exp ? 'none' : ''}}/>
                </Box>
            </Button>
          </Box>
          <Collapse in={exp}>
            <Grid className="litlePaddingTop" container spacing={5}>
              {secondList.map((news, index) => (
                <News
                  key={index}
                  img={news.img}
                  title={news.title}
                  date={news.date}
                  link={news.link}
                  media={news.media}
                />
              ))}
            </Grid>
          </Collapse >
          <Box className={clsx("centerBox","litlePaddingTop")}>
            <Button
              className={exp? "shrink": ""}
              onClick={action}
              aria-expanded={exp}
              aria-label="show more"
              style={{
                backgroundColor: 'transparent', 
                transition: 'all .4s ease-in-out',
                textTransform: 'none', 
                height:'30px',
                display: !exp? 'none': ''}
              }
              >
              <ExpandLessIcon style={{width:'50px', height:'50px', display: !exp ? 'none' : ''}}/>
            </Button>
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
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <NewsList
              title="Press Releases"
              princialList={firtsNewsRelease}
              secondList={otherNewsRelease}
              exp={expandedRelease}
              action={handleExpandReleaseClick}
            />
            <NewsList
              title="EOS Costa Rica in the News"
              princialList={EOSCRNews}
              secondList={EOSCROtherNews}
              exp={expandedEOSCR}
              action={handleExpandEOSCRClick}
            />
          </Parallax>
          <ContactUsBanner/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <NewsList
              title="Press Releases"
              princialList={firtsNewsRelease}
              secondList={otherNewsRelease}
              exp={expandedRelease}
              action={handleExpandReleaseClick}
          />
          <NewsList
            title="EOS Costa Rica in the News"
            princialList={EOSCRNews}
            secondList={EOSCROtherNews}
            exp={expandedEOSCR}
            action={handleExpandEOSCRClick}
          />
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default Press;
