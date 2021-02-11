import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import clsx from "clsx"
import Grid from '@material-ui/core/Grid'
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'
import { useMediaQuery } from 'react-responsive'
import { Button, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ContactUsBanner from './components/ContactUsBanner'

const firtsNewsRelease = [
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
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  }
]

const EOSCRNews = [
    {
        img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
        title:"SMARTGATE is the most using app on the logistic industries",
        date:"nov-2020",
        link:"https://smartgate.tech/",
        media:"La teja"
    },
    {
        img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
        title:"SMARTGATE is the most using app on the logistic industries",
        date:"nov-2020",
        link:"https://smartgate.tech/",
        media:"La teja"
    },
    {
        img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
        title:"SMARTGATE is the most using app on the logistic industries",
        date:"nov-2020",
        link:"https://smartgate.tech/",
        media:"La teja"
    }
]

const EOSCROtherNews = [
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"La teja"
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"La teja"
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"La teja"
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  },
  {
    img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png",
    title:"SMARTGATE is the most using app on the logistic industries",
    date:"nov-2020",
    link:"https://smartgate.tech/",
    media:"El chiringuito",
  }
]

const Press = () => {
  const history = useHistory()
  const isMobile = useMediaQuery({query:'(max-width: 767px)'})
  const isDesktop = useMediaQuery({query:'(min-width: 767px)'})
  const [expandedRelease, setExpandedRelease] = useState(false);
  const [expandedEOSCR, setExpandedEOSCR] = useState(false);

  const handleExpandReleaseClick = () => {
    setExpandedRelease(!expandedRelease);
  };

  const handleExpandEOSCRClick = () => {
    setExpandedEOSCR(!expandedEOSCR);
  };

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
          </Box>
        }
      </Box>
    )
  }

  const News= ({img, title, media, date, link}) => {
    return(
        <Grid item xs={12} md={4}>
            <Card className="cardroot" variant="outlined">
                <CardMedia
                    className="media"
                    image={img}
                />
                <CardContent>
                    <p style={{marginBottom:'10px'}}>{media}</p>
                    <h4>{title}</h4>
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
                !princialList? princialList=[] : ''
            }
            {
                !secondList? secondList=[]: ''
            }
            <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
                <Box className="titleBox">
                    <h2>{title}</h2>
                </Box>
                <Grid justify="center" container spacing={5}>
                    {princialList.map((news) => (
                        <News
                            key={news.title}
                            img={news.img}
                            title={news.title}
                            date={news.date}
                            link={news.link}
                            media={news.media}
                        />
                    ))}
                </Grid>
                <Box style={{display: (princialList.length === 0)? 'none': ''}} className={clsx("centerBox","litlePaddingTop")}>
                    <Button
                        className={!exp? "expand": "expandOpen"}
                        onClick={action}
                        aria-expanded={exp}
                        aria-label="show more"
                        style={{height:'30px', borderRadius:'20px', display: exp? 'none': ''}}
                        >
                        <ExpandMoreIcon style={{width:'50px', height:'50px', display: exp? 'none': ''}}/>
                    </Button>
                </Box>
                <Collapse in={exp} timeout="auto" unmountOnExit>
                    <Grid className="litlePaddingTop" justify="center" container spacing={5}>
                        {secondList.map((news) => (
                            <News
                                key={news.title}
                                img={news.img}
                                title={news.title}
                                date={news.date}
                                link={news.link}
                                media={news.media}
                            />
                        ))}
                    </Grid>
                </Collapse>
                <Box className={clsx("centerBox","litlePaddingTop")}>
                    <IconButton
                        className={exp? "shrink": "expandOpen"}
                        onClick={action}
                        aria-expanded={exp}
                        aria-label="show more"
                        style={{height:'30px', borderRadius:'20px', display: !exp? 'none': ''}}
                        >
                        <ExpandMoreIcon style={{width:'50px', height:'50px', display: !exp? 'none': ''}}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
  }

  return (
    <>
      {isDesktop && 
        <Layout>
          <Box className="mainContainer">
            <Parallax strength={800}>
              <Background className="bgParallax">
                <Box className="imgParallax"/>
              </Background>
              <HeroSection/>
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
        </Layout>
      }
      {isMobile && 
        <Layout>
          <Box className="mainContainer">
            <HeroSection/>
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
                exp={expandedRelease}
                action={handleExpandEOSCRClick}
            />
            <ContactUsBanner/>
          </Box>
        </Layout>
      }
    </>
  );
};

export default Press;
