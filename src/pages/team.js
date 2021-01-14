import React from "react";
import { Parallax, Background } from 'react-parallax';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Layout from "@theme/Layout";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from "clsx";
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const ManagementTeam = [
    {
        img:"img/rodrigo.webp",
        name:"Rodrigo Fernández",
        positionLine1:"Founder, Chairman",
        positionLine2:"& Chief Strategist",
        linkedIn:"https://www.linkedin.com/in/rodrigo-fernandez-57b8b72a/",
        twitter:"https://twitter.com/rjfescazu"
    },
    {
        img:"img/edgar.webp",
        name:"Edgar Fernández",
        positionLine1:"Co-founder & ",
        positionLine2:"Finance and Enterprise",
        linkedIn:"https://www.linkedin.com/in/edgarafernandez/",
        twitter:"https://twitter.com/fernane506"
    },
    {
        img:"img/xavier.webp",
        name:"Xavier Fernández",
        positionLine1:"Co-founder & ",
        positionLine2:"Tech Lead",
        linkedIn:"https://www.linkedin.com/in/xaviercr/",
        twitter:"https://twitter.com/xaviercr"
    }
]


const MarketingSalesTeam = [
    {
        img:"img/luisdiego.webp",
        name:"Luis Diego Rojas",
        positionLine1:"Communications and",
        positionLine2:"Content Strategist",
        linkedIn:"https://www.linkedin.com/in/ldrojas/",
        twitter:"https://twitter.com/ldrojas"
    },
    {
        img:"img/rodolfo.webp",
        name:"Rodolfo Perez",
        positionLine1:"Art Director &",
        positionLine2:"Brand Manager",
        linkedIn:"https://www.linkedin.com/in/rodolfo-eduardo-p%C3%ABrez-nava-73442164/",
        twitter:"https://twitter.com/monsieurRoaf"
    },
]

const DevelopTeam = [
    {
        img:"img/adriel.webp",
        name:"Adriel Diaz",
        positionLine1:"Full Stack Developer",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/adriel-d%C3%ADaz-08226384/",
        twitter:""
    },
    {
        img:"img/allan.webp",
        name:"Allan Salazar",
        positionLine1:"Network Engineer",
        positionLine2:"",
        linkedIn:"",
        twitter:""
    },
    {
        img:"",
        name:"Andrés Gomez",
        positionLine1:"Cybersecurity Developer",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/andres-gomez-ramirez-bb7226156/",
        twitter:"https://twitter.com/kuronosec"
    },
    {
        img:"",
        name:"Angelo Castro",
        positionLine1:"Intern",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/angelo-castro-gamboa/",
        twitter:""
    },
    {
        img:"img/cris.webp",
        name:"Cristian Castro",
        positionLine1:"C++ Developer",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/cristian-castro-95193a3a/",
        twitter:""
    },
    {
        img:"",
        name:"Jean Vega",
        positionLine1:"Intern",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/jeanvegad/",
        twitter:""
    },
    {
        img:"img/jorge.webp",
        name:"Jorge Murillo",
        positionLine1:"Sr. UX Designer",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/jmurilloux/",
        twitter:"https://twitter.com/Oquedo"
    },
    {
        img:"",
        name:"Justin Castillo",
        positionLine1:"Intern",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/jacv/",
        twitter:"https://twitter.com/_JustinCast"
    },
    {
        img:"img/kevin.webp",
        name:"Kevin Castillo",
        positionLine1:"Full Stack Developer",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/kevin-castillo-mora/",
        twitter:""
    },
    {
        img:"img/ronald.webp",
        name:"Ronald Gallo",
        positionLine1:"Network Administrator",
        positionLine2:"",
        linkedIn:"",
        twitter:""
    },
    {
        img:"img/teto.webp",
        name:"Terencio Gómez",
        positionLine1:"Full Stack Developer",
        positionLine2:"",
        linkedIn:"https://www.linkedin.com/in/terencio-gomez-14784ba3/",
        twitter:""
    },
    {
        img:"img/julio.webp",
        name:"Victor Julio Madrigal",
        positionLine1:"Web Developer",
        positionLine2:"",
        linkedIn:"",
        twitter:""
    },
    
]

const Team = () => {
    const history = useHistory();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const HeroSection = () => {
        return (
          <Box className={"containerSec"}>
            {!isMobile && 
                <Box className={"sectionHero"} style={{height:'auto'}}>
                    <Box className={"titleBox"}>
                        <h1>Meet the Team</h1>
                    </Box>
                        <p>Get to know our team. We’re always looking for talent! Contact us to learn more about our open positions.</p>
                    <Box className={"buttonBox"}>
                        <button className={"buttonPrimary"} onClick={() => history.push("/contact-us/")} >Send CV</button>
                    </Box>
                    <TeamSection />
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
                <h1>Meet the Team</h1>
              </Box>
                <p>Get to know our team. We’re always looking for talent! Contact us to learn more about our open positions.</p>
              <Box className={"buttonBoxMobile"}>
                <button className={"buttonPrimary"} onClick={() => history.push("/contact-us/")} >Send CV</button>
              </Box>
            </Box>
          }
          </Box>
        )
    } 

    const PersonCard = ({img, name, positionLine1,positionLine2,linkedIn, twitter}) => {
        return(
            <Box>
                <Box className={"avatarBox"}>
                    <Avatar variant="square" style={{width:"250px", height:"250px"}} src={img}><PersonIcon style={{width:'40%',height:'40%'}}/></Avatar>
                </Box>
                <Box >
                    <h4 className={"nameText"}>{name}</h4>
                    <p className={"centerText"}>{positionLine1}</p>
                    {positionLine2 && 
                        <p className={"centerText"}>{positionLine2}</p>
                    }
                    
                </Box>
                <Box className="socialMediaBox">
                    {linkedIn && 
                        <IconButton href={linkedIn} target="_blank"><LinkedInIcon style={{width:'30px',height:'30px', color:"#5484b3"}} /></IconButton>
                    }
                    {twitter && 
                         <IconButton href={twitter} target="_blank"><TwitterIcon  style={{width:'30px',height:'30px', color:"#5484b3"}}/></IconButton>
                    }
                </Box>
            </Box>
        )
    }

    const TeamSection = () => {
        return(
            <Box className={"containerSec"}>
                <Box className={clsx("sectionNo",{["sectionPadding"] : isMobile})}>
                    <Box className={"doubleSpacingBox"}>
                        <Box className={"spacingBox"}>
                            <h3>Management Team</h3>
                        </Box>
                        <Box>
                            <Grid container spacing={3}>
                                {ManagementTeam.map((person) => (
                                    <Grid item xs={12} md={4} key={person.name}>
                                        <PersonCard 
                                            img={useBaseUrl(person.img)}
                                            name={person.name}
                                            positionLine1={person.positionLine1}
                                            positionLine2={person.positionLine2}
                                            linkedIn={person.linkedIn}
                                            twitter={person.twitter}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={"doubleSpacingBox"}>
                        <Box className={"spacingBox"}>
                            <h3>Marketing and Sales</h3>
                        </Box>
                        <Box>
                            <Grid container spacing={3}>
                                {MarketingSalesTeam.map((person) => (
                                    <Grid item xs={12} md={4} key={person.name}>
                                        <PersonCard 
                                            img={useBaseUrl(person.img)}
                                            name={person.name}
                                            positionLine1={person.positionLine1}
                                            positionLine2={person.positionLine2}
                                            linkedIn={person.linkedIn}
                                            twitter={person.twitter}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={"doubleSpacingBox"}>
                        <Box className={"spacingBox"}>
                            <h3>Development and Design</h3>
                        </Box>
                        <Box>
                            <Grid container spacing={5}>
                                {DevelopTeam.map((person) => (
                                    <Grid item xs={12} md={4} key={person.name}>
                                        <PersonCard 
                                            img={useBaseUrl(person.img)}
                                            name={person.name}
                                            positionLine1={person.positionLine1}
                                            positionLine2={person.positionLine2}
                                            linkedIn={person.linkedIn}
                                            twitter={person.twitter}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>    
                </Box>
            </Box>

        )
    }

    return (
        <Layout>
            <Box className={"mainContainer"}>
                {!isMobile && 
                <Parallax strength={800}>
                    <Background className={"bgParallax"}>
                        <Box className={"imgParallax"} />
                    </Background>
                    <HeroSection />
                </Parallax>
                }
                {isMobile && 
                <>
                    <HeroSection />
                    <TeamSection />
                </>
                } 
            </Box>
        </Layout>
    )
}



export default Team;
